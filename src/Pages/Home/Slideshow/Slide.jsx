import styled from "styled-components";
import PropTypes from "prop-types";

const Slide = ({ slide }) => {
    const { title, image } = slide;
    return (
        <SlideStyled>
            <img src={image} alt={title} />
        </SlideStyled>
    );
};

export default Slide;

// prop-types
Slide.propTypes = {
    slide: PropTypes.object.isRequired,
};

const SlideStyled = styled.div``;
