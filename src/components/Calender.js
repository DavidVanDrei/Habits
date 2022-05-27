import React from 'react';
import Cal from "react-calendar";
import 'react-calendar/dist/Calendar.css';
import { useDispatch, useSelector } from "react-redux"; 
import { changeDate } from '../Redux/Actions';
import DayModal from './DayModal';
import './tiles.css'
import moment from "moment";




const Calender = () => {
    const today = new Date();
    const dispatch = useDispatch()
    const selected = useSelector(state => state.selected);
    const habits = useSelector(state => state.habits);

    function tileClassName({date,view}){
        if(moment(date).format('YYYY-MM-DD') in habits){
            return 'habit'
        }

    }

    const changeSelected = (date) => {
        dispatch(changeDate(date));

    }


    return(
        <div>
            <Cal value = {selected || today} onChange={changeSelected} tileClassName={tileClassName}/>
            {
            selected ? <DayModal /> : null
            }
        </div>

        
    )
}

export default Calender