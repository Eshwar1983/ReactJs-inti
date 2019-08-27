import React from 'react';
import Emp from './emp';

class deleteDataApp extends React.Component {
  state = {
    emps: [
      {id: 101, name: 'AAAA', age: '26', salary: 5000},
      {id: 102, name: 'BBBB', age: '28', salary: 6000},
      {id: 103, name: 'CCCC', age: '32', salary: 7000},
      {id: 104, name: 'DDDD', age: '36', salary: 8000},
      {id: 105, name: 'EEEE', age: '40', salary: 9000}
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
        <table style={{color: 'blue', width: '100%'}}>
          <tbody>
            {
              this.state.emps.map((emp, id) => {
                return (<Emp salary={emp.salary}
                  age={emp.age}
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