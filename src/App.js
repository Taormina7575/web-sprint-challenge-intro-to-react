import React, {useState, useEffect} from 'react';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header/Header';
import axios from 'axios';
import Characters from './components/Characters/Characters';

const AppWrapper = styled.div`
  width: 75%;
  margin: 0 auto;
  background-color: rgba(0,0,0,.8);
`
const App = () => {
  const [characterData, setData] = useState(null)

  useEffect(() => {
    axios.get('https://swapi.dev/api/people')
        .then(res => {
            setData(res.data.results)
        })
        .catch(err => {
          console.log(err)
        })
  }, [])

  
  return (
    <AppWrapper>
      <Header></Header>
      <Characters data={characterData}></Characters>
    </AppWrapper>
  );
}

export default App;
