// stores/tasks.ts
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useTaskStore = defineStore('tasks', () => {
  const tasks = ref<any[]>([])

  console.log("taskslist",tasks)
  const newTask = ref('')

  function addTask(task: any) {
    console.log("task in store after add",task)
    tasks.value = task
   // tasks.value.push(task)
  }

  function removeTask(index: number) {
    tasks.value.splice(index, 1)
  }

  return {
    tasks,
    newTask,
    addTask,
    removeTask,
  }
})
