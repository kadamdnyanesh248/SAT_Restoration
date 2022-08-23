<template>
  <section>
      <!-- start how it works -->
      <section class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-20 text-center pt-32">
        <div>
          <h2 class="text-3xl leading-tight font-bold">OUR SERVICES</h2>
          <h4 class="text-lg leading-tight">{{ jsonData.ourServices.ourServicesHead }}</h4>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-12">
          <div v-for="(service, index) in jsonData.ourServices.services" :key="index" @click="openServiceModal(service)" class="w-full bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 md:mx-2 lg:mx-4 mt-4 md:mt-0 cursor-pointer">
            <img :src="service.image" alt="" class="mx-auto rounded-lg">
            <h4 class="text-xl font-bold leading-tight mt-8">{{ service.name }}</h4>
            <!-- <p class="text-gray-700 mt-2">{{ service.price }}</p> -->
          </div>
        </div>
        <div class="mt-12 md:mt-20 w-full md:max-w-3xl mx-auto">
          <p class="text-xl">{{ jsonData.aboutUsContent.description }}</p>
          <!-- <p class="text-xl font-bold text-blue-600 mt-4">{{ jsonData.aboutUsContent.authority }}</p> -->
          <!-- <p class="text-sm uppercase tracking-wider text-gray-700">{{ jsonData.aboutUsContent.designation }}</p> -->
          <!-- <p class="text-sm uppercase tracking-wider text-gray-700">{{ jsonData.aboutUsContent.company }}</p> -->
          <p class="text-xl font-bold text-blue-600 mt-4">{{ jsonData.aboutUsContent.company }}</p>
        </div>
      </section>
      <Modal ref="service-modal-comp" :show-close-btn="true" modal-content-cont-height="" name="service-modal" class="z-50s">
        <div class="w-full sm:max-w-md md:max-w-lg lg:max-w-2xl bg-white shadow-lg rounded-lg px-4 py-6 lg:p-8 mt-4 md:mt-0">
          <img :src="modalObj.image" alt="" class="mx-auto h-32 rounded-lg">
          <h4 class="text-xl font-bold leading-tight mt-8">{{ modalObj.name }}</h4>
          <!-- <p class="text-gray-700 mt-2">{{ modalObj.price }}</p> -->
          <p class="text-gray-700 text-left mt-2">{{ modalObj.description }}</p>
          <div class="flex pb-6">
            <span v-for="(keyword, index) in modalObj.keywords" :key="index" class="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-600 bg-gray-200 last:mr-0 mr-2 mt-2">{{ keyword }}</span>
          </div>
        </div>
      </Modal>
      <!-- end how it works -->
    </section>
</template>

<script>
import jsonData from '@/assets/json/data.json';
import Modal from '../components/Modal.vue';
import {
  // SearchIcon,
} from "vue-feather-icons";
export default {
  name: "Services",
  components: {
    // SearchIcon,
    Modal
  },
  data() {
    return {
      jsonData: jsonData,
      modalObj: {},
    };
  },
  props: {},
  watch: {},
  mounted() {
    window.scrollTo(0, 0);
  },
  methods: {
        openServiceModal(obj) {
          this.modalObj = obj;
          this.$refs['service-modal-comp'].$data.isOpen = true;
        },
  },
};
</script>