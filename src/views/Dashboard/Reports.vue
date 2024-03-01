<template>
    <main>
      <h1>Reports - {{ Users.length }}</h1>
      <section v-for="(user, index) in Users" :key="index">
        <div class="item" :for="index">
          <div class="tp">
            <img src="@/assets/dp.jpg" alt="">
            <div class="txt">
              <p class="bold">{{ user.name }}</p>
              <p class="light">{{ user.email }}</p>
            </div>
          </div>
          <p class="comment">
            {{ user.comment }}
          </p>
        </div>
      </section>
    </main>
  </template>
  
  <script setup>
  import { ref } from "vue";

  const Users = ref([
  {
      name: 'John Doe',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
    {
      name: 'Lara croft',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
    {
      name: 'Sarah Lee',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
    {
      name: 'John Doe',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
    {
      name: 'Lara croft',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
    {
      name: 'Sarah Lee',
      email: 'User@email.com',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti, laborum impedit dolores in voluptatibus explicabo deserunt fugiat debitis reprehenderit distinctio, suscipit, culpa cum odio. Inventore optio voluptatibus tenetur similique nobis?'
    },
  ]);
  </script>
  
  <style scoped lang="scss">
  main{
    padding: 30px;
    height: 100vh;
    @media(max-width: 710px){
      padding: 30px 20px;
    }
    h1{
      font-size: 24px;
      margin-bottom: 20px;
    }
    section{
      display: grid;

      div.item{
        padding: 20px;
        box-shadow: 0px 2px 10px #0022;
        border-radius: 10px;
        margin-bottom: 30px;
        div.tp{
          display: flex;
          gap: 10px;
          img{
            width: 80px;
            height: 80px;
            border-radius: 50%;
          }
          div.txt{
            p.bold{
              font-weight: 600;
              font-size: 18px;
            }
          }
        }
        
        p.comment{
            font-size: 14px;
            margin-top: 20px;
          }
      }
    }
  }
  </style>