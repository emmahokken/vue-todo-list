import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [],
        showForm: false
    },
    getters: {
        getTasks: state =>  {
            return state.tasks
        },
        getShowForm: state => {
            return state.showForm
        }
    },
    // synchonious
    mutations: {
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        ADD_TASK(state, newTask) {
            state.tasks.push(newTask)
        },
        TOGGLE_ADD_TASK_FORM(state) {
            state.showForm = !state.showForm;
        },
        TOGGLE_DONE_TASK(state, id) {
            state.tasks = state.tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder } : task )
        }
    },
    // asynchronichronous
    actions: {
        deleteTask({commit}, id) {
            commit('DELETE_TASK', id)
        },
        addTask({commit}, newTask) {
            commit('ADD_TASK', newTask)
        },
        toggleAddTaskForm({commit}) {
            commit('TOGGLE_ADD_TASK_FORM')
        },
        toggleDoneTask({commit}, id) {
            commit('TOGGLE_DONE_TASK', id)
        },
    }
})