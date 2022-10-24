<script setup>
const props = defineProps(["state"]);
</script>
<template>
  <div>
    <div v-if="props.state">
      <div class="loading">
        <img src="../assets/Fading fangs.gif" />
      </div>
    </div>
    <div v-else>
      <slot></slot>
    </div>
  </div>
</template>
<style scoped>
.loading {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 10px;
}
</style>
