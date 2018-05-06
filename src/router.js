import Vue from 'vue'
import Router from 'vue-router'
import Photo from '@/views/Photo'
import Video from '@/views/Video'
import Galleries from '@/views/Galleries'
import Contact from '@/views/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'photo',
      component: Photo
    },
    {
      path: '/galleries',
      name: 'galleries',
      component: Galleries
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/contact',
      name: 'contact',
      component: Contact
    }
  ]
})
