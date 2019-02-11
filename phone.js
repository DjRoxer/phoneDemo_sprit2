$(document).ready(function() { // do this when the document is loaded
	$("#dialer").show(); // show the element with ID "element"
	$("#add").show();
	$('#dialer').css('backgroundColor', 'white');
	$("#contact").show();
	$("#contacts").hide(); // hide the element with ID "otherElement"
	$("#addScreen").hide();
	$("#help").hide();

});
$("#dialer").click(function() {

	$("#numbers").show();
	$("#addScreen").hide();
	$("#contacts").hide();
	$(this).css('backgroundColor', 'white');
	$('#contact').css('backgroundColor', 'lightgrey');
	$('#add').css('backgroundColor', 'lightgrey');
	$("#help").hide();
});
$("#contact").click(function() {

	$("#contacts").show();
	$("#numbers").hide();
	$("#addScreen").hide();
	$(this).css('backgroundColor', 'white');
	$('#dialer').css('backgroundColor', 'lightgrey');
	$('#add').css('backgroundColor', 'lightgrey');
	$("#help").hide();
});
$("#add").click(function() {

	$("#addScreen").show();
	$("#numbers").hide();
	$("#contacts").hide();
	$(this).css('backgroundColor', 'white');
	$('#contact').css('backgroundColor', 'lightgrey');
	$('#dialer').css('backgroundColor', 'lightgrey');
	$("#help").hide();
});
$("#Help").click(function() {

	$("#help").show();
	$("#addScreen").hide();
	$("#numbers").hide();
	$("#contacts").hide();
	$(this).css('backgroundColor', 'white');
	$('#contact').css('backgroundColor', 'lightgrey');
	$('#dialer').css('backgroundColor', 'lightgrey');
	
});


/* fancy dialing functions */
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
});

$("#button_dialer_clear").click(function() {
	$("#number_input").val("");
});