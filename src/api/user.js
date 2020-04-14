import request from "@/utils/request";
/**
 * @description: 用户登录
 * @param {type}
 * @return: Promise
 */
export function login(data) {
  return request({
    url: `/user/sign/verifypassword`,
    method: "post",
    data
  });
}

/**
 * @description: 获取用户资料 token || uid
 * @param {type}
 * @return: Promise
 */
export function getuser(params) {
  return request({
    url: `/user/info/getuser`,
    method: "get",
    params: params
  });
}

/**
 * @description: 用户结束会话
 * @param {type}
 * @return: Promise
 */
export function logout() {
  return request({
    url: "/user/sign/out",
    method: "post"
  });
}
