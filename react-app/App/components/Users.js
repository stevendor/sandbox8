var React = require('react');
var axios = require('axios');
var api = require('../api/api');
var PropTypes = require('prop-types');
var UserDetail = require('./UserDetail');
var ExamDetail = require('./ExamDetail');
var UsersList = require('./UsersList');
var DatePicker = require('react-datepicker').default;
var moment = require('moment');

import 'react-datepicker/dist/react-datepicker.css';

class UserNew extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
                CNP: '',
                firstName: '',
                lastName: '',
                email: '',
                adresa: '',
                dateOfBirth: moment(),
                activ: '',
                weAdded: false,
                hover: false
         }
         this.handleSubmit = this.handleSubmit.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleChangeOnDate = this.handleChangeOnDate.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
                [name]: value
            
        });
        

    }
    //data e inregistrata in campul this.state.dateOfBirth._d
    handleChangeOnDate(date) {
        this.setState({
            dateOfBirth: date
        })
    }
    handleMouseIn() {
        this.setState({ hover: true })
    }
    handleMouseOut() {
        this.setState({ hover: false })
    }
    handleSubmit(event) {
        event.preventDefault();
       
        var newUser = {
            'CNP': this.state.CNP,
            'activ': this.state.activ,
            'adresa': this.state.adresa,
            'email': this.state.email,
            'firstName': this.state.firstName,
            'lastName': this.state.lastName,
            'dateOfBirth': this.state.dateOfBirth._d
        }
        this.props.onSubmit(newUser);
        

    }

    
    
    render() {
        const tooltipStyle = {
            display: this.state.hover ? 'block' : 'none'
          }
    return (
        <div className='container'>
            <div className='row'>
            <div className="col-md-11" >
              
                <div>          
                    <h3>Adauga un pacient nou:</h3>
                    <hr/>
                    <form>
                        <label htmlFor='CNP' className='form-group'><strong>CNP-ul pacientului:</strong></label>
                            <input type='text' name='CNP' id='CNP' className='form-control' value={this.state.CNP} onChange={this.handleChange}/>
                        <label htmlFor='prenume' className='form-group'><strong>Prenume:</strong></label>
                            <input type='text' id='prenume' className='form-control' name='firstName' value={this.state.firstName} onChange={this.handleChange}/>
                        <label htmlFor='nume' className='form-group'><strong>Nume:</strong></label>
                            <input type='text' id='nume' className='form-control' name='lastName' value={this.state.lastName} onChange={this.handleChange}/>
                        <label htmlFor='email' className='form-group'><strong>Email:</strong></label>
                            <input type='text' id='email' className='form-control' name='email' value={this.state.email} onChange={this.handleChange}/>
                        <label htmlFor='adresa' className='form-group'><strong>Adresa:</strong></label>
                            <input type='text' id='adresa' className='form-control' name='adresa' value={this.state.adresa} onChange={this.handleChange}/>
                        <div onMouseOver={this.handleMouseIn.bind(this)} onMouseOut={this.handleMouseOut.bind(this)}>
                            <label htmlFor='data' className='form-group' ><strong>Data Nasterii:</strong></label>
                                <DatePicker dateFormat='DD/MM/YYYY' selected={this.state.dateOfBirth} onChange={this.handleChangeOnDate}/>
                                <ul style={tooltipStyle} >
                                
                                    <li className='tooltipHelper'><em>PgUp: Move to the previous month.</em></li>
                                    <li className='tooltipHelper'><em>PgDn: Move to the next month.</em></li>
                                    <li className='tooltipHelper'><em>Home: Move to the previous year.</em></li>
                                    <li className='tooltipHelper'><em>End: Move to the next year.</em></li>
                                </ul>
                        </div>   
                        
                        <label htmlFor='activ' className='form-group'><strong>Status pacient?</strong></label>
                        <div id='activ'>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' name='activ' id='radio1' value={true} onChange={this.handleChange}/>
                                    <label htmlFor='radio1' className='form-check-label'>Activ</label>
                            </div>
                            <div className='form-check'>
                                <input className='form-check-input' type='radio' name='activ' id='radio2' value={false} onChange={this.handleChange}/>
                                    <label htmlFor='radio2' className='form-check-label'>Inactiv</label>
                            </div>
                        </div>                   
                        <hr/>
                        <div  >
                            <button
                            className='btn btn-success'
                            onClick={this.handleSubmit}> Adauga </button>
                            <button className='btn btn-secondary' type='button' onClick={this.props.resetAddUser }>Renunta </button>
                            
                        </div>
                    </form>
                </div>
                
                
            </div>
        </div>
    </div> 
    )
}
}
DatePicker.propTypes = {
    selected: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired
}
UserNew.propTypes = {
    resetAddUser: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
}
module.exports = UserNew;












