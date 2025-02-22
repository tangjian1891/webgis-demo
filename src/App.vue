<template>
  <div id="map"></div>
  123
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { createMap } from "./views/map/osg";
import { onMounted } from "vue";
import "ol/ol.css"
onMounted(() => {
  createMap();
});
</script>

<style lang="scss">
html,
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

#app,#map {
  width: 100%;
  height: 100%;
}
</style>
