<template>
  <div>
  <div :key="task.id" v-for="task in tasks">
    <Task :task="task"/>
  </div>
  </div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "Tasks",
  components: {
    Task
  },
  computed: {
    tasks() {
      return this.$store.state.tasks
    }
  },
}
</script>

<style scoped>

</style>