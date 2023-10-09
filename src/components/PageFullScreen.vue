<template>
  <q-page :style-fn="tweak" class="scroll-y fhpadd">
    <slot/>
  </q-page>
</template>

<script>
export default {
  name: 'PageFullScreen',
  methods: {
    tweak () {
      return {
        height: (this.$q.screen.height - 50) + 'px'
      }
    }
  }
}
</script>
