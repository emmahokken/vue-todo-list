<template>
  <div :class="[task.reminder ? 'reminder' : '', 'task']" @dblclick="toggleReminder(task.id)" >
    <h3>{{ task.text }}
      <div class="buttons">
        <i v-show="!task.completed" class="fas fa-check" @click="completeTask(task)" ></i>
        <i class="fas fa-times" @click="onDelete(task.id)" ></i>
      </div>
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
    toggleReminder(id) {
      console.log("hello are you there???")
      this.$store.dispatch('toggleReminder', id);
    },
    completeTask(task) {
      this.$store.dispatch('completeTask', task);
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

  .fa-check {
    color: limegreen;
    cursor: pointer;
    padding-right: 20px;
  }

  .buttons {
    align-items: end;
    /*align-content: end;*/
  }

</style>