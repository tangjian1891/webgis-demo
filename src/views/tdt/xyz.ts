import * as ol from "ol";
import * as layer from "ol/layer";
import * as source from "ol/source";
import * as proj from "ol/proj";
import * as format from "ol/format";
import * as loadingstrategy from "ol/loadingstrategy";
import * as extent from "ol/extent";
import * as tilegrid from "ol/tilegrid";

/**
 * 天地图 提供的瓦片url，可以直接xyz加载
 
 */
export function initXYZ() {
  // 创建地图
  new ol.Map({
    target: "map",
    layers: [
      new layer.Tile({
        source: new source.XYZ({
          url: "http://t0.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=b736560fb4eee72b3637128cf90c18f1",
        }),
      }),
    ],
    view: new ol.View({
      center: [0, 0],
      maxZoom: 19, // 最大缩放级别
      zoom: 3, // 初始缩放级别
    }),
  });
}
