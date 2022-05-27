import { loadData, saveData } from "../Utils/LocalStorage";
import { ADD_HABIT, CHANGE_DATE } from "./ActionsType";

const initalState = {
    selected: false,
    habits: loadData("habits") || {
        '2022-05-26' :[ {
        'type': 'Leetcode', 
        'data': ['Problem 101', 'Problem 102']},
        {
        'type': 'Fitness',
        'data': ['2500 cals', 'Chest and Back']
        }
        ]
    }
}

export const Reducer = (state = initalState,{type, payload}) =>{
    switch(type){
        case CHANGE_DATE: {
            return {
                ...state,
                selected: payload
            }
        }

        case ADD_HABIT:{
            saveData("habits", [...state.habits, payload]);
            return {
                ...state,
                notes: [...state.habits, payload]
            }
        }
        default: {
            return state;
        }
    }
}