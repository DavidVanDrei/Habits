import { ADD_HABIT, CHANGE_DATE } from './ActionsType';

// Add note
export const addHabit = (payload) => {
    return {
        type: ADD_HABIT,
        payload
    }
};

// Changing selected date
export const changeDate = (payload) => {
    return {
        type: CHANGE_DATE,
        payload
    }
}