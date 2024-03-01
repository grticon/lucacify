<template>
  <main>
    <div class="list">
      <div class="top">
        <h1>Services - {{ Orders.length }}</h1>
      </div>
      <div class="table">
        <table id="myTable" class="display">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Service</td>
              <td>Package</td>
              <td>Amount</td>
              <td>Is Completed</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in Orders" :key="index" :for="index" @click="showorder = true">
              <td>{{ order.data.orders[index].agent.name }}</td>
              <td>{{ order.data.orders[index].user.email }}</td>
              <td>
                {{ order.data.orders[index].package.service.serviceType.name }}
              </td>
              <td>
                {{ order.data.orders[index].package.name }}
              </td>
              <td>
                {{ order.data.orders[index].fee }}
              </td>
              <td>
                <span class="cent">
                  <i class="bi bi-check-circle-fill" v-if="order.data.orders.isCompleted = true"></i>
                  <i class="bi bi-x" v-else></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Loader v-if="loading" />
      </div>
    </div>
    <div class="modal" v-if="showorder">
        <div class="container">
          <i class="bi bi-x-lg" @click="showorder = false"></i>
          <div class="form" v-for="(order, index) in Orders" :key="index" :for="index">
            <h3>Order Summary</h3>
            <p class="txt">
              Service ordered - {{ order.data.orders[index].package.service.serviceType.name }}
            </p>
            <p class="txt">
              Package - {{ order.data.orders[index].package.name }}
            </p>
            <p class="txt">Price - N{{ order.data.orders[index].fee }}</p>
            <p class="txt ct">Is Completed - 
              <span class="cent frm">
                  <i class="bi bi-check-circle-fill" v-if="order.data.orders.isCompleted = true"></i>
                  <i class="bi bi-x" v-else></i>
                </span>
            </p>
            <h3>Location</h3>
            <p class="txt">
              {{ order.data.orders[index].agent.city }}, {{ order.data.orders[index].agent.country }}
            </p>
            <h3>Contact details</h3>
            <p class="txt">Username - 
              {{ order.data.orders[index].user.username }}
            </p>
            <p class="txt">Name - 
              {{ order.data.orders[index].agent.name }}
            </p>
            <p class="txt">Email - 
              {{ order.data.orders[index].user.email }}
            </p>
            <p class="txt">Phone - 
              {{ order.data.orders[index].user.phoneNumber }}
            </p>
          </div>
        </div>
      </div> 
  </main>
</template>
  
<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue"
const loading = ref(false)
const showorder = ref(false)

