import { Fetch } from '@utils'


const ListApi = {
    register: '/app/user/login',
    getcode: '/app/user/sendSmsVerifyCodeH5',
}
/**
 * 
 * @param {*} opt
 * @param {*} callback 
 */
const register = (opt, callback) =>
  Fetch(
    `${ListApi.register}${opt}`,
    { method: 'POST'},
  ).then(res => {
    callback && callback(res)
    return res
  })
/**
 * 
 * @param {*} opt
 * @param {*} callback 
 */
const getcode = (phone, callback) =>
  Fetch(
    `${ListApi.getcode}?phoneNumber=${phone}`,
    { method: 'GET' },
  ).then(res => {
    callback && callback(res)
    return res
  })

export default {
  register,
  getcode,
}