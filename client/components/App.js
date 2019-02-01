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
        title: '',
        description: ''
      }
this.handleSelectChange = this.handleSelectChange.bind(this);
      this.onClick = this.onClick.bind(this);
      this.handleTextChange = this.handleTextChange.bind(this);
      this.insertNewDoc = this.insertNewDoc.bind(this);
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
        messageFromServer: ''
      });
    }

componentDidMount() {
      this.setState({
        title: this.props.enteredTitle
      });
      this.setState({
        description: this.props.enteredDesc
      });
    }

handleSelectChange(e) {
      if (e.target.name == 'title') {
        this.setState({
          title: e.target.value
        });
      }
      if (e.target.name == 'description') {
        this.setState({
          description: e.target.value
        });
      }
    }
onClick(e) {
      this.insertNewDoc(this);
    }
insertNewDoc(e) {
      axios.post('/insert',
        querystring.stringify({
          title: e.state.title,
          description: e.state.description
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
      if (e.target.name == "title") {
        this.setState({
          title: e.target.value
        });
      }
if (e.target.name == "description") {
        this.setState({
          description: e.target.value
        });
      }
    }

render() {
  <header className="App-header">
    <h1 className="App-title">Jazzlyn Pulley, Steven Thompson, Brandon O'Brien, Cory Petersen</h1>
  </header>
   if(this.state.messageFromServer == ''){
      return (
        <div>
      <Button bsStyle="success" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-plus"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
       className="Modal">
<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
       <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
      </Link><br/>
<fieldset>
       <label for="description">Description:</label><input type="text" id="description" name="description" value={this.state.description} onChange={this.handleTextChange}></input>
       <label for="amount">Amount:</label><input type="number" id="amount" name="amount" value={this.state.amount} onChange={this.handleTextChange}></input>
       <label for="month">Month:</label><select id="month" name="month" value={this.state.month} onChange={this.handleSelectChange}>
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
       <label for="year">Year:</label><select id="year" name="year" value={this.state.year} onChange={this.handleSelectChange}>
            <option value="2016" id="16">2016</option>
            <option value="2017" id="17">2017</option>
            <option value="2018" id="18">2018</option>
            <option value="2019" id="19">2019</option>
            <option value="2020" id="20">2020</option>
         </select>
      </fieldset>
<div className='button-center'>
        <br/>
        <Button bsStyle="success" bsSize="small" onClick={this.onClick}>Add New Expense</Button>
       </div>
          </Modal>
        </div>
      )
   }
   else{
    return (

}
export default Add;
