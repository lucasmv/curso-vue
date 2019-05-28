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
import Navigation from "@/components/Navigation";
import Toolbar from "@/components/Toolbar";
import Carousel from "@/components/Carousel";
import Footer from "@/components/Footer";

export default {
  components: {
    "app-footer": Footer,
    "app-carousel": Carousel,
    "app-navigation": Navigation,
    "app-toolbar": Toolbar
  }
};
</script>
