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
