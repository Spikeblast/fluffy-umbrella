$(function () {


	$(".fancybox").fancybox({
		loop: false
	});

	// $("#single_1").fancybox({
 //          helpers: {
 //              title : {
 //                  type : 'float'
 //              }
 //          }
 //      });

 //    $("#single_2").fancybox({
 //        openEffect  : 'elastic',
 //        closeEffect : 'elastic',

 //        helpers : {
 //            title : {
 //                type : 'inside'
 //            }
 //        }
 //    });

 //    $("#single_3").fancybox({
 //        openEffect : 'none',
 //        closeEffect : 'none',
 //        helpers : {
 //            title : {
 //                type : 'outside'
 //            }
 //        }
 //    });

 //    $("#single_4").fancybox({
 //        helpers : {
 //            title : {
 //                type : 'over'
 //            }
 //        }
 //    });

// $(".fancybox").fancybox({
//         openEffect  : 'none',
//         closeEffect : 'none'
//     });

$(".various").fancybox({
		maxWidth	: 800,
		maxHeight	: 600,
		fitToView	: false,
		width		: '70%',
		height		: '70%',
		autoSize	: false,
		closeClick	: false,
		openEffect	: 'none',
		closeEffect	: 'none',
		// scrolling : 'auto',
		type: 'iframe',
		preload   : true
	});

})