const Orders = ref([
  {
    "status": true,
    "message": "Orders retrieved successfully",
    "data": {
      "orders": [
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": false,
          "isRejected": true,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "659cfd0863d9089bac92dba7",
          "user": {
            "isAdmin": false,
            "profileImage": "",
            "isAgent": true,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "659cec49177839773d2b7ac5",
            "username": "techwithderrick",
            "email": "kokoderrick0@gmail.com",
            "phoneNumber": "+2349090870844",
            "firebaseId": "AD6D8F0S0F8SG7",
            "deviceId": "D4NYDFNT53D",
            "password": "$2b$10$ifeXt.8T3CVw9cwRuBTKt.pjRF.gmJSfLs5R3yPLutc3vlAEh7ZwS",
            "createdAt": "2024-01-09T06:48:41.393Z",
            "updatedAt": "2024-01-25T06:28:51.795Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d253e89cb22e280883c0",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 2,
            "name": "Intermediate",
            "description": "This is about the intermediate package",
            "price": 20000,
            "duration": "2d",
            "createdAt": "2024-01-05T09:56:35.499Z",
            "updatedAt": "2024-01-05T09:56:35.499Z",
            "__v": 0
          },
          "pickupLocation": "16, Kehinde Lawrence Street, Beckley Estate, Ifako-Ijaiye, Lagos",
          "pickupTime": "2024-01-09T11:30:00.000Z",
          "dropoffTime": "2024-01-11T11:30:00.000Z",
          "fee": 25478,
          "createdAt": "2024-01-09T08:00:08.264Z",
          "updatedAt": "2024-01-09T08:19:12.052Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isCompleted": true,
          "paymentReleased": false,
          "_id": "659d01b05768d1a6908edf38",
          "user": {
            "isAdmin": false,
            "profileImage": "",
            "isAgent": true,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "659cec49177839773d2b7ac5",
            "username": "techwithderrick",
            "email": "kokoderrick0@gmail.com",
            "phoneNumber": "+2349090870844",
            "firebaseId": "AD6D8F0S0F8SG7",
            "deviceId": "D4NYDFNT53D",
            "password": "$2b$10$ifeXt.8T3CVw9cwRuBTKt.pjRF.gmJSfLs5R3yPLutc3vlAEh7ZwS",
            "createdAt": "2024-01-09T06:48:41.393Z",
            "updatedAt": "2024-01-25T06:28:51.795Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d253e89cb22e280883c0",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 2,
            "name": "Intermediate",
            "description": "This is about the intermediate package",
            "price": 20000,
            "duration": "2d",
            "createdAt": "2024-01-05T09:56:35.499Z",
            "updatedAt": "2024-01-05T09:56:35.499Z",
            "__v": 0
          },
          "pickupLocation": "16, Kehinde Lawrence Street, Beckley Estate, Ifako-Ijaiye, Lagos",
          "pickupTime": "2024-01-09T11:30:00.000Z",
          "dropoffTime": "2024-01-12T11:30:00.000Z",
          "fee": 25478,
          "createdAt": "2024-01-09T08:20:00.232Z",
          "updatedAt": "2024-01-10T20:36:47.383Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isCompleted": true,
          "paymentReleased": false,
          "_id": "65c636603eac0400355a2b5a",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d219e89cb22e280883bb",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 1,
            "name": "Beginner",
            "description": "This is about the beginners package",
            "price": 10000,
            "duration": "1d",
            "createdAt": "2024-01-05T09:55:37.506Z",
            "updatedAt": "2024-02-13T09:35:37.917Z",
            "__v": 0
          },
          "pickupLocation": "Enugu, Enugu,",
          "pickupTime": "2024-02-09T16:27:00.000Z",
          "dropoffTime": "2024-02-21T15:27:00.000Z",
          "fee": 11000,
          "purchaseId": "TPBUDKOXWCS8UGZ",
          "createdAt": "2024-02-09T14:27:44.685Z",
          "updatedAt": "2024-02-11T18:55:18.919Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "65c8bdf5ac3d030035391f04",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d219e89cb22e280883bb",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 1,
            "name": "Beginner",
            "description": "This is about the beginners package",
            "price": 10000,
            "duration": "1d",
            "createdAt": "2024-01-05T09:55:37.506Z",
            "updatedAt": "2024-02-13T09:35:37.917Z",
            "__v": 0
          },
          "pickupLocation": "Enugu Escarpment, Enugu,",
          "pickupTime": "2024-02-11T14:30:00.000Z",
          "dropoffTime": "2024-02-29T16:30:00.000Z",
          "fee": 11000,
          "purchaseId": "GF3D1YWL3EHQ2NM",
          "createdAt": "2024-02-11T12:30:45.027Z",
          "updatedAt": "2024-03-01T12:30:37.168Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": false,
          "isRejected": false,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "65c8cb37ac3d0300353920f3",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d219e89cb22e280883bb",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 1,
            "name": "Beginner",
            "description": "This is about the beginners package",
            "price": 10000,
            "duration": "1d",
            "createdAt": "2024-01-05T09:55:37.506Z",
            "updatedAt": "2024-02-13T09:35:37.917Z",
            "__v": 0
          },
          "pickupLocation": "Enugu, Enugu,",
          "pickupTime": "2024-02-11T14:26:00.000Z",
          "dropoffTime": "2024-02-12T14:26:00.000Z",
          "fee": 11000,
          "purchaseId": "MLMWQS0PU9Z4R44",
          "createdAt": "2024-02-11T13:27:19.808Z",
          "updatedAt": "2024-02-11T13:27:19.808Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isCompleted": true,
          "paymentReleased": false,
          "_id": "65cb7b6817707b0035cd666e",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d219e89cb22e280883bb",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 1,
            "name": "Beginner",
            "description": "This is about the beginners package",
            "price": 10000,
            "duration": "1d",
            "createdAt": "2024-01-05T09:55:37.506Z",
            "updatedAt": "2024-02-13T09:35:37.917Z",
            "__v": 0
          },
          "pickupLocation": "Enugu Escarpment, Enugu,",
          "pickupTime": "2024-02-13T14:00:00.000Z",
          "dropoffTime": "2024-02-21T18:54:00.000Z",
          "fee": 20000,
          "purchaseId": "WC4YM17KJ1BE95W",
          "createdAt": "2024-02-13T14:23:36.852Z",
          "updatedAt": "2024-02-13T17:20:34.980Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": false,
          "isRejected": true,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "65cb7bc917707b0035cd6682",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "package": {
            "_id": "6597d219e89cb22e280883bb",
            "service": {
              "isLive": true,
              "_id": "6597d14a64089012d0b505e7",
              "serviceType": {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              "agent": {
                "services": [
                  {
                    "_id": "65945880b45cc82554bd0245",
                    "name": "Dog Walkers",
                    "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "65945896b45cc82554bd0249",
                    "name": "Vets",
                    "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                    "__v": 0
                  },
                  {
                    "_id": "659458adb45cc82554bd024d",
                    "name": "Pet Trainer",
                    "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                    "__v": 0
                  }
                ],
                "petTypes": [
                  {
                    "_id": "65945813b45cc82554bd0221",
                    "name": "Dogs",
                    "__v": 0
                  },
                  {
                    "_id": "65945819b45cc82554bd0225",
                    "name": "Cats",
                    "__v": 0
                  },
                  {
                    "_id": "65945840b45cc82554bd0239",
                    "name": "Rabbit",
                    "__v": 0
                  }
                ],
                "isVerified": true,
                "isReachable": false,
                "_id": "65970b6ffa22b23bb484036d",
                "user": {
                  "isAdmin": false,
                  "profileImage": "",
                  "isAgent": true,
                  "isReachable": false,
                  "hasPets": true,
                  "isVerified": true,
                  "isDeleted": false,
                  "_id": "6594826a44e8b32d2c809942",
                  "username": "derrickkoko",
                  "email": "kokoderrick3@gmail.com",
                  "phoneNumber": "+2349012345678",
                  "firebaseId": "AD6D8F0S0F8S7F",
                  "deviceId": "D4NYDFNT57F",
                  "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                  "createdAt": "2024-01-02T21:38:50.115Z",
                  "updatedAt": "2024-01-21T11:55:25.089Z",
                  "__v": 0
                },
                "name": "Derrick Koko",
                "gender": "Male",
                "dateOfBirth": "2023-01-01T00:00:00.000Z",
                "about": "This is about Derrick Koko",
                "picture": "Some url to some image",
                "country": "Nigeria",
                "city": "Lagos",
                "createdAt": "2024-01-04T19:47:59.740Z",
                "updatedAt": "2024-02-11T18:56:52.805Z",
                "__v": 8,
                "idPhoto": "Some url to some image",
                "idType": {
                  "_id": "659457e0b45cc82554bd020b",
                  "name": "NIN",
                  "__v": 0
                }
              },
              "levelsAmount": 2,
              "createdAt": "2024-01-05T09:52:10.125Z",
              "updatedAt": "2024-01-05T10:00:40.355Z",
              "__v": 0
            },
            "level": 1,
            "name": "Beginner",
            "description": "This is about the beginners package",
            "price": 10000,
            "duration": "1d",
            "createdAt": "2024-01-05T09:55:37.506Z",
            "updatedAt": "2024-02-13T09:35:37.917Z",
            "__v": 0
          },
          "pickupLocation": "Enugu Escarpment, Enugu,",
          "pickupTime": "2024-02-13T14:00:00.000Z",
          "dropoffTime": "2024-02-21T18:54:00.000Z",
          "fee": 200,
          "purchaseId": "WSO38QD6MSV1UK3",
          "createdAt": "2024-02-13T14:25:13.222Z",
          "updatedAt": "2024-02-13T17:18:00.353Z"
        }
      ],
      "vetOrders": [
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": false,
          "isRejected": true,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "659d73fe6a23e7314e520293",
          "user": {
            "isAdmin": false,
            "profileImage": "",
            "isAgent": true,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "659cec49177839773d2b7ac5",
            "username": "techwithderrick",
            "email": "kokoderrick0@gmail.com",
            "phoneNumber": "+2349090870844",
            "firebaseId": "AD6D8F0S0F8SG7",
            "deviceId": "D4NYDFNT53D",
            "password": "$2b$10$ifeXt.8T3CVw9cwRuBTKt.pjRF.gmJSfLs5R3yPLutc3vlAEh7ZwS",
            "createdAt": "2024-01-09T06:48:41.393Z",
            "updatedAt": "2024-01-25T06:28:51.795Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "vetService": {
            "sessionTypes": [
              {
                "_id": "659458e4b45cc82554bd0255",
                "name": "Consultations",
                "__v": 0
              },
              {
                "_id": "659458eab45cc82554bd0259",
                "name": "Treatments",
                "__v": 0
              }
            ],
            "contactMediums": [
              {
                "_id": "6597e04e309a4c2018e880d2",
                "name": "Chat",
                "__v": 0
              }
            ],
            "isLive": true,
            "_id": "6597e277d1ccb725e44bfd5d",
            "serviceType": {
              "_id": "65945896b45cc82554bd0249",
              "name": "Vets",
              "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
              "__v": 0
            },
            "agent": {
              "services": [
                {
                  "_id": "65945880b45cc82554bd0245",
                  "name": "Dog Walkers",
                  "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                  "__v": 0
                },
                {
                  "_id": "65945896b45cc82554bd0249",
                  "name": "Vets",
                  "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                  "__v": 0
                },
                {
                  "_id": "659458adb45cc82554bd024d",
                  "name": "Pet Trainer",
                  "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                  "__v": 0
                }
              ],
              "petTypes": [
                {
                  "_id": "65945813b45cc82554bd0221",
                  "name": "Dogs",
                  "__v": 0
                },
                {
                  "_id": "65945819b45cc82554bd0225",
                  "name": "Cats",
                  "__v": 0
                },
                {
                  "_id": "65945840b45cc82554bd0239",
                  "name": "Rabbit",
                  "__v": 0
                }
              ],
              "isVerified": true,
              "isReachable": false,
              "_id": "65970b6ffa22b23bb484036d",
              "user": {
                "isAdmin": false,
                "profileImage": "",
                "isAgent": true,
                "isReachable": false,
                "hasPets": true,
                "isVerified": true,
                "isDeleted": false,
                "_id": "6594826a44e8b32d2c809942",
                "username": "derrickkoko",
                "email": "kokoderrick3@gmail.com",
                "phoneNumber": "+2349012345678",
                "firebaseId": "AD6D8F0S0F8S7F",
                "deviceId": "D4NYDFNT57F",
                "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                "createdAt": "2024-01-02T21:38:50.115Z",
                "updatedAt": "2024-01-21T11:55:25.089Z",
                "__v": 0
              },
              "name": "Derrick Koko",
              "gender": "Male",
              "dateOfBirth": "2023-01-01T00:00:00.000Z",
              "about": "This is about Derrick Koko",
              "picture": "Some url to some image",
              "country": "Nigeria",
              "city": "Lagos",
              "createdAt": "2024-01-04T19:47:59.740Z",
              "updatedAt": "2024-02-11T18:56:52.805Z",
              "__v": 8,
              "idPhoto": "Some url to some image",
              "idType": {
                "_id": "659457e0b45cc82554bd020b",
                "name": "NIN",
                "__v": 0
              }
            },
            "price": 13000,
            "createdAt": "2024-01-05T11:05:27.241Z",
            "updatedAt": "2024-02-13T09:19:23.771Z",
            "__v": 0
          },
          "sessionTime": "2024-01-12T11:30:00.000Z",
          "fee": 25478,
          "createdAt": "2024-01-09T16:27:42.170Z",
          "updatedAt": "2024-01-09T18:41:59.064Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isCompleted": true,
          "paymentReleased": false,
          "_id": "659d938c0229c642a5bf8328",
          "user": {
            "isAdmin": false,
            "profileImage": "",
            "isAgent": true,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "659cec49177839773d2b7ac5",
            "username": "techwithderrick",
            "email": "kokoderrick0@gmail.com",
            "phoneNumber": "+2349090870844",
            "firebaseId": "AD6D8F0S0F8SG7",
            "deviceId": "D4NYDFNT53D",
            "password": "$2b$10$ifeXt.8T3CVw9cwRuBTKt.pjRF.gmJSfLs5R3yPLutc3vlAEh7ZwS",
            "createdAt": "2024-01-09T06:48:41.393Z",
            "updatedAt": "2024-01-25T06:28:51.795Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "vetService": {
            "sessionTypes": [
              {
                "_id": "659458e4b45cc82554bd0255",
                "name": "Consultations",
                "__v": 0
              },
              {
                "_id": "659458eab45cc82554bd0259",
                "name": "Treatments",
                "__v": 0
              }
            ],
            "contactMediums": [
              {
                "_id": "6597e04e309a4c2018e880d2",
                "name": "Chat",
                "__v": 0
              }
            ],
            "isLive": true,
            "_id": "6597e277d1ccb725e44bfd5d",
            "serviceType": {
              "_id": "65945896b45cc82554bd0249",
              "name": "Vets",
              "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
              "__v": 0
            },
            "agent": {
              "services": [
                {
                  "_id": "65945880b45cc82554bd0245",
                  "name": "Dog Walkers",
                  "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                  "__v": 0
                },
                {
                  "_id": "65945896b45cc82554bd0249",
                  "name": "Vets",
                  "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                  "__v": 0
                },
                {
                  "_id": "659458adb45cc82554bd024d",
                  "name": "Pet Trainer",
                  "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                  "__v": 0
                }
              ],
              "petTypes": [
                {
                  "_id": "65945813b45cc82554bd0221",
                  "name": "Dogs",
                  "__v": 0
                },
                {
                  "_id": "65945819b45cc82554bd0225",
                  "name": "Cats",
                  "__v": 0
                },
                {
                  "_id": "65945840b45cc82554bd0239",
                  "name": "Rabbit",
                  "__v": 0
                }
              ],
              "isVerified": true,
              "isReachable": false,
              "_id": "65970b6ffa22b23bb484036d",
              "user": {
                "isAdmin": false,
                "profileImage": "",
                "isAgent": true,
                "isReachable": false,
                "hasPets": true,
                "isVerified": true,
                "isDeleted": false,
                "_id": "6594826a44e8b32d2c809942",
                "username": "derrickkoko",
                "email": "kokoderrick3@gmail.com",
                "phoneNumber": "+2349012345678",
                "firebaseId": "AD6D8F0S0F8S7F",
                "deviceId": "D4NYDFNT57F",
                "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                "createdAt": "2024-01-02T21:38:50.115Z",
                "updatedAt": "2024-01-21T11:55:25.089Z",
                "__v": 0
              },
              "name": "Derrick Koko",
              "gender": "Male",
              "dateOfBirth": "2023-01-01T00:00:00.000Z",
              "about": "This is about Derrick Koko",
              "picture": "Some url to some image",
              "country": "Nigeria",
              "city": "Lagos",
              "createdAt": "2024-01-04T19:47:59.740Z",
              "updatedAt": "2024-02-11T18:56:52.805Z",
              "__v": 8,
              "idPhoto": "Some url to some image",
              "idType": {
                "_id": "659457e0b45cc82554bd020b",
                "name": "NIN",
                "__v": 0
              }
            },
            "price": 13000,
            "createdAt": "2024-01-05T11:05:27.241Z",
            "updatedAt": "2024-02-13T09:19:23.771Z",
            "__v": 0
          },
          "sessionTime": "2024-01-12T11:30:00.000Z",
          "fee": 25478,
          "createdAt": "2024-01-09T18:42:20.043Z",
          "updatedAt": "2024-01-10T20:54:54.731Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isCompleted": true,
          "paymentReleased": false,
          "_id": "65cf567f6a7b4a0035f3fe96",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945880b45cc82554bd0245",
                "name": "Dog Walkers",
                "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                "__v": 0
              },
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945840b45cc82554bd0239",
                "name": "Rabbit",
                "__v": 0
              }
            ],
            "isVerified": true,
            "isReachable": false,
            "_id": "65970b6ffa22b23bb484036d",
            "user": {
              "isAdmin": false,
              "profileImage": "",
              "isAgent": true,
              "isReachable": false,
              "hasPets": true,
              "isVerified": true,
              "isDeleted": false,
              "_id": "6594826a44e8b32d2c809942",
              "username": "derrickkoko",
              "email": "kokoderrick3@gmail.com",
              "phoneNumber": "+2349012345678",
              "firebaseId": "AD6D8F0S0F8S7F",
              "deviceId": "D4NYDFNT57F",
              "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
              "createdAt": "2024-01-02T21:38:50.115Z",
              "updatedAt": "2024-01-21T11:55:25.089Z",
              "__v": 0
            },
            "name": "Derrick Koko",
            "gender": "Male",
            "dateOfBirth": "2023-01-01T00:00:00.000Z",
            "about": "This is about Derrick Koko",
            "picture": "Some url to some image",
            "country": "Nigeria",
            "city": "Lagos",
            "createdAt": "2024-01-04T19:47:59.740Z",
            "updatedAt": "2024-02-11T18:56:52.805Z",
            "__v": 8,
            "idPhoto": "Some url to some image",
            "idType": {
              "_id": "659457e0b45cc82554bd020b",
              "name": "NIN",
              "__v": 0
            }
          },
          "vetService": {
            "sessionTypes": [
              {
                "_id": "659458e4b45cc82554bd0255",
                "name": "Consultations",
                "__v": 0
              },
              {
                "_id": "659458eab45cc82554bd0259",
                "name": "Treatments",
                "__v": 0
              }
            ],
            "contactMediums": [
              {
                "_id": "6597e04e309a4c2018e880d2",
                "name": "Chat",
                "__v": 0
              }
            ],
            "isLive": true,
            "_id": "6597e277d1ccb725e44bfd5d",
            "serviceType": {
              "_id": "65945896b45cc82554bd0249",
              "name": "Vets",
              "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
              "__v": 0
            },
            "agent": {
              "services": [
                {
                  "_id": "65945880b45cc82554bd0245",
                  "name": "Dog Walkers",
                  "image": "https://i.pinimg.com/564x/af/fe/0a/affe0a1c6bb2d3027882bf69fa882b10.jpg",
                  "__v": 0
                },
                {
                  "_id": "65945896b45cc82554bd0249",
                  "name": "Vets",
                  "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                  "__v": 0
                },
                {
                  "_id": "659458adb45cc82554bd024d",
                  "name": "Pet Trainer",
                  "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                  "__v": 0
                }
              ],
              "petTypes": [
                {
                  "_id": "65945813b45cc82554bd0221",
                  "name": "Dogs",
                  "__v": 0
                },
                {
                  "_id": "65945819b45cc82554bd0225",
                  "name": "Cats",
                  "__v": 0
                },
                {
                  "_id": "65945840b45cc82554bd0239",
                  "name": "Rabbit",
                  "__v": 0
                }
              ],
              "isVerified": true,
              "isReachable": false,
              "_id": "65970b6ffa22b23bb484036d",
              "user": {
                "isAdmin": false,
                "profileImage": "",
                "isAgent": true,
                "isReachable": false,
                "hasPets": true,
                "isVerified": true,
                "isDeleted": false,
                "_id": "6594826a44e8b32d2c809942",
                "username": "derrickkoko",
                "email": "kokoderrick3@gmail.com",
                "phoneNumber": "+2349012345678",
                "firebaseId": "AD6D8F0S0F8S7F",
                "deviceId": "D4NYDFNT57F",
                "password": "$2b$10$ORaZWzcF2VV3f2V7r8PBVeUFIn.hCZ7VxW524wpCcDT2uBGKXqq6K",
                "createdAt": "2024-01-02T21:38:50.115Z",
                "updatedAt": "2024-01-21T11:55:25.089Z",
                "__v": 0
              },
              "name": "Derrick Koko",
              "gender": "Male",
              "dateOfBirth": "2023-01-01T00:00:00.000Z",
              "about": "This is about Derrick Koko",
              "picture": "Some url to some image",
              "country": "Nigeria",
              "city": "Lagos",
              "createdAt": "2024-01-04T19:47:59.740Z",
              "updatedAt": "2024-02-11T18:56:52.805Z",
              "__v": 8,
              "idPhoto": "Some url to some image",
              "idType": {
                "_id": "659457e0b45cc82554bd020b",
                "name": "NIN",
                "__v": 0
              }
            },
            "price": 13000,
            "createdAt": "2024-01-05T11:05:27.241Z",
            "updatedAt": "2024-02-13T09:19:23.771Z",
            "__v": 0
          },
          "sessionTime": "2024-02-17T17:34:00.000Z",
          "fee": 13000,
          "createdAt": "2024-02-16T12:35:11.638Z",
          "updatedAt": "2024-02-19T10:49:09.626Z"
        },
        {
          "shouldNotify": true,
          "isPaid": true,
          "isAccepted": false,
          "isRejected": false,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isCompleted": false,
          "paymentReleased": false,
          "_id": "65d1dccbe6f8460035c86dd2",
          "user": {
            "isAdmin": false,
            "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1706873967/public/yxths8cuhx7e0sbhih03.jpg",
            "isAgent": false,
            "isReachable": false,
            "hasPets": true,
            "isVerified": true,
            "isDeleted": false,
            "_id": "65bcd4745b9a7e00352fa43c",
            "username": "Nazz",
            "email": "stephenagbo001@gmail.com",
            "phoneNumber": "08065858469",
            "firebaseId": "6Y3EQpJYb3cQUqrsXRl9qFvXmMs2",
            "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
            "password": "$2b$10$zpneC6QX7UO5iIVq9OONqO3916EONBZ/uJO3WrBP7Tl/Qu8KF7HYC",
            "createdAt": "2024-02-02T11:39:32.657Z",
            "updatedAt": "2024-02-02T12:04:15.296Z",
            "__v": 0
          },
          "agent": {
            "services": [
              {
                "_id": "65945896b45cc82554bd0249",
                "name": "Vets",
                "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                "__v": 0
              },
              {
                "_id": "659458adb45cc82554bd024d",
                "name": "Pet Trainer",
                "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                "__v": 0
              }
            ],
            "petTypes": [
              {
                "_id": "65945813b45cc82554bd0221",
                "name": "Dogs",
                "__v": 0
              },
              {
                "_id": "65945819b45cc82554bd0225",
                "name": "Cats",
                "__v": 0
              },
              {
                "_id": "65945832b45cc82554bd0231",
                "name": "Parrot",
                "__v": 0
              }
            ],
            "isVerified": false,
            "isReachable": false,
            "_id": "65c8b1a1ac3d030035391e36",
            "user": {
              "isAdmin": false,
              "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1707651122/public/wc1ssyor93y57mfeodpv.jpg",
              "isAgent": true,
              "isReachable": false,
              "hasPets": false,
              "isVerified": true,
              "isDeleted": false,
              "_id": "65c8b038ac3d030035391e2f",
              "username": "bassy",
              "email": "doxageneral1@gmail.com",
              "phoneNumber": "08052369678",
              "firebaseId": "H2l0jKyOPaciuhOBHwa6sou7vIB2",
              "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
              "password": "$2b$10$6DkSidamRcc1Pvdeky33vukZWAfrE5FhbhzOndl1ZH4HYmKrWS7ni",
              "createdAt": "2024-02-11T11:32:08.617Z",
              "updatedAt": "2024-02-11T11:38:09.418Z",
              "__v": 0
            },
            "createdAt": "2024-02-11T11:38:09.134Z",
            "updatedAt": "2024-02-11T12:05:48.086Z",
            "__v": 2,
            "idPhoto": "http://res.cloudinary.com/do2z93mmw/image/upload/v1707653146/public/hmi5fqpc1t6v2dmavs6i.jpg",
            "idType": {
              "_id": "659457f3b45cc82554bd0213",
              "name": "International passport",
              "__v": 0
            }
          },
          "vetService": {
            "sessionTypes": [
              {
                "_id": "659458eab45cc82554bd0259",
                "name": "Treatments",
                "__v": 0
              },
              {
                "_id": "659458f0b45cc82554bd025d",
                "name": "Prescriptions",
                "__v": 0
              }
            ],
            "contactMediums": [
              {
                "_id": "6597e04e309a4c2018e880d2",
                "name": "Chat",
                "__v": 0
              },
              {
                "_id": "6597e05f309a4c2018e880dc",
                "name": "Voice Call",
                "__v": 0
              }
            ],
            "isLive": true,
            "_id": "65cb5d90ec41980035dc946f",
            "serviceType": {
              "_id": "65945896b45cc82554bd0249",
              "name": "Vets",
              "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
              "__v": 0
            },
            "agent": {
              "services": [
                {
                  "_id": "65945896b45cc82554bd0249",
                  "name": "Vets",
                  "image": "https://i.pinimg.com/564x/b0/72/6b/b0726b5d548c255417432c82741e5428.jpg",
                  "__v": 0
                },
                {
                  "_id": "659458adb45cc82554bd024d",
                  "name": "Pet Trainer",
                  "image": "https://i.pinimg.com/564x/d7/fa/b3/d7fab3513f186afaf02688ef8c2ef7a6.jpg",
                  "__v": 0
                }
              ],
              "petTypes": [
                {
                  "_id": "65945813b45cc82554bd0221",
                  "name": "Dogs",
                  "__v": 0
                },
                {
                  "_id": "65945819b45cc82554bd0225",
                  "name": "Cats",
                  "__v": 0
                },
                {
                  "_id": "65945832b45cc82554bd0231",
                  "name": "Parrot",
                  "__v": 0
                }
              ],
              "isVerified": false,
              "isReachable": false,
              "_id": "65c8b1a1ac3d030035391e36",
              "user": {
                "isAdmin": false,
                "profileImage": "http://res.cloudinary.com/do2z93mmw/image/upload/v1707651122/public/wc1ssyor93y57mfeodpv.jpg",
                "isAgent": true,
                "isReachable": false,
                "hasPets": false,
                "isVerified": true,
                "isDeleted": false,
                "_id": "65c8b038ac3d030035391e2f",
                "username": "bassy",
                "email": "doxageneral1@gmail.com",
                "phoneNumber": "08052369678",
                "firebaseId": "H2l0jKyOPaciuhOBHwa6sou7vIB2",
                "deviceId": "eTkKwYeDTOiVmmwHIZrfIg:APA91bGPEhEO9Xo-0R7yVxSwejM7l3shosQQFxisLMuBPK46259idW5n9Jm9tB_vGUu4TCfeOtnaq_HRpJMmzkxr4SpayWfq37P2c8XRJfHZMA5lBOeyDKZglysJnOInESxw2R4-DK85",
                "password": "$2b$10$6DkSidamRcc1Pvdeky33vukZWAfrE5FhbhzOndl1ZH4HYmKrWS7ni",
                "createdAt": "2024-02-11T11:32:08.617Z",
                "updatedAt": "2024-02-11T11:38:09.418Z",
                "__v": 0
              },
              "createdAt": "2024-02-11T11:38:09.134Z",
              "updatedAt": "2024-02-11T12:05:48.086Z",
              "__v": 2,
              "idPhoto": "http://res.cloudinary.com/do2z93mmw/image/upload/v1707653146/public/hmi5fqpc1t6v2dmavs6i.jpg",
              "idType": {
                "_id": "659457f3b45cc82554bd0213",
                "name": "International passport",
                "__v": 0
              }
            },
            "price": 2500,
            "createdAt": "2024-02-13T12:16:16.450Z",
            "updatedAt": "2024-02-13T12:22:43.216Z",
            "__v": 0
          },
          "sessionTime": "2024-02-21T04:31:00.000Z",
          "fee": 2500,
          "createdAt": "2024-02-18T10:32:43.283Z",
          "updatedAt": "2024-02-18T10:32:43.283Z"
        }
      ]
    }
  }
]);

