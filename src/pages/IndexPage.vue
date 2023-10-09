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
        <ol-source-xyz url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}" />
      </ol-tile-layer>

      <ol-layer-group>
        <ol-vector-tile-layer>
          <ol-source-vector-tile url="https://vectortileservices5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Slovenian_carbonate_rocks_(Gostinčar_2016)/VectorTileServer/tile/{z}/{y}/{x}.pbf" :format="mvtFormat">
            <ol-style>
              <ol-style-fill color="rgba(0,0,0,0.2)"></ol-style-fill>
              <ol-style-stroke color="black" :width="1"></ol-style-stroke>
            </ol-style>
          </ol-source-vector-tile>
        </ol-vector-tile-layer>

        <ol-webgl-tile-layer>
          <ol-source-xyz ref="cavesSource" url="https://services7.arcgis.com/V2VriwTjJDabpGg6/ArcGIS/rest/services/2022_marec_export_ekataster_tile_layer/MapServer/WMTS/tile/1.0.0/2022_marec_export_ekataster_tile_layer/default/default028mm/{z}/{y}/{x}.png"/>
        </ol-webgl-tile-layer>

        <ol-tile-layer>
          <ol-source-xyz url="https://services5.arcgis.com/cc2FnLJwNvtYzBo4/arcgis/rest/services/Active_faults_in_Slovenia_-_Raster_tile_layer/MapServer/tile/{z}/{y}/{x}" />
        </ol-tile-layer>
      </ol-layer-group>
    </ol-map>
  </PageFullScreen>
</template>

<script setup>
import { ref } from 'vue'
import PageFullScreen from 'components/PageFullScreen.vue'
import { MVT } from 'ol/format'

const center = ref([1655116, 5806870])
const projection = ref('EPSG:3857')
const zoom = ref(9)
const rotation = ref(0)
const mvtFormat = new MVT()
</script>
