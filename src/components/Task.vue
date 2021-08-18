<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']" @dblclick="toggleDone(task.id)" >
    <h3>{{ task.text }}
      <i class="fas fa-times" @click="onDelete(task.id)" ></i>
    </h3>
    <p>{{ task.day }}</p>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    task: Object
  },
  methods: {
    onDelete(id) {
      this.$store.dispatch('deleteTask', id)
    },
    toggleDone(id) {
      this.$store.dispatch('toggleDoneTask', id);
    }
  }
}
</script>

<style scoped>
  .task {
    margin: 5px;
    background: #e1f9ff;
    color: #01acc7;
    padding: 10px 20px;
  }

  .task.reminder {
    border-left: 5px solid gold;
  }

  .task h3 {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .fa-times {
    color: red;
    cursor: pointer;
  }

</style>