//client/components/Add.js
import React from 'react';
import {Button} from 'react-bootstrap';
import Modal from 'react-modal';
import axios from 'axios';
import {Link} from 'react-router-dom';
var querystring = require('querystring');

class Add extends React.Component {
constructor() {
      super();
this.state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        monthDOB: '',
        dayDOB: '',
        yearDOB: '',
        messageFromServer: '',
        modalIsOpen: false
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewUser = this.insertNewUser.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }

openModal() {
      this.setState({
        modalIsOpen: true
      });
    }

closeModal() {
      this.setState({
        modalIsOpen: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        monthDOB: '',
        dayDOB: '',
        yearDOB: '',
        messageFromServer: ''
      });
    }

componentDidMount() {
      this.setState({
        monthDOB: this.props.selectedMonth
      });
      this.setState({
        monthDOB: this.props.selectedDay
      });
      this.setState({
        yearDOB: this.props.selectedYear
      });
    }

handleSelectChange(e) {
      if (e.target.name == 'monthDOB') {
        this.setState({
          monthDOB: e.target.value
        });
      }
      if (e.target.name == 'dayDOB') {
        this.setState({
          dayDOB: e.target.value
        });
      }
      if (e.target.name == 'yearDOB') {
        this.setState({
          yearDOB: e.target.value
        });
      }
    }

onClick(e) {
      this.insertNewUser(this);
    }

insertNewUser(e) {
      axios.post('/insert',
        querystring.stringify({
          firstName: e.state.firstName,
          lastName: e.state.lastName,
          email: e.state.email,
          password: e.state.password,
          monthDOB: e.state.monthDOB,
          dayDOB: e.state.dayDOB,
          yearDOB: e.state.yearDOB
        }), {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function(response) {
        e.setState({
          messageFromServer: response.data
        });
      });
    }

handleTextChange(e) {
      if (e.target.name == "firstName") {
        this.setState({
          firstName: e.target.value
        });
      }
      if (e.target.name == "lastName") {
        this.setState({
          lastName: e.target.value
        });
      }
      if (e.target.name == "email") {
        this.setState({
          email: e.target.value
        });
      }
      if (e.target.name == "password") {
        this.setState({
          password: e.target.value
        });
      }
    }


render() {
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add User"
       className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="email">Email:</label><input type="text" id="email" name="email" value={this.state.email} onChange={this.handleTextChange}></input>
       <label for="firstName">First Name:</label><input type="text" id="firstName" name="firstName" value={this.state.firstName} onChange={this.handleTextChange}></input>
       <label for="lastName">Last Name:</label><input type="text" id="lastName" name="lastName" value={this.state.lastName} onChange={this.handleTextChange}></input>
       <label for="password">Password:</label><input type="text" id="password" name="password" value={this.state.password} onChange={this.handleTextChange}></input>
       <label for="monthDOB">Month DOB:</label><select id="monthDOB" name="monthDOB" value={this.state.monthDOB} onChange={this.handleSelectChange}>
            <option value="Jan" id="Jan">January</option>
            <option value="Feb" id="Feb">Febrary</option>
            <option value="Mar" id="Mar">March</option>
            <option value="Apr" id="Apr">April</option>
            <option value="May" id="May">May</option>
            <option value="Jun" id="Jun">June</option>
            <option value="Jul" id="Jul">July</option>
            <option value="Aug" id="Aug">August</option>
            <option value="Sep" id="Sep">September</option>
            <option value="Oct" id="Oct">October</option>
            <option value="Nov" id="Nov">November</option>
            <option value="Dec" id="Dec">December</option>
         </select>
         <label for="dayDOB">Day DOB:</label><select id="dayDOB" name="dayDOB" value={this.state.dayDOB} onChange={this.handleSelectChange}>
              <option value="1" id="1">1</option>
              <option value="2" id="2">2</option>
              <option value="3" id="3">3</option>
              <option value="4" id="4">4</option>
              <option value="5" id="5">5</option>
           </select>
       <label for="yearDOB">Year DOB:</label><select id="yearDOB" name="yearDOB" value={this.state.yearDOB} onChange={this.handleSelectChange}>
            <option value="2016" id="16">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
         </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New User</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (
     <div>
       <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
       <Modal
        isOpen={this.state.modalIsOpen}
        onAfterOpen={this.afterOpenModal}
        onRequestClose={this.closeModal}
        contentLabel="Add User"
        className="Modal">
<div className='button-center'>
        <h3>{this.state.messageFromServer}</h3>
        <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
         <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
        </Link>
       </div>
      </Modal>
       </div>
     )
    }
   }
}
export default Add;
