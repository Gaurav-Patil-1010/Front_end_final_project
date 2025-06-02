function dateUpdate(){

	let date=new Date();

	let h=date.getHours();

	let m=date.getMinutes();

	let s=date.getSeconds();

	if(h<10)
	{
		document.getElementById("hour").innerHTML="0"+h;
	}
	else
	{
		document.getElementById("hour").innerHTML=h;
	}

	if(m<10)
	{
		document.getElementById("minute").innerHTML="0"+m;
	}
	else
	{
		document.getElementById("minute").innerHTML=m;
	}

	if(s<10)
	{
		document.getElementById("second").innerHTML="0"+s;
	}
	else
	{
		document.getElementById("second").innerHTML=s;
	}
}

setInterval(dateUpdate,1000);