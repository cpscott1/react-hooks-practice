import React, { useState } from 'react';

function App() {
  const [activated, setActivated] = useState(false)
  const buttonText = activated ? 'Active' : 'Inactive';
  return (
    <button>
      { buttonText }
    </button>
  )
}

export default App;
