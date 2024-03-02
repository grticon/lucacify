<template>
  <main>
    <div class="list">
      <div class="top">
        <h1>Withdrawals</h1>
      </div>
      <div class="table">
        <table id="myTable" class="display">
          <thead>
            <tr>
              <td>Agent</td>
              <td>Date</td>
              <td>Amount</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(withdrawal, index) in withdrawals" :key="index">
              <td>{{ withdrawal.agent.name }}</td>
              <td>{{ withdrawal.createdAt }}</td>
              <td>{{ withdrawal.amount }}</td>
              <td>
                <span v-if="withdrawal.status === 'pending'">Pending</span>
                <span v-else-if="withdrawal.status === 'approved'"
                  >Approved</span
                >
                <span v-else-if="withdrawal.status === 'rejected'"
                  >Rejected</span
                >
              </td>
              <td>
                <button
                  v-if="withdrawal.status === 'pending'"
                  @click="approveWithdrawal(withdrawal._id)"
                >
                  Approve
                </button>
                <button
                  v-if="withdrawal.status === 'pending'"
                  @click="rejectWithdrawal(withdrawal._id)"
                >
                  Reject
                </button>
              </td>
            </tr>
          </tbody>
        </table>
        <Loader v-if="loading" />
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { API_URL } from "../../config/config.js";
import { ref } from "vue";
import $ from "jquery";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      loading: true,
      withdrawals: [],
    };
  },
  mounted() {
    // Fetch withdrawals when the component is created
    this.fetchWithdrawals();
  },
  methods: {
    async fetchWithdrawals() {
      try {
        // Check if token exists
        if (!localStorage.getItem("token")) {
          this.$router.push("/");
          return;
        }
        const response = await axios.get(`${API_URL}/user/get-withdrawal-requests`, {
          headers: {
            token: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.withdrawals = response.data.data.withdrawalRequests;
        this.loading = false;
        this.$nextTick(() => {
          $("#myTable").DataTable();
        });
      } catch (error) {
        console.error("Fetch withdrawals failed:", error.message);
      }
    },
    async approveWithdrawal(id) {
      try {
        const response = await axios.patch(
          `${API_URL}/user/approve-withdrawal-request/${id}`,
          {},
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        alert(response.data.message)
      } catch (error) {
        console.error("Approve withdrawal failed:", error.message);
      }
    },
    async rejectWithdrawal(id) {
      try {
        const response = await axios.patch(
          `${API_URL}/user/reject-withdrawal-request/${id}`,
          {},
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          this.fetchWithdrawals();
        }
      } catch (error) {
        console.error("Reject withdrawal failed:", error.message);
      }
    },
  },
  components: {
    Loader,
  },
};
</script>

<style scoped lang="scss">
main {
  padding: 30px;
  height: 100vh;
  @media (max-width: 710px) {
    padding: 30px 20px;
  }

  div.top {
    display: flex;
    justify-content: space-between;
    max-width: 800px;

    @media (max-width: 710px) {
      justify-content: flex-start;
      align-items: center;
      gap: 10px;
    }

    h1 {
      font-size: 20px;
    }

    button {
      height: 44px;
      background-color: #2d2fe4;
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
      height: calc(100vh - 100px);
      @media (max-width: 710px) {
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
      img {
        width: 100%;
      }
      p.stat {
        position: relative;
        i {
          position: relative;
          background-color: transparent;
          top: 0;
          color: rgb(81, 254, 0);
          left: 0;
        }
      }
      button {
        // height: 52px;
        background-color: #2d2fe4;
        color: #fff;
        padding: 10px 20px;
        border-radius: 4px;
        border: none;
        margin: 10px 0px 0px;
        cursor: pointer;
      }
    }
  }
}
</style>
