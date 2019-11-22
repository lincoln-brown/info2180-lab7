function Main(){
var btn = document.querySelector("#lookup");
var result=document.querySelector('#result');
var btn2 = document.querySelector("#Lookup_Cities");








btn.onclick=function(){

$.ajax({type:"GET", url:"world.php",data:$("#control").serialize(),success: function(data){
	result.innerHTML=data;
	//alert (data);
}

});



}
btn2.onclick=function(){
$.ajax({type:"GET", url:"world.php",data:$("#control").serialize()+"&context=cities",success: function(data){
	result.innerHTML=data;
	//alert (data);
}

});

	//alert ($("#control").serialize());
//alert ("data");

}

	alert("loaded ");








}



document.addEventListener("DOMContentLoaded",Main);