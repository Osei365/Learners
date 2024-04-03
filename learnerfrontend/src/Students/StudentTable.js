import React from 'react';

class MyTable extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <table>
        <thead className="table-header">
          <tr>
            <th>Header 1</th>
            <th>Header 2</th>
            <th>Header 3</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.data1}</td>
              <td>{item.data2}</td>
              <td>{item.data3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default MyTable;