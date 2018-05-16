import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import AddPoll from '@/components/AddPoll'
import AnswerPoll from '@/components/AnswerPoll'
import PollResults from '@/components/PollResults'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/poll/add',
      name: 'AddPoll',
      component: AddPoll
    },
    {
      path: '/poll/answer',
      name: 'AnswerPoll',
      component: AnswerPoll
    },
    {
      path: '/poll/results',
      name: 'PollResults',
      component: PollResults
    }
  ]
})
