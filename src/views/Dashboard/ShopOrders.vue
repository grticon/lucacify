<template>
  <main>
    <div class="list">
      <div class="top">
        <h1>Shop Orders - {{ ShopOrders.length }}</h1>
      </div>
      <div class="table">
        <table id="myTable" class="display">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Product Name</td>
              <td>Quantity</td>
              <td>Amount</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(order, index) in ShopOrders" :key="index" :for="index" @click="showorder = true">
              <td>{{ order.data.shopOrders[index].agent.name }}</td>
              <td>{{ order.data.shopOrders[index].user.email }}</td>
              <td>
                <span class="status">{{ order.data.shopOrders[index].product.name }}</span>
              </td>
              <td>
                <span class="status">{{ order.data.shopOrders[index].quantity }}</span>
              </td>
              <td>
                <span class="status">{{ order.data.shopOrders[index].total }}</span>
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
        <div class="form" v-for="(order, index) in ShopOrders" :key="index" :for="index">
          <h3>Order Summary</h3>
          <p class="bold">
            Username - {{ order.data.shopOrders[index].user.username }}
          </p>
          <p class="txt">
            Product - {{ order.data.shopOrders[index].product.name }}
          </p>
          <p class="txt">Price - {{ order.data.shopOrders[index].product.price }}</p>
          <p class="txt">Quantity - {{ order.data.shopOrders[index].quantity }}</p>
          <p class="txt">Total - {{ order.data.shopOrders[index].total }}</p>
          <h3>Location</h3>
          <p class="txt">
            {{ order.data.shopOrders[index].address }}, {{ order.data.shopOrders[index].product.agent.city }} {{
              order.data.shopOrders[index].product.agent.country }}
          </p>
          <h3>Contact details</h3>
          <p class="txt">
            {{ order.data.shopOrders[index].agent.name }}
          </p>
          <p class="txt">
            {{ order.data.shopOrders[index].user.email }}
          </p>
          <p class="txt">
            {{ order.data.shopOrders[index].user.phoneNumber }}
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

const ShopOrders = ref([
  {
    "status": true,
    "message": "Shop orders retrieved successfully",
    "data": {
      "shopOrders": [
        {
          "isPaid": true,
          "isAccepted": false,
          "isRejected": true,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isDelivered": false,
          "_id": "65a7794e7562cca7f63b553e",
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
          "address": "Dynamo Junction",
          "product": {
            "inStock": true,
            "images": [
              "Some url to some image",
              "Some url to some image"
            ],
            "_id": "659fa4cb558678325b6e3453",
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
            "name": "Dog Chain",
            "price": 5000,
            "description": "This describes the dog chain",
            "quantity": 5,
            "createdAt": "2024-01-11T08:20:27.251Z",
            "updatedAt": "2024-01-11T08:20:27.251Z",
            "__v": 0
          },
          "quantity": 2,
          "total": 10000,
          "createdAt": "2024-01-17T06:53:02.574Z",
          "updatedAt": "2024-01-17T07:01:32.191Z"
        },
        {
          "isPaid": true,
          "isAccepted": true,
          "isRejected": false,
          "isOngoing": true,
          "userMarkedDelivered": true,
          "agentMarkedDelivered": true,
          "isDelivered": true,
          "_id": "65a77b30d14e39b286148d12",
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
          "address": "Dynamo Junction",
          "product": {
            "inStock": true,
            "images": [
              "Some url to some image",
              "Some url to some image"
            ],
            "_id": "659fa4cb558678325b6e3453",
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
            "name": "Dog Chain",
            "price": 5000,
            "description": "This describes the dog chain",
            "quantity": 5,
            "createdAt": "2024-01-11T08:20:27.251Z",
            "updatedAt": "2024-01-11T08:20:27.251Z",
            "__v": 0
          },
          "quantity": 1,
          "total": 5000,
          "createdAt": "2024-01-17T07:01:04.651Z",
          "updatedAt": "2024-01-25T07:27:33.125Z"
        },
        {
          "isPaid": true,
          "isAccepted": false,
          "isRejected": false,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isDelivered": false,
          "_id": "65c0d180d228700034dd4656",
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
          "address": "Amaokpala,  Nigeria",
          "product": {
            "inStock": true,
            "images": [
              "Some url to some image",
              "Some url to some image"
            ],
            "_id": "659fa4cb558678325b6e3453",
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
            "name": "Dog Chain",
            "price": 5000,
            "description": "This describes the dog chain",
            "quantity": 5,
            "createdAt": "2024-01-11T08:20:27.251Z",
            "updatedAt": "2024-01-11T08:20:27.251Z",
            "__v": 0
          },
          "quantity": 1,
          "total": 5000,
          "createdAt": "2024-02-05T12:16:00.726Z",
          "updatedAt": "2024-02-05T12:16:00.726Z"
        },
        {
          "isPaid": true,
          "isAccepted": false,
          "isRejected": false,
          "isOngoing": false,
          "userMarkedDelivered": false,
          "agentMarkedDelivered": false,
          "isDelivered": false,
          "_id": "65c0ea4604752100350dddb0",
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
          "address": "Ndiowu,  Nigeria",
          "product": {
            "inStock": true,
            "images": [
              "Some url to some image",
              "Some url to some image"
            ],
            "_id": "659fa4cb558678325b6e3453",
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
            "name": "Dog Chain",
            "price": 5000,
            "description": "This describes the dog chain",
            "quantity": 5,
            "createdAt": "2024-01-11T08:20:27.251Z",
            "updatedAt": "2024-01-11T08:20:27.251Z",
            "__v": 0
          },
          "quantity": 1,
          "total": 5000,
          "createdAt": "2024-02-05T14:01:42.942Z",
          "updatedAt": "2024-02-05T14:01:42.942Z"
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
}</style>