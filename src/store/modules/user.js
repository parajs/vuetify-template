import router from "@/router";
import { getuser, login, logout } from "api/user";
import { batchUpdateState } from "utils";
import { getCookie, removeCookie, setCookie } from "utils/cookie";
const tokenKey = process.env.VUE_APP_TOKEN;

const updateUserInfo = (commit, data) => {
  const { token } = data;
  if (token) {
    setCookie(tokenKey, token);
  }
  commit("batchUpdateState", data);
};

const state = {
  token: getCookie(tokenKey) || "",
  user: ""
};

const mutations = {
  batchUpdateState: (state, payload) => {
    batchUpdateState(state, payload);
  }
};

const actions = {
  async login({ commit }, userInfo) {
    const result = await login(userInfo);
    const { token, user } = result.data;
    updateUserInfo(commit, { token, user });
    return result;
  },
  // 获取用户资料
  getuser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      getuser(payload)
        .then(result => {
          updateUserInfo(commit, { user: result.data });
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // user logout
  logout({ dispatch }) {
    return new Promise((resolve, reject) => {
      logout()
        .then(result => {
          dispatch("resetUserInfo");
          resolve(result);
        })
        .catch(error => {
          reject(error);
        });
    });
  },
  // remove token
  resetUserInfo({ commit }) {
    return new Promise(resolve => {
      commit("batchUpdateState", { token: "", user: "" });
      removeCookie(tokenKey); // token
      router.push("/");
      resolve();
    });
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions
};
