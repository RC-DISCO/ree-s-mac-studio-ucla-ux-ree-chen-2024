import styled from "styled-components";
import PropTypes from "prop-types";

const AccoladesItem = ({ accolade }) => {
    return <AccoladesItemStyled>{accolade}</AccoladesItemStyled>;
};

export default AccoladesItem;

// prop-types
AccoladesItem.propTypes = {
    accolade: PropTypes.string.isRequired,
};

const AccoladesItemStyled = styled.li``;
