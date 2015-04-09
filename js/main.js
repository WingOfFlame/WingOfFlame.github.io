// JavaScript Document
$(document).ready(function(){
	$('#myTab a').click(function (e) {
		e.preventDefault()
		$(this).tab('show')
	});

 	$('#resumeButton').click(function () {
    	$('#myTab a[href="#resume"]').tab('show')
  	});
	
	$("#myNav").affix({
        offset: { 
            top: 280 
     	}
    });
});




  
