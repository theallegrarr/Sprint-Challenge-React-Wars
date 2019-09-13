import React, { useState, useEffect } from 'react';
// step 1: bring axios!
import axios from 'axios';
import { StyledCard } from './styledCard';


function GetPeople(props) {
  
    const [people, setPeople] = useState({});
    const peopleLink = `https://swapi.co/api/people/`;
  
    //const peopleList = data[0].data.results.map((d) => <StyledCard key={d.name}>{d.name}</StyledCard>);
    let peopleList = '';
    useEffect(() => {
      const getPeople = axios.get(peopleLink);

      
      Promise.all([getPeople])
        .then(data => {
          setPeople({data});

          if(people.data)console.log(people.data[0].data.results);
        })
    }, [people])
  
    if(people.data)peopleList = people.data[0].data.results.map((d) => 
      <StyledCard key={d.name}>
        <h3>Name: {d.name}</h3>
        <h4>Birth Year: {d.birth_year}</h4>
        <p>Height: {d.height}</p>
      </StyledCard>);

    return (
      <>
          {
            peopleList
          }
      </>
    );
  }
  
  
  
  
  export default GetPeople;