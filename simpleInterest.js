function  interest(){
	var a=document.getElementById('t1').value;
	var b=document.getElementById('t2').value;
	var c=document.getElementById('t3').value;
	var interest=parseInt(a)*parseInt(b)*parseInt(c)
	document.getElementById('t4').value=(interest)
	
}

function clr(){
	document.getElementById('t1').value=''
	document.getElementById('t2').value=''
	document.getElementById('t3').value=''
	document.getElementById('t4').value=''
	
}