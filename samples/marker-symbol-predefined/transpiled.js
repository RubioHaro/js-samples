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

  // [START maps_marker_symbol_predefined]
  // This example uses a symbol to add a vector-based icon to a marker.
  // The symbol uses one of the predefined vector paths ('CIRCLE') supplied by the
  // Google Maps JavaScript API.
  function initMap() {
    var map = new google.maps.Map(document.getElementById("map"), {
      zoom: 4,
      center: {
        lat: -25.363882,
        lng: 131.044922
      }
    });
    var marker = new google.maps.Marker({
      position: map.getCenter(),
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10
      },
      draggable: true,
      map: map
    });
  } // [END maps_marker_symbol_predefined]

  exports.initMap = initMap;

}(this.window = this.window || {}));
