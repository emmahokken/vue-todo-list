<template>
  <div id="app">
    <div class="nav-bar nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view />
  </div>
</template>

<style> @import "./assets/style.css"; </style>
