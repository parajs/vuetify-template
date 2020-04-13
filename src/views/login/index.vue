<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <v-img
        class="white--text align-end"
        height="200px"
        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
      >
        <v-card-title>{{ title }}</v-card-title>
      </v-img>
      <v-form ref="form" class="login-form" v-model="valid" lazy-validation>
        <v-text-field
          v-model="account"
          :rules="accountRules"
          label="用户名"
          required
        ></v-text-field>

        <v-text-field
          v-model="user_pass"
          :rules="user_passRules"
          type="password"
          label="密码"
          required
        ></v-text-field>

        <v-btn :disabled="!valid" color="primary" block @click="validate">
          登录
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      title: process.env.VUE_APP_TITLE,
      valid: true,
      account: "",
      accountRules: [v => !!v || "用户名必填"],
      user_pass: "",
      user_passRules: [v => !!v || "密码必填"]
    };
  },
  methods: {
    validate() {
      this.$refs.form.validate();
    }
  }
};
</script>
<style lang="scss" scoped>
.login-form {
  padding: 30px;
}
</style>
