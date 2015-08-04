$(document).ready(function(){
	$( ".modal" ).each(function(index) {
   $(this).on('show.bs.modal', function (e) {
 var open = $(this).attr('data-easein');
     if(open == 'shake') {
                 $('.modal-dialog').velocity('callout.' + open);
            } else if(open == 'pulse') {
                 $('.modal-dialog').velocity('callout.' + open);
            } else if(open == 'tada') {
                 $('.modal-dialog').velocity('callout.' + open);
            } else if(open == 'flash') {
                 $('.modal-dialog').velocity('callout.' + open);
            }  else if(open == 'bounce') {
                 $('.modal-dialog').velocity('callout.' + open);
            } else if(open == 'swing') {
                 $('.modal-dialog').velocity('callout.' + open);
            }else {
              $('.modal-dialog').velocity('transition.' + open);
            }
             
}); 
});
});
function sendEmail(){
		var user_id = $('#user-id').val();
		$.ajax({
			type: "POST",
			url: "",
			data: user_id,
			success: function(){
				alert("Successfully Submitted! We'll get back to you.");
			},
			error: function(){
				alert("Something is wrong! Please try again");
			}
		});
}
