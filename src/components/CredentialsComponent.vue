<template>
  <div class="wrapper">
    <div class="container">
      <div class="title">
        <h1><slot name="title"></slot></h1>
      </div>
      <div class="formfields">
        <slot name="inputs"></slot>
      </div>
    </div>
  </div>
</template>
<style scoped>
.container {
  position: absolute;
  left: 49%;
  top: 40%;
  transform: translate(-50%, -50%);
  padding: 10px;
  background-color: rgb(255, 255, 255);
  border-radius: 10px;
}
.title {
  display: flex;
  justify-content: center;
  margin-bottom: 2em;
}
.formfields {
  display: inline-grid;
}
</style>
