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
            <tr
              v-for="(agent, index) in agents"
              :key="index"
              @click="showAgentModal(agent)"
            >
              <td>{{ agent.name }}</td>
              <td>{{ agent.user.email }}</td>
              <td>
                <span class="status" v-if="agent.isVerified">
                  <i class="bi bi-patch-check-fill"></i> Verified
                </span>
                <button v-else @click.stop="verifyAgent(agent)" class="btn btn-primary">Verify</button>
              </td>
            </tr>
          </tbody>
        </table>
        <Loader v-if="loading" />
      </div>
    </div>
    <div class="modal" v-if="showAgent">
      <div class="container">
        <i class="bi bi-x-lg" @click="hideAgentModal()"></i>
        <div class="form">
          <div class="tp">
            <img src="@/assets/dp.jpg" alt="" />
            <div class="info">
              <p class="bold">{{ agent.name }}</p>
              <p class="light">{{ agent.user.email }}</p>
              <p class="light">{{ agent.user.phoneNumber }}</p>
              <p class="light">{{ agent.gender }}</p>
            </div>
          </div>
          <h3>About</h3>
          <p class="txt">{{ agent.about }}</p>
          <h3>Location</h3>
          <p class="txt">{{ agent.city }}, {{ agent.country }}</p>
          <h3>ID Verification</h3>
          <img src="@/assets/dp.jpg" alt="" />
          <div class="verify">
            <p class="stat" v-if="agent.isVerified">
              Verified <i class="bi bi-patch-check-fill"></i>
            </p>
            <button v-else @click="verifyAgent(agent)">
              Verify
            </button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "axios";
import { API_URL } from "../../config/config.js";
import $ from "jquery";
import { ref } from "vue";
import Loader from "@/components/Loader.vue";


export default {
  data() {
    return {
      showAgent: false,
      loading: true,
      agent: {},
      agents: [],
    };
  },
  mounted() {
    // Fetch agents when the component is created
    this.fetchAgents();
  },
  methods: {
    hideAgentModal() {
      console.log("Closed modal");
      if (this.showAgent) {
        setTimeout(() => {
          this.showAgent = false; // Hide the modal after a delay
          this.agent = {}; // Reset the agent data
        }, 300); // 300 milliseconds delay
      }
    },
    showAgentModal(agent) {
      console.log("Opened modal");
      this.agent = agent; // Set the agent data
      this.showAgent = true; // Show the modal
    },
    async verifyAgent() {
      try {
        // Check if token exists
        if (!localStorage.getItem("token")) {
          this.$router.push("/");
          return;
        }
        
        const response = await axios.patch(
          `${API_URL}/user/verify-agent/${this.agent._id}`,
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        this.agent.status = true;
        
        // this.hideAgentModal();
      } catch (error) {
        console.error("Verify agent failed:", error.message);
      }
    },

    async verifyAgent(agent) {
      try {
        const response = await axios.patch(
          `${API_URL}/user/verify-agent/${agent._id}`,
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        console.log(response.data)
        if (response.data.success) {
          agent.isVerified = true;
        }
      } catch (error) {
        console.error("Verify agent failed:", error.message);
      }
    },
    
    async fetchAgents() {
      try {
        // Check if token exists
        if (!localStorage.getItem("token")) {
          this.$router.push("/");
          return;
        }
        const response = await axios.get(`${API_URL}/user/get-agents-list`, {
          headers: {
            token: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        this.agents = response.data.data.agents;
        this.loading = false;
        this.$nextTick(() => {
          $("#myTable").DataTable();
        });
        this.loading = false;
      } catch (error) {
        console.error("Fetch agents failed:", error.message);
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
