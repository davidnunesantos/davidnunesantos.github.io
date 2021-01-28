$(function() {
	definirProgressoHabilidades();
});

function definirProgressoHabilidades() {
	$('#progress_php').prop('style', 'width: 95%').prop('aria-valuenow', 95);
	$('#progress_javascript').prop('style', 'width: 95%').prop('aria-valuenow', 95);
	$('#progress_html').prop('style', 'width: 95%').prop('aria-valuenow', 95);
	$('#progress_jquery').prop('style', 'width: 85%').prop('aria-valuenow', 85);
	$('#progress_postgresql').prop('style', 'width: 80%').prop('aria-valuenow', 80);
	$('#progress_mysql').prop('style', 'width: 75%').prop('aria-valuenow', 75);
	$('#progress_restapi').prop('style', 'width: 75%').prop('aria-valuenow', 75);
	$('#progress_linux').prop('style', 'width: 70%').prop('aria-valuenow', 70);
	$('#progress_android').prop('style', 'width: 50%').prop('aria-valuenow', 50);
	$('#progress_python').prop('style', 'width: 30%').prop('aria-valuenow', 30);
	$('#progress_vue').prop('style', 'width: 30%').prop('aria-valuenow', 30);
}