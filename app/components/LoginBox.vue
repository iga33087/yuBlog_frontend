<template>
  <div class="loginBox" @click="$store.showLogin=false">
    <div class="loginBoxInner" @click.stop>
      <div class="loginBoxInnerTitle">Login</div>
      <div class="loginBoxInnerContent">
        <div class="loginBoxInnerContentItem">
          <div class="loginBoxInnerContentItemTitle">Account</div>
          <input type="text" class="loginBoxInnerContentItemInput" v-model="formData.account" />
        </div>
        <div class="loginBoxInnerContentItem">
          <div class="loginBoxInnerContentItemTitle">Password</div>
          <input type="password" class="loginBoxInnerContentItemInput" v-model="formData.password" />
        </div>
      </div>
      <div class="loginBoxInnerMenu">
        <TagBox class="me-3">清空</TagBox>
        <TagBox class="me-3">註冊</TagBox>
        <TagBox @click="login">登入</TagBox>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const { $store } = useNuxtApp()
const formData=ref({
  account:null,
  password:null
})

async function login() {
  try {
    let token=await $fetch('/api/auth/login', {method: 'POST',body: formData.value})
    localStorage.token=token
    $store.userData=await $fetch('/api/auth/verify', {method: 'POST',headers:{authorization:localStorage.token}})
    $store.showLogin=false
  }
  catch(err) {
    console.log(err)
  }
}
</script>