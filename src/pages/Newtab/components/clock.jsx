import React from 'react';
import Clock from 'react-live-clock';
const ClockBg = (props) => {
  var timezones = [
    {
      name: 'Tokyo',
      zone: 'Asia/Tokyo',
    },
    {
      name: 'Beijing',
      zone: 'Asia/Shanghai',
    },
    {
      name: 'New Delhi',
      zone: 'Asia/Kolkata',
    },
    {
      name: 'Dubai',
      zone: 'Asia/Dubai',
    },
    {
      name: 'System',
    },
    {
      name: 'Moscow',
      zone: 'Europe/Moscow',
    },
    {
      name: 'Berlin',
      zone: 'Europe/Oslo',
    },
    {
      name: 'London',
      zone: 'GB',
    },
    {
      name: 'New York',
      zone: 'America/New_York',
    },
  ];
  return (
    <div className="clock_bg">
      <div className="fixed flex   bottom-5 left-0  justify-between w-full p-5">
        {timezones.map((e, i) => {
          return (
            <div key={i} className={'flex  flex-col w-[11%] time_item-' + i}>
              <div className="font-base">{e.name}</div>
              <Clock
                format={'HH:mm / MMM D'}
                ticking={true}
                timezone={e.zone}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ClockBg;
