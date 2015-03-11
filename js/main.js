/**
 * jQuery hoverIntent. used to delay the expansion and shrinking of all div.box
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 */
$( document ).ready( function(){
	$( ".box" ).hoverIntent( makeTall, makeShort );
}); // close document.ready

function makeTall(){
	$( this ).animate({ "height": 180 }, 600);
}
function makeShort(){
	$( this ).animate({ "height": 30 }, 600);
}
