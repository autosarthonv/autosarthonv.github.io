 $(function(){
	 console.log('tada ! ');
	 $('[hieuung="tooltip"]').tooltip();  
	 // ham click 
	 $('.n0').click(function(){
		$('body,html').animate({scrollTop:$('#TacGia').offset().top},2000,"easeInOutExpo");
		return false; 
	})
	 $('.n1').click(function(){
	 	$('body,html').animate({scrollTop:$('#DieuKien').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n2').click(function(){
	 	$('body,html').animate({scrollTop:$('#LyDo').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })


$('.n3').click(function(){
	 	$('body,html').animate({scrollTop:$('#QuyTrinh').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n4').click(function(){
	 	$('body,html').animate({scrollTop:$('#BSW').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n5').click(function(){
	 	$('body,html').animate({scrollTop:$('#ThuatNgu').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n6').click(function(){
	 	$('body,html').animate({scrollTop:$('#VFB').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n7').click(function(){
	 	$('body,html').animate({scrollTop:$('#RTE').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n8').click(function(){
	 	$('body,html').animate({scrollTop:$('#ComStack').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n9').click(function(){
	 	$('body,html').animate({scrollTop:$('#CanStack').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })
$('.n10').click(function(){
	 	$('body,html').animate({scrollTop:$('#Diagnostic').offset().top},2000,"easeInOutExpo");
	 	return false; 
	 })




	 $(window).scroll(function(){
 	 	vitrihientai = $('body,html').scrollTop();
	 	console.log(vitrihientai);

	 	if(vitrihientai >337){
	 		$('.navbar-fixed-top').addClass('tienhoa');
	 	} 
	 	else if(vitrihientai <337){
	 		$('.navbar-fixed-top').removeClass('tienhoa');
	 	}


	 	// mo rong 
	 	if(vitrihientai > 500) {
	 		$('.portfolio').addClass('bienra');
	 	}
	 	else if(vitrihientai < 700) {
	 		$('.portfolio').removeClass('bienra');
	 	}

	 })
})  
	 
     