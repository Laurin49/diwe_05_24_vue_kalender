import { reactive, readonly } from "vue";
import { calendarWeekData } from "./seed";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
};
const mutations = {
  editEvent(dayId, eventTitle) {
    // alle edit Attribute auf false setzen
    state.calendarWeekData.map((dayObj) => {
      dayObj.events.map((event) => (event.edit = false));
    });
    // Setzte edit Attribut auf true
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.title === eventTitle);
    eventObj.edit = true;
  },
  updateEvent(dayId, oldEventTitle, newEvent) {
    // Test ob newEventTitle leer ist
    newEvent.title = newEvent.title !== "" ? newEvent.title : oldEventTitle;
    // Setzte title attribut auf newEventTitle und edit auf false
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventObj = dayObj.events.find((event) => event.title === oldEventTitle);
    eventObj.title = newEvent.title;
    eventObj.priority = Number(newEvent.priority);
    eventObj.edit = false;
  },
  deleteEvent(dayId, eventTitle) {
    const dayObj = state.calendarWeekData.find((day) => day.id === dayId);
    const eventIndex = dayObj.events.findIndex(
      (event) => event.title === eventTitle
    );
    dayObj.events.splice(eventIndex, 1);
  },

};

export default {
  state: readonly(state),
  getters,
  mutations,
}