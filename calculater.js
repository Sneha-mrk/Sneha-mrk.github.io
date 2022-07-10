function add(){
	var num1=document.getElementById('t1').value;
	var num2=document.getElementById('t2').value;
	var sum=parseInt(num1)+parseInt(num2)
	document.getElementById('t3').value=sum;
}

function sub(){
	var num1=document.getElementById('t1').value;
	var num2=document.getElementById('t2').value;
	var sum=parseInt(num1)-parseInt(num2)
	document.getElementById('t3').value=sum;
}

function multi(){
	var num1=document.getElementById('t1').value;
	var num2=document.getElementById('t2').value;
	var sum=parseInt(num1)*parseInt(num2)
	document.getElementById('t3').value=sum;
}

function div(){
	var num1=document.getElementById('t1').value;
	var num2=document.getElementById('t2').value;
	var sum=parseInt(num1)/parseInt(num2)
	document.getElementById('t3').value=sum;
}
function clr(){
	var num1=document.getElementById('t1').value='';
	var num2=document.getElementById('t2').value='';
	document.getElementById('t3').value='';
}