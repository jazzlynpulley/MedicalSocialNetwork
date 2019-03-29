//client/components/App.js
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';

export default class App extends React.Component {

constructor() {
    super();
  this.state = {selectedMonth:'All', selectedDay: 1, selectedYear: 2016, data: []};
    this.getData = this.getData.bind(this);
  }

componentDidMount() {
    this.getData(this, '2016');
  }

  componentWillReceiveProps(nextProps) {
    this.getData(this, '2016');
  }

getData(ev, year){
    axios.get('/getAll?monthDOB=All&yearDOB='+year)
      .then(function(response) {
        ev.setState({data: response.data});
        ev.setState({selectedYear: parseInt(year)})
      });
  }

render() {
    return (
      <div>
        <Add selectedMonth={this.state.selectedMonth} selectedDay={this.state.selectedDay} selectedYear={this.state.selectedYear} />
        <table>
          <thead>
            <tr><th></th><th className='email-col'>Email</th><th className='button-col'>First Name</th><th className='button-col'>Last Name</th><th className='button-col'>Password</th><th className='button-col'>MonthDOB</th><th className='button-col'>DayDOB</th><th className='button-col'>YearDOB</th><th className='button-col'>Update</th><th className='button-col'>Delete</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(exp){
                return  <tr><td className='counterCell'></td><td className='email-col'>{exp.email}</td><td className='button-col'>{exp.firstName}</td><td className='button-col'>{exp.lastName}</td><td className='button-col'>{exp.password}</td><td className='button-col'>{exp.monthDOB}</td><td className='button-col'>{exp.dayDOB}</td><td className='button-col'>{exp.yearDOB}</td><td className='button-col'><Update user={exp} /></td><td className='button-col'><Delete id={exp._id} user={exp} /></td></tr>
              })
            }
            </tbody>
</table>
      </div>
    );
  }
}
