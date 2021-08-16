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
  props: {
    tasks: Array
  }
}
</script>

<style scoped>

</style>