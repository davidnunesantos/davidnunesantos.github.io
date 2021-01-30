/**
 * @file Destinado a criação da classe Validator
 * @author David Nunes dos Santos <david_nunesantos@hotmail.com>
 */

/**
 * Classe responsável por realizar a validação dos dados de uma mensagem
 * @class
 */
class Validator {

    /**
     * Dados de uma mensagem
     * @type {DataSend}
     * @access private
     */
    _data_send;

    /**
     * Possíveis motivos de bloqueio de mensagens
     * @type {Object.<string, string>}
     * @access private
     */
    _motivos = {
        'isAfterTimeLimit': 'O horário de envio da mensagem ultrapassa o horário limite (Limite: ' + time_limit + ')',
        'exceedsCharacterLimit': 'O conteúdo da mensagem excede o limite de caracteres (Limite: ' + character_limit + ')',
        'isInvalidPhone': 'O número de DDD ou celular é inválido',
        'isStateOfSaoPaulo': 'O DDD pertence ao estado de São Paulo',
        'isInvalidBroker': 'Não existe um broker para essa operadora',
        'isOnBlackList': 'O número (DDD + Celular) esta na blacklist',
        'haveLongerTime': 'Existe um registro com o mesmo número (DDD + Celular) e com a hora de envio menor ou igual'
    };

    /**
     * Realiza a validação dos dados da mensagem
     */
    validate(data_send) {
        this._data_send = data_send;
        this._data_send.dadosValidos = false;

        if (this.isAfterTimeLimit()) {
            this._data_send.motivoBloqueio = this._motivos['isAfterTimeLimit'];
        } else if (this.exceedsCharacterLimit()) {
            this._data_send.motivoBloqueio = this._motivos['exceedsCharacterLimit'];
        } else if (!this.isPhoneValid()) {
            this._data_send.motivoBloqueio = this._motivos['isInvalidPhone'];
        } else if (this.isStateOfSaoPaulo()) {
            this._data_send.motivoBloqueio = this._motivos['isStateOfSaoPaulo'];
        } else if (!this.getBroker()) {
            this._data_send.motivoBloqueio = this._motivos['isInvalidBroker'];
        } else if (!valid[this._data_send.numeroCompleto] && this.isOnBlackList()) {
            this._data_send.motivoBloqueio = this._motivos['isOnBlackList'];
        } else {
            this._data_send.brokerId     = this.getBroker();
            this._data_send.dadosValidos = true;
        }
    }

    /**
     * Verifica se o horário de envio da mensagem ultrapassa o horário limite
     * @returns {boolean}
     */
    isAfterTimeLimit() {
        return this._data_send.horaEnvio.isAfter(dayjs('2021-01-01 ' + time_limit, 'HH:mm:ss'));
    }

    /**
     * Verifica se o conteúdo da mensagem excede o limite de caracteres
     * @returns {boolean}
     */
    exceedsCharacterLimit() {
        return this._data_send.mensagem.length > character_limit;
    }

    /**
     * Verifica se um número de telefone (DDD + Celular) é válido
     * @returns {boolean}
     */
    isPhoneValid() {
        return this.isDDDValid() && this.isNumberValid();
    }

    /**
     * Verifica se o número de DDD é válido seguindo as seguintes regras:
     * - Deve ser formado por 2 dígitos númericos
     * - Deve estar na lista de DDDs válidos para o Brasil
     * 
     * @returns {boolean}
     */
    isDDDValid() {
        return this._data_send.numeroDdd.length === 2 && $.inArray(parseInt(this._data_send.numeroDdd), ddds_brasil) !== -1;
    }

    /**
     * Verifica se o número de celular é válido seguindo as seguintes regras:
     * - Deve ser formado apenas por números
     * - Deve ser formado por 9 dígitos númericos
     * - O primeiro dígido deve ser 9
     * - O segundo dígito deve ser maior do que 6
     * 
     * @returns {boolean}
     */
    isNumberValid() {
        return !isNaN(this._data_send.numeroCelular) && this._data_send.numeroCelular.length === 9 && this._data_send.numeroCelular.charAt(0) == '9' && parseInt(this._data_send.numeroCelular.charAt(1)) > 6;
    }

    /**
     * Verifica se o DDD é do estado de São Paulo
     * @returns {boolean}
     */
    isStateOfSaoPaulo() {
        return $.inArray(parseInt(this._data_send.numeroDdd), ddds_sao_paulo) !== -1;
    }

    /**
     * Retorna o ID do broker de acordo com a operadora, ou false
     * @returns {number|boolean}
     */
    getBroker() {
        return broker[this._data_send.nomeOperadora] ?? false;
    }

    /**
     * Verifica se o número (DDD + Celular) esta na blacklist
     * @returns {boolean}
     */
    isOnBlackList() {
        $.ajax({
            url: endpoint_blacklist + this._data_send.numeroCompleto,
            type: "get",
            async: false,
            success: () => {
                return true;
            },
            error: () => {
                return false;
            }
        });
    }

    /**
     * Verifica se uma nova mensagem com o mesmo número (DDD + Celular) de uma mensagem já validada possui um tempo de envio menor
     * @param {DataSend} new_data Dados de uma mensagem
     * @param {DataSend} old_data Dados de uma mensagem
     * @returns {boolean}
     */
    haveShortedTime(new_data, old_data) {
        return new_data.horaEnvio.isBefore(old_data.horaEnvio);
    }
}