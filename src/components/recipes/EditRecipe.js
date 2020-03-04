import React, { useState, useEffect }  from 'react'; 
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';
import { useParams, useHistory } from 'react-router-dom'



const EditRecipe = props => {
   
    const { id } = useParams();
    const history = useHistory()

    const initialState = {
        id:id,
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:'',
        user_id: 1
    };
    const [recipe, setRecipe ] = useState (initialState);

    const changeHandler = ev => {
        ev.persist();
        setRecipe({...recipe, [ev.target.name]: ev.target.value });
      };
    
      const handleSubmit = e => {
        console.log ("Put recipe in handle submit", recipe)
        e.preventDefault();
        axiosWithAuth()
          .put(`/recipes/${recipe.id}`, recipe)
          .then(res => {
            console.log ("Response in the PUT request EditRecipe", res)
            setRecipe(res.data);
           
            
          })
          .catch(err => {
            console.log(err);
          });
      };
    return (
        <Form onSubmit={handleSubmit}>
        <FormGroup>
            <Label for="title">Name</Label>
            <Input 
                type="text" 
                name="title" 
                id="title" 
                placeholder="title"
                onChange={changeHandler}
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
                onChange={changeHandler}
                value={recipe.source}
            />
        </FormGroup>
        <FormGroup>
            <Label for="category">Category</Label>
            <Input 
                type="select" 
                name="category" 
                id="category"
                onChange={changeHandler}
                value={recipe.category}
            >
                    <option>Add category</option>
                    <option>Lunch</option>
                    <option>Breakfast</option>
                    <option>Diner</option>
                    <option>Cookies</option>
                    <option>Dessert</option>
                    <option>Bread</option>
                    <option>Salad</option>
                    <option>Soup</option>
            </Input>
        </FormGroup>
        <FormGroup>
            <Label for="exampleText">Instructions</Label>
            <Input 
                type="textarea" 
                name="instructions" 
                id="instructions" 
                onChange={changeHandler}
                value={recipe.instructions}
            />
        </FormGroup>
        <FormGroup>
            <Label for="image">File</Label>
            <Input type="file" name="image" id="image" />
        </FormGroup>
    <Button type="submit"
   
     >Save changes</Button>
    <Button onClick={()=> history.push('/recipes')}>Cancel</Button>
  </Form>
    )
}    
export default EditRecipe;