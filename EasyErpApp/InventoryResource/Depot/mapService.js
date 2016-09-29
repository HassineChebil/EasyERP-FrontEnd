var app = angular.module('app');

app.service('Map', function($q) {
    
    var self=this;
    
    self.init = function() {
        var options = {
            center: new google.maps.LatLng(40.7127837, -74.00594130000002),
            zoom: 13,
            disableDefaultUI: true    
        }
        self.map = new google.maps.Map(
            document.getElementById("map"), options
        );
        self.places = new google.maps.places.PlacesService(this.map);
    }
    
    self.search = function(str) {
        var d = $q.defer();
        self.places.textSearch({query: str}, function(results, status) {
            if (status == 'OK') {
                d.resolve(results[0]);
            }
            else d.reject(status);
        });
        return d.promise;
    }
    
    self.addMarker = function(res) {
        if(self.marker) self.marker.setMap(null);
        self.marker = new google.maps.Marker({
            map: self.map,
            position: res.geometry.location,
            animation: google.maps.Animation.DROP
        });
        self.map.setCenter(res.geometry.location);
    }
    
});