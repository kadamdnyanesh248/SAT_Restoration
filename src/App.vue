<template>
  <div id="app">
    <Dashboard />
  </div>
</template>
<script>
import Dashboard from "@/views/Dashboard";

export default {
  components: {
    Dashboard
  }
};
</script>
<style>

#app {
  font-family: system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}

</style>
<style src="@/assets/css/tailwind.css" />
<style src="@/assets/css/app.css" />
