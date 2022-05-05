$(function () {
	onload();
	function onload(){
		if((getUrlName().search(/index/) == 0)){
        	//Turn on modal Suggestion
       		 $('#myModal_Suggestion').modal();
       	}
	}
	function getUrlName(){
		var vars = [], hash, name;
		var hashes = window.location.href.split('/');
		var reg = /^.+html$/;
		for(var k in hashes){
			if(hashes[k] +" "+ hashes[k].search(reg) != -1){
				name = hashes[k];
			}
		}
		return name;
	}

	//sign up button
	$('#Signup_modal, #btn-signup').on('click',function () {
	   $('#myModal_Suggestion').hide();
	   $('.modal-backdrop').remove();
	  $('#myModal_signup').modal();
	});
	$("#signup").click(function() {
		// sign up function
	});
	//sign in button
	$('#btn-user, #btn-modal-signin').on('click',function () {
	   $('#myModal_Suggestion').hide();
	   $('.modal-backdrop').remove();
	  $('#myModal_signin').modal();
	});
	$("#signin").click(function() {
		// sign in function
	});
});