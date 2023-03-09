//https://data.calgary.ca/resource/j9ps-fyst.json

var xhr = new XMLHttpRequest();
var record;
//window.onload=loaddata1;
function dataThird() {
	//event listener
	document.getElementById("classs").addEventListener("keyup", function (){ searchClass(this.value);},false);
	document.getElementById("name").addEventListener("keyup", function (){ searchName(this.value);},false);
    document.getElementById("sector").addEventListener("keyup", function (){ searchSec(this.value);},false);
	
	
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            record = JSON.parse(xhr.responseText);
          //displayData(r);
        }
      };
      xhr.open("GET", "https://data.calgary.ca/resource/j9ps-fyst.json", true);
      xhr.send();
	
}

function searchClass(classs) {
	
   //	var r=JSON.parse(xhr.responseText);
	
	//structure table
	var output="<tr><th>Class</th><th>Name</th><th>Sector</th><th>Map</th></tr>";
	var searchClass;
	for(var i=0; i< record.length; i++)
	{
		var obj=record[i];
		searchClass=obj.class.toUpperCase();
        let position = obj.latitude + "," + obj.longitude;
        
		if(searchClass.startsWith(classs.toUpperCase()))
		{	
			
            output+="<tr><td>";
			output+=obj.class;
			output+="</td><td>";
			output+=obj.name;
			output+="</td><td>";
			output+=obj.sector;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
			}
				
	}``
document.getElementById("resultData3").innerHTML=output;


}


function searchName(name) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Class</th><th>Name</th><th>Sector</th><th>Map</th></tr>";
     var searchNam;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchNam=obj.name;
         let position = obj.latitude + "," + obj.longitude;
         
         if(searchNam.startsWith(name.toUpperCase()))
         {	
             
            output+="<tr><td>";
			output+=obj.class;
			output+="</td><td>";
			output+=obj.name;
			output+="</td><td>";
			output+=obj.sector;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData3").innerHTML=output;
 
 
 }

 function searchSec(sector) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Class</th><th>Name</th><th>Sector</th><th>Map</th></tr>";
     var searchSector;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchSector=obj.sector.toUpperCase();
         let position = obj.latitude + "," + obj.longitude;
         
         if(searchSector.startsWith(sector.toUpperCase()))
         {	
            output+="<tr><td>";
			output+=obj.class;
			output+="</td><td>";
			output+=obj.name;
			output+="</td><td>";
			output+=obj.sector;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData3").innerHTML=output;
 
 
 }