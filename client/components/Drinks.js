import React from 'react';

const Drinks = ({ drinks }) => {
  return (
    <div>
    <h1 className='mainHeader'>HOWDY!</h1>
    <p className='intro'>Welcome to Cocktail Cookbook -- <br/> a place for you to store your personal thoughts and opinions of beverages you've enjoyed (or not quite enjoyed) and find new ones to try. Let's get sippin'!</p>
    {/* <p className='intro'>WELCOME TO COCKTAIL COOKBOOK -- <br/> A PLACE FOR YOU TO STORE ALL YOUR PERSONAL THOUGHTS AND OPINIONS OF BEVERAGES YOU'VE ENJOYED (OR NOT QUITE ENJOYED) AND FIND NEW ONES TO TRY. LET'S GET SIPPIN'!</p> */}
      {/* {drinks.map((drink) => (
        <Drink
          key={drink.key}
          drink={drink}
        />
      ))} */}
    </div>
  );
};

export default Drinks;


//component that will make fetch request for drink cards
