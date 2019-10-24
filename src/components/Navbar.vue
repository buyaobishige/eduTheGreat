<template>
  <div>
    <a-menu mode="horizontal" v-model="current">
      <a-menu-item key="mail">
        <a-icon type="mail" />Navigation One
      </a-menu-item>
      <a-menu-item disabled key="app">
        <a-icon type="appstore" />Navigation Two
      </a-menu-item>
      <a-sub-menu>
        <span class="submenu-title-wrapper" slot="title">
          <a-icon type="setting" />Navigation Three - Submenu
        </span>
        <a-menu-item-group title="Item 1">
          <a-menu-item key="setting:1">Option 1</a-menu-item>
          <a-menu-item key="setting:2">Option 2</a-menu-item>
        </a-menu-item-group>
        <a-menu-item-group title="Item 2">
          <a-menu-item key="setting:3">Option 3</a-menu-item>
          <a-menu-item key="setting:4">Option 4</a-menu-item>
        </a-menu-item-group>
      </a-sub-menu>
      <a-menu-item key="alipay">
        <a
          href="https://ant.design"
          rel="noopener noreferrer"
          target="_blank"
        >Navigation Four - Link</a>
      </a-menu-item>
    </a-menu>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      current: ["mail"]
    };
  }
};
</script>
