<template>
  <div class="wrapper">
    <h1>Hello, I'm in App.vue</h1>

    <HelloWorld msg="You did it!!" />
  </div>
</template>

<script>
import HelloWorld from "./component/HelloWorld.vue";

export default {
  components: {
    HelloWorld
  }
};
</script>

<style scoped>
h1 {
  color: purple;
}
</style>
