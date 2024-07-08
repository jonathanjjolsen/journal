import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ENTRIES } from '../utils/queries';

const Entries = () => {
  const { loading, error, data } = useQuery(GET_ENTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Entries</h2>
      <ul>
        {data.getEntries.map((entry) => (
          <li key={entry.id}>
            <p>{entry.createdAt}</p>
            <p>{entry.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Entries;