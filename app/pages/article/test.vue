<template>
  <div class="articlePage">
    <div class="container-fluid">
      <div class="row">
        <div class="articlePageBox col-9">
          <div class="articlePageTitle">
            <div class="articlePageTitleText">【漫博 25】《WITCHWATCH 魔女守護者》妮可聲優川口莉奈簽名見面會可愛登場</div>
            <div class="articlePageTitleInfo">
              <TagBox>TEST</TagBox>
              <div class="articlePageTitleInfoTime">2025/01/01</div>
            </div>
          </div>
          <div class="articlePageContent">
            曼迪傳播今（26）日於 2025 漫畫博覽會活動會場上，邀請到《Silent Witch 沉默魔女的祕密》中為主角「沉默魔女」莫妮卡．艾瓦雷特配音的聲優會澤紗彌、以及 Aniplex 動畫製作人奈良駿介來到現場參與活動。在活動過程中兩位不僅分享了配音與製作過程中的趣事，會澤紗彌今日也特地綁了跟莫妮卡一樣的髮型到場參與盛會。
          </div>
        </div>
        <div class="col-3">
          <div class="articlePageTitle">
            <div class="articlePageTitleText">作者簡介</div>
          </div>
          <AuthorBox />
        </div>
        <div class="col-12">
          <CardBox title="Comment">
            <template v-slot:menu>
              <TagBox>MORE　⭢</TagBox>
            </template>
            <template v-slot:content>
              <CommentBox />
              <CommentBox />
              <CommentBox />
              <CommentBox />
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

<script setup>
</script>