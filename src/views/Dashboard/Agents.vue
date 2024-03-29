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
              <td>Country</td>
              <td>Status</td>
              <td>Action</td>
              <td>Ratings</td>
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
              <td>{{ agent.country }}</td>
              <td>
                <span class="status" v-if="agent.isVerified">
                  <i class="bi bi-patch-check-fill patch" ></i> Verified
                </span>
                <button
                  v-else
                  @click.stop="verifyAgent(agent)"
                  class="btn btn-primary"
                >
                  Verify
                </button>
              </td>
              <td>
                <p v-if="agent.isBanned">Banned</p>
                <button v-else @click="banAgent(agent)" class="btn btn-primary">
                  Ban
                </button>
              </td>
              <td>{{ agent.ratingFromAdmin }} Star</td>
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
          <br />
          <div class="verify">
            <p class="stat" v-if="agent.isVerified">
              Verified <i class="bi bi-patch-check-fill"></i>
            </p>
            <button v-else @click="verifyAgent(agent)">Verify</button>
          </div>
          <br />
          <h3>Actions</h3>
          <!-- Rate agent -->
          <form @submit.prevent="submitRating(agent)">
            <label for="rating">Rating:</label>
            <input
              type="number"
              id="rating"
              v-model="rating"
              min="1"
              max="5"
              required
            />
            <button type="submit">Submit Rating</button>
          </form>
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
      rating: '',
    };
  },
  mounted() {
    // Fetch agents when the component is created
    this.fetchAgents();
  },
  methods: {
    hideAgentModal() {
      if (this.showAgent) {
        setTimeout(() => {
          this.showAgent = false; // Hide the modal after a delay
          this.agent = {}; // Reset the agent data
        }, 300); // 300 milliseconds delay
      }
    },
    showAgentModal(agent) {
      this.agent = agent; // Set the agent data
      this.showAgent = true; // Show the modal
    },

    async verifyAgent(agent) {
      try {
        this.loading = true;
        const response = await axios.patch(
          `${API_URL}/user/verify-agent/${agent._id}`,
          {},
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          agent.isVerified = true;
        }
        // Reload the agents from database
        alert("Agent verified successfully");
        this.fetchAgents();
        this.hideAgentModal();
      } catch (error) {
        console.error("Verify agent failed:", error.message);
      }
    },

    async banAgent(agent) {
      try {
        this.loading = true;
        const response = await axios.patch(
          `${API_URL}/user/ban-agent/${agent._id}`,
          {},
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          agent.isBanned = true;
        }
        // Reload the agents from database
        alert("Agent banned successfully");
        this.loading = false;
        this.hideAgentModal();
        this.fetchAgents();
      } catch (error) {
        console.error("Ban agent failed:", error.message);
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
      } catch (error) {
        console.error("Fetch agents failed:", error.message);
      }
    },

    async submitRating(agent) {
      try {
        this.loading = true;
        const data = {
          rating: this.rating,
        };
        const response = await axios.patch(
          `${API_URL}/user/rate-agent-from-admin/${agent._id}`,
          data,
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
          alert("Rating submitted successfully");
          this.hideAgentModal();
          this.fetchAgents();

        this.loading = false;
      } catch (error) {
        console.error("Submit rating failed:", error.message);
        // Alert user
        alert("Rating submission failed");
        this.loading = false;
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
    width: 100%;
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
