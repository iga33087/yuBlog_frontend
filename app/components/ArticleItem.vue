<template>
  <BorderBox2 class="articleItem">
    <div class="articleItemBox">
      <img class="articleItemBoxImg" :src="data.coverImg" />
      <div class="articleItemBoxContent">
        <div>
          <div class="articleItemBoxContentTitle">{{data.title}}</div>
          <div class="articleItemBoxContentContent">
            111111111
          </div>
        </div>
        <div class="articleItemBoxContentInfo">
          <div class="articleItemBoxContentInfoClasstype">Test</div>
          <div class="d-flex align-items-center">
            <div class="articleItemBoxContentInfoList">
              <div class="articleItemBoxContentInfoListItem">TEST</div>
            </div>
            <Divider />
            <div class="articleItemBoxContentInfoTime">{{global.timeFormat(data.date,'YYYY/MM/DD')}}</div>
          </div>
        </div>
      </div>
    </div>
  </BorderBox2>
</template>

<script setup>
import global from '~/assets/js/global.js'
const props = defineProps(['data'])
</script>