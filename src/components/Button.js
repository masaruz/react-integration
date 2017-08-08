import React from 'react';
// presentational component
export default ({ processing, getUser }) => (
  <button onClick={getUser} disabled={processing}>Get User</button>
)
