$( document ).ready(function() {
	
	$('#lightgallery').lightGallery({share: false, actualSize: false});

	//$('.author-desc').tooltip();  
	
	$('.author-desc').on( "click", function(event){
		var win = window.open($(this).data('authorpage'), "_blank");
		if (win) 
			win.focus();
	});

	$('#dv_down_disp').on( "click", function(event) {
		form.hideMSG();
		form.clearForm();
		$('#tx_selected_file').val("disparity_maps.rar");
		$('#modal-download-file').modal('show');
	});

	$('#dv_down_dibr').on( "click", function(event) {
		form.hideMSG();
		form.clearForm();
		$('#tx_selected_file').val("dibr_results.rar");
		$('#modal-download-file').modal('show');
	});

	$('#bt_download').on( "click", function(event) {
		form.sendMail();
	});
});

var form = {
	showMSG : function(msg, type) {
		this.clearMSG();
		if (type=='E') //error
			$('#dv_alert').removeClass('alert-warning alert-success').addClass('alert-danger');
		else if (type=='S') //success
			$('#dv_alert').removeClass('alert-danger alert-warning').addClass('alert-success');
		else
			$('#dv_alert').removeClass('alert-danger alert-success').addClass('alert-warning');
		$('#alert_span_text').html(msg);
		$('#dv_alert').show();
	},
	hideMSG : function() {
		$('#dv_alert').hide();
	},
	clearMSG : function() {
		$('#alert_span_text').html("");
	},
	clearForm : function() {
	$('#tx_name').val("");
	    	$('#tx_email').val("");
	    	$('#tx_inst').val("");
	    	$('#tx_selected_file').val("");
	    	$('#tx_msg').val("");
	    	$('#ck_agree').prop( "checked", false );
	},
	sendMail : function(){
		var _self = this;
		var data = {
		    name: $("#tx_name").val(),
		    email: $("#tx_email").val(),
		    inst: $("#tx_inst").val(),
		    file: $("#tx_selected_file").val(),
		    message: $("#tx_msg").val()
		};
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if (data.name.trim()=="") {
			_self.showMSG("Name field is empty.", 'E');
			return;
		}
		if (data.inst.trim()=="") {
			_self.showMSG("Organization field is empty.", 'E');
			return;
		}
		if (!filter.test(data.email)) {
			_self.showMSG("Invalid email address.", 'E');
			return;
		}
		if (!$('#ck_agree').is(':checked')) {
			_self.showMSG("You must agree to the terms of use to download.", 'E');
			return;
		}
		$.ajax({
		    type: "POST",
		    url: "http://www.inf.ufrgs.br/~aqoliveira/utils/send_mail.php",
		    data: data,
		    success: function(){
		    	$('#modal-download-file').modal('hide');
		        window.location.href = 'files/'+$("#tx_selected_file").val();
		    },
		    error: function (request, status, error) {
	       		_self.showMSG("Internal error: Send a request email for <aqoliveira@inf.ufrgs.br>.", 'E');
	    	}
		});
	}
};