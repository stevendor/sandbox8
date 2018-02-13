var React = require('react');
// const SelectPackage = require('react-select');
// const Select = SelectPackage.default;
var PropTypes = require('prop-types');


function UserDetail (props) {

    var nume = props.user.firstName + ' ' + props.user.lastName;
    var status = JSON.stringify(props.user.activ);
         
            return(
                <div className="container" >
                        <div className="row">
                            <div className="col-md-11">
                            
                                  
                                <div>
                                    <button className='btn btn-secondary' onClick={props.editSelectedUser}>Edit</button>
                                    <button className="btn btn-danger" onClick={props.deleteSelectedUser}>Delete</button>
                                    <button className="btn btn-dark" onClick={props.resetSelectedUser}>Go Back</button>
                                </div>  

                                <hr/>   

                                <h4>Detalii pacient: </h4>
                                        <div className='card bg-light'>
                                            
                                                        <label htmlFor="CNP" className='card-header'><strong>CNP Pacient:</strong></label>
                                                            <div id="CNP" className='card-body'>{props.user.CNP}</div>
                                                        <label htmlFor='name' className='card-header'><strong>Nume pacient:</strong></label>
                                                            <div id='name' className='card-body'>{nume}</div>
                                                        <label htmlFor='data' className='card-header'><strong>Data Nasterii:</strong></label>
                                                            <div id='data' className='card-body'>{props.user.dateOfBirth}</div>
                                                        <label htmlFor='name' className='card-header'><strong>Adresa:</strong></label>
                                                            <div id='name' className='card-body'>{props.user.adresa}</div>
                                                        <label htmlFor='email' className='card-header'><strong>Email:</strong></label>
                                                            <div id='email' className='card-body'>{props.user.email}</div>
                                                        <label htmlFor='activ' className='card-header'><strong>Status pacient?</strong></label>
                                                            {status==='true'
                                                            ? <div id='activ' className='card-body'>Activ - <a className='istoricM' href='#'><strong>Istoric medical</strong></a></div> 
                                                            : <div id='activ' className='card-body'>Inactiv - <a className='istoricM' href='#'><strong>Istoric medical</strong></a></div>}                                                
                                                        <label htmlFor='medicalH' className='card-header'><strong>Istoricul consultatiilor:</strong></label>
                                                            <ul>
                                                                {!props.user.medicalHistory 
                                                                ? <p>Loading..</p>
                                                                : props.user.medicalHistory
                                                                    .map( (istoric, index) => {
                                                                        return(
                                                                        <li
                                                                        className='clickable'
                                                                        onClick = {props.onSelectedExam.bind(null, istoric)}
                                                                        key={istoric._id}> <em>{istoric.dataConsultatie}</em></li> 
                                                                            );  
                                                                    })
                                                                }                                         
                                                            </ul>                                                   
                                                                                   
                                        </div>
                                    
                                    
                            
                        </div>
                    </div>
                </div>
    
)}

UserDetail.propTypes = {
    user: PropTypes.object.isRequired,
    onSelectedExam: PropTypes.func.isRequired,
    resetSelectedUser: PropTypes.func.isRequired,
    deleteSelectedUser: PropTypes.func.isRequired,
    editSelectedUser: PropTypes.func.isRequired    
}

module.exports= UserDetail;