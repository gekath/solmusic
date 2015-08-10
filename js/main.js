$(document).ready(function (){
  // create a LatLng object containing the coordinate for the center of the map
        var mapCanvas = document.getElementById('google_map');

        var rycLatLng = new google.maps.LatLng(43.651193, -79.402007);
        var mapOptions = {
          center: new google.maps.LatLng(43.651193, -79.402007),
          zoom: 14,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        var map = new google.maps.Map(mapCanvas, mapOptions);

        var marker = new google.maps.Marker({
          position: rycLatLng,
          map: map,
          title: 'Ryerson Community School'
        });
});