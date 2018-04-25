const precision = 5;

const sampleEncodedPolyline = '_p~iF~ps|U_ulLnnqC_mqNvxq`@';

const sampleLatLons = [[38.5, -120.2], [40.7, -120.95], [43.252, -126.453]];

const sampleLineString = { "type": "Feature",
  "geometry": {
    "type": "LineString",
    "coordinates": [[-120.2, 38.5], [-120.95, 40.7], [-126.453, 43.252]]
  },
  "properties": {}
};

// returns an array of lat, lon pairs
polyline.decode(sampleEncodedPolyline);
polyline.decode(sampleEncodedPolyline, precision);

// returns a string-encoded polyline
polyline.encode(sampleLatLons);
polyline.encode(sampleLatLons, precision);

// returns a string-encoded polyline from a GeoJSON LineString
polyline.fromGeoJSON(sampleLineString);
polyline.fromGeoJSON(sampleLineString, precision);

// returns a GeoJSON LineString from a string-encoded polyline
polyline.toGeoJSON(sampleEncodedPolyline);
polyline.toGeoJSON(sampleEncodedPolyline, precision);
