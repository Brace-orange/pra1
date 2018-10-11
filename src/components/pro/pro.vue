<template lang="html">
  <div class="new-wrapper">
      <div class="search-wrapper">
      <div class="inp van-hairline--surround">
        <div class="icon">
          <van-icon name="search" class="icon-search"></van-icon>
        </div>
        <div class="search-inp">
          <van-field
            v-model="searchTxt"
            icon="clear"
            placeholder="请输入关键词查询"
            rows="1"
            @click-icon="searchTxt = ''"
          ></van-field>
        </div>
        <!-- <input type="text" placeholder="请输入关键字查询" v-model="searchTxt"> -->
      </div>
      <div class="button">
        <vant-button size="small" class="search-btn" @click="search">搜索</vant-button>
      </div>
    </div>
    <div class="result">
        <van-list>
          <div class="departments" v-for="(items,index) in department" :key="index" @click.capture="times(index)">
          <van-cell class='van-hairline--bottom department' @click="show(index)">
           <input type="checkbox" :value="items" @click.stop @change="changeState(index)" class='all'>{{items}}
           <van-icon name="arrow" class='fold'></van-icon>
            </van-cell>
                  <van-list class="shops">
                  <div v-for="(item,index) in shops" :key="index" class="each-shop" @click.capture="times2(index)">
                  <van-cell class='van-hairline--bottom shop' @click="shows(index)">
                  <input type="checkbox" :value="item" @click.stop class="chooseShop" @click="changeShop(index)" @change="changeshop(index)" v-model="check">{{item}}
                  <van-icon name="arrow" class='fold'></van-icon>
                  </van-cell>
                            <van-list  class="cabinets">
                            <div v-for="(it,index) in cabinet" :key="index">
                            <van-cell class='van-hairline--bottom cabinet'>
                           <input type="checkbox" :value="it" @click.stop @change="changeCabinet(index)"> {{it}}
                            </van-cell>
                          </div>
                          </van-list>
                </div>
              </van-list>
          </div>
        </van-list>
        </div>
        <div class="dashboard-wrapper">
      <div class="dashboard">
        <button @click="cancel" class="btn-white van-hairline--surround">取消</button>
        <button @click="confirm">确认</button>
      </div>
    </div>
  </div>
</template>

