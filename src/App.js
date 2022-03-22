import { useState } from "react";  
import './App.css';
import { FoodBox } from './Component/FoodBox/FoodBox';
import { AddFood } from './Component/AddFood/AddFood'
import foods_db from './foods.json';
import { Divider, Form, Input } from 'antd';


function App() {
   const [foods, setFoods] = useState(foods_db)  
   const [searchField, setSearchField] = useState("")
   const [newFoodArray, setNewFoodArray] = useState(foods)


   const handleSearch = (e) => {
    e.preventDefault()
    setNewFoodArray((previousFoodArray) => {
      if(searchField === ''){
          return (previousFoodArray = foods)
      }else return (
         previousFoodArray.filter((food) => {
             return (
             food.name.toLowerCase().includes(searchField.toLowerCase())
             )
         })  
     )    
    })
  } 
   

  return (
    <div className="AppContainer">
    
    <div className="addFoodForm">

    <AddFood setFoods = {setFoods} />

    </div>

    <div>
      <Divider>Search</Divider>
      <Form onChange={handleSearch}>
      <label>Search</label>
      <Input value={searchField} type="text" onChange={(e) => setSearchField(e.target.value)} />
      </Form>
    </div>


    <div className="foodList">

    {searchField !== "" ? (

      newFoodArray.map((food) => {

return (
  <div className="foodBoxContainer"> 
  <FoodBox key={food.name} {...food } setFoods={setFoods} name={food.name} />
  </div>
)
})

    ) : (

      foods.map((food) => {

return (
  <div className="foodBoxContainer"> 
  <FoodBox key={food.name} {...food } setFoods={setFoods} name={food.name} />
  </div>
)

    }))
    }
    </div>

    </div>
  );
}

export default App;
