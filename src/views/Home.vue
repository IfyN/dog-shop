<template>
  <div class>
    <div class="flex pt-4">
      <div class="w-5/6 text-center">
        <p class="text-4xl pb-0.5">Dogopedia</p>
        <p class="text-2xl pb-0.5">Learn About Dogs</p>
        <input type="text" placeholder="Search for dog.." name="search" v-model="search">
        

        <!--form class="dog-search" action="/action_page.php" style="margin:auto;max-width:300px">
              <input type="text" placeholder="Search for dog.." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
        </form-->
      </div>

      <div class="w-1/6">
         <button class="ml-auto text-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-2 rounded focus:outline-none focus:shadow-outline" @click="logOut">Logout</button>
      </div>
      
    </div>
    <section class="w-full max-w-screen-xl pt-20 pb-32 lg:pt-40 mx-auto px-6 sm:pr-16 sm:pl-16 lg:pr-16 lg:pl-16 block mb-4">
      <div class="md:flex block">
        <div class="sm:flex block w-1/5 mx-4">
          </div>

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
      posts : [],
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
    this.posts=this.$store.posts //to aceess state
  }
};
</script>

<style>

</style>
