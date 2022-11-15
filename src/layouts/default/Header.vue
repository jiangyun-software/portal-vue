<template>
  <div class="header">
    <div class="icon">
      <router-link to="/index"><img :src="logoFull" alt="" /></router-link>
      <div class="triangle"></div>
    </div>
    <div class="menus">
      <div class="menus-content">
        <div class="menus-item">
          <div class="menus-item-text active">首页</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">算法空间</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">核心产品</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">行业方案</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">渠道合作</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">新闻动态</div>
        </div>
        <div class="menus-item">
          <div class="menus-item-text">关于匠韵</div>
        </div>
      </div>
    </div>
    <div class="languages"></div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import logoFull from '@/assets/logo-full.png'

export default defineComponent({
  name: 'JyHeader',
  setup() {
    return {
      logoFull
    }
  }
})
</script>
<style lang="scss">
  .header {
    display: flex;
    height: 100px;
    background-color: black;
    position: absolute;
    width: 100%;

    .icon {
      width: 642px;
      height: 100%;
      position: relative;
      background-color: white;

      img {
        position: absolute;
        top: 50%;
        left: 360px;
        transform: translateY(-50%);
      }

      .triangle {
        width: 0;
        height: 0;
        border-color: transparent black transparent transparent;//设置其它边颜色透明
        border-style: solid;
        border-width: 100px 60px 0 0;//三角形边的大小
        transform: rotate(0deg);
        position: absolute;
        top: 0px;
        right: 0px;
      }
    }

    .menus {
      flex: 1;
      height: 100%;
      display: flex;
      justify-content: center;

      .menus-content {
        display: inline-flex;
        height: 100%;

        .menus-item {
          height: 100%;
          color: rgba(255, 255, 255, 0.6);
          margin: 0px 28px;

          .menus-item-text {
            height: 100%;
            line-height: 100px;
            white-space: nowrap;
            font-size: 14px;
          }

          .active {
            color: white;
            border-bottom: 4px solid white;
          }
        }
      }
    }

    .languages {
      width: 200px;
      height: 100%;
    }
  }
</style>
