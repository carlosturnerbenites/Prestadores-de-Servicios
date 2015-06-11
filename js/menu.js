( function( $ ) {
$( document ).ready(function() {
$('#cssmenu').prepend('<div id="menu-button" ><p class="icon-menu"></p></div>');
	$('#cssmenu #menu-button').on('click', function(){
		var menu = $(this).next('ul');
		if (menu.hasClass('open')) {
			menu.removeClass('open');
		}
		else {
			menu.addClass('open');
		}
	});
$('#cssmenu li').addClass('hvr-rectangle-out');
});
} )( jQuery );
