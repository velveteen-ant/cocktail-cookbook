import React from 'react';
import { useEffect, useState } from 'react';
import Header from './components/Header';
import Button from './components/Button';
import Footer from './components/Footer';
import Drinks from './components/Drinks';
import Drink from './components/Drink';
import AddDrink from './components/AddDrink';
import Intro from './components/Intro';
import UpdateDrink from './components/UpdateDrink';

const App = () => {
  const [drinks, setDrinks] = useState([]);
  const [showAddDrink, setShowAddDrink] = useState(false);
  //below is testing update
  const [showUpdate, setShowUpdate] = useState(false);
  // useEffect(() => {
  //   const getDrinks = async () => {
  //     const drinksFromServer = await fetchDrinks();
  //     setDrinks(drinksFromServer);
  //   };
  //   getDrinks();
  // }, []);

  useEffect(() => {
    fetchDrinks();
  }, []);

  //fetch drinks
  const fetchDrinks = async () => {
    const res = await fetch('http://localhost:3000/api');
    // console.log(res);
    const data = await res.json();
    setDrinks(data);
  };

  //delete drink
  const deleteDrink = async (cocktail_id) => {
    // console.log(cocktail_id);
    const res = await fetch(`http://localhost:3000/api/${cocktail_id}`, {
      method: 'DELETE',
    });
    res.status === 200
      ? setDrinks(drinks.filter((drink) => drink.cocktail_id !== cocktail_id))
      : alert('Error deleting drink');
    // setDrinks(data);
  };

  //add drink
  const addDrink = async (drink) => {
    const res = await fetch('http://localhost:3000/api', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(drink),
    });
    const data = await res.json();
    setDrinks([...drinks, data]);
  };

    //update drink
    const updateDrink = async (cocktail_id) => {
      const res = await fetch(`http://localhost:3000/api/${cocktail_id}`, {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(drink),
      });
      const data = await res.json();
      setDrinks([...drinks, data]);
    };

  return (
    <div>
      <Header />

      <Intro />

      <Drinks
        drinks={drinks}
        onDelete={deleteDrink}
        onAdd={() => setShowAddDrink(!showAddDrink)}
        showAdd={showAddDrink}
        addDrink={addDrink}
        showAddDrink={showAddDrink}
        //below is testing update
        showUpdate={showUpdate}
        setShowUpdate={setShowUpdate}
      />

      {/* <UpdateDrink /> */}

      <Footer />
    </div>
  );
};

export default App;
