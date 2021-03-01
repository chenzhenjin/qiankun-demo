/*
 * @Author: chenzhenjin
 * @email: BrotherStudy@163.com
 * @Date: 2020-07-06 10:01:06
 * @LastEditTime: 2021-02-24 15:42:28
 * @Descripttion: 操作以项目名+token的形式避免干扰
 */

import Cookies from 'js-cookie'
const tokenName = 'jiudiandanao-token'

function getDomain() {
  if (document.domain === 'localhost') {
    return document.domain
  } else {
    return `.${document.domain
      .split('.')
      .slice(-2)
      .join('.')}`
  }
}

const domain = getDomain()

function initGetToken(name, domain, cb) {
  return function() {
    return cb(name)
  }
}

export const getToken = initGetToken(tokenName, domain, Cookies.get)

// export function getToken() {
//   return Cookies.get(tokenName)
// }

function initSetToken(name, domain, cb) {
  return function(token, day) {
    console.log('name, domain', name, domain)
    cb(name, token, { expires: day, domain })
  }
}

export const setToken = initSetToken(tokenName, domain, Cookies.set)

// export function setToken(token, day) {
//   return Cookies.set(tokenName, token, { expires: day, domain: getDomain() })
// }

function initRemoveToken(name, domain, cb) {
  return function() {
    cb(name)
    cb(name, { domain })
  }
}
export const removeToken = initRemoveToken(tokenName, domain, Cookies.remove)

// export function removeToken() {
//   return Cookies.remove(tokenName, { domain: getDomain() })
// }
