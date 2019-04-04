<template>
  <div class="card">
    <h1>{{$attrs.name}}</h1>
    <img v-bind:src='$attrs.img' alt="Character logo" width="250" height="250"/>
    <p>{{$attrs.name}} has {{$attrs.votes}} votes</p>
    <button class="button" @click="MakeVote($attrs.index)">Vote for {{$attrs.name}}</button>
  </div>
  
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'

export default {
  name: 'CharacterCard',
  computed: {
    ...mapGetters(['characters'])
  },
  methods: {
    ...mapMutations(['vote']),
    ...mapActions(['MakeVote'])
  }
}
</script>

<style >
.card{
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.button{
  display: inline-block;

  /* padding: 15px;
  margin-right: 5px; */
  height: 50px;
  min-width: 100px;
  background: #348AA7;
  border: none;
  outline: none;
  color: white;
  font-family: inherit;
  font-weight: 400;
  font-size: 20px;
  border-radius: 3px;
  box-shadow: 0 5px 0px darken(#348AA7,0%);
  border-bottom: 2px solid darken(#348AA7,3%);
}
  
  .button:hover{
    background: darken(#348AA7,5%); 
    box-shadow: 0 4px 1px darken(#348AA7,5%); 
    border-bottom: 2px solid darken(#348AA7,8%); 
    transition: all 0.1s ease-in;
  }
  
  .button:active{
    transform:translateY(4px);
    border-bottom-width: 2px;
    box-shadow: none;
  }

</style>

