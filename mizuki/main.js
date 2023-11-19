"use script";

//ロードと同時にフェードイン
$(window).on("load", function() {
    $('.js-fadein').fadeIn(2000); 
});

//モーダル
$(function(){
	// 変数に要素を入れる
	var open = $('.modal-open'),
		close = $('.modal-close'),
		container = $('.modal-container');

	//開くボタンをクリックしたらモーダルを表示する
	open.on('click',function(){	
		container.addClass('active');
		return false;
	});

	//閉じるボタンをクリックしたらモーダルを閉じる
	close.on('click',function(){	
		container.removeClass('active');
	});

	//モーダルの外側をクリックしたらモーダルを閉じる
	$(document).on('click',function(e) {
		if(!$(e.target).closest('.modal-body').length) {
			container.removeClass('active');
		}
	});
});

// //フェードイン
// $(function(){
// 	$(window).scroll(function (){
// 		$('.js-fade').each(function(){
// 			var pos = $(this).offset().top;
// 			var scroll = $(window).scrollTop();
// 			var windowHeight = $(window).height();
// 			if (scroll > pos - windowHeight + 20){ //ここの２００の数字変えるとどのくらいスクロールしてフェードイン始まるか決まる
// 				$(this).addClass('scroll');
// 			}
// 		});
// 	});
// });