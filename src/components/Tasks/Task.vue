<template>
<q-item v-ripple @click="updateTask({ id: id, updates: { completed: !task.completed }})" clickable>
    <q-item-section side top>
        <q-checkbox v-model="task.completed" />
    </q-item-section>
    <q-item-section>
        <q-item-label :class="{ 'text-strikethrough' : task.completed}">{{ task.name }} {{ id }}</q-item-label>
    </q-item-section>
    <q-item-section side top>
        <q-item-label lines="1">{{ task.date }}</q-item-label>
        <q-item-label caption lines="2">
            <span class="text-weight-bold">{{ task.time }}</span>
        </q-item-label>
    </q-item-section>
    <q-item-section side>
        <q-btn @click.stop="promptToDelete(id)" round color="red" icon="delete" dense />
    </q-item-section>
</q-item>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete (id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you seriuos to delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('ok click dialog ')
        this.deleteTask(id)
      })
    }
  }
}
</script>
