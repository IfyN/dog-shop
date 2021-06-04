<template>
  <div class="block sm:w-4/5">
    <div >
      <div class="grid lg:h-80" v-if="cards.length"> 
      <app-card v-for="(card,id) in cards" :key="id">
        <p>put</p>
        <!--img class="w-full" :src="card.imageUrl" alt="man's best friend" />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ card.name }}</div>
        </div-->
      </app-card>
      </div>
      <div class="w-full text-center" v-else-if="cards.length"><p class="text-2xl"> No result found</p></div>
      <div class="w-full text-center" v-else><p class="text-2xl"> Loading...</p></div>
    </div>

    <div class="flex pt-10">
      
    </div>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";


const customStyles = {
  ul: {
    display: "flex"
  },
  li: {
    display: "inline-block",
    border: "1px solid rgba(109, 109, 109, 0.22)"
  },
  a: {
    color: "blue",
    padding: "10px 15px"
  },
  disabled: {
    display: "none !important"
  }
};

export default {
  data() {
    return {
      // holds the card items per page
      pageOfItems: [],
      // custom pagination button styling
      customStyles
    };
  },
  props: ["cards", "rarityProp", "setProp", "typeProp"],
  components: {
    "app-card": Card,
  },
  methods: {
    onChangePage(pageOfItems) {
      // update page of items
      this.pageOfItems = pageOfItems;
    },
    // check if pokemon rarity in the rarity filterItem array exists
    pokemonPassesRarityFilter(card) {
      if (!this.rarityProp.length) {
        return true;
      } else {
        return this.rarityProp.find(rarity => card.rarity === rarity);
      }
    },

    // check if pokemon set in the set filterItem array exists
    pokemonPassesSetFilter(card) {
      if (!this.setProp.length) {
        return true;
      } else {
        return this.setProp.find(set => card.set === set);
      }
    },
    // check if pokemon types in the types filterItem array exists
    pokemonPassesTypeFilter(card) {
      if (!this.typeProp.length) {
        return true;
      } else {
         let cardType = `${card.types}`;
         let matched = true;
         this.typeProp.forEach(type => {
           if(cardType.indexOf(type) === -1){
             matched = false;
           }
         });
         return matched
      }
    }
  },
  computed: {
    /**
     * create an array of filtered card baseed on the filter group
     */
    filteredPokemonCards() {
      return this.cards
        .filter(this.pokemonPassesRarityFilter)
        .filter(this.pokemonPassesSetFilter)
        .filter(this.pokemonPassesTypeFilter);
    }
  }
};
</script>

<style >
.disabled {
  display: none !important;
}

.pagination > li > a:focus {
  background: rgb(7, 120, 226);
  color: #fff;
}

.pagination > li > a:hover {
  background: rgb(229, 230, 231);
  color: rgb(7, 120, 226);;
}
.grid {
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1.5rem;
}
@media screen and (min-width: 768px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width: 992px) {
  .grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

@media screen and (min-width: 1200px) {
  .grid {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>