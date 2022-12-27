$(document).ready(function(){
	$("#bj").click(function(event) {
     var cst = $('#text1').val();
     wc.alert("成功");
     wc.goQQFriend(cst);
	});
});
