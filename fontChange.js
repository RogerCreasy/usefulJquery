function font_change(element,size){
	var cur_size = parseInt(element.css('font-size'));
	if(size=='smaller'){
		cur_size = cur_size-3;
	}
	else if(size=='larger'){
		cur_size = cur_size+3;
	}
	element.css('font-size',cur_size + 'px');
}


$('#smaller').click(function(){
	font_change($('p'),'smaller');
});

$('#larger').click(function(){
	font_change($('p'),'larger');
});