<template>
  <v-container>
    <v-card class="mx-auto" max-width="500">
      <div class="title-container">
        <h4 style="text-align:center">{{ title }}</h4>
        <h3 class="title">登录</h3>
      </div>
      <v-form ref="form" class="login-form" v-model="valid" lazy-validation>
        <v-text-field
          @keyup.enter="validate"
          v-model="account"
          :rules="accountRules"
          label="用户名"
          required
        ></v-text-field>

        <v-text-field
          @keyup.enter="validate"
          v-model="user_pass"
          :rules="user_passRules"
          type="password"
          label="密码"
          required
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          :loading="loading"
          color="primary"
          block
          @click="validate"
        >
          登录
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script>
import { md5Encryption } from "utils";

export default {
  name: "Login",
  data() {
    return {
      loading: false,
      title: process.env.VUE_APP_TITLE,
      valid: true,
      account: "",
      accountRules: [v => !!v || "用户名必填"],
      user_pass: "",
      user_passRules: [v => !!v || "密码必填"]
    };
  },
  methods: {
    async validate() {
      const flag = this.$refs.form.validate();
      const userInfo = {
        account: this.account,
        user_pass: md5Encryption(this.user_pass)
      };

      if (flag) {
        this.loading = true;
        try {
          await this.$store.dispatch("user/login", userInfo);
          this.$router.push({ path: this.redirect || "/" });
        } catch (error) {
          console.log(error);
        }
        this.loading = false;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.mx-auto {
  padding: 40px;
  margin-top: 40px;
}

.title-container {
  position: relative;
  .title {
    font-size: 26px;
    margin-top: 20px;
    margin-bottom: 20px;
    text-align: center;
    font-weight: bold;
  }
}
</style>
