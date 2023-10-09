<template>
  <PageFullScreen>
    <ol-map
      :loadTilesWhileAnimating="true"
      :loadTilesWhileInteracting="true"
      class="full-height full-width"
    >
      <ol-view
        ref="view"
        :center="center"
        :rotation="rotation"
        :zoom="zoom"
        :projection="projection"
      />

      <ol-tile-layer>
        <ol-source-osm />
      </ol-tile-layer>

      <ol-vector-layer>
        <ol-source-vector url="https://services5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Active_faults_in_Slovenia/FeatureServer/0/query?where=1%3D1&outFields=*&returnGeometry=true&f=geojson" :format="geoJson">
          <ol-style>
            <ol-style-stroke color="black" :width="2"></ol-style-stroke>
            <ol-style-fill color="rgb(0,0,0)"></ol-style-fill>
          </ol-style>
        </ol-source-vector>
      </ol-vector-layer>
      <ol-tile-layer>
        <ol-source-xyz url="https://vectortileservices5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Slovenian_carbonate_rocks_(Gostinčar_2016)/VectorTileServer/tile/{z}/{y}/{x}.pbf"/>
        <ol-style>
          <ol-style-stroke color="black" :width="2"></ol-style-stroke>
          <ol-style-fill color="rgba(0,0,0,0.2)"></ol-style-fill>
        </ol-style>
      </ol-tile-layer>
      <ol-webgl-tile-layer>
        <ol-source-xyz ref="cavesSource" url="https://services7.arcgis.com/V2VriwTjJDabpGg6/ArcGIS/rest/services/2022_marec_export_ekataster_tile_layer/MapServer/WMTS/tile/1.0.0/2022_marec_export_ekataster_tile_layer/default/default028mm/{z}/{y}/{x}.png"/>
      </ol-webgl-tile-layer>
    </ol-map>
  </PageFullScreen>
</template>

<script setup>
import { ref } from 'vue'
import PageFullScreen from 'components/PageFullScreen.vue'
import { GeoJSON } from 'ol/format'

const center = ref([1655116, 5806870])
const projection = ref('EPSG:3857')
const zoom = ref(9)
const rotation = ref(0)
const geoJson = new GeoJSON()
</script>
