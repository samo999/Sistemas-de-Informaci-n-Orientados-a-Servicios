<template>
  <div class="p-4">
    <h2 class="text-xl font-bold">Airport Details</h2>
    <p><strong>Name:</strong> {{ airport["Airport Name"] }}</p>
    <p><strong>City:</strong> {{ airport.City }}</p>
    <p><strong>Country:</strong> {{ airport.Country }}</p>
    <p><strong>IATA Code:</strong> {{ airport["IATA Code"] }}</p>
    <p><strong>ICAO Code:</strong> {{ airport["ICAO Code"] }}</p>
    <button
      @click="$router.push('/')"
      class="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
    >
      Back to Search
    </button>
  </div>
</template>

<script>
export default {
  props: {
    "Airport Name": String,
    City: String,
    Country: String,
    "IATA Code": String,
    "ICAO Code": String,
  },
};
</script>
