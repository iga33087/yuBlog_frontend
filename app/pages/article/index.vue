<template>
  <div class="article">
    <div class="container-fluid">
      <div class="row">
        <div class="col-xl-3 col-lg-4 col-md-5 pe-xl-5 pe-lg-4 pe-md-3 pe-sm-0">
          <SearchBox />
        </div>
        <div class="col-xl-9 col-lg-8 col-md-7">
          <CardBox title="Articles">
            <template v-slot:content>
              <div v-if="data.data.length">
                <ArticleItem v-for="(item) in data.data" :key="item._id" :data="item" />
                <PageBox :now="formData.page" :limit="formData.limit" :total="data.total" @change="changePage" />
              </div>
              <div class="noData" v-else>
                No Data
              </div>
            </template>
          </CardBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref,computed} from 'vue'
const route = useRoute()
const { $store } = useNuxtApp()
const formData=ref({
  page:route.query.page||1,
  limit:route.query.limit||1
})
const formDataKey=computed(()=> `key-${formData.value.page}-${formData.value.limit}`)

const { data } = await useAsyncData(formDataKey,()=> $fetch('/api/articles/outline', {query:{...route.query,page:formData.value.page,limit:formData.value.limit}}))

async function changePage(x) {
  formData.value.page=x
  await navigateTo({path:'/article',query:{...route.query,page:formData.value.page,limit:formData.value.limit}})
}
</script>