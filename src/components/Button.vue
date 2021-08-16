<template>
  <button @click="onClick" class="btn" :style="{background: backgroundColor}">{{ text }}</button>
</template>

<script>
export default {
  name: "Button",
  data() {
    return {
      purple: true,
      backgroundColor: '#946acf',
    }
  },
  props: {
    text: String
  },
  methods: {
    onClick() {
      this.purple = !this.purple;
      this.backgroundColor = this.purple ? '#946acf' : '#01acc7';
      this.$emit('hide-form');
    }
  }
}
</script>

<style scoped>

</style>