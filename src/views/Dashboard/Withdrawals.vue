<template>
  <main>
    <h1>Withdrawal - {{ Withdrawals.length }}</h1>
    <div class="table">
      <table id="myTable" class="display">
        <thead>
          <tr>
            <td>Name</td>
            <td>Withdrawal Amount</td>
            <td>Status</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(withdraw, index) in Withdrawals" :key="index">
            <td>{{ withdraw.name }}</td>
            <td>N{{ withdraw.amount }}</td>
            <td>
              <div class="action" v-if="action">
                <button class="app" @click="action=false, approved=true">Approve</button>
                <button class="rej" @click="action=false, approved=false">Reject</button>
              </div>
              <p class="status" v-else>
                <span v-if="approved">Approved</span>
                <span v-else>Rejected</span>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<script setup>
import { ref } from "vue";
const action = ref(true)
const approved = ref(true)

const Withdrawals = ref([
  {
    name: 'username1',
    amount: 25000,
    status: 'Approved'
  },
]);

$(document).ready(function () {
      $('#myTable').DataTable();
    });
</script>

<style scoped lang="scss">
main{
  padding: 30px;
  height: 100vh;
  @media(max-width: 710px){
    padding: 30px 20px;
  }
  h1{
    font-size: 20px;
  }
  div.action{
    display: flex;
    gap: 10px;
    button{
      height: 40px;
      padding: 0px 10px;
      font-size: 12px;
      cursor: pointer;
      color: #fff;
      border: none;
      border-radius: 8px;
    }
    button.app{
      background-color: rgb(114, 190, 0);
    }
    button.rej{
      background-color: red;
    }
  }
  div.table{
    margin: 20px 0;
      @media(max-width: 710px){
        overflow-x: scroll;
      }
    // table{
    //   border-collapse: collapse;
    //   border: 1px solid #ccc;
    //   width: 100%;
    //   max-width: 800px;
    //   min-width: fit-content;
    //   gap: 10px;
    //   color: #555;
    //   thead{
    //     background-color: #fafaff;
    //   }
    //   td{
    //     padding: 5px;
    //     border-right: 1px solid #ccc;
    //     border-bottom: 1px solid #ccc;
    //     font-size: 14px;
    //     @media(max-width: 710px){
    //       padding: 10px 5px;
    //     }
    //   }
    // }
  }
}
</style>