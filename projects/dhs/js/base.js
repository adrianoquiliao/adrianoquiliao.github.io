$( document ).ready(function() {
	
	$('#bt-showmore').on( "click", function(event){
		resultsControl.showMore();
	});

});	

var resultsControl = {
	id: 1,
	nrRes: 6,
	showMore: function() {
		var _self = this;
		if (_self.id<_self.nrRes) {
			$('#div-res'+(++_self.id)).css('display', 'block');
			if (_self.id==_self.nrRes)
				$('#bt-showmore').html('CLOSE RESULTS');
		} else {
			_self.id = 1;
			for (var i = 2; i <= _self.nrRes; i++)
				$('#div-res'+i).css('display', 'none');
			$('#bt-showmore').html('SHOW MORE');
		}
	}
};


