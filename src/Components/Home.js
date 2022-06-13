import React from 'react';
import { useGlobalContext } from '../Store/context'; //costom Hooks
const Home = () => {
  const data = useGlobalContext();
  console.log(data);
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
