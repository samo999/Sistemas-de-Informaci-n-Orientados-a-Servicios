<template>
  <div class="p-4">
    <input
      type="text"
      v-model="query"
      @input="fetchAirports"
      class="border p-2 rounded w-full"
      placeholder="Enter city name..."
    />

    <ul v-if="airports.length" class="mt-4">
      <h3 class="text-lg font-bold">Select an Airport:</h3>
      <li
        v-for="(airport, index) in paginatedAirports"
        :key="index"
        @click="selectAirport(airport)"
        class="border-b py-2 cursor-pointer hover:bg-gray-100"
      >
        <p><strong>Name:</strong> {{ airport["Airport Name"] }}</p>
        <p><strong>City:</strong> {{ airport.City }}</p>
        <p><strong>Country:</strong> {{ airport.Country }}</p>
      </li>
    </ul>

    <!-- Pagination -->
    <div v-if="totalPages > 1" class="mt-4 flex gap-2">
      <button
        @click="currentPage--"
        :disabled="currentPage === 1"
        class="px-3 py-1 bg-gray-200 rounded"
      >
        Previous
      </button>
      <button
        @click="currentPage++"
        :disabled="currentPage === totalPages"
        class="px-3 py-1 bg-gray-200 rounded"
      >
        Next
      </button>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      query: "",
      airports: [],
      currentPage: 1,
      pageSize: 5, // Items per page
    };
  },
  computed: {
    paginatedAirports() {
      const start = (this.currentPage - 1) * this.pageSize;
      const end = start + this.pageSize;
      return this.airports.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.airports.length / this.pageSize);
    },
  },
  methods: {
    async fetchAirports() {
      if (this.query.length < 3) {
        this.airports = [];
        return;
      }
      try {
        const response = await axios.get(
          `http://127.0.0.1:5000/api/get-location-airports?q=${this.query}`
        );
        this.airports = response.data.airports || [];
      } catch (error) {
        console.error("Error fetching airports:", error);
        this.airports = [];
      }
    },
    selectAirport(airport) {
      this.$router.push({ name: "Details", props: airport });
    },
  },
};
</script>

<style scoped>
/* Optional: Add styles */
li {
  padding: 1rem;
  border: 1px solid #ddd;
  margin-bottom: 0.5rem;
}
li:hover {
  background-color: #f9f9f9;
  cursor: pointer;
}
</style>
