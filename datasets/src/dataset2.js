//https://data.calgary.ca/resource/g9s5-qhu5.json

var xhr = new XMLHttpRequest();
var record;
//window.onload=loaddata1;
function dataSecond() {
	//event listener
	document.getElementById("elevate").addEventListener("keyup", function (){ searchElevation(this.value);},false);
	document.getElementById("value").addEventListener("keyup", function (){ searchValue(this.value);},false);
    document.getElementById("unitcode").addEventListener("keyup", function (){ searchUnitCode(this.value);},false);
	
	
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            record = JSON.parse(xhr.responseText);
          //displayData(r);
        }
      };
      xhr.open("GET", "https://data.calgary.ca/resource/g9s5-qhu5.json", true);
      xhr.send();
	
}

function searchElevation(elevate) {
	
   //	var r=JSON.parse(xhr.responseText);
	
	//structure table
	var output="<tr><th>Elevation</th><th>Value</th><th>Unit Code Name</th><th>Map</th></tr>";
	var searchElevate;
	for(var i=0; i< record.length; i++)
	{
		var obj=record[i];
		searchElevate=obj.elevation;
        let position = obj.latitude + "," + obj.longitude;
        
		if(searchElevate.startsWith(elevate))
		{	
			
            output+="<tr><td>";
			output+=obj.elevation;
			output+="</td><td>";
			output+=obj.value;
			output+="</td><td>";
			output+=obj.unitcodename;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
			}
				
	}``
document.getElementById("resultData2").innerHTML=output;


}


function searchValue(value) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Elevation</th><th>Value</th><th>Unit Code Name</th><th>Map</th></tr>";
     var searchVal;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchVal=obj.value;
          let position = obj.latitude + "," + obj.longitude;
         
         if(searchVal.startsWith(value))
         {	
             
            output+="<tr><td>";
			output+=obj.elevation;
			output+="</td><td>";
			output+=obj.value;
			output+="</td><td>";
			output+=obj.unitcodename;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData2").innerHTML=output;
 
 
 }

 function searchUnitCode(unitcode) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Elevation</th><th>Value</th><th>Unit Code Name</th><th>Map</th></tr>";
     var searchCode;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchCode=obj.unitcodename.toUpperCase();
          let position = obj.latitude + "," + obj.longitude;
         
         if(searchCode.startsWith(unitcode.toUpperCase()))
         {	
             
            output+="<tr><td>";
			output+=obj.elevation;
			output+="</td><td>";
			output+=obj.value;
			output+="</td><td>";
			output+=obj.unitcodename;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData2").innerHTML=output;
 
 
 }