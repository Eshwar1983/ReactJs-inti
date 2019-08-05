import React from 'react';
import Emp from './emp';

class deleteDataApp extends React.Component {
  state = {
    emps: [
      {id: 101, name: 'AAAA', salary: 5000},
      {id: 102, name: 'BBBB', salary: 6000},
      {id: 103, name: 'CCCC', salary: 7000},
      {id: 104, name: 'DDDD', salary: 8000},
      {id: 105, name: 'EEEE', salary: 9000}
    ]
  }
  delEmp = (index, e) => {
    const copyemps = Object.assign([], this.state.emps);
    copyemps.splice(index, 1);
    this.setState({emps:copyemps});
  }
  render(){
    return(
      <div>
        <table style={{width: '500px', color: 'blue'}}>
          <tbody>
            {
              this.state.emps.map((emp, id) => {
                return (<Emp salary={emp.salary}
                  key={emp.id}
                  deleteEvent={this.delEmp.bind(this, id)}>
                  {emp.name}</Emp>)
              })
            }
          </tbody>
        </table>
      </div>
    )
  }
}
export default deleteDataApp;