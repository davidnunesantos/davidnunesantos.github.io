// Informações da API
var API_KEY        = 'AIzaSyDk92w08OLlus1NZoHUSi3-EiQQPc2wna4';
var CLIENT_ID 	   = '344303588088-q1nqpad3r4rp8lpnmg390tqn0k6c9rkt.apps.googleusercontent.com'; //'344303588088-0h7d642e8vbh0btai69ts8gmkre8fpvu.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES         = 'https://www.googleapis.com/auth/drive';

// Informações da planilha
var SPREADSHEET_ID        = '1XrE0vgUgyZnZUZJwWMuQ5BH7T35IRubqd_4HocX0wJ0';
var RANGE_MES             = "'Dashboard - Orçamento'!I3";
var RANGE_GUARDADO        = "'Dashboard - Orçamento'!C6:C9";
var RANGE_RECEITAS        = "'Dashboard - Orçamento'!C12:C15";
var RANGE_OUTRAS_RECEITAS = "'Dashboard - Orçamento'!C18:C21";
var RANGE_RESULTADOS      = "'Dashboard - Orçamento'!J8:J10";

var authorizeButton = document.getElementById('authorize-button');
var signoutButton   = document.getElementById('signout-button');

function handleClientLoad() {
    // Load the API client and auth2 library
    gapi.load('client:auth2', initClient);
}

function initClient() {
    gapi.client.init({
        apiKey: API_KEY,
        discoveryDocs: DISCOVERY_DOCS,
        clientId: CLIENT_ID,
        scope: SCOPES
    }).then(function () {
        gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);
        updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());

        authorizeButton.onclick = handleAuthClick;
        signoutButton.onclick   = handleSignoutClick;
    });
}

function updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
        authorizeButton.style.display = 'none';
        signoutButton.style.display   = 'block';
        carregarDados();

        $('#mes').on('change', function() {
            carregarDados();
        });
    } else {
        authorizeButton.style.display = 'block';
        signoutButton.style.display   = 'none';
    }
}

function handleAuthClick(event) {
    gapi.auth2.getAuthInstance().signIn();
}

function handleSignoutClick(event) {
    gapi.auth2.getAuthInstance().signOut();
}

// Formato do intervalo deve ser uma notação A1, exemplo: "'Dashboard - Orçamento'!A1:A17"
function getDadosFromRange(intervalo) {
    var params = {
        spreadsheetId: SPREADSHEET_ID,
        range: intervalo,
        valueRenderOption: 'FORMATTED_VALUE',
        dateTimeRenderOption: 'SERIAL_NUMBER'
    };

    return gapi.client.sheets.spreadsheets.values.get(params);
}

// Formato do intervalo deve ser uma notação A1, exemplo: "'Jan 20'!F17:I17"
// Formato de values deve ser um array de linhas, exemplo: [['T', 'E', 'S', 'T']]
function updateDados(intervalo, values) {
    var params = {
        spreadsheetId: SPREADSHEET_ID,
        range: intervalo,
        valueInputOption: 'USER_ENTERED'
    };

    var valueRangeBody = {
        range: intervalo,
        majorDimension: 'ROWS',
        values: values
    };

    return gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    
}

function alterMonth(callback) {
    var values  = [[$('#mes').val()]];
    var request = updateDados(RANGE_MES, values);

    request.then(function(response) {
        callback();
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function getMonth(callback) {
    var request = getDadosFromRange(RANGE_MES);

    request.then(function(response) {
        $('#mes').val(response.result.values[0][0]);
        callback();
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function montaGuardado() {
    var request = getDadosFromRange(RANGE_GUARDADO);

    request.then(function(response) {
        $('#guardadoNuDavid').text(response.result.values[0][0]);
        $('#guardadoCarteira').text(response.result.values[1][0]);
        $('#guardadoBradesco').text(response.result.values[2][0]);
        $('#guardadoTotal').text(response.result.values[3][0]);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function montaReceitas() {
    var request = getDadosFromRange(RANGE_RECEITAS);

    request.then(function(response) {
        $('#receitaDavid').text(response.result.values[0][0]);
        $('#receitaMel').text(response.result.values[1][0]);
        $('#receitaOutros').text(response.result.values[2][0]);
        $('#receitaTotal').text(response.result.values[3][0]);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function montaOutrasReceitas() {
    var request = getDadosFromRange(RANGE_OUTRAS_RECEITAS);

    request.then(function(response) {
        $('#outrasFgts').text(response.result.values[0][0]);
        $('#outrasTransmai').text(response.result.values[1][0]);
        $('#outrasTotal').text(response.result.values[2][0]);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function montaResultados() {
    var request = getDadosFromRange(RANGE_RESULTADOS);

    request.then(function(response) {
        $('#resultadoMes').text(response.result.values[0][0]);
        $('#receitasGastos').text(response.result.values[1][0]);
        $('#guardar').text(response.result.values[2][0]);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

function getDados() {
    montaGuardado();
    montaReceitas();
    montaOutrasReceitas();
    montaResultados();
}

function carregarDados() {
    if ($('#mes').val() !== '') {
        alterMonth(function() {
            getDados();
        });
    } else {
        getMonth(function() {
            getDados();
        });
    }
}