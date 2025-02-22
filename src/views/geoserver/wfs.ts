import * as ol from "ol";
import * as layer from "ol/layer";
import * as source from "ol/source";
import * as proj from "ol/proj";
import * as format from "ol/format";
import * as loadingstrategy from "ol/loadingstrategy";
/**
 * 要素服务:
 * 数据格式：适量存储vector，本质是数据。
 * 后缀可以直接 http://localhost:8080/geoserver/<workspace>/wfs
 * 也可以使用通用的ows,但是要制定service=wfs
 * 因为是适量数据，所以是需要format的。
 */
export function initWFS() {
  console.log("这是wfs要素服务");

  new ol.Map({
    target: "map",
    layers: [
      // url
      // new layer.Vector({
      //   source: new source.Vector({
      //     url: "http://localhost:8080/geoserver/ne/ows?service=wfs&version=1.0.0&request=GetFeature&typeName=ne%3Acountries&outputFormat=application%2Fjson",
      //     format: new format.GeoJSON(),
      //   }),
      // }),

      // url
      // new layer.Vector({
      //   source: new source.Vector({
      //     url: "http://localhost:8080/geoserver/ne/wfs?version=1.0.0&request=GetFeature&typeName=ne%3Acountries&outputFormat=application%2Fjson",
      //     format: new format.GeoJSON(),
      //   }),
      // }),

      // 本地的url加载
      new layer.Vector({
        source: new source.Vector({
          url: "data/countries.json",
          format: new format.GeoJSON(),
        }),
      }),
    ],
    view: new ol.View({
      center: [-8908887.277395891, 5381918.072437216],
      maxZoom: 19,
      zoom: 5,
    }),
  });
}
