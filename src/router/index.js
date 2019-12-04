import Vue from 'vue'
import VueRouter from 'vue-router'
import homeParticipant from '../views/home-participant.vue'
import homeNonparticipant from '../views/home-nonparticipant.vue'
import timeCapsuleGetMail from '../views/timeCapsule-getMail.vue'
import timeCapsuleMail from '../views/timeCapsule-mail.vue'
import timeCapsuleAudio from '../views/timeCapsule-audio.vue'
import questionCapsule from '../views/questionCapsule.vue'
import questionCapsuleSubmit from '../views/questionCapsule-submit.vue'
import questionCapsuleReplyComapre from '../views/questionCapsule-replyCompare.vue'
import mails from '../views/mails.vue'
import mailsNonparticipant from '../views/mails-nonparticipant.vue'
import questionCapsuleNonparticipant from '../views/questionCapsule-nonparticipant.vue'

Vue.use(VueRouter)
/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [

  // 主页
  {
    path: '/home-participant',
    name: 'home-participant',
    component: homeParticipant,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/home-nonparticipant',
    name: 'home-nonparticipant',
    component: homeNonparticipant,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },

  // 时光胶囊
  {
    path: '/timeCapsule/getMail',
    name: 'timeCapsule-getMail',
    component: timeCapsuleGetMail,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/timeCapsule/mail',
    name: 'timeCapsule-mail',
    component: timeCapsuleMail,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/timeCapsule/audio',
    name: 'timeCapsule-audio',
    component: timeCapsuleAudio,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },

  // 问题胶囊
  {
    path: '/questionCapsule',
    name: 'questionCapsule',
    component: questionCapsule,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/questionCapsule/submit',
    name: 'questionCapsule-submit',
    component: questionCapsuleSubmit,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/questionCapsule/replyCompare',
    name: 'questionCapsule-replyCompare',
    component: questionCapsuleReplyComapre,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/questionCapsule/nonparticipant',
    name: 'questionCapsule-nonparticipant',
    component: questionCapsuleNonparticipant,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },

  // 取信二维码
  {
    path: '/mails',
    name: 'mails',
    component: mails,
    meta: {
      title: '百步梯·时光胶囊'
    }
  },
  {
    path: '/mails/nonparticipant',
    name: 'mails-nonparticipant',
    component: mailsNonparticipant,
    meta: {
      title: '百步梯·时光胶囊'
    }
  }

]

const router = new VueRouter({
  routes
})

export default router
