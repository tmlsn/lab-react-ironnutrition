/* import { Divider, Form, Input } from 'antd';
import { useState } from 'react';
import { FoodBox } from '../FoodBox/FoodBox';

// Iteration 5
export function SearchFood(foods, setFoods) {

  const [searchField, setSearchField] = useState("")
  const [newFoodArray, setNewFoodArray] = useState({foods})


  const handleSearch = (e) => {
    e.preventDefault()
    setNewFoodArray((previousFoodArray) => {
     return (
         previousFoodArray.filter((food) => {
             return (
             food.name.toLowerCase().includes(searchField.toLowerCase())
             )
         })  
     )    
    })
  } 

  return (
    <>
    <Divider>Search</Divider><Form onChange={handleSearch}>
      <label>Search</label>
      <Input value={searchField} type="text" onChange={(e) => setSearchField(e.target.value)} />
    </Form>
    </>
  );
}

 */
