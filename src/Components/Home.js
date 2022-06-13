import React, { useContext } from 'react';
import { AppContext } from '../Store/context';
const Home = () => {
  const data = useContext(AppContext);
  return (
    <main>
      <button className="sidebar-toggle">
        <i class="fa-solid fa-align-left"></i>
      </button>
      <button className="btn">Show Modal</button>
    </main>
  );
};
export default Home;
