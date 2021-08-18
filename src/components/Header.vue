<template>
<header>
  <h1> To Do List</h1>
  <Button @hide-form="hideAddTaskForm" text="Press me!"/>
</header>
</template>

<script>
import Button from "@/components/Button";
export default {
  name: "Header",
  components: {
    Button
  },
  methods: {
    hideAddTaskForm() {
      this.$store.dispatch('toggleAddTaskForm')
    }
  }
}
</script>

<style scoped>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
  }
</style>