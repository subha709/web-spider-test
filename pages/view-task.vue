<template>

<div>
   
    <div>

      <div class=" flex flex-col">
       
        <main class="flex-1">
          <div
            class="content pt-[60px] pb-[100px] px-4 sm:pt-[60px] sm:px-4 sm:pb-[100px] md:pt-[75px] lg:pt-[40px] md:px-4 md:pb-0 lg:px-8 bg-[#f2f2f2] min-h-screen">
            <div class="flex items-center justify-between">
              <div class="text-right text-base font-medium"> Task List </div>
              
              <div class="items-center justify-center hidden sm:hidden md:flex">
                <a href="/add-task" class="cursor-pointer text-sm text-green ml-2">Add Task</a></div>
            </div>



            <div class="table-content  rounded-sm py-4 mt-6">
              <div class="px-4 sm:px-6 lg:px-4">
               


                <div v-if="couponList.length" class="mt-8 flow-root">
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
                          <tr     v-for="(item, index) in couponList" :key="index" class="divide-x divide-gray-200" >
                            <td class="whitespace-nowrap py-4 pl-4 pr-4 text-sm font-medium text-gray-900 sm:pl-0">
                              <span class="pl-4">{{item.name}}</span>
                            </td>
                            <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{item.code}}</td>
                            <td class="whitespace-nowrap p-4 text-sm text-gray-500">{{item.type }}</td>
                            
                           
                            <td class="whitespace-nowrap p-4 text-sm text-gray-500">
                              <div class="text-gray-500 text-xs font-medium">

                                <label class="relative inline-flex items-center  ">
                                    

                              <a v-if="item.active"
                              :class="!item.published ? ' bg-blue-100 text-blue-600  ' :'  bg-green-600 text-white'"
                              
                                class=" mr-3 rounded-full px-2 py-1 text-center pointer-events-none">{{item.published ? 'Completed' : 'Open'}}</a>

                                <a  href="javascript:;" v-else class="bg-red-100 rounded-full px-2 py-1 text-[#FC2323] inline-block  text-center pointer-events-none"> Deleted </a>
                              
                              </label>
                               </div> 
                            </td>
                            <td  class="whitespace-nowrap py-4 pl-4 pr-4 text-sm text-gray-500 ">
                              <ul class="flex items-center">
                                <li v-if="!restrictActionButtons" class="pr-2 border-r border-gray-300"><a v-if="item.active"
                               :href="`/manage-gintaa-coupons/${item.id}`"
                                class="cursor-pointer text-orange-500 hover:text-orange-900">Edit</a></li>
                                <li v-if="!restrictActionButtons" class="pr-2 border-r border-gray-300 "><a v-if="item.active"
                               :class="!item.published ? '  text-green-600  ' :'   text-blue-500'"
                               @click="chnagePublishStatus(item.published,item.id)"
                                class="cursor-pointer   ml-3">{{item.published ? 'Make as draft' : 'Make as Published'}}</a></li>
                                <li><a 
                               :href="`/manage-gintaa-coupons/details/${item.id}`"
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
                  <!-- <div class="pb-2"><img src="~/assets/images/nodata.jpg"/></div> -->
                 <div> No Coupons Found</div>
                </div>
              </div>
            

            </div>



          </div>

         
 


    

        </main>
      </div>

     

    
    </div>
  </div>

</template>
  
  <script setup>
  // import { ref, onMounted } from 'vue'
  
  
  // reactive state
  const count = ref(0);

  const couponList = ref([
    {
        "id": "1Ugzfyp6o2hW9VAl9epIm8",
        "name": "ID0002",
        "code": "ID0002",
        "type": "PERCENTAGE",
        "value": 65,
        "minimumOrderValue": 1000,
        "redemptionLimit": 650,
        "details": [
            "ID0002"
        ],
        "title": "ID0002",
        "active": true,
        "modes": [
            "SELF",
            "TAKEAWAY",
            "THIRD_PARTY"
        ],
        "module": "FOOD",
        "eligible": null,
        "discountAmount": null,
        "published": true,
        "redemptionFrequency": {
            "unit": "HOUR",
            "number": 1
        },
        "discountCouponType": "FREE_USE",
        "entityList": [],
        "publicCoupon": true
    },
    {
        "id": "4nyzPRMF75LlcSu8iUVI61",
        "name": "Independence Day",
        "code": "ID0001",
        "type": "PERCENTAGE",
        "value": 65,
        "minimumOrderValue": 1000,
        "redemptionLimit": 650,
        "details": [
            "Independence day special coupon"
        ],
        "title": "ID0001",
        "active": true,
        "modes": [
            "SELF",
            "TAKEAWAY",
            "THIRD_PARTY"
        ],
        "module": "FOOD",
        "eligible": null,
        "discountAmount": null,
        "published": true,
        "redemptionFrequency": {
            "unit": "HOUR",
            "number": 1
        },
        "discountCouponType": "FREE_USE",
        "entityList": [],
        "publicCoupon": true
    },
    {
        "id": "30wlQ3JM70VVEVUgWuBPC",
        "name": "Test Once Time Coupon 2nd",
        "code": "test-one-time-second",
        "type": "FIXED",
        "value": 20,
        "minimumOrderValue": 100,
        "redemptionLimit": null,
        "details": [
            "Test Description for Test Once Time Coupon 2nd"
        ],
        "title": "Test Title",
        "active": true,
        "modes": [
            "SELF",
            "TAKEAWAY",
            "THIRD_PARTY"
        ],
        "module": "FOOD",
        "eligible": null,
        "discountAmount": null,
        "published": false,
        "redemptionFrequency": {
            "unit": "ONE_TIME",
            "number": 1
        },
        "discountCouponType": "FREE_USE",
        "entityList": [],
        "publicCoupon": false
    },
    {
        "id": "3oVixdSQWHDaEdBYtvq7ag",
        "name": "GT1",
        "code": "GT1",
        "type": "PERCENTAGE",
        "value": 20,
        "minimumOrderValue": 500,
        "redemptionLimit": 200,
        "details": [
            "GT1"
        ],
        "title": "GT1",
        "active": true,
        "modes": [
            "SELF",
            "TAKEAWAY",
            "THIRD_PARTY"
        ],
        "module": "FOOD",
        "eligible": null,
        "discountAmount": null,
        "published": false,
        "redemptionFrequency": {
            "unit": "DAY",
            "number": 5
        },
        "discountCouponType": "FREE_USE",
        "entityList": [],
        "publicCoupon": true
    }
]
);
  //const fetchData = ref(null)
  
  // functions that mutate state and trigger updates
  // function increment() {
  //   count.value++
  // }
  
  async function fetchData() {
    const { data, refresh, status } = await useFetch(
      "https://catfact.ninja/fact"
    );
    console.log("data", data.data, data.value);
  
    //const data1 = await data.json()
  }
  
  // lifecycle hooks
  onMounted(() => {
    console.log(`The initial count is ${count.value}.`);
    fetchData();
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
    