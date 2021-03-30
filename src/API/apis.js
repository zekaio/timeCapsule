import { get } from './http'
import { baseUrl } from './api.config'
import { Message } from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

export async function isParticipant() {
  let res = await get(baseUrl + '/info')
  return res.participated
}

// 取信码
export async function getTimecapsuleMail(mailCode) {
  if (mailCode.length === 0) {
    Message({
      message: '取信码长度不能为空',
      type: 'error'
    })
    return
  }
  return await get(baseUrl + '/timecapsules/code', { code: mailCode })
}

// 写给自己
export async function getSelfTimecapsuleMail(offset) {
  return await get(baseUrl + '/timecapsules/me', { offset })
}

// 取信二维码
export async function getQRcodeTimecapsuleMail(offset) {
  return await get(baseUrl + '/timecapsules/qrcode', { offset })
}

// 陌生人
export async function getStrangerTimecapsuleMail() {
  return await get(baseUrl + '/timecapsules/stranger')
}
