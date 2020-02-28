import React, { useState }  from 'react'; 
import { axiosWithAuth } from "../../utils/axiosWithAuth";

    const initialState = {
        title:'',
        source:'',
        instructions:'',
        category:''
    };
const AddNewRecipe = props => {
     const [ newRecipe, setNewRecipe ] = useState (initialState);

     const handleTextInput = e => {
        let value =e.target.value 
        setNewRecipe({ ...initialState,  [e.target.name]: value});
     };  

     const handleSubmit = e => {
        axiosWithAuth()
          .post('/api/recipe', newRecipe)
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
        <div className="add-recipe-wrapp">
          <form onSubmit={handleSubmit}>
            <legend>Add recipe</legend>
            <label>
              Recipe name:
              <input
                type='text'
                name='recipe'
                onChange={ e =>{ setNewRecipe({...newRecipe, title:e.target.value})}}
                value={newRecipe.title}
              />
            </label>
            <label>
             Source:
              <input
                name="code"
                onChange={e =>{ setNewRecipe ({...newRecipe,  source:e.target.value})}}
                value={newRecipe.source}
              />
            </label>
            <div className="button-row">
              <button type="submit"  >Save</button>
            </div>
        </form>
      </div>
     )

 }
export default AddNewRecipe;
