<template>
  <div>
    <h1>{{$attrs.name}}</h1>
    <img v-bind:src='$attrs.img' alt="Character logo" />
    <p>{{$attrs.name}} has {{$attrs.votes}} votes</p>
    <p @click="MakeVote($attrs.index)">Vote for {{$attrs.name}}</p>

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
