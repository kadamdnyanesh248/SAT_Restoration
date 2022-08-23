<template>
  <carousel :navigationEnabled="false" :navigationClickTargetSize="8" navigation-next-label="next" navigation-prev-label="prev" 
    :loop="true" :autoplay-timeout="3000" :autoplay="true" :per-page="4" :mouse-drag="true"
    :paginationEnabled="false" paginationPosition="bottom-overlay" paginationColor="#A0AEC0" paginationActiveColor="#ffff" class="hero h-full bg-white">
    <slide v-for="(slide, index) in jsonData.crouselImages" :key="index" class="hero h-full bg-white px-2">
      <img key="index" width="100%" :src="slide.banerUrl" class="bg-cover mx-auto rounded-full h-full" />
      <span>Hiii</span>
    </slide>
  </carousel>
</template>

<script>
// import jsonData from "@/assets/json/data.json";

export default {
  data() {
    return {

    }
  },
  methods: {
    hello() {
      alert('Out of Scope');
    },
  },
  props: {
    jsonData: Object,
  },
};
</script>

<style>
.VueCarousel-pagination {
  width: 100%;
  text-align: left !important;
}
.VueCarousel-pagination--bottom-overlay {
  padding-top: 0 !important;
}
.VueCarousel-dot-container {
  display: flex !important;
  justify-content: center !important;
  margin-top: 1px !important;
}
.VueCarousel-slide {
  height: auto !important;
}
</style>
