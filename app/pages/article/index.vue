<template>
  <div class="article">
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 pe-5">
          <SearchBox />
        </div>
        <div class="col-9">
          <CardBox title="Articles">
            <template v-slot:content>
              <div v-if="data.data.length">
                <ArticleItem v-for="(item) in data.data" :key="item._id" :data="item" />
                <PageBox :now="route.query.page||1" :limit="20" :total="data.total" @change="changePage" />
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
const route = useRoute()
const { $store } = useNuxtApp()
const { data } = await useFetch('/api/articles/outline',{query:{...route.query,limit:20}})

async function changePage(x) {
  await navigateTo({
    path: '/article',
    query: {...route.query,page:x}
  })
  location.reload()
}
</script>