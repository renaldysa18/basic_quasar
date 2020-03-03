import Vue from 'vue'
import { uid } from 'quasar'

const state = {
//   tasks: [
//     {
//       id: 0,
//       name: 'Learn Flutter',
//       completed: true,
//       date: '27-02-2020',
//       time: '14.00'
//     },
//     {
//       id: 1,
//       name: 'Learn Quasar',
//       completed: false,
//       date: '25-02-2020',
//       time: '10.00'
//     },
//     {
//       id: 2,
//       name: 'do Skripsi',
//       completed: false,
//       date: '01-05-2020',
//       time: '09.00'
//     }
//   ]
  tasks: {
    // ID1: {
    //   name: 'Learn Flutter',
    //   completed: false,
    //   date: '27-02-2020',
    //   time: '14.00'
    // },
    // ID2: {
    //   name: 'Learn Quasar',
    //   completed: false,
    //   date: '25-02-2020',
    //   time: '10.00'
    // },
    // ID3: {
    //   name: 'do Skripsi',
    //   completed: false,
    //   date: '01-05-2020',
    //   time: '09.00'
    // }
  }
}

const mutations = {
  updateTask (state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask (state, id) {
    console.log('task deleted')
    Vue.delete(state.tasks, id)
  },
  addTask (state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask ({ commit }, payload) {
    console.log('update task clicked')
    commit('updateTask', payload)
  },
  deleteTask ({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask ({ commit }, task) {
    const taskId = uid()
    const payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
