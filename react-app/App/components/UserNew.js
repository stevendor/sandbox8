// var React = require('react');
// var DatePicker = require('react-datepicker').default;
// var moment = require('moment');
// var PropTypes= require('prop-types');
// var axios = require('axios');
// var api = require('../api/api');

// import 'react-datepicker/dist/react-datepicker.css';

// class UserNew extends React.Component{
//     constructor(props) {
//         super(props);
//         this.state = {
//                 CNP: '',
//                 firstName: '',
//                 lastName: '',
//                 email: '',
//                 adresa: '',
//                 dateOfBirth: moment(),
//                 activ: '',
//                 weAdded: false
//          }
//          this.handleSubmit = this.handleSubmit.bind(this);
//          this.handleChange = this.handleChange.bind(this);
//          this.handleChangeOnDate = this.handleChangeOnDate.bind(this);
//     }
//     handleChange(event) {
//         const target = event.target;
//         const value = target.value;
//         const name = target.name;
//         this.setState({
//                 [name]: value
            
//         });
        

//     }
//     //data e inregistrata in campul this.state.dateOfBirth._d
//     handleChangeOnDate(date) {
//         this.setState({
//             dateOfBirth: date
//         })
//     }
    
//     handleSubmit(event) {
//         event.preventDefault();
       
//         var newUser = {
//             'CNP': this.state.CNP,
//             'activ': this.state.activ,
//             'adresa': this.state.adresa,
//             'email': this.state.email,
//             'firstName': this.state.firstName,
//             'lastName': this.state.lastName,
//             'dateOfBirth': this.state.dateOfBirth._d
//         }
//     api.postNewUser(newUser)
//         .then( function(success){
//             () => {
//                 this.props.refreshTheList
//             }
            
//         })
//         .catch (function(error){
//             console.log(error);
//         })
    
        

//     }

    
    
//     render() {
//     return (
//         <div className='container'>
//             <div className='row'>
//             <div className="col-md-11" >
              
//                 <div>          
//                     <h3>Adauga un pacient nou:</h3>
//                     <hr/>
//                     <form>
//                         <label htmlFor='CNP' className='form-group'><strong>CNP-ul pacientului:</strong></label>
//                             <input type='text' name='CNP' id='CNP' className='form-control' value={this.state.CNP} onChange={this.handleChange}/>
//                         <label htmlFor='prenume' className='form-group'><strong>Prenume:</strong></label>
//                             <input type='text' id='prenume' className='form-control' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
//                         <label htmlFor='nume' className='form-group'><strong>Nume:</strong></label>
//                             <input type='text' id='nume' className='form-control' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
//                         <label htmlFor='email' className='form-group'><strong>Email:</strong></label>
//                             <input type='text' id='email' className='form-control' name='email' value={this.state.email} onChange={this.handleChange}/>
//                         <label htmlFor='adresa' className='form-group'><strong>Adresa:</strong></label>
//                             <input type='text' id='adresa' className='form-control' name='adresa' value={this.state.adresa} onChange={this.handleChange}/>
//                         <label htmlFor='data' className='form-group'><strong>Data Nasterii:</strong></label>
//                             <DatePicker dateFormat='DD/MM/YYYY' selected={this.state.dateOfBirth} onChange={this.handleChangeOnDate}/>
                        
//                         <label htmlFor='activ' className='form-group'><strong>Status pacient?</strong></label>
//                         <div id='activ'>
//                             <div className='form-check'>
//                                 <input className='form-check-input' type='radio' name='activ' id='radio1' value={true} onChange={this.handleChange}/>
//                                     <label htmlFor='radio1' className='form-check-label'>Activ</label>
//                             </div>
//                             <div className='form-check'>
//                                 <input className='form-check-input' type='radio' name='activ' id='radio2' value={false} onChange={this.handleChange}/>
//                                     <label htmlFor='radio2' className='form-check-label'>Inactiv</label>
//                             </div>
//                         </div>                   
//                         <hr/>
//                         <div  >
//                             <button
//                             className='btn btn-success'
//                             onClick={this.handleSubmit}> Adauga </button>
//                             <button className='btn btn-secondary' type='button' onClick={this.props.resetAddUser }>Renunta </button>
//                             <button className='btn btn-secondary' type='button' onClick={this.props.refreshTheList}>force update </button>
//                         </div>
//                     </form>
//                 </div>
                
                
//             </div>
//         </div>
//     </div> 
//     )
// }
// }
// DatePicker.propTypes = {
//     selected: PropTypes.object.isRequired,
//     onChange: PropTypes.func.isRequired
// }
// UserNew.propTypes = {
//     resetAddUser: PropTypes.func.isRequired,
//     refreshTheList: PropTypes.func.isRequired
// }
// module.exports = UserNew;