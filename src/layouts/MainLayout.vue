<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Karst database
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label header>
          Browse data
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Karst geology',
    caption: 'Everything you need on karst geology',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Karst geomorphology',
    caption: '',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Speleology',
    caption: 'Caves',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Karst hydrogeology',
    caption: 'Where the underground river flows',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Karst biology and microbiology',
    caption: 'Critters, bugs and bacterias',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Ecology',
    caption: '',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Karst development',
    caption: 'Building new caves, theme parks and underground casinos',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
