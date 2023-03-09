//https://data.calgary.ca/resource/848s-4m4z.json

var xhr = new XMLHttpRequest();
var records;
//window.onload=loaddata1;
function loaddata1() {
	//event listener
	document.getElementById("sector").addEventListener("keyup", function (){ searchSector(this.value);},false);
	document.getElementById("category").addEventListener("keyup", function (){ searchCategory(this.value);},false);
    document.getElementById("count").addEventListener("keyup", function (){ searchCount(this.value);},false);
	
	
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            records = JSON.parse(xhr.responseText);
          //displayData(r);
        }

      };
     
      xhr.open("GET", "https://data.calgary.ca/resource/848s-4m4z.json", true);
      xhr.send();
	
}

function searchSector(sector) {
	
   //	var r=JSON.parse(xhr.responseText);
	
	//structure table
	var output="<tr><th>Sector</th><th>Category</th><th>Count</th><th>Map</th></tr>";
	var searchQuadrant;
	for(var i=0; i< records.length; i++)
	{
		var obj=records[i];
		searchQuadrant=obj.sector.toUpperCase();
         let position = obj.geocoded_column.latitude + "," + obj.geocoded_column.longitude;
        
		if(searchQuadrant.startsWith(sector.toUpperCase()))
		{	
			
            output+="<tr><td>";
			output+=obj.sector;
			output+="</td><td>";
			output+=obj.category;
			output+="</td><td>";
			output+=obj.count;
            output+="</td><td>";
            output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
			output+="</td></tr>";
			}
				
	}``
document.getElementById("results").innerHTML=output;


}


function searchCategory(category) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Sector</th><th>Category</th><th>Count</th><th>Map</th></tr>";
     var searchCat;
     for(var i=0; i< records.length; i++)
     {
         var obj=records[i];
         searchCat=obj.category.toUpperCase();
          let position = obj.latitude + "," + obj.longitude;
         
         if(searchCat.startsWith(category.toUpperCase()))
         {	
             
             output+="<tr><td>";
             output+=obj.sector;
             output+="</td><td>";
             output+=obj.category;
             output+="</td><td>";
             output+=obj.count;
             output+="</td><td>";
             output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
             output+="</td></tr>";
             }
                 
     }``
 document.getElementById("results").innerHTML=output;
 
 
 }

 function searchCount(count) {
	
    //	var r=JSON.parse(xhr.responseText);
     
     //structure table
     var output="<tr><th>Sector</th><th>Category</th><th>Count</th><th>Map</th></tr>";
     var searchCoun;
     for(var i=0; i< records.length; i++)
     {
         var obj=records[i];
         searchCoun=obj.count;
          let position = obj.latitude + "," + obj.longitude;
         
         if(searchCoun.startsWith(count))
         {	
             
             output+="<tr><td>";
             output+=obj.sector;
             output+="</td><td>";
             output+=obj.category;
             output+="</td><td>";
             output+=obj.count;
             output+="</td><td>";
             output+= "<a href =https://www.google.com/maps/search/?api=1&query=" + position + " target=_blank>Click here to see map</a>";
             output+="</td></tr>";
             }
                 
     }``
 document.getElementById("results").innerHTML=output;
 
 
 }

