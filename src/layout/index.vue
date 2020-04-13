<template>
  <div>
    <PageHeader />
    <v-content>
      <router-view />
    </v-content>
  </div>
</template>

<script>
import PageHeader from "./PageHeader";
export default {
  name: "Layout",
  components: {
    PageHeader
  }
};
</script>
