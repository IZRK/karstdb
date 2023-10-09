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
          Browse data. I know you want to.
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
    icon: 'public',
    link: ''
  },
  {
    title: 'Karst geomorphology',
    caption: 'The shape of karst',
    icon: 'shape_line',
    link: ''
  },
  {
    title: 'Speleology',
    caption: 'Here be dragons!',
    icon: 'scuba_diving',
    link: ''
  },
  {
    title: 'Karst hydrogeology',
    caption: 'Where the underground river flows ♫',
    icon: 'water',
    link: ''
  },
  {
    title: 'Karst biology and microbiology',
    caption: 'Critters, bugs and brain eating amoebas',
    icon: 'coronavirus',
    link: ''
  },
  {
    title: 'Ecology',
    caption: 'What did one limestone rock say to the other? "You make me feel so sedimental!"',
    icon: 'compost',
    link: ''
  },
  {
    title: 'Karst development',
    caption: 'Building new caves, theme parks and underground casinos',
    icon: 'construction',
    link: ''
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
