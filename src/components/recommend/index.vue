<template>
  <div>
   a
  </div>
</template>

<script>
import {getRecommend} from '../../api/recommend.js'
import {ERR_OK} from '../../api/config.js'
export default {
  data () {
    return {
    }
  },
  created () {
    this._getRecommend()
  },
  methods: {
    _getRecommend () {
      alert(111)
      getRecommend().then((res) => {
        alert(222)
        if (res.code === ERR_OK) {
          console.log(res.data.slider)
        }
      })
    }
  }

}
</script>

<style lang=scss scoped>
@import '../../assets/css/reset.scss';
@import '../../assets/css/rem.scss';

</style>
