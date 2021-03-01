<template>
  <div>
    <div class="jizuo">
      <HelloWorld msg="基座" />
      <div>{{ user }}</div>
    </div>
    <ul class="app-ul">
      <li v-for="app in microApps" :class="{ active: current === app.activeRule }" :key="app.name" @click="goto(app)">
        {{ app.name }}
      </li>
    </ul>
    <div class="subapp-viewport" id="subapp-viewport"></div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import store from './store'
import microApps from './micro-app'
export default {
  name: 'App',
  data() {
    return {
      microApps,
      current: ''
    }
  },
  components: {
    HelloWorld
  },
  computed: {
    user() {
      return store.getGlobalState('user')
    }
  },
  watch: {
    $route: {
      handler(newVal, oldVal){
        console.log('main $route', newVal, oldVal)
      },
      immediate: true
    }
  },
  created() {
    console.log('main app', this.$router)
    this.current = microApps[0].activeRule
    const path = `/${window.location.hash}`
    if (this.microApps.findIndex(item => path.includes(item.activeRule) > 0)) {
      this.current = path
    }
  },
  methods: {
    goto(app) {
      this.current = app.activeRule
      history.pushState(null, app.activeRule, app.activeRule)
    }
  }
}
</script>

<style>
.jizuo {
  text-align: center;
  color: #2c3e50;
}
.app-ul {
  display: flex;
  list-style: none;
}
.app-ul li {
  width: 25%;
  cursor: pointer;
}
.active {
  color: #f0f;
}
.subapp-viewport {
  margin-bottom: 50px;
}
</style>
