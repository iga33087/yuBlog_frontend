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
                <PageBox :now="route.query.page||1" :limit="10" :total="data.total" />
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
const { data } = await useFetch('/api/articles/outline',{query:route.query})
</script>