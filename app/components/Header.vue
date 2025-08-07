<template>
  <div class="header">
    <ClientOnly>
      <LoginBox v-if="$store.showLogin" />
    </ClientOnly>
    <div class="headerBox">
      <div class="headerBoxMenu">
        <NuxtLink class="headerBoxMenuItem" to="/article">文章一覽</NuxtLink>
        <div class="headerBoxMenuItem">文章類別</div>
        <NuxtLink class="headerBoxMenuLogo" to="/">愉之家</NuxtLink>
        <div class="headerBoxMenuItem">友站連結</div>
        <div class="headerBoxMenuItem" @click="$store.showLogin=true">{{$store?.userData?.data.name||'登入'}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $store } = useNuxtApp()

async function checkToken() {
  try {
    if(localStorage.token) {
      let data=await $fetch('/api/auth/verify', {method: 'POST',headers:{authorization:localStorage.token}})
      $store.userData=data
    }
  }
  catch(err) {
    localStorage.token=''
  }
}

if(process.client&&process.browser) checkToken()
</script>