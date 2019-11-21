function Main(){
var btn = document.querySelector("#lookup");
var result=document.querySelector('#result');





btn.onclick=function(){
$.ajax({type:"GET", url:"world.php",data:$("#control").serialize(),success: function(data){
	result.innerHTML=data;
	//alert (data);
}

});



}

	alert("loaded ");








}



document.addEventListener("DOMContentLoaded",Main);