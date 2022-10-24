<template>
  <div class="main">
    <div class="container">
      <div class="side">
        <slot name="left-side"></slot>
      </div>
      <div class="content">
        <slot name="menu-side"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main {
  padding-top: 3em;
  width: 100%;
  padding-left: 16px;
  padding-right: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1250px;
}
.container {
  width: 100%;
  display: flex;
}
.side {
  width: 20%;
}
.content {
  width: 80%;
}
</style>
