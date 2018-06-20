<template>
  <div id="app">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="dropdown" name="me">
      <span class="label" ref="label" @click="toggle">click me!</span>
      <div v-if="dropdown" class="dropdown-content" v-defocus.capture="close" v-defocus-secondary="$refs.label">
        Hello, world!
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dropdown: false
    }
  },
  methods: {
    toggle () {
      this.dropdown = !this.dropdown
    },
    close () {
      this.dropdown = false
    }
  }
}
</script>

<style>
.label {
  cursor: pointer;
  user-select: none;
  background-color: red;
}

.label:hover {
  font-weight: bold;
}

.dropdown-content {
  display: block;
  position: absolute;
  border: solid 1px rgb(185, 185, 185);
  width: 100px;
  height: 100px;
  background-color: #eeeeee;
  box-shadow: 1px 1px 5px gray;
}
</style>
