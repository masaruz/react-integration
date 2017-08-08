import React from 'react';
// presentational component
export default ({ users }) => (
  <table>
    <thead>
    <tr>
      <th>No.</th>
      <th>Name</th>
      <th>Age</th>
    </tr>
    </thead>
    <tbody>
      { users.map(u => (
        <tr key={u.id}>
          <td>{u.id}</td>
          <td>{u.name}</td>
          <td>{u.age}</td>
        </tr>
        ))
      }
    </tbody>
  </table>
)
