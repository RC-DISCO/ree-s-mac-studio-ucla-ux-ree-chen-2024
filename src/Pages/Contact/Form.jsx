import styled from "styled-components";
import PropTypes from "prop-types";

//components
import Input from "./Input";
import TextArea from "./TextArea";

const Form = ({ getSubmissions }) => {
    const inputNameOnChange = () => {};
    const inputEmailOnChange = () => {};
    const inputMessageOnChange = () => {};

    return (
        <FormStyled>
            <Input id="name" labelText="Name" onChange={inputNameOnChange} />
            <Input
                id="email"
                labelText="Email"
                inputType="email"
                onChange={inputNameOnChange}
            />
            <TextArea
                id="message"
                labelText="Message"
                onChange={inputMessageOnChange}
            />
        </FormStyled>
    );
};

export default Form;

// prop-types
Form.propTypes = {
    getSubmissions: PropTypes.func.isRequired,
};

const FormStyled = styled.form``;
