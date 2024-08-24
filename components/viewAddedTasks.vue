<template>

    <div>
       
        <div>
    
          <div class=" flex flex-col">
           
            <main class="flex-1">
              <div
                class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[75px] lg:pt-[40px] md:px-4 md:pb-0 lg:px-8 bg-[#f2f2f2] min-h-screen">
                <div class="flex items-center justify-between">
                  <div class="text-right text-base font-medium"> Task List </div>
                  
                  <!-- <div class="items-center justify-center hidden sm:hidden md:flex">
                    <a href="/add-task" class="cursor-pointer text-sm text-green ml-2">Add Task</a></div> -->
                </div>
    
    
    
                <div class="table-content  rounded-sm py-4 mt-6">
                  <div class="px-4 sm:px-6 lg:px-4">
                   
    
    
                    <div v-if="tasks.length" class="mt-8 flow-root">
                      <div class="overflow-x-auto scrollbar-custom">
                        <div class="inline-block min-w-full  align-middle border border-gray-200 overflow-x-scroll" >
                          <table class="min-w-full divide-y divide-gray-300">
                            <thead class="bg-gray-50 sticky top-0  ">
                              <tr class="divide-x divide-gray-200">
                                <th rowspan="2"
                                  class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 "
                                  scope="col"><span class="">Task Title</span></th>
                                <th rowspan="2" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  scope="col">Task Description</th>
                                <th rowspan="2" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  scope="col">Due Date</th>
                                  <th rowspan="2" class="px-4 py-3.5 text-left text-sm font-semibold text-gray-900"
                                  scope="col">Task Status</th>
                                <th rowspan="2" class="py-3.5 pl-4 pr-4 text-left text-sm font-semibold text-gray-900 "
                                  scope="col">Action</th>
                              </tr>
                             
                            </thead>
                        
                            <tbody class="divide-y divide-gray-200 bg-white">
                              <tr  v-for="(item, index) in tasks" :key="index" class="divide-x divide-gray-200" >
                                <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                                  <span class="pl-4">{{item.title}}</span>
                                </td>
                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{item.description}}</td>
                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{formattedDate (item.dueDate )}}</td>
                                
                               
                                <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                                  <div class="text-gray-500 text-xs font-medium">
    
                                    <label class="relative inline-flex items-center  ">
                                  <a 
                                  :class="item.taskStatus == 'Open' ? ' bg-blue-100 text-blue-600  ' :'  bg-green-600 text-white'"
                                  
                                    class=" mr-3 rounded-full px-2 py-1 text-center pointer-events-none">{{item.taskStatus == 'Open' ? 'Open' : 'Completed'}}</a>
    
                                 
                                  
                                  </label>
                                   </div> 
                                </td>
                                <td  class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 ">
                                  <ul class="flex items-center">
                                    <li class="pr-2 border-r border-gray-300"><a 
                                     @click="editTaskItem(item,index)"
                                    class="cursor-pointer text-orange-500 hover:text-orange-900">Edit</a></li>
                                    <li  class="pr-2 border-r border-gray-300 "><a 
                                   :class="item.taskStatus == 'Open' ? '  text-green-600  ' :'   text-blue-500'"
                                   @click="chnagePublishStatus(item,index)"
                                    class="cursor-pointer   ml-3">{{item.taskStatus == 'Open' ? 'Mark as Completed' : 'Make as Open'}}</a></li>
                                    <li><a 
                                   @click="viewTaskDetails(item)"
                                    class="cursor-pointer text-green-800 hover:text-green-900 ml-3">View</a></li>
                                  </ul>
                             
                                  </td>
                              </tr>
                             
                            </tbody>
                           
                          </table>
                         
                        </div>
                       
                      </div>
                    </div>
                    <div v-else class="text-center min-h-[350px] items-center justify-center flex flex-col">
                      <div class="pb-2"><img src="~/assets/css/images/nodata.jpg"/></div>
                     <div> No Coupons Found</div>
                    </div>
                  </div>
                
                  <!-- <AtomsTaskDetails/> -->
    
                </div>
    
    
              </div>
    
            </main>
          </div>
    
         
    <AtomsTaskDetails v-if="showTaskDetailsPopup" :task="taskObject" @emitPopupData="emitPopupData"/>
        
        </div>
      </div>
    
    </template>
      
      <script setup> 
      import moment from 'moment'

        const showTaskDetailsPopup  = ref(false)
        
        const taskObject = ref({
        title: '',
        description: '',
        dueDate: '',
        taskStatus: ''
        })

        const EdittaskForm = ref({
        indexVal:null,
        titlevalue: '',
        descriptionvalue: '',
        dueDatevalue: new Date(),
        taskStatusvalue: ''
        })
      
      import { useTaskStore } from '@/stores/tasks'

      const emit = defineEmits(['emitEditableData'])
      // Initialize the task store
        const taskStore = useTaskStore()

      // Access tasks from the store
       const tasks = taskStore.tasks
      // console.log("tasks list in view componnet",tasks)

      const count = ref(0);
      const taskList = ref([]) ; 

      function formattedDate(dueDate){
        return moment(dueDate).format('MMMM Do YYYY')
      }

      function editTaskItem(item,index){
        EdittaskForm.value.indexVal = index
        EdittaskForm.value.titlevalue = item.title
        EdittaskForm.value.descriptionvalue = item.description
        EdittaskForm.value.dueDatevalue = item.dueDate
        EdittaskForm.value.taskStatusvalue = item.taskStatus
        emit('emitEditableData', EdittaskForm.value)
      };

      function chnagePublishStatus(item,index){
       console.log(tasks,index,item)
       tasks[index].taskStatus = item.taskStatus == 'Open' ? 'Completed' : 'Open' 
       addtaskToStore(tasks)
      }

      function viewTaskDetails(itemdetails){
        taskObject.value.title = itemdetails.title
        taskObject.value.description = itemdetails.description
        taskObject.value.dueDate = formattedDate(itemdetails.dueDate)
        taskObject.value.taskStatus = itemdetails.taskStatus
        showTaskDetailsPopup.value = true
      }

      function emitPopupData(popupstatus){
        showTaskDetailsPopup.value = false
      }
    

    function addtaskToStore(tasks){
    localStorage.setItem("myTaskList",JSON.stringify(tasks))
    taskStore.addTask(tasks)
   
   }
    
  
      
   
      
      // lifecycle hooks
      onMounted(() => {
      //  console.log(`The initial count is ${count.value}.`);
      //  localStorage.getItem(JSON.parse('myTaskList') ? JSON.parse('myTaskList')  : [] )
    
       // console.log(" localStorage.getItem(JSON.parse('myTaskList')", localStorage.getItem(('myTaskList')))

       // console.log(JSON.parse(localStorage.getItem(('myTaskList'))))
        
      //  taskList.value =  localStorage.getItem(('myTaskList')) ?  JSON.parse(localStorage.getItem(('myTaskList'))) : []
       // console.log("taskList",taskList.value , taskList.value.length )
      });
      </script>
      
      
      
        <style>
      .-z-1 {
        z-index: -1;
      }
      
      .origin-0 {
        transform-origin: 0%;
      }
      
      input[type="text"]:focus ~ label,
      input[type="email"]:focus ~ label,
      input[type="text"]:not(:placeholder-shown) ~ label,
      input[type="email"]:not(:placeholder-shown) ~ label,
      textarea:focus ~ label,
      textarea:not(:placeholder-shown) ~ label,
      select:focus ~ label,
      select:not([value=""]):valid ~ label {
        /* @apply transform; scale-75; -translate-y-6; */
        --tw-translate-x: 0;
        --tw-translate-y: 0;
        --tw-rotate: 0;
        --tw-skew-x: 0;
        --tw-skew-y: 0;
        transform: translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y))
          rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y))
          scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
        --tw-scale-x: 0.75;
        --tw-scale-y: 0.75;
        --tw-translate-y: -1.5rem;
      }
      
      input[type="text"]:focus ~ label,
      input[type="email"]:focus ~ label,
      select:focus ~ label {
        /* @apply text-black; left-0; */
        --tw-text-opacity: 1;
        color: rgba(72, 206, 243, var(--tw-text-opacity));
        left: 0px;
      }
      
      input[type="text"]:not(:placeholder-shown) ~ label,
      select:not([value=""]):valid ~ label {
        color: rgba(72, 206, 243, var(--tw-text-opacity));
      }
      
      .subcategory-list {
        min-height: 150px;
        overflow-y: auto;
        overflow-x: hidden;
        max-height: 300px;
      }
      
      .accordion-button:not(.collapsed)::after {
        background-image: url(~/assets/images/down-arrow.svg) !important;
        transform: rotate(-180deg) !important;
      }
      
      .accordion-button::after {
        width: 1rem !important;
        height: 1rem !important;
        background-size: 1rem !important;
        background-image: url(~/assets/images/down-arrow.svg) !important;
      }
      
      .accordion-item:first-of-type {
        border-top-left-radius: 0rem !important;
        border-top-right-radius: 0rem !important;
      }
      
      .accordion-item:not(:first-of-type) {
        border-top: 1px solid #e5e7eb !important;
      }
      
      .accordion-item:last-of-type {
        border-bottom-right-radius: 0rem !important;
        border-bottom-left-radius: 0rem !important;
      }
      
      .accordion-button:not(.collapsed) {
        box-shadow: none !important;
        border-bottom: 1px solid #e5e7eb !important;
      }
      </style>
        