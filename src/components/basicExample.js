import React from "react";
import { BrowserRouter as Router, Route, Link,   Switch } from "react-router-dom";

function BasicExample() {
  return (
    <Router>
    
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
                   <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
        </ul>

        <hr />
  <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/topics" component={Topics} />
            <Route component={NoMatch} />
      </Switch>
    </Router>
  );
}
function NoMatch({match, location }) {
  return (
    <div>
      <h3>  
     
    not found <code>{location.pathname}</code>
      </h3>
    </div>
  );
}
function Home({match}) {
  return (
    <div>
        
      <h2>Home</h2>
    </div>
  );
}

function About({match}) {
  return (
    <div> <li>
            <Link to={`${match.url}/topics`}>Topics</Link>
          </li>
          <Router>
                 <Switch>
          <Route component={NoMatch} />
             </Switch>
          </Router>
      <h2>About</h2>
    </div>
  );
}

function Topics({ match }) {
          console.log(match)
  return (

    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
    
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      {/*<Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />*/}
    </div>
  );
}

function Topic({ match }) {
         console.log("nt",match)
  return (
    <div>
           <ul>
                <li>
          <Link to={`${match.url}/st`}>st</Link>
        </li>
      </ul>
      
      <h3>{match.params.topicId}</h3>
            <Route path={`${match.path}/:st`} component={Topic2} />
    </div>
  );
}

function Topic2({ match }) {
         console.log("nt",match)
  return (
    <div>

        addding
      <h3>{match.params.st}</h3>
    </div>
  );
}

export default BasicExample;