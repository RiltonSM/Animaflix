import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import CadastroVideo from './pages/Cadastro/Video';
import CadastroCategoria from './pages/Cadastro/Categoria';
import Pagina404 from './pages/Pagina404';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/cadastro/categoria" component={CadastroCategoria}/>
        <Route path="/cadastro/videos" component={CadastroVideo}/>
        <Route component={Pagina404}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
