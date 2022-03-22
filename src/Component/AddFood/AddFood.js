import { Divider, Input } from 'antd';
import { useState } from 'react';

// Iteration 4
export function AddFood({setFoods}) {
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [calories, setCalories] = useState("");
    const [servings, setServings] = useState("");
    const [showForm, setShowForm] = useState(false)

    const handleShowForm = () => {
        setShowForm((previousValue) => {
            return !previousValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setFoods((previousFood) => {
            return [
                {
                    name,
                    calories,
                    image,
                    servings,
                },
                ...previousFood,
            ]
        })
    }

    return (
        <div className='addForm'>
      {showForm ? (
       
       <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
  
        <label>Name</label>
        <Input value={name} type="text" onChange={(e) => {setName(e.target.value)}} />
  
        <label>Image</label>
        <Input value={image} type="text" onChange={(e) => {setImage(e.target.value)}} />
  
        <label>Calories</label>
        <Input value={calories} type="number" onChange={(e) => {setCalories(e.target.value)}} />
  
        <label>Servings</label>
        <Input value={servings} type="number" onChange={(e) => {setServings(e.target.value)}} />
  
        <button type="submit" disabled={!(name && image && calories && servings)}>Create</button>
        <button onClick={handleShowForm} type="primary">Hide Form</button>
        </form>
        
      
      ) : (
        <button onClick={handleShowForm} type="primary">Add New Food</button>
      )}

      </div>
    
  );
}


