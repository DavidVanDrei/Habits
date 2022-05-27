import React, {useState} from "react";
import { useDispatch, useSelector } from "react-redux"; 
import { changeDate } from '../Redux/Actions';
import moment from "moment";
import Habit from "./Habit";

// builds text for date


function DayModal() {

        
  const dispatch = useDispatch();
  const [loaded, setLoaded ] = useState(false)
  const selected = useSelector(state => state.selected);
  const habits = useSelector(state => state.habits[moment(selected).format('YYYY-MM-DD')]); // eslint-disable-line
  
  const [desc, setDesc] = React.useState("No Habits Tracked Today"); // eslint-disable-line

if(habits && !loaded){
    console.log(habits)
    const items = habits.map( (item) => <Habit title={item.type} data={item.data}/>)
    setDesc(items)
    setLoaded(true)
}

      const closeModal = () => {
        dispatch(changeDate(false));
    }

  return (
<div id="small-modal" tabIndex="-1" className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 h-modal md:h-full">
    <div className="relative p-4 w-full max-w-md h-full md:h-auto">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-center p-5 rounded-t border-b dark:border-gray-600">
                <h3 className="text-xl font-medium text-gray-900 dark:text-white">
                <span>{moment(selected).format('MMMM Do YYYY')}</span>

                </h3>
                <button onClick={closeModal} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="small-modal">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>  
                </button>
            </div>
            <div className="p-6 space-y-6">
                {desc}
            </div>
            
            <div className="flex items-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600">
                <button onClick={closeModal} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Close</button>
            </div>
        </div>
    </div>
    </div>
  )
}
export default DayModal;