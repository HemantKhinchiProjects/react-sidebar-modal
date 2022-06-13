import React from 'react';
import { useGlobalContext } from '../Store/context'; //costom Hooks
const Home = () => {
  const { openSidebar, openModal } = useGlobalContext();

  return (
    <main>
      <button className="sidebar-toggle" onClick={openSidebar}>
        <i class="fa-solid fa-align-left"></i>
      </button>
      <button className="btn" onClick={openModal}>
        Show Modal
      </button>
    </main>
  );
};
export default Home;
