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
            <tr
              v-for="(order, index) in Orders"
              :key="index"
              :for="index"
              @click="showOrderModal(order)"
            >
              <td>{{ order.agent.name }}</td>
              <td>{{ order.user.email }}</td>
              <td>
                {{ order.package.service.serviceType.name }}
              </td>
              <td>
                {{ order.package.name }}
              </td>
              <td>
                {{ order.fee }}
              </td>
              <td>
                <span class="cent">
                  <i
                    class="bi bi-check-circle-fill"
                    v-if="(order.isCompleted = true)"
                  ></i>
                  <i class="bi bi-x" v-else></i>
                </span>
              </td>
            </tr>
          </tbody>
        </table>
        <Loader v-if="loading" />
      </div>
    </div>
    <div class="modal" v-if="showOrder">
      <div class="container">
        <i class="bi bi-x-lg" @click="hideOrderModal()"></i>
        <div
          class="form"
        >
          <h3>Order Summary</h3>
          <p class="txt">
            Service ordered -
            {{ selectedOrder.package.service.serviceType.name }}
          </p>
          <p class="txt">
            Package - {{ selectedOrder.package.name }}
          </p>
          <p class="txt">Price - N{{ selectedOrder.fee }}</p>
          <p class="txt ct">
            Is Completed -
            <span class="cent frm">
              <i
                class="bi bi-check-circle-fill"
                v-if="(selectedOrder.isCompleted = true)"
              ></i>
              <i class="bi bi-x" v-else></i>
            </span>
          </p>
          <h3>Location</h3>
          <p class="txt">
            {{ selectedOrder.agent.city }},
            {{ selectedOrder.agent.country }}
          </p>
          <h3>Contact details</h3>
          <p class="txt">
            Username -
            {{ selectedOrder.user.username }}
          </p>
          <p class="txt">
            Name -
            {{ selectedOrder.user.name }}
          </p>
          <p class="txt">
            Email -
            {{ selectedOrder.user.email }}
          </p>
          <p class="txt">
            Phone -
            {{ selectedOrder.user.phoneNumber }}
          </p>
          <h3>Agent contact details</h3>
          <p class="txt">
            Username -
            {{ selectedOrder.agent.user.username }}
          </p>
          <p class="txt">
            Name -
            {{ selectedOrder.agent.name }}
          </p>
          <p class="txt">
            Email -
            {{ selectedOrder.agent.user.email }}
          </p>
          <p class="txt">
            Phone -
            {{ selectedOrder.agent.user.phoneNumber }}
          </p>
        </div>
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
      showOrder: false,
      loading: true,
      selectedOrder: {},
      Orders: [],
    };
  },
  mounted() {
    // Fetch orders when the component is created
    this.fetchOrders();
  },
  methods: {
    hideOrderModal() {
      console.log("Closed modal");
      this.showOrder = false; // Hide the modal
      this.selectedOrder = {}; // Reset the selected order data
    },
    showOrderModal(order) {
      console.log("Opened modal");
      this.selectedOrder = order; // Set the selected order data
      this.showOrder = true; // Show the modal
    },
    async fetchOrders() {
      try {
        // Check if token exists
        if (!localStorage.getItem("token")) {
          this.$router.push("/");
          return;
        }
        const response = await axios.get(`${API_URL}/order/get-orders-list`, {
          headers: {
            token: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.Orders = response.data.data.orders;
        this.loading = false;
        this.$nextTick(() => {
          $("#myTable").DataTable();
        });
      } catch (error) {
        console.error("Fetch orders failed:", error.message);
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

    @media (max-width: 710px) {
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

      @media (max-width: 710px) {
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
p.ct {
  position: relative;
  display: flex;
  gap: 20px;
}
span.cent.frm {
  position: relative;
  height: 0;
  width: fit-content;
  i {
    position: relative !important;
    top: -3px !important;
    height: fit-content;
  }
  i.bi-x {
    line-height: 1.3;
  }
}
span.cent {
  width: 100%;
  display: flex;
  justify-content: center;
  i.bi-check-circle-fill {
    color: rgb(119, 199, 0) !important;
    font-size: 18px !important;
  }
  i.bi-x {
    color: #fff !important;
    background-color: red !important;
    border-radius: 50%;
    padding: 1px 3px !important;
    line-height: 1.1;
  }
}
</style>
