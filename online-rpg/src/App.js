import React from 'react';
import World from './features/world/index'
import Sidebar from './sidebar/Sidebar'
import Heading from './sidebar/Heading'
import Interact from './sidebar/interact'



function App() {
  return (
    <>
    <Heading/>
    <div style={{display: 'flex', margin: '50px auto', padding: '10px', justifyContent: 'center', width: '80%'}}>
      <World />
      <Sidebar />
    </div>
    <Interact/>
    </>
  );
}

export default App;
