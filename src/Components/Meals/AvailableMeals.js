import { useState,useEffect } from 'react';
import classes from './AvailableMeals.module.css';
import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';

function AvailableMeals(){
  const [meals,setMeals] = useState([]);
  const [loading,setIsLoading] = useState(true);
  const [httpError,setHttpError] = useState();

useEffect(()=>{
  const fetchMeals = async () => {
  const response =  await fetch('https://newfoodapp-f8122-default-rtdb.firebaseio.com/meals.json');
  const responseData = await response.json();
  const loadedMeals = [];

if(!response.ok){
  throw new Error('Somthing went wrong'); 
}

  for (const key in responseData){
    loadedMeals.push({
      id: key,
      name: responseData[key].name,
      description: responseData[key].description,
      price: responseData[key].price
    });
  }
  setMeals(loadedMeals);
  setIsLoading(false);
  }
  fetchMeals().catch((error)=>{
    setIsLoading(false);
    setHttpError(error.message);
  });

},[])
if(loading){
  return <section className={classes.MealsLoading} >
    <p>Loading...</p>
  </section>
}

if(httpError){
  return <section className={classes.MealsError} >
    <p>{httpError}</p>
  </section>
}

const mealsList = meals.map(meal=>
<MealItem 
id={meal.id}
name={meal.name} 
price={meal.price} 
description={meal.description} 
key={meal.id}/>
);  
  return(
        <section className={classes.meals}>
        <Card>
            <ul>
                {mealsList}
            </ul>
        </Card>
        </section>
    );
}

export default AvailableMeals;