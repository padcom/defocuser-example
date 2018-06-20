<template>
  <div id="app">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a href="#">exercitation</a>  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="dropdown" name="me">
      <span class="label" ref="label1" @click="toggle('dropdown1')">click me!</span>
      <div v-if="dropdown1" class="dropdown-content" v-defocus.prevent.capture="close1" v-defocus-secondary="$refs.label1">
        Hello, world!
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a href="#">exercitation</a>  ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
    <div class="dropdown" name="me">
      <span class="label" ref="label2" @click="toggle('dropdown2')">click me!</span>
      <div v-if="dropdown2" class="dropdown-content" v-defocus.stop.capture="close2" v-defocus-secondary="$refs.label2">
        Hello, world!
      </div>
    </div>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud <a href="#">exercitation</a> ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      dropdown1: false,
      dropdown2: false
    }
  },
  methods: {
    toggle (dropdown) {
      this[dropdown] = !this[dropdown]
    },
    close1 () {
      this.dropdown1 = false
    },
    close2 () {
      this.dropdown2 = false
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
