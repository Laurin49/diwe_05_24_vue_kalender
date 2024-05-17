<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <div>
        <slot name="eventPriority" :priorityDisplayName="priorityDisplayName">
          <!-- Fallback Content - wenn der Inhalt von aussen nicht gefüllt wird -->
          <strong>{{ priorityDisplayName }}</strong>
        </slot>
      </div>

      <slot :event="event">
        <!-- Fallback Content - wenn der Inhalt von aussen nicht gefüllt wird -->
        <div>{{ event.title }}</div>
      </slot>

      <div>
        <i class="fas fa-edit me-2" role="button"></i>
        <i class="far fa-trash-alt" role="button"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CalendarEvent",
  props: {
    event: {
      type: Object,
    },
  },
  computed: {
    priorityDisplayName() {
      switch (this.event.priority) {
        case 1:
          return "Tief";
        case 0:
          return "Mittel";
        case -1:
          return "Hoch";
      }
      return "Unbekannte Priorität";
    },
    alertColor() {
      return "alert-" + this.event.color;
    }
  },
};
</script>
<style scoped></style>
