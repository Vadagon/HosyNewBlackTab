import '../../assets/styles/tailwind.css';
import React, { useEffect, useState } from 'react';
import bg_1 from '../../assets/img/bg_1.jpg';
import './index.scss';
import ClockBg from './components/clock';
import Footer from './components/footer';
import SearchForm from './components/search_form';

const Newtab = () => {
  var [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
  });
  return (
    <div className="App">
      <div active={load ? 'true' : ''} className="loader"></div>
      <div
        className="p-5 flex justify-center items-center bg-[#2d2d2d] bg-fixed  bg-cover bg-no-repeat bg-center    h-[100vh]"
        style={{
          backgroundImage: 'url(' + bg_1 + ')',
        }}
      >
        <ClockBg />
        <SearchForm />
        <Footer />
      </div>
    </div>
  );
};

export default Newtab;
