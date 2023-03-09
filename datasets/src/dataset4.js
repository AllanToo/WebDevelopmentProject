// https://data.calgary.ca/resource/9zvu-p8uz.json

var xhr = new XMLHttpRequest();
var record;
//window.onload=loaddata1;
function dataFourth() {
	//event listener
	document.getElementById("addresses").addEventListener("keyup", function (){ searchAddress(this.value);},false);
	document.getElementById("streetype").addEventListener("keyup", function (){ searchStreetType(this.value);},false);
    document.getElementById("house").addEventListener("keyup", function (){ searchHouse(this.value);},false);
	
	
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            record = JSON.parse(xhr.responseText);
          //displayData(r);
        }
      };
      xhr.open("GET", "https://data.calgary.ca/resource/9zvu-p8uz.json", true);
      xhr.send();
	
}

function searchAddress(addresses) {
	
   //	var r=JSON.parse(xhr.responseText);
	
	//structure table
	var output="<tr><th>Address</th><th>Street Type</th><th>House Number</th><th>Map</th></tr>";
	var searchAdd;
	for(var i=0; i< record.length; i++)
	{
		var obj=record[i];
		searchAdd=obj.address.toUpperCase();
        let position = obj.latitude + "," + obj.longitude;
        
		if(searchAdd.startsWith(addresses.toUpperCase()))
		{	
			
            output+="<tr><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.street_type;
			output+="</td><td>";
			output+=obj.house_number;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
			}
				
	}``
document.getElementById("resultData4").innerHTML=output;


}


function searchStreetType(streetype) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Address</th><th>Street Type</th><th>House Number</th><th>Map</th></tr>";
     var searchStreet;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchStreet=obj.street_type.toUpperCase();
         let position = obj.latitude + "," + obj.longitude;
         
         if(searchStreet.startsWith(streetype.toUpperCase()))
         {	
             
            output+="<tr><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.street_type;
			output+="</td><td>";
			output+=obj.house_number;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData4").innerHTML=output;
 
 
 }

 function searchHouse(house) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Address</th><th>Street Type</th><th>House Number</th><th>Map</th></tr>";
     var searchNumber;
     for(var i=0; i< record.length; i++)
     {
         var obj=record[i];
         searchNumber=obj.house_number;
         let position = obj.latitude + "," + obj.longitude;
         
         if(searchNumber.startsWith(house))
         {	
            output+="<tr><td>";
			output+=obj.address;
			output+="</td><td>";
			output+=obj.street_type;
			output+="</td><td>";
			output+=obj.house_number;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
             }
                 
     }``
 document.getElementById("resultData4").innerHTML=output;
 
 
 }