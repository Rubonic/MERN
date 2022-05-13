import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';


const Result = () => {

    let { category, id } = useParams();

    // STATE VARIABLE TO SAVE THE INFORMATION WE GET BACK FROM THE API 
    let [detail, setDetail] = useState({})

    useEffect(() => {
        // MAKE A AXIOS CALL TO THE STAR WARS API USING AXIOS
        axios.get(`http://swapi.dev/api/${category}/${id}/`)
            .then(response => {
                console.log("response-->", response);
                setDetail(response.data);

            })
            .catch(err => console.log(err))
    }, [id, category])



    return (
        <div>
            {
            category === "people"?
                <div>
                    <h2>Name: {detail.name}</h2>
                    <p>Height: {detail.height}</p>
                    <p>Mass: {detail.mass}</p>
                    <p>Hair Color: {detail.hair_color}</p>
                    <p>Skin Color: {detail.skin_color}</p>
                    <p>Eye Color: {detail.eye_color}</p>
                    <p>Birth Year: {detail.birth_year}</p>
                    <p>Gender: {detail.gender}</p>
                </div>: category === "planets"?
                <div>
                    <h2>Name: {detail.name}</h2>
                    <p>Climate: {detail.climate}</p>
                    <p>Terrain: {detail.terrain}</p>
                    <p>Population: {detail.population}</p>
                </div>: category === "species"?
                <div>
                    <h2>Name: {detail.name}</h2>
                    <p>Language: {detail.language}</p>
                    <p>Skin Colors: {detail.skin_colors}</p>
                    <p>Classification: {detail.classification}</p>
                    <p>Average Lifespan: {detail.average_lifespan}</p>
                </div>: category === "films"?
                <div>
                    <h2>Title: {detail.title}</h2>
                    <p>Episode Id: {detail.episode_id}</p>
                    <p>Director: {detail.director}</p>
                    <p>Producer: {detail.producer}</p>
                    <p>Release Date: {detail.release_date}</p>
                </div>:
                <h1>Do you really want to be like Mac Windu?</h1>
            }

        </div>

    );
};


export default Result;