<template>
<div class="completed">
  <h1>This is a list of the tasks you've completed!</h1>
  <div :key="task.id" v-for="task in tasks">
    <Task :task="task"/>
  </div>
</div>
</template>

<script>
import Task from "@/components/Task";
export default {
  name: "CompletedTasks",
  components: {
    Task
  },
  computed: {
    tasks() {
      return this.$store.getters.getCompletedTasks;
    }
  }
}

</script>

<style scoped>

</style>