<template>
<div class="slider" ref="slider">
  <div class="slider_group" ref="sliderGroup">
   <slot></slot>
  </div>
  <div class="dots">
    <span class="dot" v-for="(item, index) in dots" :key="index"></span>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
import {addClassName} from '../../common/js/dom.js'
export default{
  data () {
    return {
      dots: 0
    }
  },
  mounted () {
    alert(this.loop)
    setTimeout(() => {
      this._setSliderWidth()
      this._initDots()
      this._initSlider()
    }, 20)
  },
  methods: {
    _setSliderWidth () {
      this.children = this.$refs.sliderGroup.children
      let width = 0
      let sliderWidth = this.$refs.slider.clientWidth
      for (var i = 0; i < this.children.length; i++) {
        let child = this.children[i]
        addClassName(child, 'slider_item')
        child.style.width = sliderWidth + 'px'
        console.log(child.style.width)
        width += sliderWidth
      }
      if (this.loop) {
        width += (2 * sliderWidth)
      }
      this.$refs.sliderGroup.style.width = width + 'px'
    },
    _initSlider () {
      this.slider = new BScroll(this.$refs.slider, {
        scrollX: true,
        scrollY: false,
        momentum: false,
        snap: true,
        snapLoop: this.loop,
        snapThreshold: 0.3,
        snapSpeed: 400
      })
    },
    _initDots () {
      this.dots = new Array(this.$refs.sliderGroup.children.length)
    }
  },
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    autoPlay: {
      type: Boolean,
      default: true
    },
    interval: {
      type: Number,
      default: 4000
    }
  }
}
</script>

<style scoped lang=scss>
@import 'assets/css/rem.scss';
.slider{
  font-size: rem(50);
  color: white;
  /* height: 150px; */
  overflow: hidden;
  .slider_group{
    display: flex;
    justify-content: flex-start;
    flex-wrap: nowrap;
    text-align: center;
    box-sizing: border-box;
    overflow: hidden;
    .slider_item{
      overflow: hidden;
      /* width: 100%; */
      a{
        width: 100%;
        text-decoration: none;
        display: block;
      }
      img{
        width: 100%;
        display: block;
      }
  }
}
}
.dots{
  display: flex;
  justify-content: center;
  position: relative;
  top: rem(-50);
  z-index: 1000;
  .dot{
    display: block;
    width: rem(20);
    height: rem(20);
    border-radius: 50%;
    margin-right: rem(20);
    background-color: #dddddd;
    &.active {
      width: rem(150);
      color: red;
    }
  }
}

</style>
