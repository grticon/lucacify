<script setup>
import { ref } from 'vue'
</script>

<template>
    <main>
        <section>
        <div class="out">
            <div class="in">
                <div class="block"></div>
            </div>
        </div>
    </section>
    </main>
</template>

<style scoped lang="scss">
main{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #0009;
    backdrop-filter: blur(5px);
    z-index: 999;
}
section{
    background-color: #fff;
    padding: 20px;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 0px 30px #00f4;
    border-radius: 20px;

    div.out{
        background-color: blue;
        height: 160px;
        width: 160px;
            border-radius: 50%;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;

        div.in{
            background-color: #fff;
            height: 130px;
            width: 130px;
            border-radius: 50%;
            div.block{
                background-color: #fff;
                height: 50px;
                position: absolute;
                width: 140px;
                left: 10px;
                border-radius: 30px;
                top: 0;
            }
        }
    }
}

div.out {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>