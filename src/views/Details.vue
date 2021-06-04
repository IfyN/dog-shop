<!--show Dog's details-->
<template>
<div class.="dog-details">
<h1>Louis</h1>
<p> 3 years old</p>
<p>Loves taking naps</p>
<img src="" alt="details about dogs" srcset="">
</div>
</template>

<style scoped>

dog-details{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
 h1{
   text-align: justify;
 }
 p{
     text-align: justify;
 }
</style>

<script>
import CardGrid from "@/components/CardGrid.vue";
import Filter from "@/components/Filter.vue";

import axios from "axios";
export default {
  data() {
    return {
   //   posts : [],
    };
  },
  
  
computed: {
    posts() {
      console.log(this.$store.state.posts, "Corgi")  
      
    return this.$store.state.posts
    }
  },
}
  
</script>




