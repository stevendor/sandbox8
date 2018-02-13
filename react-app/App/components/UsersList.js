var React = require('react');
var PropTypes = require('prop-types');


function UsersList (props) {
    return (
        <div>
            <div>              
            <h2>Pacienti din DB: </h2>
            <hr/> 
            
            </div> 
            <input className='form-control' type='text' placeholder='Cauta pacienti dupa CNP?'></input>
            <br/>             
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nume</th>
                            <th>CNP</th>
                            <th><button className='btn btn-success btn-md' onClick={props.newPacient}>Adauga pacient nou</button></th>
                        </tr>
                    </thead>
                    <tbody>{props.users.map( function (user, index){
                        return(
                            <tr key={user.CNP}>
                                <td>{user.firstName} {user.lastName}</td>
                                <td>{user.CNP}</td>
                                <td
                                 onClick={props.onSelect.bind(null, user)}
                                 
                                 >
                                 <button className='btn btn-info btn-sm'>Detalii</button>
                                 </td>
                            </tr>
                              )
                            })}
                    </tbody>
                </table> 
        </div>
    )
}


UsersList.propTypes = {
    users: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired,
    newPacient: PropTypes.func.isRequired
}

module.exports = UsersList;