import React, { useState }  from 'react'; 
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


    const initialState = {
        title:'',
        source:'',
        instructions:'',
        category:''
    };

const EditRecipe = props => {
    const [editing, setEditing] = useState(false);
    const [recipe, setRecipe ] = useState (initialState);

    const saveEdit = e => {
        axiosWithAuth()
        .put(`/api/auth/recipe/${recipe.id}`, recipe)
        .then(res =>{
            console.log("Response in the PUT request", res.data)
        })
        .catch(err => {
            console.log (err)
        })
    };
    return (
        <Form onSubmit={saveEdit}>
        <FormGroup>
            <Label for="title">Name</Label>
            <Input 
                type="text" 
                name="email" 
                id="title" 
                placeholder="title"
                onChange={ e =>{ setRecipe({...recipe, title:e.target.value})}}
                value={recipe.title} 
            />
        </FormGroup>
        <FormGroup>
            <Label for="source">Source</Label>
            <Input 
                type="text" 
                name="source" 
                id="source" 
                placeholder="source"
                onChange={e =>{ setRecipe ({...recipe,  source:e.target.value})}}
                value={recipe.source}
            />
        </FormGroup>
        <FormGroup>
            <Label for="category">Category</Label>
            <Input 
                type="select" 
                name="category" 
                id="category"
                onChange={e =>{ setRecipe ({...recipe,  category:e.target.value})}}
                value={recipe.category}
            >
                <option>Diner</option>
                <option>Dessert</option>
                <option>Breakfast</option>
                <option>Drink</option>
                <option>Cookies</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">Instructions</Label>
            <Input 
                type="textarea" 
                name="instructions" 
                id="instructions" 
                onChange={e =>{ setRecipe ({...recipe,  instructions:e.target.value})}}
                value={recipe.instructions}
            />
        </FormGroup>
        <FormGroup>
            <Label for="image">File</Label>
            <Input type="file" name="image" id="image" />
        </FormGroup>
    <Button type="submit">Save changes</Button>
    <Button onClick={() => setEditing(false)}>Cancel</Button>
  </Form>
    )
}    
export default EditRecipe;