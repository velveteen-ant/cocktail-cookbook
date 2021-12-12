import React from 'react';

const Drinks = ({ drinks }) => {
  return (
    <div>
      {drinks.map((drink) => (
        <Drink
          key={drink.key}
          drink={drink}
        />
      ))}
    </div>
  );
};

export default Drinks;
