import {Page} from 'ionic/ionic';

@Page({
  templateUrl: 'app/map/map.html'
})
export class MapPage {
  constructor() {
    this.map = null;
  }

  addMarkerAndInfo(latLng, infoContent) {
    var infowindow = new google.maps.InfoWindow({
      content: ['<h5>', infoContent, '</h5>'].join('')
    });

    var marker = new google.maps.Marker({
      position: latLng,
      map: this.map,
      title: infoContent
    });

    marker.addListener('click', function() {
      infowindow.open(this.map, marker);
    });
  }

  onInit() {
    var ionicHqLatLng = {lat: 47.502790, lng: 19.046804};
    var afterPartyLatLng = {lat: 47.502790, lng: 19.046804};
    var conferenceCenterLatLng = {lat: 47.502790, lng: 19.046804};

    this.map = new google.maps.Map(document.getElementById('map'), {
      center: ionicHqLatLng,
      zoom: 15
    });

    this.addMarkerAndInfo(ionicHqLatLng, 'Pulilab HQ');
    this.addMarkerAndInfo(conferenceCenterLatLng, 'Conference Center');
    this.addMarkerAndInfo(afterPartyLatLng, 'Afterparty - ???');

  }
}
