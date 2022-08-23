<template>
  <div id="app">
    <div v-if="!fetchData">
      <Header :json-data="jsonData" />
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path" :json-data="jsonData" />
      </transition>
      <Footer :json-data="jsonData" />
    </div>
    <div v-else class="w-full " style="height: 100vh; padding-top: 40vh">
      <div>Loading...</div>
      <RingLoader class="pt-px" width="20px" height="20px" thickness="2px" color="#444444"/>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import jsonData from "@/assets/json/data.json";
import RingLoader from '../components/RingLoader.vue';

export default {
  data() {
    return {
      jsonData : jsonData,
      fetchData : false,
    };
  },
  components: {
    Header,
    Footer,
    RingLoader,
  },
  beforeCreate() {
    // alert('beforCreate hook has been called');
  },
  created(){
    // alert('Create hook has been called');
  },
  beforeMount() {
    // alert('Create hook has been called');
  },
  async mounted() {},
  methods: {
    async processData(){

    }
  }
}
</script>
