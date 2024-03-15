import styled from "styled-components";
import { useState } from "react";

import sunImg from "./images/sun.png";
import moonImg from "./images/moon.png";

const SunAndMoon = () => {
    // JS Layer
    const [imgSrc, imgSrcUpdate] = useState(moonImg);

    const changeToSun = () => {
        imgSrcUpdate(sunImg);
    };

    const changeToMoon = () => {
        imgSrcUpdate(moonImg);
    };

    // HTML Layer
    return (
        <SunAndMoonStyled>
            <h2>Pomotion</h2>

            <img
                src={imgSrc}
                onMouseEnter={changeToSun}
                onMouseLeave={changeToMoon}
            />
        </SunAndMoonStyled>
    );
};

export default SunAndMoon;

// CSS Layer
const SunAndMoonStyled = styled.div`
    text-align: center;

    h2 {
        font-size: 40px;
        color: #322600;
    }

    img {
        display: block;
        margin: 30px auto;
        padding: 20px;
        border: solid 20px #ffbf00;
        background-color: #ffd600;
    }
`;
