
var mybutton = document.getElementById("begin");
var name;
mybutton.onclick = function(){
	// Check Name and go to next page 
	name = document.getElementById("name").value;
	 var page1 = document.getElementById("header");
	 var page2 = document.getElementById("parttop"); 
	 var welcome = document.getElementById("welcome");
	 
	 $("#header").fadeOut(); 
	 $("footer").fadeIn(4000);  
	 $("#parttop").fadeIn(4000);
	 
	 welcome.innerHTML ="Welcome " + name + "! Good luck!";	 
}  

$(document).ready(function(){
	// Fade In/Out the hints
	$("#h01").on("mouseover", function() {$("#hint01").fadeOut().fadeIn(1000);});
	$("#h01").on("mouseout", function() {$("#hint01").fadeOut(1000);});	
	$("#h02").on("mouseover", function() {$("#hint02").fadeIn(1000);});
	$("#h02").on("mouseout", function() {$("#hint02").fadeOut(1000);});	
	$("#h03").on("mouseover", function() {$("#hint03").fadeIn(1000);});
	$("#h03").on("mouseout", function() {$("#hint03").fadeOut(1000);});	
	$("#h04").on("mouseover", function() {$("#hint04").fadeIn(1000);});
	$("#h04").on("mouseout", function() {$("#hint04").fadeOut(1000);});	
	$("#h05").on("mouseover", function() {$("#hint05").fadeIn(1000);});
	$("#h05").on("mouseout", function() {$("#hint05").fadeOut(1000);});
});
 
var subbutton = document.getElementById("submit");
subbutton.onclick = function() {
	var arr = [];
	var questions = 5;
	for(i = 0; i < questions ; i++) {         // iterate to check input value for each questions
		var answer = document.getElementsByName("q" + (i + 1)); 
	    var temp = "";
		for (j = 0; j < answer.length; j++ ) {  // gather the answers
			if (answer[j].checked == true) {
				temp += j+1;				
			}			
		} 
		if (temp == "") {
			alert("You missed Question " + (i + 1) + "!");
		}
		else {
			arr.push(temp); 
		}	    
	}
	
	var answers = ["2","2","4","1","123"]  // array values for correct answers
	var marks = 0; 
	if (arr.length == questions) {  // After checking inputs, calculate marks 
			for (i = 0; i < questions ; i++) {
			if (answers[i] === arr[i]) {
				marks++;
			}	 
		}
		var result1 = document.getElementById("result1");
		var result2 = document.getElementById("result2");
		var result3 = document.getElementById("result3");
		$("#result1").fadeOut();  // reset display for retrial
		$("#result2").fadeOut();
		$("#result3").fadeOut();
		
		$("#result1").fadeIn(3000);  // display the result top and bottom
		result1.innerHTML = "You scored " + marks + " out of " + questions;
		$("#result2").fadeIn(3000);  
		result2.innerHTML = "RESULTS for " + name + ": You scored " + marks + " out of " + questions;
		
		if (marks === questions) {
			for (i = 0; i < 10; i++){   // flash 10 times before display
				$("#result3").fadeIn(100);  
				result3.innerHTML = "You scored " + questions + "/" + questions + ". Perfect!";  
				$("#result3").fadeOut(100);  
			}
			$("#result3").fadeIn(3000);  					
		}
	}
	
} 