$(document).ready(function () {
  $('#myTable').DataTable();
});

</script>
  
<style scoped lang="scss">
main {
  padding: 30px;
  height: 100vh;

  @media(max-width: 710px) {
    padding: 30px 20px;
  }

  div.top {
    display: flex;
    justify-content: space-between;
    max-width: 800px;

    @media(max-width: 710px) {
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    h1 {
      font-size: 20px;
    }

    button {
      height: 44px;
      background-color: #2D2FE4;
      color: #fff;
      border: none;
      padding: 0px 20px;
      border-radius: 5px;
      cursor: pointer;
    }
  }

  div.table {
    margin: 20px 0;
    

    @media(max-width: 710px) {
      overflow-x: scroll;
    }

    // table {
    //   border-collapse: collapse;
    //   border: 1px solid #ccc;
    //   width: 100%;
    //   max-width: 800px;
    //   gap: 10px;
    //   color: #555;

    //   thead {
    //     background-color: #fafaff;
    //   }

    //   td {
    //     padding: 5px;
    //     border-right: 1px solid #ccc;
    //     border-bottom: 1px solid #ccc;
    //     font-size: 14px;
    //     cursor: pointer;

    //     @media(max-width: 710px) {
    //       padding: 10px 5px;
    //     }

    //     button {
    //       background-color: #2D2FE4;
    //       color: #fff;
    //       border: none;
    //       height: 40px;
    //       padding: 0px 20px;
    //       border-radius: 8px;

    //     }
    //   }
    // }
  }
 

  div.modal {
    position: absolute;
    width: 100%;
    height: 100vh;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #000a;
    backdrop-filter: blur(3px);
    z-index: 5;
    padding: 50px 20px;

    div.container {
      position: relative;

      i {
        position: absolute;
        top: -40px;
        z-index: 10;
        right: 10px;
        background-color: #fff;
        color: #000;
        padding: 4px 7px;
        border-radius: 50%;
        cursor: pointer;
      }
    }

    div.form {
      width: 600px;
      background-color: #ffffff;
      padding: 20px;
      border-radius: 20px;
      position: relative;
      z-index: 9;
      overflow-y: scroll;
      max-height: calc(100vh - 100px);

      @media(max-width: 710px) {
        width: 100%;
      }

      h3 {
        margin: 20px 0px 10px;
        font-size: 28px;
        color: #334;
      }

      img {
        width: 100%;
      }

      p.txt {
        font-size: 20px;
      }

      p.bold {
        font-size: 20px;
        font-weight: 600;
      }
    }
  }
}
p.ct{
  position: relative;
  display: flex;
  gap: 20px;
}
span.cent.frm{
  position: relative;
  height: 0;
  width: fit-content;
  i{
    position: relative !important;
    top: -3px !important;
    height: fit-content;
  }
  i.bi-x{
    line-height: 1.3;
  }
}
span.cent{
    width: 100%;
    display: flex;
    justify-content: center;
    i.bi-check-circle-fill{
      color: rgb(119, 199, 0) !important;
      font-size: 18px !important;
    }
    i.bi-x{
      color: #fff !important;
      background-color: red !important;
      border-radius: 50%;
      padding: 1px 3px !important;
      line-height: 1.1;
    }
  }
</style>