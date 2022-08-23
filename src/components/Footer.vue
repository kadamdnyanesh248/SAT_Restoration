<template>
  <footer class="relative bg-white px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 pb-10 text-center sm:text-left">
    <hr class="mb-12">
    <div class="flex flex-col sm:flex-row sm:flex-wrap">
      <div class="sm:w-1/2 lg:w-1/5">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Company</h6>
        <ul class="flex mt-4 flex-col">
          <li><router-link to="/" class="py-1 block" :class="{'font-bold': this.$route.name === 'home'}">Home</router-link></li>
          <li><router-link to="/services" class="py-1 block" :class="{'font-bold': this.$route.name === 'services'}">Services</router-link></li>
          <li><router-link to="/aboutus" class="py-1 sm:hidden lg:block" :class="{'font-bold': this.$route.name === 'aboutus'}">About Us</router-link></li>
          <li><router-link to="/our-work" class="py-1 sm:hidden md:block" :class="{'font-bold': this.$route.name === 'ourwork'}">Our Work</router-link></li>
          <li><router-link to="/faq" class="py-1 sm:hidden md:block" :class="{'font-bold': this.$route.name === 'faq'}">FAQs</router-link></li>
        </ul>
      </div>
      <div class="mt-8 sm:w-1/2 sm:mt-0 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Legal</h6>
        <ul class="mt-4">
          <li class="mt-2"><a href="/">Privacy Policy</a></li>
          <li class="mt-2"><a href="/">Terms of Use</a></li>
          <!-- <li class="mt-2"><a href="#">Disclosures &amp; Licensing</a></li> -->
        </ul>
      </div>
      <div class="mt-8 sm:w-1/2 sm:mt-12 lg:w-1/5 lg:mt-0">
        <h6 class="text-sm text-gray-600 font-bold uppercase">Contact</h6>
        <ul class="mt-4 grid">
          <span class="font-semibold">Mobile:</span>
          <a v-if="jsonData.contactUsCard.mobile1" :href="`tel:${jsonData.contactUsCard.mobile1}`"><span class="">+{{ jsonData.contactUsCard.mobile1 }}</span></a>
          <a v-if="jsonData.contactUsCard.mobile2" :href="`tel:${jsonData.contactUsCard.mobile2}`"><span class="">+{{ jsonData.contactUsCard.mobile2 }}</span></a>
          <span class="mt-2 font-semibold">Email:</span>
          <a v-if="jsonData.contactUsCard.email1" :href="`mailTo:${jsonData.contactUsCard.email1}`"><span class="">{{ jsonData.contactUsCard.email1 }}</span></a>
          <!-- <a v-if="jsonData.contactUsCard.email2" :href="`mailTo:${jsonData.contactUsCard.email2}`"><span class="">{{ jsonData.contactUsCard.email2 }}</span></a> -->
          <!-- <span class="mt-2 font-semibold">Address:</span> -->
          <!-- <span v-if="jsonData.contactUsCard.address" class="">{{ jsonData.contactUsCard.address }}</span> -->
        </ul>
      </div>
      <div class="mt-12 sm:w-1/2 lg:w-2/5 lg:mt-0 lg:pl-12">
        <img src="@/assets/images/SATLOGO.png" width="250px" />
        <p class="text-base text-gray-600 mt-4 font-bold">Restoring is our passion and Expertise is our Pride</p>
      </div>
    </div>
    <hr class="mt-16 mb-8">
    <div class="flex justify-between">
      <p class="text-sm text-gray-600">2021 © SAT | Restoration. All rights reserved.</p>
      <p class="text-sm text-gray-600">Designed and developed by <a href="https://acecoder.com" target="_blank" class="cursor-pointer">Ace Coder</a>.</p>
    </div>
  </footer>
</template>

<script>
import {
  // SearchIcon,
} from "vue-feather-icons";

export default {
  name: "Footer",
  components: {
    // SearchIcon,
  },
  data() {
    return {};
  },
  props: {
    jsonData: Object,
  },
  methods: {},
};
</script>
