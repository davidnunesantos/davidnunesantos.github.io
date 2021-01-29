const fileExtension  = /text.*/;
const ddds_sao_paulo = [11, 12, 13, 14, 15, 16, 17, 18, 19];
const ddds_brasil	 = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 24, 27, 28, 31, 32, 33, 34, 35, 37, 38, 41, 42, 43, 44, 45, 46, 47, 48, 49, 51, 53, 54, 55, 61, 62, 63, 64, 65, 66, 67, 68, 69, 71, 73, 74, 75, 77, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96, 97, 98, 99];
const broker 		 = {
	'VIVO': 1,
	'TIM': 1,
	'CLARO': 2,
	'OI': 2,
	'NEXTEL': 3
};

var file;

var content = [];
var valid   = [];
var blocked = [];

/**
 * Esta função executada quando a página finaliza sua inicialização
 */
$(function() {
	if (checkBrowserSuportFileApi()) {
		addEventListeners();
	} else {
		noticeMessage(true, 'API de Arquivo não suportada pelo navegador');
	}
});

/**
 * Adiciona os eventos da página
 */
function addEventListeners() {
	$('input[type="file"][id="arquivo"]').on('change', function() {
		noticeMessage(false);
		initReadFile(this);
	});
}

/**
 * Faz a leitura dos dados do arquivo
 * @param {object} file_field Campo onde é realizado o upload do arquivo
 */
function initReadFile(file_field) {
	file = file_field.files[0];

	if (file.type.match(fileExtension)) {
		showLoading(true);
		$('label[for="arquivo"]').text(file.name);
		var fileReader 	  = new FileReader();
        fileReader.onload = function (e) {
			readFile(fileReader.result);
		}
        fileReader.readAsText(file);
    } else {
		noticeMessage(true, 'Por favor selecione um arquivo de texto (TXT, CSV)');
    }
}

/**
 * Faz a leitura dos dados do arquivo transformando em um array
 * @param {string} data Dados do arquivo em formato string
 */
function readFile(data) {
	var lines = data.split(/\r\n|\n/);

	for (var i = 0; i < lines.length; i++) {
		var columns = lines[i].split(';');

		if (columns.length === 6) {
			content.push(new DataSend(columns[0], columns[1], columns[2], columns[3], columns[4], columns[5]));
		} else {
			noticeMessage(true, 'O arquivo <b>' + file.name + '</b> não corresponde ao formato exigido ou esta vazio');
		}
	}

	if (content.length > 0) {
		validateData();
	}
}

function validateData() {
	$.each(content, (linha, data_send) => {
		if (valid[data_send.celular_completo] !== undefined) {
			checkLowerTime(data_send);
		} else {
			if (!isPhoneValid(data_send) || isOnBlackList(data_send) || isStateOfSaoPaulo(data_send) || isAfterTimeLimit(data_send) || exceedsCharacterLimit(data_send) || !getBroker(data_send)) {
				blocked.push(data_send);
			} else {
				valid[data_send.celular_completo] = data_send;
			}
		}
	});

	showResult();
}

function showResult() {
	Object.keys(valid).forEach((chave) => {
		$('#validos').append($('<div />').addClass('col-12').html(valid[chave].id_mensagem + ';' + getBroker(valid[chave])));
	});

	Object.keys(blocked).forEach((chave) => {
		$('#bloqueados').append($('<div />').addClass('col-12 mb-3').html(JSON.stringify(blocked[chave])));
	});

	showLoading(false);
	$('#resultados').toggleClass('d-none', false);
}

function isAfterTimeLimit(data_current) {
	if (data_current.horario_envio.isAfter(dayjs('2021-01-01 19:59:59', 'HH:mm:ss'))) {
		data_current.motivo_bloqueio = 'isAfterTimeLimit';
		return true;
	}

	return false;
}

function exceedsCharacterLimit(data_current) {
	if (data_current.mensagem.length > 140) {
		data_current.motivo_bloqueio = 'exceedsCharacterLimit';
		return true;
	}

	return false;
}

function isOnBlackList(data_current) {
	$.ajax({
		url: 'https://front-test-pg.herokuapp.com/blacklist/' + data_current.celular_completo,
		type: "get",
		async: false,
		success: (response) => {
			data_current.motivo_bloqueio = 'isOnBlackList';
			return true;
		},
		error: function() {
			return false;
		}
	});
}

function isStateOfSaoPaulo(data_current) {
	if ($.inArray(parseInt(data_current.ddd), ddds_sao_paulo) !== -1) {
		data_current.motivo_bloqueio = 'isStateOfSaoPaulo';
		return true;
	}

	return false;
}

/**
 * Verifica qual dado tem um tempo de agendamento de envio menor e faz a substituição no array de válidos caso seja necessáro
 * @param {DataSend} current Linha do arquivo de dados atual
 */
function checkLowerTime(data_current) {
	if (data_current.horario_envio.isBefore(valid[data_current.celular_completo].horario_envio)) {
		valid[data_current.celular_completo].motivo_bloqueio = 'checkLowerTime';
		blocked.push(valid[data_current.celular_completo]);

		valid[data_current.celular_completo] = data_current;
	} else {
		data_current.motivo_bloqueio = 'checkLowerTime';
		blocked.push(data_current);
		
	}
}

function isPhoneValid(data_current) {
	if (isDDDValid(data_current.ddd) && isNumberValid(data_current.celular)) {
		return true;
	}

	data_current.motivo_bloqueio = 'isPhoneValid';
	return false;
}

function isNumberValid(number) {
	return number.length === 9 && number.charAt(0) == '9' && parseInt(number.charAt(1)) > 6;
}

function isDDDValid(ddd) {
	return ddd.length === 2 && $.inArray(parseInt(ddd), ddds_brasil) !== -1;
}

function getBroker(data_current) {
	if (broker[data_current.operadora] !== undefined) {
		return broker[data_current.operadora];
	};

	data_current.motivo_bloqueio = 'isPhoneValid';
	return false;
}

/**
 * Verifica se o navegador tem suporte para a API de arquivos
 */
function checkBrowserSuportFileApi() {
	return window.File && window.FileReader && window.FileList && window.Blob;
}

/**
 * Habilita ou desabilita o campo de mensagem de aviso
 * @param {boolean} enable Indica se a mensagem deve ser exibida ou não
 * @param {string} message Mensagem a ser exibida
 */
function noticeMessage(enable, message = '') {
	$('#alertBlock').find('.alert').html(message);
	$('#alertBlock').toggleClass('d-none', !enable);
	$('#resultados').toggleClass('d-none', enable);
	showLoading(!enable);
}

function showLoading(show) {
	$('.loading').toggleClass('d-none', !show);
	$('.loading').toggleClass('d-flex', show);

	if (show) {
		$('#validos').empty();
		$('#bloqueados').empty();
	}
}