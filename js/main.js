// JavaScript Document
$(document).ready(function(){
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

	$('body').scrollspy({
    		target: '.bs-docs-sidebar',
	    	offset: 40
	});
	
	$("#sidebar").affix({
		offset: {
			top: 300
		}
	});
});




  
