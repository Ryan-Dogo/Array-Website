var x = [];
	function submit(){
        var s1 = document.getElementById("sport1").value;
        var s2 = document.getElementById("sport2").value;
        var s3 = document.getElementById("sport3").value;
        var s4 = document.getElementById("sport4").value;
        var s5 = document.getElementById("sport5").value;
        x.push(s1,s2,s3,s4,s5);
	console.log(x);
      document.getElementById("dncommas").innerHTML = x;
      document.getElementById("submitbutton").style.display = "none";
      document.getElementById("sortbutton").style.display = "inline-block";
	}
function sorting(){
	  x.sort();
    //console.log(x);
	document.getElementById("dncommas").innerHTML =x;
//document.getElementById("submitbutton").style.display = "none";
  document.getElementById("sortbutton").style.display = "none";     
}
function reset(){
	  x =[];
	document.getElementById("dncommas").innerHTML = x;
  document.getElementById("submitbutton").style.display = "inline-block";
  document.getElementById("sport1").value=null;
  document.getElementById("sport2").value=null;
  document.getElementById("sport3").value=null;
  document.getElementById("sport4").value=null;
  document.getElementById("sport5").value=null;
}