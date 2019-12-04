import {
  get,
  post
} from './http'
import {
  baseUrl
} from './api.config'
import wx from 'weixin-js-sdk'
import qs from 'qs'
import {
  Message
} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export async function isParticipant () {
  let res = await get(baseUrl + '/info')
  return res.participated
}

export async function getTimecapsuleMail (mailCode) {
  if (mailCode.length === 0) {
    Message({
      message: '取件码长度不能为空',
      type: 'error'
    })
    return false
  } else {
    let res = await get(baseUrl + '/time_capsule/' + mailCode)
    if (res) {
      window.sessionStorage.setItem('mailContent', JSON.stringify(res))
      return true
    }
  }
}

export async function getQuestionCapsules () {
  let res = await get(baseUrl + '/question_capsules')
  if (res.length) {
    window.sessionStorage.setItem('capsules', JSON.stringify(res))
    return true
  } else return false
}

export async function submitReply (id, reply) {
  if (reply.length === 0) {
    Message({
      message: '长度不能为空',
      type: 'error'
    })
    return false
  } else {
    await post(baseUrl + '/question_capsule/' + id, {
      answer: reply
    })
    return true
  }
}

export async function getMails () {
  let res = await get(baseUrl + '/time_capsules')
  if (res.length) {
    window.sessionStorage.setItem('mails', JSON.stringify(res))
    return true
  } else {
    Message({
      message: '没有可取信件',
      type: 'error'
    })
    return false
  }
}

export function wxlogin () {
  fetch('https://hemc.100steps.net/2017/wechat/Home/Public/getJsApi', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: qs.stringify({
      url: location.href.split('#')[0]
    })
  })
    .then(res => res.json())
    .then(res => {
      wx.config({
        debug: false,
        appId: res.appId,
        timestamp: res.timestamp,
        nonceStr: res.nonceStr,
        signature: res.signature
        // jsApiList: ["updateTimelineShareData", "updateAppMessageShareData"]
      })
    })
}
