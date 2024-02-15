<template>
  <main>
    <div class="list" v-if="addAgent">
      <div class="top">
        <h1>Agents - {{ Agents.length }}</h1>
        <button @click="addAgent= false">Add Agent</button>
      </div>
      <div class="table">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(agent, index) in Agents" :key="index">
              <td>{{ agent.name }}</td>
              <td>{{ agent.email }}</td>
              <td>{{ agent.phone }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="form" v-else>
      <form action="" @submit="prevent.submit">
        <p class="desc">Add an agent</p>
        <div class="half">
          <div class="full">
            <label for="firstName">First name</label>
            <input type="text" name="" required id="firstName" v-model="NewAgent.firstName">
          </div>
          <div class="full">
            <label for="lastName">Last name</label>
            <input type="text" name="" required id="lastName" v-model="NewAgent.lastName">
          </div>
        </div>
        <div class="full">
          <label for="emailAddress">Email</label>
          <input type="email" required name="" id="emailAddress" v-model="NewAgent.email">
        </div>
        <div class="full">
          <label for="tel">Phone</label>
          <input type="tel" name="" required id="tel" v-model="NewAgent.tel">
        </div>
        <button @click="addAgent=true">Add Agent</button>
      </form>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const addAgent = ref(true)

const NewAgent = ref([
  {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
  },
]);

const Agents = ref([
  {
    name: 'Agent1',
    email: 'agent@email.com',
    phone: '0123456789',
  },
  {
    name: 'Agent2',
    email: 'agent@email.com',
    phone: '0123456789',
  },
  {
    name: 'Agent3',
    email: 'agent@email.com',
    phone: '0123456789',
  },
]);
</script>

<style scoped lang="scss">
main {
  padding: 30px;
  height: 100vh;

  div.top {
    display: flex;
    justify-content: space-between;
    max-width: 800px;

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

    table {
      border-collapse: collapse;
      border: 1px solid #ccc;
      width: 100%;
      max-width: 800px;
      gap: 10px;
      color: #555;

      thead {
        background-color: #fafaff;
      }

      td {
        padding: 5px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
        font-size: 14px;
      }
    }
  }
  div.form{
    form{
      display: grid;
      box-shadow: 0px 2px 10px #2D2FE450;
      padding: 30px 20px;
      border-radius: 10px;
      gap: 20px;
      max-width: 400px;
      margin: 50px auto;
      p.desc{
        font-size: 18px;
        font-weight: 600;
        margin-bottom: 10px;
      }
      div.half{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 10px;
      }
      div.full{
        display: grid;
        position: relative;
        label{
          font-size: 12px;
          background-color:
           #fff;
           left: 5px;
           top: -10px;
           padding: 3px;
          position: absolute;
        }
        input{
          height: 44px;
          border: 1px solid #555;
          border-radius: 5px;
        }
      }
      button{
        height: 44px;
        border-radius: 5px;
        background-color: #2D2FE4;
        color: #ffffff;
        border: none;
        cursor: pointer;
      }
    }
  }
}
</style>