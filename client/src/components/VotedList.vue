<template>
  <section>
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
