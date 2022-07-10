function sort(){
	var a=document.getElementById('t1').value;
	var b=document.getElementById('t2').value;
	//console.log(a+b);
	if(a.length<b.length){
		
		document.getElementById('t2').value=a;
		document.getElementById('t1').value=b;
		
	}
}
function desc(){
	var c=document.getElementById('t1').value;
	var d=document.getElementById('t2').value;
	if(c.length>d.length){
		document.getElementById('t2').value=c;
		document.getElementById('t1').value=d;
L}