class Users extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            selectedUser: '',
            users: null,
            selectedUserInfo: {},
            examData:'',
            wannaAddUser: '', 
            userAdded: '',
            editUser: ''
        }
    this.updateSelectedUser=this.updateSelectedUser.bind(this);
    this.sendExamData = this.sendExamData.bind(this);
    this.resetStateExam = this.resetStateExam.bind(this);
    this.resetSelectedUser = this.resetSelectedUser.bind(this);
    this.addNewUser = this.addNewUser.bind(this);
    this.resetAddNewUser = this.resetAddNewUser.bind(this);
    this.refreshTheList = this.refreshTheList.bind(this);
    this.handleSubmitNewUser = this.handleSubmitNewUser.bind(this);
    this.deleteSelectedUser = this.deleteSelectedUser.bind(this);
    this.enableEdit = this.enableEdit.bind(this);
    this.disableEdit = this.disableEdit.bind(this);
    }
    componentDidMount() {   //populam lista de pacienti la init
        this.getUsers();   
           
    }

    updateSelectedUser(user){ //vizualizare informatii despre un pacient
        
        this.setState( function () {
            return {
                selectedUser: user,
                examData:''
            }
        });
        api.fetchInfoUser(user._id)
            .then( function (user) {
                this.setState( function () {
                    return {
                        selectedUserInfo: user
                    }
                })
            }.bind(this))
    }

    sendExamData (data) {
        this.setState (
            function () {
                return {
                    examData: data
                    }
            }
        )
    }

    resetStateExam() {
        this.setState(
            function () {
                return {
                    examData: ''
                }
            }
        )
    }

    resetSelectedUser() {
        this.setState(
            function () {
                return {
                    selectedUser:'',
                    editUser:''
                }
            }
        )
    }
    
    getUsers() { //lista de useri din api
        api.fetchAllUsers()
            .then (function (users){
                this.setState( function() {
                    return { 
                         users: users
                    }
                })
            }.bind(this))
            
    }
    addNewUser() {
        this.setState(
            function () {
                return {
                    wannaAddUser:'true'
                }
            }
        )
    }
    resetAddNewUser() {
        this.setState(
            function () {
                return {
                    wannaAddUser:''
                }
            }
        )
    }
    refreshTheList () {
       this.getUsers()
        
       
    }
    handleSubmitNewUser(newUser) {
        api.postNewUser(newUser)
            .then( () =>{
                this.getUsers();
                this.setState(
                    function () {
                        return {
                            wannaAddUser:''
                        }
                    }
                )
            })
            .catch (function (error){
                console.log('consoled from users.js ' + error)
            })
        
    } 
    deleteSelectedUser () {
        var user = this.state.selectedUserInfo;        
        api.deleteUser(user)
            .then( () => {
                this.getUsers();
                this.setState(
                    function () {
                        return {
                            selectedUser:'',
                            selectedUserInfo:''
                        }
                    }
                )

            })
            .catch (function (error){
                console.log(error)
            })
    }

    enableEdit() {
        this.setState(
            function () {
                return {
                    editUser:'true'
                }
            }
        )
    }

    disableEdit() {
        this.setState(
            function () {
                return {
                    editUser:''
                }
            })
    }


    render() {
        return (
                    <div className="row">
                        
                        
                            <div className="col-md-4">
                            {/* folosesc butonul asta pentru dev-only */}
                            <button className='btn btn-secondary' type='button' onClick={this.refreshTheList}>force update </button> 
                            <ul>                            
                            {!this.state.users ? <p>Loading users...</p> //daca avem un array de useri, randam UsersList
                            : <UsersList
                                users={this.state.users}
                                onSelect={this.updateSelectedUser}
                                newPacient = {this.addNewUser} /> }
                            </ul>                       
                    </div>
                
                    <div className="col-md-4">
                        {this.state.wannaAddUser //daca wannaAddUser e truthy, atunci randam form-ul pt adaugare
                        ? <UserNew 
                        onSubmit={this.handleSubmitNewUser}
                        resetAddUser = {this.resetAddNewUser}
                        />
                        : !this.state.users //daca avem un array de useri si avem un user selectat, atunci randam UserDetail
                            ? <p></p>
                            :   this.state.selectedUser 
                                ? <UserDetail
                                user={this.state.selectedUserInfo}
                                onSelectedExam={this.sendExamData}
                                resetSelectedUser={this.resetSelectedUser}
                                deleteSelectedUser={this.deleteSelectedUser}
                                editSelectedUser = {this.enableEdit}
                                />
                                : <p>Selecteaza un pacient din lista sau adauga un nou pacient!</p> }
                        {this.state.enableEdit && this.state.selectedUser
                        ? <p>i should be in edit </p>
                        : <p></p>}
                        
                    </div>
                    
                    <div className='col-md-4'>
                            {!this.state.selectedUser
                            ? <p></p>
                            : !this.state.examData
                                ? <p>Selecteaza un istoric din lista consultatiilor, pentru mai multe detalii.</p>
                                : <ExamDetail
                                 props={this.state.examData}
                                 resetExamData={this.resetStateExam} />}
                    </div>
            </div>
        )
    }
}
module.exports = Users;