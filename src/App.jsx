//MODULE IMPORT
import { BrowserRouter, Route, Switch } from "react-router-dom/cjs/react-router-dom.min";

//Main App function

export default function App() {

  //App routing

  return (

    <Context.Provider value={value}>

      <BrowserRouter>

        <Header />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/pokedex" component={Pokedex} />
          <Route exact path="/your-team" component={Team} />
          <Route exact path="/battle" component={Battle} />
          <Route exact path="/login" component={Login} />
        </Switch>

        <Footer />


      </BrowserRouter>

    </Context.Provider>

  );
}