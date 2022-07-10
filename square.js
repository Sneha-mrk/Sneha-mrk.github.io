function sqr(){
	var s=document.getElementById('t1').value;
	var q=document.getElementById('t2').value;
	var u=parseInt(s)*parseInt(s)
	document.getElementById('t2').value=(u);
	var v=4*parseInt(s)
	document.getElementById('t3').value=(v);
}
