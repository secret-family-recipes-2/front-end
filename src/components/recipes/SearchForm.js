import React, { useState, useEffect } from "react";
import { Form, Label, Input } from 'reactstrap'

const SearchForm = props => {
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState(props.recipes);
    useEffect(() => {
        const results = props.recipes.filter(recipe => {
          return recipe.toLowerCase().includes(searchTerm.toLowerCase());
        });
        setSearchResults(results);
      }, [searchTerm]);

      const handleChange = event => {
        setSearchTerm(event.target.value);
      };
      return (
          <div>
              <Form>
                  <Label for ='search'>Search</Label>
                  <Input
                    id="name"
                    type="text"
                    name="textfield"
                    placeholder="Search"
                    onChange={handleChange}
                    value={searchTerm}
                  />
              </Form>
          </div>
      )
}
export default SearchForm;