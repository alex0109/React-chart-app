import React , {useState} from 'react';
import './App.css';

const data = [
  { name: "Landing Page", time: 40 },
  { name: "Configurator", time: 79 },
  { name: "Check-out", time: 16 },
  { name: "Deal", time: 28 }
];

const App = () => {

  const [timeData, setTimeData] = useState(data);
  const maxTime = 100;

  const setRandomData = (data) => data.map((num) => ({
    name: num.name,
    time: Math.round(Math.random() * maxTime)
  }))

  let chartHandleRefresh = () => {
    const newData = setRandomData(timeData);
    setTimeData(newData);   
  }

  const setPercentWidth = (currTime) => {
    const perWidth = (Math.ceil(((currTime) * 100)/maxTime))
    return perWidth
  }


  return (
    <>
      <div className='container'>
      {timeData.map((data) => {
        const currentWidth = setPercentWidth(data.time)
        return (
          <div className='item'>
            <p>{data.name}</p>
            <div className='bar'>
              <div className='progress' style={{
                width: `${currentWidth}%`
              }}>{data.time}</div>
              </div>
          </div>
        );
      })}
      </div>

      <button onClick={chartHandleRefresh}>Refresh Chart</button>

    </>
  );
}


export default App;
