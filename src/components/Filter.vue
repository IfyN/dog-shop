<template>
  <div class="pt-4 w-full">
    <div  class="block mb-6 ">
      <h1 class="pb-2 font-bold">Set</h1>
      <div v-for="(item, id) in filterItem[0].Set" :key="id" class="w-full flex text-gray-500 ">
        <app-filter-checbkox :item="item" :category="'Sets'" v-on:check-filter="checkFilter"></app-filter-checbkox>
      </div>

    </div>

     <div  class="block mb-6">
      <h1 class="pb-2 font-bold">Rarity</h1>
      <div v-for="(item, id) in filterItem[1].Rarity" :key="id" class="w-full flex text-gray-500 ">
        <app-filter-checbkox :item="item" :category="'Rarity'" v-on:check-filter="checkFilter"></app-filter-checbkox>
      </div>

    </div>

     <div  class="block mb-6">
      <h1 class="pb-2 font-bold">Type</h1>
      <div v-for="(item, id) in filterItem[2].Types" :key="id" class="w-full flex text-gray-500 ">
        <app-filter-checbkox :item="item" :category="'Type'" v-on:check-filter="checkFilter"></app-filter-checbkox>
      </div>

    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      checked: false
    }
  },
  components: {
   
  },
  props: ["filterItem"],
  methods: {
      checkFilter(category, filter, checked){
       this.$emit('check-filter',category, filter, checked)
    }
  }
};
</script>

<style scoped>
</style>