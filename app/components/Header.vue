<template>
  <div class="header">
    <ClientOnly>
      <LoginBox v-if="$store.showLogin" />
    </ClientOnly>
    <div class="headerBox">
      <div class="headerBoxMenu">
        <a class="headerBoxMenuItem" href="/article">文章一覽</a>
        <a class="headerBoxMenuLogo" href="/">愉之家</a>
        <div class="headerBoxMenuItem" @click="$store.showLogin=true">{{$store?.userData?.data?.name||$store?.userData?.google?.name||'登入'}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const { $store } = useNuxtApp()

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

if(process.client&&process.browser) checkToken()
</script>