<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <CardBox title="NEWS">
            <template v-slot:menu>
              <TagBox>MORE　⭢</TagBox>
            </template>
            <template v-slot:content>
              <ArticleBar />
              <ArticleBar />
              <ArticleBar />
            </template>
          </CardBox>
        </div>
        <div class="col-12">
          <CardBox title="Articles">
            <template v-slot:menu>
              <TagBox>MORE　⭢</TagBox>
            </template>
            <template v-slot:content>
              <div class="row">
                <div class="col-3">
                  <ArticleBox />
                </div>
                <div class="col-3">
                  <ArticleBox />
                </div>
                <div class="col-3">
                  <ArticleBox />
                </div>
                <div class="col-3">
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