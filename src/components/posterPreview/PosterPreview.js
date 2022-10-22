import {useEffect, useState} from "react";
import {services} from "../../services/services";

const PosterPreview = ({path}) => {

    

    return (
        <div>
            <img style={{height: '500px'}} src={`https://image.tmdb.org/t/p/w400${path}`} alt="img"/>
        </div>
    )
}
export {PosterPreview};