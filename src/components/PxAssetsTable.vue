<template>
  <table>
    <thead>
      <tr class="bg-gray-100 border-b-2 border-gray-400">
        <th></th>
        <!-- :class="{ up: this.sortOder === 1, down: this.sortOrder === -1}" -->
        <th 
        class="flex">
          <span
          class="underline cursor-pointer"
          @click="changeSortOrder">Ranking</span>
        </th>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap.</th>
        <th>24hs variation</th>
        <td class="hidden sm:block">
          <input
            class="bg-gray-100 focus:outline-none border-b border-gray-400 py-2 px-4 block w-full appearance-none leading-normal"
            id="filter"
            placeholder="Search..."
            type="text"
            v-model="filter"
          />
        </td>
      </tr>
    </thead>
    <tbody>
      <tr
        class="border-b border-gray-200 hover:bg-gray-100"
        v-for="bitcoin in filterdAssets"
        :key="bitcoin.id"
      >
        <td>
          <img
            :src="
              `https://static.coincap.io/assets/icons/${bitcoin.symbol.toLowerCase()}@2x.png`
            "
            alt=""
          />
        </td>
        <td>
          <b># {{ bitcoin.rank }}</b>
        </td>
        <td>{{ bitcoin.name }}</td>
        <td>{{ bitcoin.priceUsd | dollar }}</td>
        <td>{{ bitcoin.marketCapUsd | dollar }}</td>
        <td
          :class="
            bitcoin.changePercent24Hr.includes('-')
              ? 'text-red-600'
              : 'text-green-600'
          "
        >
          {{ bitcoin.changePercent24Hr | percent }}
        </td>
        <td class="hidden sm:block">
          <px-button class="hover:text-white" @click="goToCoin(bitcoin.id)">
            <span class="text-blue-600 hover:text-white"> Details </span>
          </px-button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import PxButton from "../components/PxBotton";

export default {
  name: "PxAssetsTable",
  components: { PxButton },
  props: {
    assets: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      filter: "",
      sortOrder: 1,
    };
  },
  methods: {
    goToCoin(id) {
      this.$router.push({ name: "coin-detail", params: { id } });
    },
    changeSortOrder( ){
      this.sortOrder = this.sortOrder === 1 ? -1 : 1
    }
  },
  computed: {
    filterdAssets() {
      const altOrder = this.sortOder === 1 ? -1 : 1;

      return this.assets
        .filter((asset) => {
          return (
            asset.symbol.toLowerCase().includes(this.filter.toLowerCase()) ||
            asset.name.toLowerCase().includes(this.filter.toLowerCase())
          );
        })
        .sort((a, b) => {
          if (parseInt(a.rank) > parseInt(b.rank)) {
            return this.sortOrder;
          }
          return altOrder;
        });
    },
  },
};
</script>

<style scoped>
.up::before {
  content: "👆";
}

.down::before {
  content: "👇";
}

td {
  padding: 20px 0px;
  font-size: 0.6rem;
  text-align: center;
}

th {
  padding: 5px;
  font-size: 0.6rem;
}

@media (min-width: 640px) {
  td,
  th {
    padding: 20px;
    font-size: 1rem;
  }

  th {
    padding: 12px;
  }
}
</style>
