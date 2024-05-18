<template>
  <div id="calendar-event">
    <div class="alert text-center" :class="alertColor">
      <template v-if="!event.edit">
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
          <i class="fas fa-edit me-2" role="button" @click="editEvent()"></i>
          <i class="far fa-trash-alt" role="button" @click="deleteEvent()"></i>
        </div>
      </template>
      <template v-else>
        <input type="text" class="form-control" 
          ref="newEventTitleInput"
          :placeholder="event.title"
          v-model="newEventTitle" />
          <!-- @input="setNewEventTitle($event)" /> -->

        <select class="form-select mt-2" v-model="newEventPriority">
          <option value="-1">Hoch</option>
          <option value="0">Mittel</option>
          <option value="1">Tief</option>
        </select>
        <hr />
        <i class="fas fa-check" role="button" @click="updateEvent()"></i>
      </template>
      
    </div>
  </div>
</template>
<script>
import Store from '../store';
export default {
  name: "CalendarEvent",
  props: {
    event: {
      type: Object,
    },
    day: Object,
  },
  data() {
    return {
      newEventTitle: "",
      newEventPriority: this.event.priority,
    }
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
  methods: {
    deleteEvent() {
      Store.mutations.deleteEvent(this.day.id, this.event.title);
    },
    editEvent() {
      Store.mutations.editEvent(this.day.id, this.event.title);
      // auf die Template Refs zugreifen
      // function wird ausgeführt wenn der nächste Tick erreicht wird, 
      // wenn das Template neu gerendert wird
      this.$nextTick(() => {
        this.$refs.newEventTitleInput.focus();
      })
    },
    updateEvent() {
      Store.mutations.updateEvent(this.day.id, this.event.title, {
        title: this.newEventTitle,
        priority : this.newEventPriority,
      });
    },
    setNewEventTitle(event) {
      this.newEventTitle = event.target.value;
    }
  },
};
</script>
<style scoped></style>
