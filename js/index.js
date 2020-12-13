$(document).ready(function () {
	$(".box_button").on("click", function () {
			$(".cookie").animate({opacity: "0"}, 0) .promise().then(function(){
				$(".cookie2").delay(700).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie3").delay(1200).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie4").delay(1600).animate({opacity: "0"}, 0)}).promise().then(function(){
				$(".cookie5").delay(1900).animate({opacity: "0"}, 0)}).promise().then(function(){
					$(".poster").delay(4000).animate({opacity: "1"}, 5000)}).promise().then(function(){
					$(".cookiecloud").delay(5000).animate({width: "700px", hight:"700px", top: "40%", left: "73%"}, 2000)}).promise().then(function(){
					$(".two").delay(7000).animate({top: "15%", opacity:"1"}, 1000)
					$(".gwa").delay(7000).animate({top: "14%", opacity:"1"}, 1000)}).promise().then(function(){
					$(".lt").delay(8500).animate({left: "11px", opacity:"1"}, 1000)
					$(".coex").delay(8500).animate({left: "1px", opacity:"1"}, 1500)}).promise().then(function(){
					$(".ltt").delay(10000).animate({top: "95%", opacity:"1"}, 1000)}).promise().then(function(){
					$(".o").delay(12000).animate({width: "20px", height:"20px"}, 1000)})
	})
})


$("lans").css("background-position-x", )

