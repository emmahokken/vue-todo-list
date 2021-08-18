<template>
  <div class="home">
    <div class="container">
      <Header />
      <div v-show="showForm">
        <AddTask/>
      </div>
      <Tasks :tasks="tasks"/>
      <Footer/>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Tasks from "@/components/Tasks";
import AddTask from "@/components/AddTask";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    Tasks,
    AddTask
  },
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
    showForm() {
      return this.$store.getters.getShowForm;
    }
  },
  // data: function () {
  //   return {
  //     tasks: [],
  //     showForm: false
  //   }
  // },
  // methods: {
  //   addTask(task) {
  //     this.tasks = [...this.tasks, task];
  //     this.showForm = false;
  //   },
  //   hideAddTaskForm() {
  //     this.showForm = !this.showForm;
  //   },
  //   toggleReminder(id) {
  //     this.tasks = this.tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder } : task )
  //     this.$emit('task-completed', id);
  //   },
  //   deleteTask(id) {
  //     this.tasks = this.tasks.filter((task) => task.id !== id);
  //   }
  // },
  // watches for changes in certain variables
  // watch: {
  //   showForm(newValue) {
  //     localStorage.showForm = newValue;
  //   },
  //   tasks(newTask) {
  //     localStorage.tasks = JSON.stringify(newTask);
  //   }
  // },
  // mounts certain values to variables before displaying
  // mounted() {
  //   if (localStorage.showForm != null) {
  //     this.showForm = JSON.parse(localStorage.showForm);
  //   }
  //   if (localStorage.tasks) {
  //     this.tasks = JSON.parse(localStorage.tasks)
  //   }
  // },
};
</script>
