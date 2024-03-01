<template>
  <main>
    <div class="list">
      <div class="top">
        <h1>Agents</h1>
      </div>
      <div class="table">
        <table id="myTable" class="display">
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Status</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(agent, index) in Agents" :key="index" @click="showAgent = true">
              <td>{{ agent.data.agent.name }}</td>
              <td>{{ agent.data.agent.user.email }}</td>
              <td>
                <span class="status">{{ agent.message }}</span>
              </td>
            </tr>
          </tbody>
        </table>
        <Loader v-if="loading"/>
      </div>
    </div>
    <div class="modal" v-if="showAgent">
      <div class="container" v-for="(agent, index) in Agents" :key="index">
        <i class="bi bi-x-lg" @click="showAgent = false"></i>
        <div class="form">
        <div class="tp">
          <img src="@/assets/dp.jpg" alt="">
          <div class="info">
            <p class="bold">{{ agent.data.agent.name }}</p>
            <p class="light">{{ agent.data.agent.user.email }}</p>
            <p class="light">{{ agent.data.agent.user.phoneNumber }}</p>
            <p class="light">{{ agent.data.agent.gender }}</p>
          </div>
        </div>
        <h3>About</h3>
        <p class="txt">
          {{ agent.data.agent.about }}
        </p>
        <h3>Location</h3>
        <p class="txt">
          {{ agent.data.agent.city }}, {{ agent.data.agent.country }}
        </p>
        <h3>ID Verification</h3>
        <img src="@/assets/dp.jpg" alt="">
        <div class="verify">
          <p class="stat" v-if="agent.status">Verified <i class="bi bi-patch-check-fill"></i></p>
          <button v-else @click="agent.status = true, loading = true">Verify</button>
        </div>
      </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
import Loader from "@/components/Loader.vue"
const loading = ref(false)
const showAgent = ref(false);

const Agents = ref([
{
  "status": true,
  "message": "Agent verified",
  "data": {
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
        "__v": 0,
        "isAgent": true
      },
      "name": "Derrick Koko",
      "gender": "Male",
      "dateOfBirth": "2023-01-01T00:00:00.000Z",
      "about": "This is about Derrick Koko",
      "picture": "@/assets/dp.jpg",
      "country": "Nigeria",
      "city": "Lagos",
      "idPhoto": "Some url to some image",
      "idType": "659457e0b45cc82554bd020b"
    }
  }
},

]);

$(document).ready(function () {
      $('#myTable').DataTable();
    });

</script>

<style scoped lang="scss">
main {
  padding: 30px;
  height: 100vh;
  @media(max-width: 710px){
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
    //     @media(max-width: 710px){
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
    div.container{
      position: relative;
      i{
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
    height: calc(100vh - 100px);
    @media(max-width: 710px){
      width: 100%;
    }
      

      div.tp {
        display: flex;
        gap: 20px;

        img {
          width: 100px;
          height: 100px;
          border-radius: 50%;
        }

        div.info {
          p.bold {
            font-size: 18px;
            font-weight: 600;
            line-height: 1.7;
          }
        }
      }

      h3 {
        margin: 20px 0px 10px;
      }
      img{
        width: 100%;
      }
      p.stat{
        position: relative;
        i{
          position: relative;
          background-color: transparent;
          top: 0;
          color: rgb(81, 254, 0);
          left: 0;
        }
      }
      button{
        height: 52px;
        background-color: #2D2FE4;
        color: #fff;
        padding: 0px 20px;
        border-radius: 8px;
        border: none;
        margin: 10px 0px 0px;
        cursor: pointer;
      }
    }
  }
}</style>