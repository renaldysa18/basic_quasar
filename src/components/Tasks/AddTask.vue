<template>
  <q-card>
    <q-card-section>
      <div class="text-h6">Add Task</div>
    </q-card-section>
    <form @submit.prevent="validateTask">
      <q-card-section class="q-pt-none">
        <q-input
          outlined
          v-model="taskSubmit.name"
          class="q-mb-xs"
          label="name"
          :rules="[val => !!val || 'Field name empety']"
          autofocus
          ref="name"
        />
        <q-input
          outlined
          v-model="taskSubmit.date"
          class="q-mb-xs"
          label="Date"
          :rules="[val => !!val || 'Field date empety']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy>
                <q-date v-model="taskSubmit.date" />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
        <q-input
          outlined
          v-if="taskSubmit.date"
          v-model="taskSubmit.time"
          label="Time"
          class="q-mb-xs"
          :rules="[val => !!val || 'Field time empety']"
        >
          <template v-slot:append>
            <q-icon name="access_time" class="cursor-pointer">
              <q-popup-proxy transition-show="scale" transition-hide="scale">
                <q-time v-model="taskSubmit.time" mask="HH:mm" format24h />
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn flat label="OK" color="primary" type="submit "/>
      </q-card-actions>
    </form>
  </q-card>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  data () {
    return {
      taskSubmit: {
        name: '',
        date: '',
        time: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    validateTask () {
      console.log('save task')
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask () {
      this.addTask(this.taskSubmit)
      this.$emit('close')
    }
  }
}
</script>
