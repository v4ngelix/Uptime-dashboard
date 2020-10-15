import React from 'react';
import { ProjectAvailabilityBar } from './ProjectAvailabilityBar';

function App() {
  return (
    <div className="App bg-gray-100 flex content-center p-20 w-screen h-screen">
      <div className="container mx-auto bg-white border border-gray-200 rounded-xl h-auto shadow-2xl">
        <ProjectAvailabilityBar projectName="Project A"></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project B"></ProjectAvailabilityBar>
        <ProjectAvailabilityBar projectName="Project C"></ProjectAvailabilityBar>
      </div>
    </div>
  );
}

export default App;
