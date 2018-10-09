<template>
  <div class="m-header">
    header
    <div class="icon"></div>
    <div class="text"></div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang=scss scoped>
@import '../../assets/css/reset.scss';
@import '../../assets/css/rem.scss';
.m-header{
  position:relative;
  top: 0;
  height: rem(40);
  width: 100%;
  background-color: red;
  font-size: rem(30);
}
</style>
