import styled from "styled-components";
import SingleEssay from "./SingleEssay.jsx";

const Essay = () => {
    return (
        <EssayStyled>
            <h2>Essay</h2>

            <SingleEssay question={"Q1:Sample question..."}>
                Answer 1 goes here.
            </SingleEssay>
            <SingleEssay question={"Q2:Sample question..."}>
                Answer 2 goes here.
            </SingleEssay>
            <SingleEssay question={"Q3:Sample question..."}>
                Answer 3 goes here.
            </SingleEssay>
            <SingleEssay question={"Q3:Sample question..."}>
                Answer 4 goes here.
            </SingleEssay>
        </EssayStyled>
    );
};

export default Essay;

const EssayStyled = styled.div``;
