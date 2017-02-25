$(function(){
	(function(){
		$('.sp_plan_title_con div').on('click',function(){
			var _index = $(this).index();
			$(this).addClass('sp_plan_title_hover').siblings().removeClass('sp_plan_title_hover');
			if(_index === 0){
				$('.sp_plan_one').show();
				$('.sp_plan_three').hide();
			}else{
				$('.sp_plan_one').hide();
				$('.sp_plan_three').show();
			}
		});
	})();

	(function(){
		$('.head_nav_con li').on('click',function(){
			$(this).addClass('head_nav_hover').siblings().removeClass('head_nav_hover');
		});
	})();
	//banner轮播
	(function(){
		var _bannerLength = $('.banner_main li').length;
		var i=1;
		setInterval(function(){
			if(i === _bannerLength){
				i=0;
			}
			$('.banner_main li').eq(i).addClass('banner_zIndex').siblings().removeClass('banner_zIndex');
			i++;
		},3000);
	})();

	
	//底部切换
	(function(){				
		var $spTeacherLi = $('.sp_teacher_con li');
		var $spTeacherCon = $('.sp_teacher_con');
		var j=1;
		$spTeacherCon.css('width',$spTeacherLi.length*275+'px');
		setInterval(function(){
			if(j === ($spTeacherLi.length-3)){j=0;}	
			$spTeacherCon.animate({'margin-left':-j*275+'px'},100);
			j++;
		},3000);
		$('.sp_teacher_left').on('click',function(){
			var ulLeft1 = parseInt($spTeacherCon.css('margin-left'))+275;
			if(ulLeft1 === 275){
				return;
			}
			$spTeacherCon.animate({'margin-left':ulLeft1+'px'},100);
			j--;
		});
		$('.sp_teacher_right').on('click',function(){
			var ulLeft2 = parseInt($spTeacherCon.css('margin-left'))-275;
			if(ulLeft2 < -275*($spTeacherLi.length-4)){return;}	
			$spTeacherCon.animate({'margin-left':ulLeft2+'px'},100);
			j++;
		})
	})();

	(function(){
		$(".btn").show();
		$(".btn  a:first").addClass("active");	
		$().gallery({
			current: [".show_images_1",".show_images_1_img"],
			left: [".show_images_2",".show_images_2_img"],
			right: [".show_images_3",".show_images_3_img"],
			none: [".show_images_4",".show_images_4_img"],
			duration: 500,
			autoChange : true,
			changeTimeout: 3000,
			stopTarget : ".header_stage"
		});
	})();

	(function(window){
		$(window).scroll(function(){
			if($(window).scrollTop() >= 200){
				$(".sp_toTop").fadeIn(1000);
			} else{
				$(".sp_toTop").stop(true,true).fadeOut(1000);
			}
		});
	})(window)
	







	
})