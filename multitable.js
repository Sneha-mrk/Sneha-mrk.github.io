  function multi(){
	 var num='<table class="table table-hover">';
	var p=document.getElementById('t1').value;
	var q=document.getElementById('t2').value;
	
	for(i=parseInt(p);i<=parseInt(q);i++)
	{
	num=num+'<tr><td>'+(i*1)+'</td><td>'+(i*2)+'</td><td>'+(i*3)+'</td><td>'+(i*4)+'</td><td>'+(i*5)+'</td><td>'+(i*6)+'</td><td>'+(i*7)+'</td><td>'+(i*8)+'</td><td>'+(i*9)+'</td><td>'+(i*10)+'</td></tr>';
	}
	cdf=num+'</table>';
	document.getElementById('a').innerHTML=cdf;
	console.log('');
	
}
function add(){
    var str = '<table>';
    for(i=1 ;i<=5;i++){
    str = str + '<tr><td> Apple '+ i +' </td></tr>'
}
    str = str + '</table>';
    document.getElementById('a').innerHTML = str;
    console.log('Hello');
}