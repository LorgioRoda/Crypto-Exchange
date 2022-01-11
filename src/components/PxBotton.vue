<template>
  <button
  v-on:click='buttonClick'
    class="bg-transparent hover:bg-blue-600 hover:text-white focus:text-white text-blue-700 font-semibold py-2 px-2 border border-blue-500 hover:border-transparent rounded"
  >
  <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'PxButton',

    methods:{
        buttonClick(){
            this.$emit('click')
        }
    }
}
</script>

