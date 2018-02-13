var React = require('react');
var NavLink = require('react-router-dom').NavLink;
function Nav() {
    return (
        
                <ul className="navigt">
                        <li>
                            <NavLink exact activeClassName='active'  to='/'>Home</NavLink>
                        </li>
                        <li>
                            <NavLink activeClassName='active' to='/users'>Pacienti</NavLink>
                        </li>           
                </ul>       
        
  
    )
}

module.exports = Nav;