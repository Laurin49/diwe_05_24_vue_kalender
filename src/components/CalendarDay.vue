<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <div id="calendar-day">
        <CalendarEvent
          v-for="event in day.events"
          :key="event.title"
          :event="event"
        >
          <template #eventPriority="slotProps">       // Kurzschreibweise für v-slot ist #
            <h5>{{ slotProps.priorityDisplayName }}</h5>
          </template>
          <template #default="{ event }">         // Destructering stat slotProps { event }
            <i>{{event.title }}</i>
          </template>
        </CalendarEvent>
      </div>
    </div>
  </div>
</template>
<script>
import CalendarEvent from "./CalendarEvent.vue";
import Store from "../store";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  props: {
    day: {
      type: Object,
      required: true,
      default: function () {
        return {
          id: -1,
          shortName: "N.a.",
          fullName: "Not available",
          events: [],
          active: false,
        };
      },
      validator: function (value) {
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary", "text-white"]
        : null;
    },
  },
};
</script>
<style scoped></style>
