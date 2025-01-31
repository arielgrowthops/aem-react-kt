// Sample API: https://dummyjson.com/users
import React, { useState, useEffect } from 'react';
import Card from '../slide4/Card';

const Slide5 = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch('https://dummyjson.com/users');
    const json = await response.json();
    const user = json.users;
    setData(user);
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='card-list'>
      {data.map(user => (
        <Card key={user.id} title={`${user.firstName + ' ' + user.lastName}`} description={user.email} />
      ))}
    </div>
  );
}

export default Slide5;