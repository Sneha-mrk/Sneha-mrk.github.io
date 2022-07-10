function cylinder(){
	var m=document.getElementById('t1').value;
	var n=document.getElementById('t2').value;
	var p=2*3.14*parseInt(m)*parseInt(n)+2*3.14*parseInt(m)*parseInt(m)
	document.getElementById('t3').value=(p)
	var q=3.14*parseInt(m)*parseInt(m)*parseInt(n)
	
document.getElementById('t4').value=(q)
}
function clr(){
	
	document.getElementById('t1').value='';
	document.getElementById('t2').value='';
	document.getElementById('t3').value='';
	document.getElementById('t4').value='';
	
}
