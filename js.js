var curr=0;
var timer=null;
$(function(){
	$('.search_img').click(function(){
		if($('.search').css('display')=='none'){
			$('.search').css('display','inline-block');
		}else{
			$('.search').css('display','none');
		}
	});
	start();
	$('.btn_right').click(function(){
		change();
	});
	$('.btn_left').click(function(){
		curr--;
		curr=curr==-1?2:curr;
		show();
	});
	$('.pic span').hover(function(){
		stop();
	},function(){
		start();
	});
	$('.circle>li').hover(function(){
		stop();
		curr= $(this).index();
		show();
	},function(){
		start();
	});
	$('.course>ul>li').click(function(){
		var a = $(this).index();
		$(this).css({'backgroundColor':'rgb(215,33,51)','color':'#fff'}).siblings().css({'backgroundColor':'#fff','color':'#000'});
		$('.course>.content:eq('+a+')').css('display','block').siblings('.content').css('display','none');
	});
});
function start(){
	if(timer==null){
		timer=setInterval(change,2000);
	}
}
function stop(){
	if(timer!=null){
		clearInterval(timer);
		timer=null;
	}
}
function change(){
	curr++;
	if(curr==3){
		curr=0;
	}
	show();
}
function show(){
	$('.circle>li:eq('+curr+')').css('backgroundColor','rgba(255,255,255,0.5)').siblings('li').css('backgroundColor','rgba(255,255,255,0.2)');
	$('.pic>div:eq('+curr+')').css({'display':'block','z-index':'0'});
	$('.pic>div:eq('+curr+')').siblings('div').css('z-index','1').fadeOut(500);
}