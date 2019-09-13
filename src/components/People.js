import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { staticData } from './statPeople';
import { StyledCard } from '../styles/styledCard';
import { ContentDiv } from '../styles/styledCard';
import { ButtonsArea } from '../styles/styledCard';

function GetPeople(props) {
  
    const [people, setPeople] = useState({});
    const [page, setPage] = useState({ count: 0 });

    const currentPage = page.count === 0 ? '' : `?page=${page.count}`;
    const peopleLink = `https://swapi.co/api/people/${currentPage}`;
  
    //const peopleList = data[0].data.results.map((d) => <StyledCard key={d.name}>{d.name}</StyledCard>);
    let peopleList = '';
    useEffect(() => {
      const getPeople = axios.get(peopleLink);

      
      Promise.all([getPeople])
        .then(data => {
          setPeople({data});

          if(people.data)console.log(people.data[0].data.results);
        })
    }, [people, page])
  
    if(people.data)peopleList = people.data[0].data.results.map((d) => 
      <StyledCard key={d.name}>
        <h3>Name: {d.name}</h3>
        <h4>Birth Year: {d.birth_year}</h4>
        <p>Height: {d.height}</p>
      </StyledCard>);

    // peopleList = staticData.results.map((d) => 
    //   <StyledCard key={d.name}>
    //     <h3>Name: {d.name}</h3>
    //     <h4>Birth Year: {d.birth_year}</h4>
    //     <p>Height: {d.height}</p>
    //   </StyledCard>);

    return (
      <>
        <ContentDiv>
          {peopleList}
        </ContentDiv>
        <ButtonsArea>
          <button onClick={() => setPage({ count: page.count-1 })}>PREVIOUS</button>
          <button onClick={() => setPage({ count: page.count+1 })}>NEXT</button>
        </ButtonsArea>
      </>
    );
  }
  
  
  
  
  export default GetPeople;