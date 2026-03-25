<template>
  <div class="header">
    <ClientOnly>
      <LoginBox v-if="$store.showLogin" />
    </ClientOnly>
    <div class="headerMobileBoxShow" @click="showMobileMenu=!showMobileMenu"><i class="bi" :class="showMobileMenu ? 'bi-x-lg':'bi-justify'"></i></div>
    <div class="headerMobileBox" :class="{'headerMobileBoxOpen':showMobileMenu}">
      <div class="headerMobileBoxBlack" @click="showMobileMenu=!showMobileMenu"></div>
      <div class="headerMobileBoxMenu">
        <a class="headerMobileBoxMenuItem" href="/article">文章一覽</a>
        <div class="headerMobileBoxMenuItem" @click="logout" v-if="$store?.userData?.data?.name||$store?.userData?.google?.name">{{$store?.userData?.data?.name||$store?.userData?.google?.name}}</div>
        <div class="headerMobileBoxMenuItem" @click="$store.showLogin=true" v-else>登入</div>
      </div>
    </div>
    <div class="headerBox">
      <div class="headerBoxMenu">
        <a class="headerBoxMenuItem" href="/article">文章一覽</a>
        <a class="headerBoxMenuLogo" href="/">愉之家</a>
        <div class="headerBoxMenuItem" @click="logout" v-if="$store?.userData?.data?.name||$store?.userData?.google?.name">{{$store?.userData?.data?.name||$store?.userData?.google?.name}}</div>
        <div class="headerBoxMenuItem" @click="$store.showLogin=true" v-else>登入</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from 'vue'
const route = useRoute()
const { $store } = useNuxtApp()

const showMobileMenu=ref(false)

async function checkToken() {
  try {
    if(localStorage.token) {
      let data=await $fetch('/api/auth/verify', {method: 'POST',headers:{authorization:localStorage.token}})
      $store.userData=data
    }
    else if(route.query.code) {
      let googleToken=await $fetch('/api/google/getToken', {method: 'GET',query:{code:route.query.code}})
      let googleData=await $fetch('/api/google/getInfo', {method: 'GET',query:{token:googleToken}})
      localStorage.token=googleData
      location.href='/'
    }
  }
  catch(err) {
    localStorage.token=''
  }
}

async function logout() {
  if(!confirm('確定登出?')) return 0
  localStorage.token=null
  location.reload()
}

if(process.client&&process.browser) checkToken()
</script>