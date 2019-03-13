function cssShadow({
	font_size,
	offset_x,
	offset_y,
	blut,
	opacity,
	color,
	rgba
}) {
	var cssStyles = offset_x + 'px ', offset_y + 'px ', + blur + 'px ' + rgba;
	$('h1').css('text-shadow', cssStyles);
	$('#resultHex').val('background-color: ' + color + ';\nopacity: ' + opacity + '\nfont-size: ' + font_size + 'px;' );
	$('#resultRgba').val('text-shadow: ' + offset_x + 'px '  + offset_y + 'px ' + blur + 'px ' + rgba + ';\nfont-size: ' + font_size + 'px;' );	
}
