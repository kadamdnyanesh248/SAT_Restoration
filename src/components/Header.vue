<template>
  <header class="w-full bg-white fixed top-0 left-0 z-20 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64" :class="[isVisible ? 'transition-all duration-300 ease-in-out py-3 md:py-4 bg-white shadow-md' : 'transition-all duration-300 py-5 md:py-8']" id="navbar">
    <nav class="flex items-center justify-between">
      <div class="order-2 sm:order-1">
        <router-link to="/">
          <img src="@/assets/images/SATLOGO.png" width="250px" />
        </router-link>
      </div>
      <div class="flex sm:hidden order-1 sm:order-2">
        <button type="button" class="navbar-toggler focus:outline-none" @click="menuToggle()">
          <MenuIcon class="text-4xl" />
        </button>
      </div>
      <div class="flex sm:hidden order-3">
        <button type="button" class="navbar-toggler focus:outline-none">
          <MenuIcon class="text-4xl text-transparent" />
        </button>
      </div>
      <div class="hidden sm:flex order-3">
        <ul class="flex flex-col sm:flex-row">
          <li><router-link to="/" class="sm:px-4 py-2 block" :class="{'font-bold': this.$route.name === 'home'}">Home</router-link></li>
          <li><router-link to="/services" class="sm:px-4 py-2 block" :class="{'font-bold': this.$route.name === 'services'}">Services</router-link></li>
          <li><router-link to="/aboutus" class="sm:px-4 py-2 sm:hidden lg:block" :class="{'font-bold': this.$route.name === 'aboutus'}">About Us</router-link></li>
          <li><router-link to="/our-work" class="p-2 sm:hidden md:block" :class="{'font-bold': this.$route.name === 'ourwork'}">Our Work</router-link></li>
          <li><router-link to="/faq" class="p-2 sm:hidden md:block" :class="{'font-bold': this.$route.name === 'faq'}">FAQs</router-link></li>
          <li><span @click="openContactUsModal()" class="no-underline cursor-pointer sm:px-4 py-2 sm:hidden md:block">Contact Us</span></li>
          <!-- <li><router-link to="/" class="sm:px-4 py-2 block text-blue-600 border border-gray-400 rounded-lg ml-4">Login</router-link></li> -->
          <!-- <li><router-link to="/" class="sm:px-4 py-2 block bg-blue-600 text-white rounded-lg ml-4">Get Started</router-link></li> -->
        </ul>
      </div>
    </nav>
    <div id="menu" class="hidden md:hidden w-auto w- text-left z-30 bg-transparent rounded mt-3">
      <nav class="grid lg:flex md:my-3 justify-start">
        <ul class="md:flex items-center justify-between bg-white text-gray-700 text-lg pr-2">
          <li class="py-1 md:mx-auto" :class="{'font-bold': this.$route.name === 'home'}">
            <label @click="menuToggle()"><router-link to="/" class="no-underline hover:text-black">Home</router-link></label>
          </li>
          <li class="py-1 lg:w-20" :class="{'font-bold': this.$route.name === 'services'}">
            <router-link to="/services" class="no-underline hover:text-black"><label @click="menuToggle()">Services</label></router-link>
          </li>
          <li class="py-1 lg:w-20" :class="{'font-bold': this.$route.name === 'aboutus'}">
            <router-link to="/aboutus" class="no-underline hover:text-black"><label @click="menuToggle()">About Us</label></router-link>
          </li>
          <li class="py-1 lg:w-20" :class="{'font-bold': this.$route.name === 'ourwork'}">
            <router-link to="/our-work" class="no-underline hover:text-black"><label @click="menuToggle()">Our Work</label></router-link>
          </li>
          <li class="py-1 ">
            <span @click="openContactUsModal()" class="block md:hidden no-underline hover:text-black"><label @click="menuToggle()">Contact Us</label></span>
          </li>
        </ul>
      </nav>
    </div>
    <Modal ref="contactus-modal-comp" :show-close-btn="true" modal-content-cont-height="" name="comments-modal">
      <div class="max-w-xs rounded overflow-hidden shadow-lg z-50">
        <div class="w-full px-4 pt-5 justify-center flex">
          <img src="@/assets/images/SATLOGO.png" width="250px" />
        </div>
        <div class="px-6 pt-4">
          <div class="font-bold text-xl mb-2">{{ jsonData.contactUsCard.head }}</div>
          <!-- <p class="text-grey-darker">{{ jsonData.contactUsCard.body }}</p> -->
          <!-- <p class="text-grey-darker mb-4 italic">(click on below number)</p> -->
          <a :href="`tel:${jsonData.contactUsCard.mobile1}`"><div class="flex justify-center p-3"><PhoneIcon /><span class="text-grey-darker text-left px-1">{{ jsonData.contactUsCard.mobile1 }}</span></div></a>
          <!-- <a :href="`tel:${jsonData.contactUsCard.mobile2}`"><div class="flex justify-center p-2"><PhoneIcon /><span class="text-grey-darker text-left px-1">+91 {{ jsonData.contactUsCard.mobile2 }}</span></div></a> -->
          <a :href="`mailTo:${jsonData.contactUsCard.email1}`"><div class="flex justify-center p-3 pt-0"><MailIcon /><span class="text-grey-darker text-left px-1">{{ jsonData.contactUsCard.email1 }}</span></div></a>
          <!-- <a :href="`mailTo:${jsonData.contactUsCard.email2}`"><div class="flex justify-center p-2"><PhoneIcon /><span class="text-grey-darker text-left px-1">{{ jsonData.contactUsCard.email2 }}</span></div></a> -->
        </div>
        <div class="py-4">
          <span v-for="(keyWord,index) in jsonData.contactUsCard.keyWords" :key="index" class="inline-block bg-grey-lighter rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2">{{ keyWord }}</span>
        </div>
      </div>
    </Modal>
  </header>
</template>

<script>
import {
  MenuIcon,
  PhoneIcon,
  MailIcon,
  // ArrowUpIcon,
} from "vue-feather-icons";
import Modal from './Modal';

export default {
  name: "Header",
  components: {
    MenuIcon,
    Modal,
    PhoneIcon,
    MailIcon,
    // ArrowUpIcon,
  },
  data() {
    return {
      isVisible: false,
    };
  },
  props: {
    jsonData: Object,
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
  methods: {
    openContactUsModal() {
      // console.log('abcd', this.$refs['contactus-modal-comp']);
      this.$refs['contactus-modal-comp'].$data.isOpen = true;
    },
    scrollTop() {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) clearInterval(this.intervalId);
        window.scroll(0, window.pageYOffset - 50)
      }, 10)
    },
    scrollListener() {
      this.isVisible = window.scrollY > 10;
      // console.log("called...", window.scrollY, this.isVisible);
    },
    menuToggle() {
      let val = document.getElementById('menu').style.display;
      if (!val) val = 'none';
      if(val === 'block') document.getElementById('menu').style.display = 'none'
      else if (val === 'none') document.getElementById('menu').style.display = 'block';
    },
  },
};
</script>
