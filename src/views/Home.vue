<template>
  <div class>
    <div class="flex pt-4">
      <div class="w-5/6 text-center">
        <p class="text-4xl ">Dogopedia</p>
        <p class="text-2xl pt-1.5">Learn About Dogs</p>
        <!-- component -->
<!-- This is an example component -->
     <div class="pt-2 relative mx-auto text-gray-600 pt-1.5">
        <input class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search" name="search" placeholder="Search" v-model="search">
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
            viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
            width="512px" height="512px">
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
          </svg>
        </button>
      </div>
        
      </div>

      
      </div>
      
    <section class="w-full max-w-screen-xl pt-20 pb-32 lg:pt-40 mx-auto px-6 sm:pr-16 sm:pl-16 lg:pr-16 lg:pl-16 block mb-4">
      <div class="md:flex block">
        <app-card-grid :cards="posts"></app-card-grid>
      </div>
    </section>

  </div>
</template>

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
  /**
   * registers @CardGrid component as <app-card-grid>
   *  and @Filter component as <app-filter>
   */
  components: {
    "app-card-grid": CardGrid,
    "app-filter": Filter
  },
  methods: {
    // fetches data from API
    fetchCards() {
      axios
        .get(this.url)
        .then(response => {
          const { cards } = response.data;
          this.cards = cards;
        })
        .catch(er => er);
    },

    // log user out of the app
    logOut() {
      if (localStorage.getItem("pokermonUser")) {
        // if pokermonUser exists clear it from localstorage
        localStorage.removeItem("pokermonUser");
        // redirect to the homepage
        this.$router.push("/");
      }
    },
    /** listens for emitted event from the app-filter-checkbox
     * and populate filterItem array
     *
     */
    checkFilter(category, title, checked) {
      if (checked) {
        /**
         * populate the filter category array if it is checked
         */
        this[category].push(title);
      } else {
        /**
         * remove item from the filter category array if it is unchecked
         */
        let index = this[category].indexOf(title);
        if (index > -1) {
          this[category].splice(index, 1);
        }
      }
    }
  },

computed: {
    posts() {
      console.log(this.$store.state.posts, "Corgi")  
      
    return this.$store.state.posts
    }
  },

  mounted() {
    this.$store.dispatch("getPosts");
  },
  /** use Vue lifecyle method created, on creating the component fetch the cards
   * */
  created() {
    this.fetchCards();
   // this.posts=this.$store.state.posts //to aceess state
  }
};
</script>

<style>

</style>
