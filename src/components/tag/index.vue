<template>
<div class="tag">
  <router-link tag="div" :to="{name: 'recommend'}" class="tag_item">
  <!-- :to 是运用命名的方法 -->
    <span class="tab_link">推荐</span>
  </router-link>
  <router-link tag="div" :to="{name: 'singer'}" class="tag_item">
    <span class="tab_link">歌手</span>
  </router-link>
  <router-link tag="div" :to="{name: 'rank'}" class="tag_item">
    <span class="tab_link">排行</span>
  </router-link>
  <router-link tag="div" :to="{name: 'search'}" class="tag_item">
    <span class="tab_link">搜索</span>
  </router-link>
</div>
</template>

<script>
export default {
  data () {
    return {

    }
  }
}
</script>

<style lang=scss scoped>
@import '../../assets/css/rem.scss';
.tag{
  display: flex;
  align-content: center;
  height: rem(80);
  font-size: rem(40);
  justify-content: space-around;
  .tag_item{
    flex: 1;
    align-self: center;
    text-align: center;
    .tab_link {
      color: white;
    }
    &.router-link-active {
       border-bottom: rem(5) solid yellow;
      .tab_link{
       color: yellow;
       }
      }
    }
  }
</style>
