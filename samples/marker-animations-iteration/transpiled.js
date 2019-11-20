/**
 * Copyright 2019 Google LLC. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function (exports) {
  'use strict';

  // [START maps_marker_animations_iteration]
  // If you're adding a number of markers, you may want to drop them on the map
  // consecutively rather than all at once. This example shows how to use
  // window.setTimeout() to space your markers' animation.
  var neighborhoods = [{
    lat: 52.511,
    lng: 13.447
  }, {
    lat: 52.549,
    lng: 13.422
  }, {
    lat: 52.497,
    lng: 13.396
  }, {
    lat: 52.517,
    lng: 13.394
  }];
  exports.markers = [];
  function initMap() {
    exports.map = new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center: {
        lat: 52.52,
        lng: 13.41
      }
    });
  }
  function drop() {
    clearMarkers();

    for (var i = 0; i < neighborhoods.length; i++) {
      addMarkerWithTimeout(neighborhoods[i], i * 200);
    }
  }
  function addMarkerWithTimeout(position, timeout) {
    window.setTimeout(function () {
      exports.markers.push(new google.maps.Marker({
        position: position,
        map: exports.map,
        animation: google.maps.Animation.DROP
      }));
    }, timeout);
  }
  function clearMarkers() {
    for (var i = 0; i < exports.markers.length; i++) {
      exports.markers[i].setMap(null);
    }

    exports.markers = [];
  } // [END maps_marker_animations_iteration]

  exports.addMarkerWithTimeout = addMarkerWithTimeout;
  exports.clearMarkers = clearMarkers;
  exports.drop = drop;
  exports.initMap = initMap;
  exports.neighborhoods = neighborhoods;

}(this.window = this.window || {}));
