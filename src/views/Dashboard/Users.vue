<template>
  <main>
    <h1>Users - {{ users.length }}</h1>
    <div class="table">
      <table id="myTable" class="display">
        <thead>
          <tr>
            <td>Name</td>
            <td>Username</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(user, index) in users" :key="index">
            <td>{{ user.name }}</td>
            <td>{{ user.username }}</td>
            <td>{{ user.email }}</td>
            <td>
              <p v-if="user.isBanned">Banned</p>
              <button v-else @click="banUser(user)" class="btn btn-primary">
                Ban
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
  <Loader v-if="loading" />
</template>

<script>
import { ref } from "vue";
import axios from "axios";
import { API_URL } from "../../config/config.js";
import $ from "jquery";
import Loader from "@/components/Loader.vue";

export default {
  data() {
    return {
      loading: true,
      users: [],
    };
  },
  mounted() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        // Check if token exists
        if (!localStorage.getItem("token")) {
          this.$router.push("/");
          return;
        }
        const response = await axios.get(`${API_URL}/user/get-users-list`, {
          headers: {
            token: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        // format users to return only name, email and phone number
        this.users = response.data.data.users.map((user) => {
          return {
            _id: user._id,
            name: user.name,
            username: user.username,
            email: user.email,
            phone: user.phone,
            isBanned: user.isBanned,
          };
        });
        this.loading = false;
        // Check if datatable is already initialized. if it is, skip, if not, instanciate it
        if ($.fn.DataTable.isDataTable("#myTable")) {
        } else {
          this.$nextTick(() => {
            $("#myTable").DataTable({ responsive: true });
          });
        }

        // this.$nextTick(() => {
        //   $("#myTable").DataTable({ responsive: true });
        // });
      } catch (error) {
        console.error("Fetch users failed:", error.message);
      }
    },
    async banUser(user) {
      try {
        this.loading = true;
        const response = await axios.patch(
          `${API_URL}/user/ban-user/${user._id}`,
          {},
          {
            headers: {
              token: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );
        if (response.data.success) {
          alert("User banned successfully");
        }
        this.loading = false;
        this.fetchUsers();
      } catch (error) {
        console.error("Ban user failed:", error.message);
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
  h1 {
    font-size: 20px;
  }
  div.table {
    margin: 20px 0;
    @media (max-width: 710px) {
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
table td button{
  height: 48px;
  padding: 0px 20px;
  border-radius: 8px;
  border: none;
  background-color: blue;
  color: #fff;
  cursor: pointer;
}
</style>
