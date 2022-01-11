<template>
  <div>
    <div class="flex justify-center h-full mx-auto">
      <bounce-loader :loading="isLoading" :color="'#63b3ed'" :size="100" />
    </div>
    <px-assets-table v-if="!isLoading" :assets="assets" />
  </div>
</template>

<script>
import api from "../api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  name: "Home",
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
      isLoading: false
    };
  },

   created() {
     this.isLoading = true

    api.getAssets()
      .then(assets => (this.assets = assets))
      .finally(() => (this.isLoading = false))
  },
};
</script>
