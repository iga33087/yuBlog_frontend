<template>
  <div class="commentBox">
    <div class="commentBoxInner">
      <i class="commentBoxInnerImg icon-account-outline" />
      <div class="commentBoxInnerUserInfo">
        <div class="commentBoxInnerUserInfoName">
          <div class="commentBoxInnerUserInfoNameText">{{data.name}}</div>
          <div class="commentBoxInnerUserInfoNameTime">{{global.timeFormat(data.date,'YYYY/MM/DD HH:mm')}}</div>
        </div>
        <div class="commentBoxInnerUserInfoComment">{{data.content}}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
import global from '~/assets/js/global.js'
const props = defineProps(['data'])
</script>