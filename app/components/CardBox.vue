<template>
  <div class="cardBox">
    <div class="cardBoxTitle">
      <div class="cardBoxTitleText">{{title}}</div>
      <div class="cardBoxTitleMenu">
        <slot name="menu" />
      </div>
    </div>
    <div class="cardBoxContent">
      <slot name="content" />
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['title'])

</script>