<template>
  <section class="cardscontainer">
      <div v-for="(character, index) of characters" :key='index'>
        <charactercard :name="character.name" :votes="character.count" :img="character.image" :index="index" :id="character._id"/>
      </div>
  </section>     
</template>

<script>
import { mapGetters } from 'vuex'
import CharacterCard from './CharacterCard.vue'

export default {
  name: 'VotedList',
  mounted(){
    this.$store.dispatch('LoadCharacters')
  } , 
  computed: {
    ...mapGetters(['characters'])
  },
  components:{
    'charactercard' :CharacterCard
  }
   
}
</script>

<style>
  .cardscontainer{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 80vw;
    margin-top: 10px;
    margin-bottom: 20px; 
  }
</style>

