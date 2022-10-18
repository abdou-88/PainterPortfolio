import { useEffect, useState } from 'react'

import './assets/Loader.css'
import LoaderBox from './Components/LoaderBox';

function App() {
  const [checked, setChecked] = useState(true);


  return (
    <LoaderBox/>
  );
}

export default App
