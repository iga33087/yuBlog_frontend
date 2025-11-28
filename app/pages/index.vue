<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <CardBox title="NEWS">
            <template v-slot:menu>
              <TagBox url="/article"><div class="me-2">MORE</div> <i class="icon-arrow-right" /></TagBox>
            </template>
            <template v-slot:content>
              <ArticleBar />
              <ArticleBar />
              <ArticleBar />
            </template>
          </CardBox>
        </div>
        <div class="col-12">
          <CardBox title="Recommend">
            <template v-slot:menu>
              <TagBox url="/article"><div class="me-2">MORE</div> <i class="icon-arrow-right" /></TagBox>
            </template>
            <template v-slot:content>
              <div class="row">
                <div class="col-3 px-4" v-for="(item,index) in artcleList.data" :key="index">
                  <ArticleBox :data="item" />
                </div>
              </div>
            </template>
          </CardBox> 
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data:artcleList } = await useFetch('/api/articles/outline',{query:{page:1,limit:4}})
</script>