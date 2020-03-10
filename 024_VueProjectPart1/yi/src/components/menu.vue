<template lang="html">
  <div class="ydc-menu">
    <ul>
      <li class="ydc-menu-item" v-for="menu in menus">
        <router-link v-if="menu.type=='link'" :to="menu.to">
          <i :class="['ydc-icon', 'fl', menu.icon]"></i>
          {{menu.title}}
        </router-link>
        <div v-if="menu.type=='sub'">
          <span class="ydc-menu-sub-title">
            <i :class="['ydc-icon', 'fl', menu.icon]"></i>
            {{menu.title}}
          </span>
          <ul>
            <li v-for="child in menu.children">
              <router-link :to="child.to">{{child.title}}</router-link>
            </li>
          </ul>
        </div>
      </li>
      <li class="ydc-menu-item">

      </li>
    </ul>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="css" scoped>
.ydc-menu {
    min-width: 150px;
    min-height: 1300px;
    height: 100%;
    background: #f4f4f4;
    padding: 33px 0 50px;
    color: #333;
    letter-spacing: 1px;
    border-radius: 2px;
}

.ydc-body .menu {
    min-height: 1300px;
    height: 100%;
    background: #f4f4f4;
    border-radius: 8px;
    padding: 33px 0 50px;
    color: #333;
    letter-spacing: 1px;
}

.ydc-menu .ydc-menu-item a {
    display: block;
    width: 100%;
    padding: 10px 0 10px 68px;
    line-height: 20px;
    position: relative;
    font-size: 14px;
}

.ydc-menu .ydc-menu-item a:hover {
    background: #ff6565;
    color: #fff;
}

.ydc-menu .ydc-menu-item .router-link-active {
    background: #ff6565;
    color: #fff;
}

.ydc-menu-sub-title {
    padding: 10px 0 10px 70px;
    color: #999;
    border-top: 1px solid #ddd;
    margin-top: 15px;
    position: relative;
    display: inline-block;
    width: 100%;
    line-height: 22px;
    font-size: 14px;
}
</style>