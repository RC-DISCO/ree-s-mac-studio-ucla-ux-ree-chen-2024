import styled from "styled-components";
import { breakpoints, useMediaQuery } from "@/Common/useMediaQuery.jsx";

const ResponsiveDesign = () => {
    const { isMediumAndUp } = useMediaQuery();

    return (
        <ResponsiveDesignStyled>
            <h2>Buy Gift Cards</h2>
            <div className="boxes">
                <div className="box box1">$100</div>
                <div className="box box2">$50</div>
                <div className="box box3">$25</div>
            </div>
        </ResponsiveDesignStyled>
    );
};

export default ResponsiveDesign;

const ResponsiveDesignStyled = styled.div`
    @media ${breakpoints.isMediumAndUp} {
        .boxes {
            display: flex;
            justify-content: center;
        }
    }
    .box {
        width: 100%;
        max-width: 400px;
        /* height: 200px; */
        /* line-height: 170px; */
        padding: 50px 0px;
        font-size: 50px;
        text-align: center;
        color: white;
        border-radius: 20px;
        border: solid 10px #ffbf00;
        background-color: #322600;
        margin: 10px;
    }
    .box2 {
        border-radius: 20px;
    }
    .box3 {
        border-radius: 20px;
    }
`;
