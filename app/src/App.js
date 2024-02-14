import LobbyPage from './components/lobby/LobbyPage'
import CodeBlockPage from './components/codeblock/CodeBlockPage';
import React, { useState } from 'react'

const App = () => {
  const [id, setId] = useState();
  // console.log(id)
  return (
    <div className="App">
      {!id && <LobbyPage setId={setId}/>}
      {id && <CodeBlockPage id={id} setId={setId}/>}
    </div>
  );
}

export default App;


