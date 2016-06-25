/**
  * PMB
  * @author Paul Bennett
  * @description singleton class used to handle 
  * javascript functionality on http://pmbennett.net
  */

var PMB = PMB || {};

PMB = (function() {

	var 
	pageH1 = $('.logo h1'),
	rsImgs = $('.caseStudy');

	return {
		init : function() {
		
			// toggle class on logo to make it spin onn hover
			pageH1
				.bind('mouseover', function() {
					$(this).addClass('spin');
				})
				.bind('mouseout', function() {
					$(this).removeClass('spin');
				});
			
			// responsively load images based on device size
			var deviceImgSuffix = ( 420 >=$(window).width() ) ? 'small': 'large';
			rsImgs.find('[data-src]').each( function( i ) {		
				var src = $(this).data('src').replace( '{dim}', '_' + deviceImgSuffix );
				$(this).append('<img src="' + src + '" alt="">');
			});
		}
	}
})();

$(document).ready(function() {
	PMB.init();
});