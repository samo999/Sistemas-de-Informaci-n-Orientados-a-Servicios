<template>
  <div>
    <h1 class="text-center text-xl font-bold my-4">Airport Search</h1>
    <AirportSearch />
  </div>
</template>

<script>
import AirportSearch from "./components/AirportSearch.vue";

export default {
  name: "App",
  components: {
    AirportSearch,
  },
};
</script>

<style>
/* Optional: Add global styles */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
