<template>
  <v-app-bar app color="primary" dark>
    <v-container class="d-flex">
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>
      <div>
        <v-btn text @click="goToLogin" v-if="!token">
          <span class="mr2">登录</span>
          <v-icon>mdi-login</v-icon>
        </v-btn>
        <div class="d-flex" v-else>
          <v-btn text @click="logout">
            <span class="mr2">退出</span>
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </v-app-bar>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "PageHeader",
  computed: {
    ...mapGetters(["user", "new_count", "token"])
  },
  methods: {
    goToLogin() {
      this.$router.push("/login").catch(err => {
        console.log(err);
      });
    },
    logout() {
      this.$store.dispatch("user/logout");
    }
  }
};
</script>
