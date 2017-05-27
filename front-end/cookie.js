// JavaScript Document

function AddCookie(name,value,expiresHour){
	var cookieString = name+"="+escape(value);
	if(expiresHour > 0){
		var date = new Date();
		date.setTime(date.getTime +expiresHour*3600*1000);
		cookieString = cookieString+";expires="+date.toGMTString();
	}
	document.cookie=cookieString;
	
}

//找到了返回响应的值，没有找到返回""
function GetCookie(name){
	var strCookie=document.cookie; 
	//使用的是;+空格
	 var arrCookie=strCookie.split("; "); 
	 for(var i=0;i<arrCookie.length;i++){ 
		   var arr=arrCookie[i].split("="); 
		   if(arr[0]==name)
			   return arr[1]; 
	 } 
	 return ""; 
}

function DeleteCookie(name){
	var date = new Date();
	date.setTime(date.getDate()-10000);
	document.cookie = name+"=v;expires="+date.toGMTString();
}