import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mapagmdrag',
  templateUrl: './mapagmdrag.page.html',
  styleUrls: ['./mapagmdrag.page.scss'],
})
export class MapagmdragPage implements OnInit {

  // public folder: string;
  // public map;
  // public geocoder;
  // marker;
  // @ViewChild('mapElement', {static: false}) mapElement;
  // public formattedAddress;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    // this.folder = this.activatedRoute.snapshot.paramMap.get('id');
  }

  // ngAfterViewInit(): void {
  //   const myLatlng = new google.maps.LatLng(-25.363882, 131.044922);
  //   this.geocoder = new google.maps.Geocoder();
  //   const mapOptions = {
  //     zoom: 4,
  //     center: myLatlng
  //   };
  //   this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
  //   this.marker = new google.maps.Marker({
  //     position: myLatlng,
  //     map: this.map,
  //     draggable: true,
  //     title: 'Drag me!'
  //   });
  //   google.maps.event.addListener(this.marker, 'dragend', () => {
  //     this.geocodePosition(this.marker.getPosition());
  //   });
  // }

  // geocodePosition(pos) {
  //   this.geocoder.geocode({
  //     latLng: pos
  //   }, (responses) => {
  //     if (responses && responses.length > 0) {
  //       this.formattedAddress = responses[0].formatted_address;
  //     } else {
  //     }
  //   });
  // }
}
