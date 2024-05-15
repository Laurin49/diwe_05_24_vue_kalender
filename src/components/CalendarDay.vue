<template>
  <div class="card" v-for="i in 7" :key="i">
    <div class="card-header text-center" role="button">
      <strong>Montag</strong>
    </div>
    <div class="card-body">
      <div id="calendar-day">
        <CalendarEvent />
      </div>
    </div>
  </div>
</template>
<script>
import CalendarEvent from "./CalendarEvent.vue";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  }
};
</script>
<style scoped>
</style>