import * as ol from "ol";
import * as layer from "ol/layer";
import * as source from "ol/source";
import * as proj from "ol/proj";

/**
 * 地图服务：
 * 数据格式：栅格存储raster,本质就是图。注意给图层的名称layers即可。
 * 后缀可以直接 http://localhost:8080/geoserver/<workspace>/wms
 * 
 */
export function initWMS() {
  new ol.Map({
    target: "map",
    layers: [
      new layer.Image({
        source: new source.ImageWMS({
          url: "http://localhost:8080/geoserver/ne/wms",
          params: {
            layers: "ne:world",
          },
        }),
      }),
    ],
    view: new ol.View({
      center: proj.fromLonLat([0, 0]),
      zoom: 2,
    }),
  });
}
