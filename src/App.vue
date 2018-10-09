<template>
  <div id="app">
    <m-header></m-header>
    <tag></tag>
    <router-view/>
  </div>
</template>

<script type='text/ecmascript-6'>
import MHeader from 'components/m-header/index'
import Tag from 'components/tag/index'
export default {
  name: 'App',
  components: {
    MHeader,
    Tag
  }
}
</script>

<style>
@import './assets/css/reset.scss';
@import './assets/css/rem.scss';

</style>
