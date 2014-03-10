// JavaScript Document

$(document).ready(function() {
	/* Hamburger Button Navigation */
    var menulink = $('.menu-link');
    var nav = $('#menu');
  
    menulink.click(function() {
        nav.toggleClass('active');
        return false;
    });

  /* Flexslider functionality */
  $('.flexslider').flexslider({
    animation: "slide"
  });

  /* JSON Functionality */
  function loadJSON(){
   var data_file = "data.json";
   var http_request = new XMLHttpRequest();
   try{
      // Opera 8.0+, Firefox, Chrome, Safari
      http_request = new XMLHttpRequest();
   }catch (e){
      // Internet Explorer Browsers
      try{
         http_request = new ActiveXObject("Msxml2.XMLHTTP");
      }catch (e) {
         try{
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
         }catch (e){
            // Something went wrong
            alert("Your browser may not support AJAX, or refresh cause something went wrong");
            return false;
         }
      }
   }
   http_request.onreadystatechange  = function(){

      // readyState == 4 means the request was successful
      if (http_request.readyState == 4  ){
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);

        // My Entire JSON Object from data.json
        // console.log(jsonObj);

        // var img = document.createElement("img");
        // img.src = jsonObj[0].imageUrl;
        // document.appendChild(img);

        // Div to append all my results to
        var projectWrapper = document.getElementById('projects');

        // Create an Img with src attribute as the imageURL
        var projectImage = document.createElement('img');
        // articleImage.setAttribute('src',jsonObj[0].imageUrl);

        // Article Heading
        var projectHeading = document.createElement('h1');
        // articleHeading.innerHTML = jsonObj[0].title;

        // Append the Image to the article-feed div.
        projectWrapper.appendChild(projectImage);
        projectWrapper.appendChild(projectHeading);

        for (var key in jsonObj) {

          var newDiv = document.createElement('div');
          // console.log(jsonObj[key]);

          // Create an Img with src attribute as the imageURL
          var projectImage = document.createElement('img');
          projectImage.setAttribute('src',jsonObj[key].imageUrl);

          // Article Heading
          var projectHeading = document.createElement('h1');
          projectHeading.innerHTML = jsonObj[key].title;

          // Article Heading
          var projectDescription = document.createElement('p');
          projectDescription.innerHTML = jsonObj[key].description;

          // Project Details Header
          var detailsHeader = document.createElement('h3');
          detailsHeader.innerHTML = 'Project Details';

          // Project Details
          var projectDetails = document.createElement('p');
          projectDetails.innerHTML = jsonObj[key].details;

          // Article Image
          // var articleImage = document.createElement('img');
          // var articleURL = document.createElement('a');
          // articleURL.innerHTML = jsonObj[key].imageUrl;
          // articleImage.setAttribute('src',jsonObj[key].imageUrl);
          
          var imageLink = document.createElement('a');
          imageLink.setAttribute('href',jsonObj[key].url);
          imageLink.appendChild(projectImage);

          // Append the Image to the article-feed div.
          newDiv.appendChild(imageLink);
          newDiv.appendChild(projectHeading);
          newDiv.appendChild(projectDescription);
          newDiv.appendChild(detailsHeader);
          newDiv.appendChild(projectDetails);
          projectWrapper.appendChild(newDiv);
        }
      }

   }

   http_request.open("GET", data_file, true);
   http_request.send();
}

  loadJSON();

  function initialize() {
    var myLatlng = new google.maps.LatLng(45.429265, -75.690050);
    var mapOptions = {
      zoom: 15,
      center: myLatlng
    };

    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);

    var contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">Shopify</h1>'+
        '<div id="bodyContent">'+
        '<p><b>Shopify</b> is located in the downtown-core of the nation\'s ' +
        'capital, Ottawa, Ontario. The Random Hacks of Kindness event is held. ' + 
        'on the second-floor of the building, located by the stairs. You will ' +
        'find a greeter waiting for you to help you get registered for the ' +
        'weekend long event!</p>' +
        '</div>'+
        '</div>';

    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: 'Shopify Ottawa'
    });
    
    google.maps.event.addListener(marker, 'click', function() {
      infowindow.open(map,marker);
    });

    infowindow.open(map,marker);
  }

  google.maps.event.addDomListener(window, 'load', initialize);

});