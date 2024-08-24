<template>
<div v-if="task"  class="bg-gray-100 flex items-center justify-center h-screen">
       <button
      
        class="bg-blue-500 text-white px-4 py-2 rounded"
      >
       
      </button> 

      
     
        <div class="fixed inset-0 flex items-center justify-center z-50">
         
          <div
            class="absolute inset-0 bg-black opacity-50"
           
          ></div>

          
          <div class="relative bg-white rounded-lg shadow-lg p-6 w-11/12 md:w-1/2 lg:w-1/3">
           
            <button
             @click="closePopup"
              class="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
            >
              &times;
            </button>

           
            <h2 class="text-xl font-semibold mb-4">Task Details</h2>

            
            <table class="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th class="py-2 px-4 border-b-2 border-gray-300">
                   Task Title
                  </th>
                  <th class="py-2 px-4 border-b-2 border-gray-300">
                    Task Description
                  </th>
                  <th class="py-2 px-4 border-b-2 border-gray-300">
                    Due Date
                  </th>
                  <th class="py-2 px-4 border-b-2 border-gray-300">
                    Task Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td class="py-2 px-4 border-b border-gray-300">
                    {{task.title}}
                  </td>
                  <td class="py-2 px-4 border-b border-gray-300">
                    {{task.description}}
                  </td>
                  <td class="py-2 px-4 border-b border-gray-300">
                    {{task.dueDate}}
                  </td>

                  <td :class="task.taskStatus == 'Open' ? ' bg-blue-100 text-blue-600  ' :'  bg-green-600 text-white'"  class="py-2 px-4 border-b border-gray-300">
                    {{task.taskStatus == 'Open' ? 'Open' : 'Completed'}}
                  </td>

                 
                </tr>
               
               
              </tbody>
            </table>
          </div>
        </div>
    
    </div>
  </template>
  
  <script setup>
  const emit = defineEmits(['emitPopupData'])
  const showDetPopup = ref(false)
  const props = defineProps({
  task: Object
  })

  onMounted(() => {
  console.log('Task Object:', props.task)
  })
  
 function closePopup(){
  console.log("----------------")
    emit('emitPopupData', false)
  }
 // console.log("task",props.task)
  // Sample data for tasks

  </script>
  
  <style>
  /* Additional styles can go here if needed */
  </style>
  