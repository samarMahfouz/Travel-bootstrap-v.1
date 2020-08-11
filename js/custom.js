/* ================================ */
/* Start main info. */
/*
  *** Design name : Deniz - دنيز
  *** Coder designer: samar mahfouz - سمر محفوظ
  *** Used: html, css, jQuery and bootstrap
  *** Last update : 9/2/2018 friday الجمعة
*/
/*  End main info. */
/* ================================ */
$(function () {
	"use strict";

	$('[placeholder]').focus(function () {
		$(this).attr('data-text', $(this).attr('placeholder'));//it will put in data text the place holder
		$(this).attr('placeholder', '');//remove the content
		}).blur(function () {
		$(this).attr('placeholder', $(this).attr('data-text'));// take the attr from data text
	});
	(function autoSlider() {
		$('.slider .active').each(function () {
		  	if(!$(this).is(":last-child")){
				$(this).delay(5000).slideDown(800, function () {
				$(this).removeClass("active").next().addClass("active").fadeIn(800);
				autoSlider();
			});
			}else{
				$(this).delay(5000).slideDown(800, function () {
					$(this).removeClass('active');
					$('.slider div').eq(0).addClass('active').fadeIn();
					autoSlider();
				});
			}
		});
	}());
  $('header').height($(window).height());
  $('li a').click(function() {
    $(this).parent().addClass('active').siblings().removeClass('active');
  });
  $('li a').click(function() {
    $('html, body').animate({
      scrollTop:$('#' + $(this).data('value')).offset().top
    }, 4000);
  });
});
