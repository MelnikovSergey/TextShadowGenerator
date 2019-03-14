function cssShadow({
	font_size,
	offset_x,
	offset_y,
	blur,
	opacity,
	color,
	rgba
}) {
	var cssStyles = offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba;
	$('h1').css('text-shadow', cssStyles);
	$('#resultHex').val('background-color: ' + color + ';\nopacity: ' + opacity + '\nfont-size: ' + font_size + 'px;' );
	$('#resultRgba').val('text-shadow: ' + offset_x + 'px ' + offset_y + 'px ' + blur + 'px ' + rgba + ';\nfont-size: ' + font_size + 'px;');
}

cssShadow({
	font_size: 40,
	offset_x: 4,
	offset_y: -1,
	blur: 0,
	opacity: 1,
	color: '#ff0000',
	rgba: 'rgba(255, 0, 0, 1)'
});
