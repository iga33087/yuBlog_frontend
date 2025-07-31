<template>
  <div class="articlePage">
    <div class="container-fluid">
      <div class="row">
        <div class="col-9 pe-5">
          <div class="articlePageBox">
            <div class="articlePageTitle">
              <h1 class="articlePageTitleText">{{data.article.title}}</h1>
              <div class="articlePageTitleInfo">
                <TagBox>{{data.classtype.title}}</TagBox>
                <div class="articlePageTitleInfoList">
                  <div class="articlePageTitleInfoListItem">Author：{{data.member.name}}</div>
                  <div class="articlePageTitleInfoListItem">Date：{{global.timeFormat(data.article.date,'YYYY/MM/DD HH:mm')}}</div>
                </div>
              </div>
            </div>
            <div class="articlePageContent" v-html="data.article.content" />
          </div>
          <CardBox title="Comment">
            <template v-slot:menu>
              <TagBox><div class="me-2">MORE</div> <i class="icon-arrow-right" /></TagBox>
            </template>
            <template v-slot:content>
              <CommentBox v-for="(item) in data.comment.data" :data="item" :key="item._id" />
            </template>
          </CardBox>
        </div>
        <div class="col-3">
          <AuthorBox :data="data.member" />
          <ClasstypeBox />
        </div>
        <div class="col-12">
          <CardBox title="Articles">
            <template v-slot:menu>
              <TagBox><div class="me-2">MORE</div> <i class="icon-arrow-right" /></TagBox>
            </template>
            <template v-slot:content>
              <div class="row">
                <div class="col-3 px-4">
                  <ArticleBox />
                </div>
                <div class="col-3 px-4">
                  <ArticleBox />
                </div>
                <div class="col-3 px-4">
                  <ArticleBox />
                </div>
                <div class="col-3 px-4">
                  <ArticleBox />
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
import global from '~/assets/js/global.js'
const route = useRoute()

const { data } = await useFetch('/api/articles/data',{
  query: {
    id: route.params.id
  }
})

useSeoMeta({
  title: data.value.article.title,
  ogTitle: data.value.article.title,
  description: data.value.article.content,
  ogDescription: data.value.article.content,
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})

console.log(111,data)

</script>