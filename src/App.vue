<template>
  <div id="map"></div>
  123
</template>

<script setup lang="ts">
import "ol/ol.css";
import { RouterLink, RouterView } from "vue-router";
import { createMap } from "./views/map/osm";
import { onMounted } from "vue";
import { initWMS } from "./views/geoserver/wms";
import { initWFS } from "./views/geoserver/wfs";
import { initWMTS } from "./views/geoserver/wmts";
import { initTDTWMTS } from "./views/tdt/wmts";
import { initXYZ } from "./views/tdt/xyz";
onMounted(() => {
  // createMap();
  // initWMS()
  // initWFS()
  // initWMTS();
  // initTDTWMTS()
  initXYZ();
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app,
#map {
  width: 100%;
  height: 100%;
}
</style>
