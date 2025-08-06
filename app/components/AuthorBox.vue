<template>
  <BorderBox>
    <template v-slot:title>
      <div>作者簡介</div>
    </template>
    <template v-slot:content>
      <div class="authorBox">
        <div class="authorBoxInner">
          <i class="authorBoxInnerImg icon-face-man" />
          <div class="authorBoxInnerUser">
            <div class="authorBoxInnerUserName">{{data.name}}</div>
            <div class="authorBoxInnerUserContent">{{data.intro}}</div>
          </div>
        </div>
        <div class="authorBoxInfo">
          <i class="authorBoxInfoItem icon-x-twitter-brands-solid-full" />
          <i class="authorBoxInfoItem icon-facebook" />
          <i class="authorBoxInfoItem icon-email-outline" />
        </div>
      </div>
    </template>
  </BorderBox>
</template>

<script setup>
const props = defineProps(['data'])
</script>