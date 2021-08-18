import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        tasks: [],
        completedTasks: [],
        showForm: false
    },
    getters: {
        getTasks: state =>  {
            console.log(state.tasks.filter((task) => !task.completed))
            return state.tasks.filter((task) => !task.completed)
        },
        getCompletedTasks: state => {
            // return state.completedTasks
            return state.tasks.filter((task) => task.completed)

        },
        getShowForm: state => {
            return state.showForm
        }
    },
    // synchonious
    mutations: {
        ADD_TASK(state, newTask) {
            state.tasks.push(newTask)
        },
        DELETE_TASK(state, id) {
            state.tasks = state.tasks.filter((task) => task.id !== id);
        },
        TOGGLE_ADD_TASK_FORM(state) {
            state.showForm = !state.showForm;
        },
        TOGGLE_REMINDER(state, id) {
            state.tasks = state.tasks.map((task) => task.id == id ? { ...task, reminder: !task.reminder } : task )
        },
        COMPLETE_TASK(state, task) {
            task.completed = true;
            // state.completedTasks.push(task);
            // state.tasks = state.tasks.filter((atask) => atask.id !== task.id);

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
        toggleReminder({commit}, id) {
            commit('TOGGLE_REMINDER', id)
        },
        completeTask({commit}, task) {
            commit('COMPLETE_TASK', task)
        }
    }
})