import React, { useState, useEffect }  from 'react'; 
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


    const initialState = {
        title:'',
        source:'',
        ingredients:'',
        instructions:'',
        category:''
    };

const EditRecipe = props => {
   
    const [recipe, setRecipe ] = useState (initialState);

    // useEffect (() => {
    //     const selectedRecipe = props.list.find(item => {
    //         return `${item.id}`=== props.match.params.id;
    //     });
    //     if(selectedRecipe){
    //         setRecipe(selectedRecipe);
    //     }
    // },  []);

    const changeHandler = ev => {
        ev.persist();
        setRecipe({...recipe, [ev.target.name]: ev.target.value });
      };
    
      const handleSubmit = e => {
        console.log ("Put recipe in handle submit", recipe)
        e.preventDefault();
        axiosWithAuth()
          .put(`/recipes${recipe.id}`, recipe)
          .then(res => {
            console.log ("Response in the PUT request MovieEdit", res.data)
            // props.history.push('/recipes')
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
                name="email" 
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
                onChange={changeHandler}
                value={recipe.instructions}
            />
        </FormGroup>
        <FormGroup>
            <Label for="image">File</Label>
            <Input type="file" name="image" id="image" />
        </FormGroup>
    <Button type="submit">Save changes</Button>
    <Button>Cancel</Button>
  </Form>
    )
}    
export default EditRecipe;