//This will load and parse the XML file that will allow it to be searched
var xhr=new XMLHttpRequest();
var xmlFile;//reference to parsed XML file
window.onload=loadQuiz;

function loadQuiz() {
	xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
        xmlFile = xhr.responseXML;
    }
  };
  xhr.open("GET", "FinalQuiz.xml", true);
  xhr.send();
	
}




function findQuiz() {

var quesionNum;
var questionTitle;
var ans1;
var ans2;
var ans3;
var ans4;
var ans5;
var displayRadio;

var i;
var show=" ";

var x = xmlFile.getElementsByTagName("question");
  for (i = 0; i <x.length; i++) 
  { 
  
  		  
                   quesionNum   = 		x[i].getElementsByTagName("qnumber")[0].childNodes[0].nodeValue + " "
   			     
                   questionTitle =   x[i].getElementsByTagName("qtitle")[0].childNodes[0].nodeValue + " "
              
                   ans1   =    x[i].getElementsByTagName("a")[0].childNodes[0].nodeValue + " "
                
    		           ans2 =	   x[i].getElementsByTagName("b")[0].childNodes[0].nodeValue + " "
                
                   ans3 =    x[i].getElementsByTagName("c")[0].childNodes[0].nodeValue + " "
    		
    		           ans4 =	 x[i].getElementsByTagName("d")[0].childNodes[0].nodeValue + "<br>" + "<br>" + "<br>";

                   displayRadio = "<input class='ques' type='radio' name=opt"  + i + " value=  " 

                   show+= "<br> Question" + " " + quesionNum + ")" + "<br>" + questionTitle + "<br>" + displayRadio + "a >" + " " + ans1 + "<br>" +
                   displayRadio + "b >" + " " + ans2 + "<br>" +
                   displayRadio + "c >" + " " + ans3 + "<br>" +
                   displayRadio + "d >" + " " + ans4 + "<br>" ;

                   document.getElementById("showQuiz").innerHTML = show; 
  }
}
           
  




function Quiz()
{   
  
      

       var questionLength = 5;
       var countAnswer = 0;
       var userChoice;
       var rightanswers = xmlFile.getElementsByTagName("rightanswers")[0].childNodes[0].nodeValue;
       var answers = rightanswers.split(",");
      

       for( i = 0; i < questionLength; i++)
       {
        userChoice = document.querySelector('input[name=opt' + i + ']:checked').value;
          if( userChoice == answers[i])
          {
              countAnswer++;
          }
         }

       
       document.getElementById("resultDisplay").innerHTML= "You got" + " " + countAnswer +"/" +"5" ;
      
        

       
  
 

}