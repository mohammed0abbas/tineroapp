import React from 'react';
import Home from './component/home';
import Loder from './component/loder/loder';


export const Contx = React.createContext();


function App() {

  const [loder, setLoder] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoder(false)
    }, 5000)
  }, [])


  const [lang, setLang] = React.useState('en')
  return (<>



    {loder ? <Loder /> : <Contx.Provider value={{ lang, setLang }}>
      <div className="App">
        <Home />
      </div> 
      </Contx.Provider>}
  </>);
}

export default App;
