<template>
  <div id="calender-week">
    <div class="card-group">
      <CalendarDay />
    </div>
  </div>
</template>
<script>
import CalendarDay from "./CalendarDay.vue";
export default {
  name: "CalendarWeek",
  components: {
    CalendarDay,
  }
};
</script>
<style scoped>
</style>