import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { ThemeProvider } from '@material-ui/styles';

import Header from '../components/ui/Header';
import theme from './ui/Theme';
import Footer from '../components/ui/Footer';
import LandingPage from '../components/LandingPage';

function App() {
  const [value, setValue] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header
          value={value}
          setValue={setValue}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
        />
        <Switch>
          <Route
            exact
            path='/'
            render={(props) => (
              <LandingPage
                {...props}
                setValue={setValue}
                setSelectedIndex={setSelectedIndex}
              />
            )}
          />
          <Route exact path='/services' component={() => <div>services</div>} />
          <Route
            exact
            path='/customsoftware'
            component={() => <div>customsoftware</div>}
          />
          <Route
            exact
            path='/mobileapps'
            component={() => <div>mobileapps</div>}
          />
          <Route exact path='/websites' component={() => <div>websites</div>} />
          <Route
            exact
            path='/revolution'
            component={() => <div>revolution</div>}
          />
          <Route exact path='/about' component={() => <div>about</div>} />
          <Route exact path='/contact' component={() => <div>contact</div>} />
          <Route exact path='/estimate' component={() => <div>estimate</div>} />
        </Switch>
        <Footer setValue={setValue} setSelectedIndex={setSelectedIndex} />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
