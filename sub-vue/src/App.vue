<template>
  <div id="app">
    <div>
      <p>{{ user }}</p>
      <button @click="update">更新</button>
      <p>{{ $store.state.age }}</p>
      <button @click="add">追加</button>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  computed: {
    // ...mapState(['age']),
    ...mapState('global', {
      user: state => state.user
    })
  },
  methods: {
    ...mapActions('global', ['setGlobalState']),
    update() {
      this.setGlobalState({ user: { name: '更新chenzhenjin' } })
    },
    add() {
      this.$store.commit('SET_AGE', 20)
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
