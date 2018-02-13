var React = require('react');
var Users = require('./Users');
var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;
var Nav = require('./Nav');


class App extends React.Component{
       
    render(){
        return (
            <Router>
                <div>
                    <Nav />
                    <Route path='/users' component={Users} />
                </div>
            </Router>
        ); 
}   
}

module.exports = App;