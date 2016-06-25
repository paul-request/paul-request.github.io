/**
  * PMB.Bookmarks
  * @author Paul Bennett
  * @description Class used to fetch Delicious Bookmarks 
  * to display on http://pmbennett.net
  */

var PMB = PMB || {};

PMB.Bookmarks = (function () {
	
	var DEFAULTS = {
		'max': 5,
		'username': 'delicious'
	}
	
	function Bookmarks( jElement, opts ) {
		
		this.jElement = jElement;
		this.opts = $.extend({}, DEFAULTS, opts);
		this.url = "http://feeds.delicious.com/v2/json/" + opts.username + "/?callback=?&count=" + opts.max;
		
		$.getJSON( this.url, $.proxy( function( data ) {
			console.log( data );
		}, this ));
	}
	
	Bookmarks.prototype = {
		
		show : function( data ) {
			console.log( data );
		}
	}
			
	return Bookmarks;
	
})();
