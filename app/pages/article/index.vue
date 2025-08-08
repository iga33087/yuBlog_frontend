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
              <ArticleItem v-for="(item) in data.data" :key="item._id" :data="item" />
            </template>
          </CardBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { $store } = useNuxtApp()
const { data } = await useFetch('/api/articles/outline')
</script>