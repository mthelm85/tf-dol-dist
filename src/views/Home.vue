<template>
  <div class="container">
    <graph></graph>
  </div>
</template>

<script>
// @ is an alias to /src
import Graph from "@/components/Graph.vue";

export default {
  name: "home",
  components: {
    Graph
  }
};
</script>
