import React from 'react';
import { FaPizzaSlice, FaHamburger } from 'react-icons/fa';
import { GiNoodles, GiChopsticks } from 'react-icons/gi';
// import { BsHouseFill } from 'react-icons/bs';
import styled from 'styled-components';
// import { NavLink } from 'react-router-dom';

const Gategory = () => {
  return (
    <div>
      <div>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger />
        <h4>Hamburgers</h4>
      </div>
      <div>
        <GiNoodles />
        <h4>Noodles</h4>
      </div>
      <div>
        <GiChopsticks />
        <h4>Asian</h4>
      </div>
    </div>
  );
};

export default Gategory;
