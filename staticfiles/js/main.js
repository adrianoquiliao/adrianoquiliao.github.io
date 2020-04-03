$( document ).ready(function() {
	
	$('.lang').on( "click", function(event){
		formControl.changeLanguage($(this));
	});
	$('#bt_lattes').on("click", function(event){
		formControl.redirect('http://lattes.cnpq.br/8945917706870243');
	});
	$('#bt_home').on("click", function(event){
		formControl.page(1);
	});
	$('#bt_research').on("click", function(event){
		formControl.page(3);
	});
	$('#bt_career').on("click", function(event){
		formControl.page(4);
		$('#teaching').animate({
			   		scrollTop: 0
				}, 'slow');
	});
	$('#bt_research_gp').on("click", function(event){
		formControl.redirect('http://dgp.cnpq.br/dgp/espelhogrupo/7978723913551650');
	});
	$('#bt_contact').on("click", function(event){
		formControl.page(2);
	});
	$('#bt_news').on("click", function(event){
		formControl.page(5);
	});
	formControl.initLanguage();

});	

var formControl = {
	initLanguage : function() {
		 $('.language-pt').hide();
		 $('#bt-lang-en').css("color", "gray");
	},
	changeLanguage : function (el) {
		 if (el.data("language") == 'pt') {
			 $('.language-en').hide();
			 $('.language-pt').show();
			 $('#bt-lang-pt').css("color", "gray");
			 $('#bt-lang-en').css("color", "white");
		 } else if (el.data("language") == 'en') {
			 $('.language-pt').hide();
			 $('.language-en').show();
			 $('#bt-lang-pt').css("color", "white");
			 $('#bt-lang-en').css("color", "gray");
		 }
	},
	page: function(id) {
		switch(parseInt(id)) {
			case 2:
				$('body,html').animate({
			   		scrollTop: $('#contact').offset().top
				}, 800);
				break;
			case 3:
				$('body,html').animate({
			   		scrollTop: $('#research').offset().top
				}, 800);
				break;
			case 4:
				$('body,html').animate({
			   		scrollTop: $('#teaching').offset().top
				}, 800);
				break;
			case 5:
				$('body,html').animate({
			   		scrollTop: $('#news').offset().top
				}, 800);
				break;
			default:
				$('body,html').animate({
			   		scrollTop: $('#about').offset().top
				}, 800);
				break;
		}

	},
	redirect: function (url) {
		var win = window.open(url, '_blank');
		if (win) 
			win.focus();
	},
	urlParam: function(name){
	    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	    if (results==null)
	       return null;
	    else
	       return decodeURI(results[1]) || 0;
	}
};