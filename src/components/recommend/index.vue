<template>
  <div class="recommend">
    <div class="recommend_content">
     <slider>
       <div v-for="(item) in sliders" :key="item.id">
         <a :to="item.linkUrl">
           <img :src="item.picUrl">
         </a>
       </div>
     </slider>
    </div>
  </div>
</template>

<script>
import {getRecommend} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config.js'
import Slider from 'base/slider/slider'
export default {
  data () {
    return {
      sliders: []
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      getRecommend().then((res) => {
        if (res.code === ERR_OK) {
          this.sliders = res.data.slider
        }
        console.log(res)
      })
    }
  },
  components: {
    Slider
  }

}
</script>

<style lang=scss scoped>
@import '../../assets/css/reset.scss';
@import '../../assets/css/rem.scss';

</style>