<script>
import { Button, Icon, Cell, CellGroup, Collapse, CollapseItem, List, Loading, Field } from 'vant'
export default {
  data () {
    return {
      check: false,
      time: '',
      time2: '',
      searchTxt: '',
      newProduct: '',
      department: ['波次部门分类1',
        '波次部门分类2',
        '波次分类3',
        '波次部门分类4'],
      shops: ['孩子王河西万达店',
        '孩子王江宁店'],
      cabinet: ['柜组1',
        '柜组2']

    }
  },
  mounted () {
  },
  async created () {
    this.$$title('选择门店')
    this.$$loading(false)
    // this.reload()
  },
  methods: {
    dd () {
      console.log('斤斤计较军')
    },
    changeState (index) {
      // console.log(index)
      var a = document.querySelectorAll('.department')[index].querySelector('.all')
      var b = document.querySelectorAll('.departments')[index].querySelectorAll('input')
      for (var i = 0; i <= b.length; i++) {
        b[i].checked = a.checked
      }
    },
    changeShop (index) {
      console.log('ddddd' + index)
      var c = document.querySelectorAll('.departments')[this.time].querySelectorAll('.shop')[index].querySelector('input')
      var d = document.querySelectorAll('.departments')[this.time].querySelector('.shops').querySelectorAll('.cabinets')[index].querySelectorAll('input')
      for (var i = 0; i <= d.length; i++) {
        // console.log(c)
        d[i].checked = c.checked
      }
    },
    changeshop (index) {
      console.log('ddddd' + index)
      var b = document.querySelectorAll('.department')[this.time].querySelector('.all')
      var a = document.querySelectorAll('.departments')[this.time].querySelector('.shops').querySelectorAll('input')
      // for (var i = 0; i <= d.length; i++) {
      //   // console.log(c)
      //   d[i].checked = c.checked
      // }
      console.log('+++++++++')
      for (var j = 0; j <= a.length; j++) {
        if (a[j].checked === false) {
          b.checked = false
          return
        } b.checked = true
      }
    },
    changeCabinet (index) {
      console.log('柜组' + index)
      console.log('eachshop' + this.time2)
      var d = document.querySelectorAll('.departments')[this.time].querySelector('.shops').querySelectorAll('.each-shop')[this.time2]
      var c = d.querySelector('.shop').querySelector('input')
      var a = d.querySelector('.cabinets').querySelectorAll('input')
      console.log(d)
      console.log(a)
      for (var j = 0; j <= a.length; j++) {
        if (a[j].checked === false) {
          c.checked = false
          return
        } c.checked = true
      }
    },
    async times (index) {
      console.log('--------------' + index)
      this.time = index
    },
    async times2 (index) {
      console.log('gggggggggg' + index)
      this.time2 = index
    },
    show (index) {
      console.log(index)
      var a = document.querySelectorAll('.shops')[index]
      var b = document.querySelectorAll('.department')[index].querySelector('div').querySelector('.fold')
      // console.log(b)
      // console.log(a.style.display)
      if (a.style.display === '' || a.style.display === 'none') {
        a.style.display = 'inline'
        b.style.transform = 'rotate(270deg)'
      } else {
        a.style.display = 'none'
        b.style.transform = 'rotate(90deg)'
      }
      // this.time = index
    },
    shows (index) {
      this.timez = index
      console.log('fffffff' + this.timez)
      var a = document.querySelectorAll('.departments')[this.time].querySelectorAll('.cabinets')[index]
      var b = document.querySelectorAll('.departments')[this.time].querySelectorAll('.shop')[index].querySelector('.fold')
      console.log(b)
      // console.log(a.style.display)
      if (a.style.display === '' || a.style.display === 'none') {
        a.style.display = 'inline'
        b.style.transform = 'rotate(270deg)'
      } else {
        a.style.display = 'none'
        b.style.transform = 'rotate(90deg)'
      }
    },
    search () {
      this.loading = false
      this.finished = false
      this.page = 1
      // this.getNewProducts()
    },
    async getNewProducts () {
      try {
        const query = {
          goodsName: this.searchTxt
        }
        const res = await this.$store.dispatch('getNewProducts', query)
        this.loading = false
        if (res.success) {
          this.newProduct = res.content.result.goodsList
          console.log(this.newProduct)
        } else {
          this.$$toast(res.msg)
        }
      } catch (e) {
        console.log(e)
      }
    },
  },
  watch: {
    check () {
      console.log('tag')
    }

  },
  components: {
    vantButton: Button,
    vanIcon: Icon,
    vanCell: Cell,
    vanCellGroup: CellGroup,
    vanCollapse: Collapse,
    vanCollapseItem: CollapseItem,
    vanList: List,
    vanLoading: Loading,
    vanField: Field
  }
}
</script>

<style lang="css" scoped>
.dashboard-wrapper {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 30px 0;
  background: #f7f7f7;
  z-index: 5;
}

.dashboard {
  display: flex;
  padding: 0 10px;

  & button {
    flex: 1;
    display: block;
    /* border: 1px solid #0698ff; */
    color: #fff;
    margin: 0 20px;
    background: #0698ff;
    font-size: 30px;
    height: 90px;
    border-radius: 8px;

    &.btn-white {
      background: #fff;
      color: #0698ff;
      /* &::after {
        border-color: #0698ff;
      } */
    }
  }
}
.change {
  display: inline;
}
.new-wrapper{
  & .search-wrapper{
    display: flex;
    height: 118px;
    padding: 24px 30px;
    background: #f7f7f7;
  }
  & .inp{
    display: flex;
    flex: 1;
    align-items: center;
    margin-right: 10px;
    background: #fff;
    /* border-radius: 8px;
    border: 1px solid #dbdbdb;
    overflow: hidden; */
    & input{
      display: block;
      width: 100%;
      height: 70px;
      line-height: 68px;
      font-size: 28px;
    }
    & .search-inp{
      flex: 1;

      & .van-cell{
        padding: 5px 10px 5px 5px;
        line-height: inherit;
        font-size: 14px;
      }
    }
    &.van-hairline--surround{
      &::after{
        border-radius: 8px;
        border-color: #dbdbdb;
      }
    }
  }
  & .search-btn{
    width: 130px;
    height: 70px;
    line-height: 68px;
    background: #0698fe;
    color: #fff;
  }
    & .icon{
    width: 80px;
    height: 60px;
    text-align: center;
    line-height: 55px;
  }
  & .icon-search{
    font-size: 30px;
    color: #999;
  }
  }
  .result{
    & .departments{
      & .fold{
        position: absolute;
        transform:rotate(90deg);
        right: 50px;
        top:10px;
      }
      & .shops{
        display: none;
        & .shop{
           padding-left: 50px;
        }
        & .fold{
        position: absolute;
        transform:rotate(90deg);
        right: 50px;
        top:10px;
      }
      & .cabinets{
        display: none;
      & .cabinet{
        padding-left:100px;
      }
      }
      }
    }
  }
</style>


