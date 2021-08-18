<template>
  <form @submit.prevent="onSubmit" class="add-form">
    <div class="form-control">
      <label>Task: </label>
      <input type="text" name="task" v-model="task" placeholder="Add task">
    </div>
    <div class="form-control">
      <label>Date & Time: </label>
      <input type="text" name="date" v-model="date" placeholder="Add Date & Time">
    </div>
    <div class="form-control form-control-check">
      <label>Set reminder: </label>
      <input type="checkbox" name="reminder" v-model="reminder" class="btn">
    </div>
    <div class="form-control-submit">
      <button class="btn" type="submit">Add Task</button>
    </div>
  </form>
</template>

<script>
export default {
  name: "AddTask",
  data() {
    return {
      task: null,
      date: null,
      reminder: false
    }
  },
  methods: {
    onSubmit: function () {
      if (!this.task) {
        alert("Please add a task");
        return false;
      } else if (!this.date) {
        alert("Please add a date");
        return false;
      }
      const newTask = {
        id: Math.floor(Math.random() * 10000),
        text: this.task,
        day: this.date,
        reminder: this.reminder
      }
      this.$store.dispatch('addTask', newTask)
      this.$store.dispatch('toggleAddTaskForm')
      // this.$store.state.tasks = [...this.$store.state.tasks, newTask];
      // this.$store.state.showForm = false;

      this.task = null;
      this.date = null;
      this.reminder = false;

      // this.$emit('add-task', newTask)
      return true
    }
  }
  }
</script>

<style scoped>
.add-form {
  margin-bottom: 40px;
}

.form-control {
  margin: 20px 0;
}

.form-control label {
  display: block;
  margin: 5px;
}

.form-control input {
  width: 100%;
  height: 40px;
  margin: 5px;
  padding: 3px 7px;
  font-size: 17px;
}

.form-control-check {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
}

.form-control-check label {
  flex: 1;
}

.form-control-check input {
  flex: 2;
  height: 20px;
}

</style>