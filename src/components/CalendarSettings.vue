<template>
  <div id="calendar-settings">
    <div class="card">
      <div class="card-header text-center bg-success text-white">
        <strong>Einstellungen</strong>
      </div>
      <div class="card-body">
        <ul class="nav nav-pills nav-fill">
          <li
            v-for="(icon, componentName) in views"
            :key="componentName"
            class="nav-item"
            role="button"
          >
            <a
              class="nav-link"
              :class="isActiveView(componentName)"
              @click="changeActiveView(componentName)"
            >
              <i class="fas fa-icons" :class="icon"></i>
            </a>
          </li>
        </ul>
        <hr />
        <ul class="nav nav-pills nav-fill">
          <li class="nav-item" role="button">
            <a
              class="nav-link"
              :class="isActiveOrdering('priority')"
              @click="changeOrdering('priority')"
              ><i class="fas fa-sort-numeric-down-alt text-success"></i
            ></a>
          </li>
          <li class="nav-item" role="button">
            <a
              class="nav-link"
              :class="isActiveOrdering('title')"
              @click="changeOrdering('title')"
              ><i class="fas fa-sort-alpha-down text-success"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import Store from "../store";
export default {
  name: "CalendarSettings",
  data() {
    return {
      views: {
        CalendarWeek: "fas fa-table",
        CalendarWeekAsList: "fas fa-list",
      },
    };
  },
  methods: {
    changeActiveView(componentName) {
      Store.mutations.setActiveView(componentName);
    },
    isActiveView(componentName) {
      if (componentName === Store.getters.activeView()) {
        return ["border border-success"];
      }
    },
    isActiveOrdering(ordering) {
      if (ordering === Store.getters.activeOrdering()) {
        return ["border border-success"];
      }
    },
    changeOrdering(ordering) {
      Store.mutations.setActiveOrdering(ordering);
    }
  },
};
</script>
<style scoped></style>
