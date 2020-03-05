import React, { useState, useEffect } from "react";
import { Button, Form, Label, Input } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const SearchForm = props => {
    const [searchTerm, setSearchTerm] = useState("");
    console.log ("props",props.recipes)
    
    useEffect(() => {
        const results = props.recipes.filter(recipe => {
          return recipe
          //.toLowerCase().includes(searchTerm.toLowerCase());
        });
       props.setAllRecipes(results);
      }, [searchTerm]);

      const handleChange = event => {
        setSearchTerm(event.target.value);
      };
      const handleSubmit = event => {
        setSearchTerm(event.target["title"].value);
        event.preventDefault();
      };
  const history = useHistory()
  const routeToRecipe = e => {
    e.preventDefault()
    history.push(`/recipes/${props.recipes.id}`)
  }
      return (
          <div>
              <Form onSubmit={handleSubmit}>
                  <Label for ='search'>Search</Label>
                  <Input
                    id="title"
                    name="title"
                    type="text"
                    placeholder="Search recipe"
                    onChange={handleChange}
                    value={searchTerm}
                  />
                  <Button type='submit' 
                  onClick={routeToRecipe}
                  >Search</Button>
              </Form>
          </div>
      )
}
export default SearchForm;