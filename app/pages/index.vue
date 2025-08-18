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
          <CardBox title="Articles">
            <template v-slot:menu>
              <TagBox url="/article"><div class="me-2">MORE</div> <i class="icon-arrow-right" /></TagBox>
            </template>
            <template v-slot:content>
              <div class="row">

              </div>
            </template>
          </CardBox> 
        </div>
      </div>
    </div>
  </div>
</template>