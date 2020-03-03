<template>
  <q-page class="q-pa-md">
    <!-- content -->
    <h5>Todo</h5>
      <q-list bordered separator  v-if="Object.keys(tasks).length">
        <task v-for="(task, key) in tasks" v-bind:key="key" :class="!task.completed ? 'bg-yellow-5' : 'bg-light-green-12'" :task="task" :id="key"></task>
      </q-list>
      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn push color="white" text-color="primary" round icon="add" @click="showAddTask = true"/>
      </div>
      <q-dialog v-model="showAddTask">
        <addtask @close="showAddTask = false"/>
      </q-dialog>
  </q-page>
</template>
<script>
import { mapGetters } from 'vuex'
import Task from 'components/Tasks/Task.vue'
import AddTask from 'components/Tasks/AddTask.vue'

export default {
  name: 'PageTodo',
  computed: {
    // tasks () {
    //   return this.$store.getters['tasks/tasks']
    // }
    ...mapGetters('tasks', ['tasks'])
  },
  components: {
    task: Task,
    addtask: AddTask
  },
  data () {
    return {
      showAddTask: false
    }
  }
}
</script>

<style>
  .text-strikethrough {
    text-decoration: line-through
  }
</style>
