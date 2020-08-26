var API_KEY        = 'AIzaSyDk92w08OLlus1NZoHUSi3-EiQQPc2wna4';
var CLIENT_ID 	   = '344303588088-q1nqpad3r4rp8lpnmg390tqn0k6c9rkt.apps.googleusercontent.com'; //'344303588088-0h7d642e8vbh0btai69ts8gmkre8fpvu.apps.googleusercontent.com';
var DISCOVERY_DOCS = ["https://sheets.googleapis.com/$discovery/rest?version=v4"];
var SCOPES         = 'https://www.googleapis.com/auth/drive';

var SPREADSHEET_ID = '1XrE0vgUgyZnZUZJwWMuQ5BH7T35IRubqd_4HocX0wJ0';

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
        //makeApiCall();
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

/*function makeApiCall() {
    var params = {
        spreadsheetId: SPREADSHEET_ID,
        ranges: ["'Dashboard - Orçamento'!E6:F13"],
        includeGridData: true
    };

    var request = gapi.client.sheets.spreadsheets.get(params);
    request.then(function (response) {
        $.each(response.result.sheets[0].data[0].rowData, function(i, e) {
            $('#content').append($('<div />').text(e.values[0].formattedValue));
        });
    }, function (reason) {
        console.error('error: ' + reason.result.error.message);
    });
}*/

// Formato do intervalo deve ser uma notação A1, exemplo: "'Dashboard - Orçamento'!A1:A17"
function getDadosFromRange(intervalo) {
    var params = {
        spreadsheetId: SPREADSHEET_ID,
        range: intervalo,
        valueRenderOption: 'FORMATTED_VALUE',
        dateTimeRenderOption: 'SERIAL_NUMBER'
    };

    var request = gapi.client.sheets.spreadsheets.values.get(params);
    request.then(function(response) {
        $.each(response.result.values, function(i, e) {
            console.log(e);
        });
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}

// Formato do intervalo deve ser uma notação A1, exemplo: "'Jan 20'!F17:I17"
// Formato de values deve ser um array de linhas, exemplo: [['T', 'E', 'S', 'T']]
function insertDados(intervalo, values) {
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

    var request = gapi.client.sheets.spreadsheets.values.update(params, valueRangeBody);
    request.then(function(response) {
        console.log(response.result);
    }, function(reason) {
        console.error('error: ' + reason.result.error.message);
    });
}