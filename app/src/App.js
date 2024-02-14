import LobbyPage from './components/lobby/LobbyPage'
import CodeBlockPage from './components/codeblock/CodeBlockPage';
import React, { useState } from 'react'

const App = () => {
  const [id, setId] = useState();
  // console.log(id)
  return (
    <div className="App">
      <LobbyPage setId={setId}/>
      {id && <CodeBlockPage id={id}/>}
    </div>
  );
}

export default App;


