<template>
  <main>
    <h1>Users - {{ Users.length }}</h1>
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
          <tr v-for="(user, index) in Users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";

const Users = ref([
  {
    name: 'username1',
    email: 'user@email.com',
    phone: '0123456789',
  },
  {
    name: 'username2',
    email: 'user@email.com',
    phone: '0123456789',
  },
  {
    name: 'username3',
    email: 'user@email.com',
    phone: '0123456789',
  },
])
</script>

<style scoped lang="scss">
main{
  padding: 30px;
  height: 100vh;
  h1{
    font-size: 20px;
  }
  div.table{
    margin: 20px 0;
    table{
      border-collapse: collapse;
      border: 1px solid #ccc;
      width: 100%;
      max-width: 800px;
      gap: 10px;
      color: #555;
      thead{
        background-color: #fafaff;
      }
      td{
        padding: 5px;
        border-right: 1px solid #ccc;
        border-bottom: 1px solid #ccc;
      }
    }
  }
}
</style>