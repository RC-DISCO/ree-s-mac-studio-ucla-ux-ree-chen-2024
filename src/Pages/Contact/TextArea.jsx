import styled from "styled-components";
import PropTypes from "prop-types";

const TextArea = ({ id, labelText, onChange }) => {
    return (
        <InputStyled className="input-group">
            <label htmlFor={id}>{labelText}</label>
            <textarea id={id} value={id} onChange={onChange} />
        </InputStyled>
    );
};

export default TextArea;

// prop-types
TextArea.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

const TextAreaStyled = styled.div``;
