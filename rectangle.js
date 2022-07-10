function rectangle(){
	var x=document.getElementById('t1').value;
	var y=document.getElementById('t2').value;
	var area=parseInt(x)*parseInt(y)
	document.getElementById('t3').value=(area);
	var perimeter=2*[parseInt(x)*parseInt(y)]
	document.getElementById('t4').value=(perimeter);
}

function clr(){
	document.getElementById('t1').value='';
	document.getElementById('t2').value='';
	document.getElementById('t3').value='';
	document.getElementById('t4').value='';
}