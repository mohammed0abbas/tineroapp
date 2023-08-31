import React from 'react';
import Home from './component/home';  


export const Contx = React.createContext();


function App() {

  const [lang,setLang] = React.useState('en')
  return (<Contx.Provider value={{lang,setLang}}>
    <div className="App">
      


      
      <Home />






     
    </div> </Contx.Provider>
  );
}

export default App;
