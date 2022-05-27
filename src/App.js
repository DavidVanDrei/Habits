import './App.css';
import React from 'react';
import Calendar from './components/Calender';

function App() {

  return (
      <div className="App">
        <header className='flex justify-center'>
          <div className="flex-initial w-64">
            <Calendar />
          </div>

          <div className="flex-initial w-32 ...">
          </div>
        </header>
      </div>
  );
}

export default App;
