<template>
  <v-app>
    <v-toolbar
      app
    >
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn v-if="!readonly" @click="share">공유하기</v-btn>
    </v-toolbar>
    <v-content>
      <MainPage/>
    </v-content>
  </v-app>
</template>

<script>
import { mapState } from 'vuex';
import MainPage from './components/MainPage';
import {doCompress as compress} from './service/compress';

export default {
  name: 'App',
  data () {
    return {
      title: 'NCal'
    }
  },
  computed: mapState(['readonly']),
  methods: {
    share() {
      compress(this.$store.getters.fullData).then(compressedText => {
        global.history.pushState({}, undefined, `?${compressedText}`);
      });
    }
  },
  components: {
    MainPage
  }
}
</script>
