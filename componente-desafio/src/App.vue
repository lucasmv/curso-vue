<template>
  <v-app>
    <app-navigation/>

    <app-toolbar/>

    <v-content>
      <app-carousel/>
    </v-content>

    <app-footer/>
  </v-app>
</template>

<script>
import Navigation from "./Navigation";
import Toolbar from "./Toolbar";
import Carousel from "./Carousel";
import Footer from "./Footer";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-navigation": Navigation,
    "app-toolbar": Toolbar
  }
};
</script>
