import React from 'react';
import Card from '../Components/Card';
import { useGlobalStates } from '../Components/utils/global.context';

const Home = () => {
  const { data } = useGlobalStates();

  return (
    <main>
      <h1>Home</h1>
      <div className="card-grid">
        {data.map((e) => (
          <Card key={e.id} name={e.name} id={e.id} username={e.username} />
        ))}
      </div>
    </main>
  );
};

export default Home;
