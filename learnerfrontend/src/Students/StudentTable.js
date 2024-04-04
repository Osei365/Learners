import React from 'react';

class MyTable extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead className="table-header">
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Quiz Taken</th>
            <th>Average Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.quizTaken}</td>
              <td>{item.averageScore}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MyTable;