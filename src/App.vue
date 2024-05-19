<template>
  <div class="container-fluid mt-5">
    <div class="row">
      <div class="col-12">
        <!-- <CalendarWeekAsList />
        <CalendarWeek /> -->
        <keep-alive>
          <transition name="fade" mode="out-in" appear>
            <component :is="activeView" />
          </transition>
        </keep-alive>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-4 offset-4">
        <CalendarEntry />
      </div>
      <div class="col-2 offset-2">
        <div class="float-end">
          <!-- Mit dem Button blenden wir die Calendar-Settings-Component ein bzw. aus. -->
          <button
            class="btn btn-lg mb-2"
            :class="buttonSettingsClasses"
            @click="toggleDisplaySettings()"
          >
            <i class="fas fa-cogs"></i>
          </button>
        </div>
        <!-- <transition name="fade">
          <CalendarSettings v-if="displaySettings" />
        </transition> -->
        <transition 
          enter-active-class="animate__animated animate__bounceInRight"
          leave-active-class="animate__animated animate__bounceOutRight">
          <CalendarSettings v-if="displaySettings" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
// import { defineAsyncComponent } from "vue";
import Store from "./store";
import CalendarWeek from "./components/CalendarWeek.vue";
import CalendarWeekAsList from "./components/CalendarWeekAsList.vue";
import CalendarEntry from "./components/CalendarEntry.vue";
import CalendarSettings from "./components/CalendarSettings.vue";
export default {
  name: "App",
  components: {
    CalendarWeekAsList,
    CalendarWeek,
    CalendarEntry,
    CalendarSettings,
    // CalendarSettings: defineAsyncComponent(() => {
    //   import(/*webpackChunkName: 'CalendarSettingsComponent' */
    //   "./components/CalendarSettings.vue");
    // }),
  },
  data() {
    return {
      displaySettings: false,
    };
  },
  computed: {
    buttonSettingsClasses() {
      return this.displaySettings ? ["btn-success"] : ["btn-outline-success"];
    },
    activeView() {
      return Store.getters.activeView();
    },
  },
  methods: {
    toggleDisplaySettings() {
      this.displaySettings = !this.displaySettings;
    },
  },
};
</script>

<style>
@import "~bootstrap/dist/css/bootstrap.min.css";
@import "~@fortawesome/fontawesome-free/css/all.min.css";
@import "~animate.css/animate.min.css";

.square {
  width: 40px;
  height: 40px;
}
/* Transition fade */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s ease-out;
}
</style>
