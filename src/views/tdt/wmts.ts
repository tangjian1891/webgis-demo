import * as ol from "ol";
import * as layer from "ol/layer";
import * as source from "ol/source";
import * as proj from "ol/proj";
import * as format from "ol/format";
import * as loadingstrategy from "ol/loadingstrategy";
import * as extent from "ol/extent";
import * as tilegrid from "ol/tilegrid";
/**
 * 要素服务:
 *
 */

/**
 * 标准的wmts地址为         http://localhost:8080/geoserver/gwc/service/wmts // gwc=GeoWebCache
 */

/**
 * 天地图
 *  注意要TK
 * 注意matrixIds 直接索引就行
 * 注意 vec_w还是vec_c
 */
export function initTDTWMTS() {
  // 坐标系
  const wmtsBaseUrl =
    "http://t0.tianditu.gov.cn/vec_w/wmts?tk=b736560fb4eee72b3637128cf90c18f1";
  const projectionStr = "EPSG:3857"; // 使用 Web Mercator  
//   const projectionStr = "EPSG:4326"; // 使用 Web Mercator  
  const layerName = "vec";
  const projection = proj.get(projectionStr);
  const projectionExtent = projection.getExtent();
  const size = extent.getWidth(projectionExtent) / 256;
  const resolutions = new Array(19);
  const matrixIds = new Array(19);
  for (let z = 3; z < 19; ++z) {
    resolutions[z] = size / Math.pow(2, z);
    // matrixIds[z] = projectionStr + ":" + z;
    matrixIds[z] = z;
  }

  // 创建 WMTS 源
  const wmtsSource = new source.WMTS({
    url: wmtsBaseUrl,
    layer: layerName,
    matrixSet: projectionStr, // 根据实际情况调整矩阵集
    format: "image/png",
    // tileMatrixSet: "c",
    projection: projectionStr,
    tileGrid: new tilegrid.WMTS({
      origin: extent.getTopLeft(projectionExtent),
      resolutions,
      matrixIds,
    }),
    style: "", // 图层样式
  });

  // 创建地图
  new ol.Map({
    target: "map",
    layers: [
      new layer.Tile({
        source: wmtsSource,
      }),
    ],
    view: new ol.View({
      center: [0, 0],
      maxZoom: 19, // 最大缩放级别
      zoom: 3, // 初始缩放级别
    }),
  });
}
