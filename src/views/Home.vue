<template>
  <div class="home">
    <div class="container">
      <Header @hide-form="hideAddTaskForm"/>
      <div v-show="toggleAddTaskForm">
        <AddTask @add-task="addTask"/>
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
  data: function () {
    return {
      tasks: [],
      toggleAddTaskForm: false
    }
  },
  methods: {
    addTask(task) {
      this.tasks = [...this.tasks, task];
    },
    hideAddTaskForm() {
      this.toggleAddTaskForm = !this.toggleAddTaskForm;
    }
  },
  created() {
    this.tasks = [
      {
        id: 0,
        text: "Meeting at home",
        day: "March 4th, 2020 at 1:30pm",
        reminder: true
      },
      {
        id: 1,
        text: "Meeting at ARTIS",
        day: "March 13th, 2021 at 1:30pm",
        reminder: false
      },
      {
        id: 2,
        text: "Record the end of the world",
        day: "August 11th, 2021 at 4:00am",
        reminder: true
      },
      {
        id: 3,
        text: "Feed the cat",
        day: "July 4th, 2020 at 1:30pm",
        reminder: true
      },
    ]
  }
};
</script>
