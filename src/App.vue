<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-content>
      <MainPage/>
    </v-content>
  </v-app>
</template>

<script>
import MainPage from './components/MainPage';

export default {
  name: 'App',
  data () {
    return {
      title: 'NCal'
    }
  },
  components: {
    MainPage
  }
}
</script>
