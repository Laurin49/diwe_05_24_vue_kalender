import { reactive, readonly } from "vue";
import { calendarWeekData } from "./seed";

const state = reactive({
  calendarWeekData,
});

const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active),
};
const mutations = {};

export default {
  state: readonly(state),
  getters,
  mutations,
}