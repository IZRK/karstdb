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
    </ol-map>
  </PageFullScreen>
</template>

<script setup>
import { ref } from 'vue'
import PageFullScreen from 'components/PageFullScreen.vue'

const center = ref([1655116, 5806870])
const projection = ref('EPSG:3857')
const zoom = ref(9)
const rotation = ref(0)
</script>
