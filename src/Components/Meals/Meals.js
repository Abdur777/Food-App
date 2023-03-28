import { Fragment } from "react";
import AvailableMeals from "./AvailableMeals";
import MealsSummary from './MealsSummary';
function Meals (){
return (
    <Fragment>
    <MealsSummary></MealsSummary>
    <AvailableMeals></AvailableMeals>
    </Fragment>
);
}

export default Meals;