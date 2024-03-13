import styled from "styled-components";
import PropTypes from "prop-types";

//components
import Input from "./input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    return (
        <FormStyled>
            <Input />
            <TextArea />
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form``;
