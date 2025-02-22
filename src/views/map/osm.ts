import * as ol from "ol";
import * as layer from "ol/layer";
import * as source from "ol/source";
import * as proj from "ol/proj";

export function createMap() {
    console.log(123);
    
  new ol.Map({
    target: "map",
    layers: [
      new layer.Tile({
        source: new source.OSM(),
      }),
    ],
    view: new ol.View({
      center: proj.fromLonLat([0, 0]),
      zoom: 2,
    }),
  });
}
