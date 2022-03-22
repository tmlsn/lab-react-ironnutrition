import { Card, Col, Button } from 'antd';
import { useState } from "react";  


// Iteration 2
export function FoodBox(food, setFoods, name) {

   const handleDelete = () => {
    setFoods((previousFoods) => {
      return previousFoods.filter((food) => {
        return food.name !== name;
      })
    })
  } 

  return (
    <Col>
      <Card
        title={food.name}
        style={{ width: 230, height: 300, margin: 10 }}
      >
        <img src={food.image} height={60} alt={food.name} />
        <p>Calories: {food.calories}</p>
        <p>Servings: {food.servings}</p>
        <p>
          <b>Total Calories: {food.calories * food.servings} </b> kcal
        </p>
        <Button onClick={handleDelete} type="primary"> Delete </Button>
      </Card>
    </Col>
  );
}

