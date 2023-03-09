
var xhr = new XMLHttpRequest();
var r;
var clientInfo =" ";
window.onload=loaddata;

window.onload=initfunction;

function initfunction()
{
//date formatting
	var current_datetime = new Date()
	var formatted_date = current_datetime.getDate() + "-" + (current_datetime.getMonth() + 1) + "-" + current_datetime.getFullYear()
	//console.log(formatted_date)

	document.getElementById("date").innerHTML = formatted_date;
}

function getRent() {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status == 200) {
			document.getElementById("displayForm").innerHTML = xhr.responseText;
			loaddata();
		}
	};
	xhr.open("GET", "rental.html", true);
	xhr.send();
}
function loaddata() {
	//event listener
	document.getElementById("searchlast").addEventListener("keyup", function (){ searchLastName(this.value);},false);
	
	
  xhr.onreadystatechange = function() {
    if (xhr.readyState == 4 && xhr.status == 200) {
     r = JSON.parse(xhr.responseText);
      //displayData(r);
    }
  };
  xhr.open("GET", "rentalclients.json", true);
  xhr.send();
	
	
	

}

function searchLastName(searchlast) {
	
	//var r=JSON.parse(xhr.responseText);
	
	//structure table
	var output =" ";
	var searchname;
	for(var i=0; i<r.length; i++)
	{
		var obj=r[i];
		searchname=obj.last_name.toUpperCase();
		if(searchname.startsWith(searchlast.toUpperCase()))
		{	
				
					
					output+="<option value="+i+">" +  obj.first_name + " " +  obj.last_name + "</option>";
				
			}
				
	}
document.getElementById("displayDiv").innerHTML=output;


}
function displayName(i)
{

	document.getElementById("fname").value = r[i].first_name;
	document.getElementById("lname").value = r[i].last_name;
	document.getElementById("address").value = r[i].address;
	document.getElementById("postalcode").value = r[i].state_prov;
	document.getElementById("email").value = r[i].email;
	document.getElementById("telnumber").value = r[i].phone;

}


function Price()
{   
    
	var price = 0;
	var mes = " Rental information:" +"<br>" +"<br>";
	if (document.getElementById('compact').checked){  
		price+= (document.getElementById('compact').value * document.getElementById('rentLength').value)
		if(document.querySelector('input[name=rack]:checked'))
		{
		  price+= document.getElementById('rack').value
		  *  document.getElementById('rentLength').value;
		  mes+="Compact" + "<br>" + "Roof Rack or Bike Rack" +"<br>"
		}
		if(document.querySelector('input[name=gps]:checked'))
		{
		   price  += 10;
		   mes+= "GPS" +"<br>"
		}
		if(document.querySelector('input[name=childseat]:checked'))
		{
		   price +=0;
		   mes+="Child Seat" +"<br>"+"<br>"
		}
	}
	if (document.getElementById('mid').checked){
		price+= (document.getElementById('mid').value * document.getElementById('rentLength').value)
		if(document.querySelector('input[name=rack]:checked'))
		{
		  price+= document.getElementById('rack').value
		  *  document.getElementById('rentLength').value;
		  mes+="Mid-Size" + "<br>" + "Roof Rack or Bike Rack" +"<br>"
		}
		if(document.querySelector('input[name=gps]:checked'))
		{
		   price  += 10;
		   mes+= "GPS" +"<br>"
		 
		}
		if(document.querySelector('input[name=childseat]:checked'))
		{
		   price +=0;
		   mes+="Child Seat" +"<br>"+"<br>"
		}
	 }

	 if (document.getElementById('luxury').checked){
		price+= (document.getElementById('luxury').value * document.getElementById('rentLength').value)
		if(document.querySelector('input[name=rack]:checked'))
		{
		  price+=  document.getElementById('rack').value
		  *  document.getElementById('rentLength').value;
		  mes+="Luxury" + "<br>" + "Roof Rack or Bike Rack" +"<br>"
		}
		if(document.querySelector('input[name=gps]:checked'))
		{
		   price  += 10;
		   mes+= "GPS" +"<br>"
		}
		if(document.querySelector('input[name=childseat]:checked'))
		{
		   price +=0;
		   mes+="Child Seat" +"<br>"+"<br>"
		}
	 }
	 if (document.getElementById('truck').checked){
		price+= (document.getElementById('truck').value * document.getElementById('rentLength').value)
		if(document.querySelector('input[name=rack]:checked'))
		{
		  price+= document.getElementById('rack').value
		  *  document.getElementById('rentLength').value;
		  mes+="Van/ Truck" + "<br>" + "Roof Rack or Bike Rack" +"<br>"
		}
		 if(document.querySelector('input[name=gps]:checked'))
		{
		   price  += 10;
		   mes+= "GPS" +"<br>"
		}
		 if(document.querySelector('input[name=childseat]:checked'))
		{
		   price +=0;
		   mes+="Child Seat" +"<br>"+"<br>"
		}
	 }
	document.getElementById("display").innerHTML= mes + "Your total:" + " " + "$" +price;
}
