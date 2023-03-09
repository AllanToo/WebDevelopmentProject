function getData1() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("display").innerHTML = xhr.responseText;
        setTimeout(loaddata1(),500);
     
     
      }
    };
    xhr.open("GET", "dataset1.html", true);
   
    xhr.send();
  }

  
  function getData2() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("display").innerHTML = xhr.responseText;
        setTimeout(dataSecond(),2000);
      }
    };
    xhr.open("GET", "dataset2.html", true);
    xhr.send();
  }


  function getData3() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("display").innerHTML = xhr.responseText;
        //dataThird
        setTimeout(dataThird(),2000);
      }
    };
    xhr.open("GET", "dataset3.html", true);
    xhr.send();
  }


  function getData4() {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("display").innerHTML = xhr.responseText;
        //dataFourth
        setTimeout(dataFourth(),2000);
      }
    };
    xhr.open("GET", "dataset4.html", true);
    xhr.send();
  }
