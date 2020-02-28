import React, { useState }  from 'react'; 
import { axiosWithAuth } from "../../utils/axiosWithAuth";
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';


    const initialState = {
        title:'',
        source:'',
        instructions:'',
        category:''
    };

const AddNewRecipe = props => {
     const [ newRecipe, setNewRecipe ] = useState (initialState);

    //  const handleTextInput = e => {
    //     let value = e.target.value 
    //     setNewRecipe({ ...initialState,  [e.target.name]: value});
    //  };  

     const handleSubmit = e => {
        axiosWithAuth()
          .post('/api/auth/recipe', newRecipe)
          .then(res => {
              console.log ("Response in the POST request AddNewRecipe", res)
              setNewRecipe(res.data)
              props.history.push('/');
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
                    onChange={ e =>{ setNewRecipe({...newRecipe, title:e.target.value})}}
                    value={newRecipe.title} 
                />
            </FormGroup>
            <FormGroup>
                <Label for="source">Source</Label>
                <Input 
                    type="text" 
                    name="source" 
                    id="source" 
                    placeholder="source"
                    onChange={e =>{ setNewRecipe ({...newRecipe,  source:e.target.value})}}
                    value={newRecipe.source}
                />
            </FormGroup>
            <FormGroup>
                <Label for="category">Category</Label>
                <Input 
                    type="select" 
                    name="category" 
                    id="category"
                    onChange={e =>{ setNewRecipe ({...newRecipe,  category:e.target.value})}}
                    value={newRecipe.category}
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
                    onChange={e =>{ setNewRecipe ({...newRecipe,  instructions:e.target.value})}}
                    value={newRecipe.instructions}
                />
            </FormGroup>
            <FormGroup>
                <Label for="image">File</Label>
                <Input type="file" name="image" id="image" />
            </FormGroup>
        <Button>Submit</Button>
      </Form>
    )

 }
export default AddNewRecipe;
