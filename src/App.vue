<template>
  <!--  <div id="nav">-->
  <!--    <router-link to="/">Home</router-link> |-->
  <!--    <router-link to="/about">About</router-link>-->
  <!--  </div>-->
  <Loading v-if="this.$store.state.loadingShow" />

  <router-view />
</template>

<script>
import Loading from "@/components/Loading.vue";

export default {
  components: { Loading },
};
</script>

<!-- <script>
export default {
  name: "App",
  /**
   * 通过provider向子组件注入依赖
   */
  provide() {
    return {
      reload: this.reload
    };
  },
  data() {
    return {
      RouterStaet: true
    };
  },
  methods: {
    goBack() {
      console.log("页面进行了路由操作");
    },
    reload() {
      this.RouterStaet = false;
      this.$nextTick(() => {
        this.RouterStaet = true;
      })
    }
  }
}
</script> -->
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
