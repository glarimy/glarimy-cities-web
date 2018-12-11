import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const RegistrationFormWrapper = styled.div`
    button {
        width: 100%;
        background-color: black;
        color: white;
        height: 30px;
        cursor: pointer;
        &:hover{
            color: #0BB;
        }
    }
`;
const Section = styled.div`
    background-color: white;
    padding: 10px;
    border: #DDD 1px solid;
    border-radius: 0px;
    margin-top: 10px;
    margin-bottom: 10px;
    &:hover {
        border: 1px #BBB solid;
    }
`;

const Title = styled.div`
    color: rgb(217, 37, 62);
`;

const Field = styled.div`
    input {
        border: none;
        border-bottom: 1px solid #DDD;
        height: 20px;
        margin-top: 5px;
        margin-bottom: 5px;
        width: 90%;
    }
    input:focus {
        border-bottom: 1px solid red;
    }
    select{
        height: 20px;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 100%;
    }
`;

class Registration extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <RegistrationFormWrapper style={{display: this.props.display}}>
                <Section>
                <Title>Register Your Service</Title>
                <Field><input placeholder='Your name'/></Field>                 
                <Field><input placeholder='Name of your organization'/></Field>
                <Field><input placeholder='Year of establishment'/></Field>
                </Section>
                <Section>
                    <Title>Address</Title>
                    <Field><input placeholder='Flat Number or Door Number'/></Field>                    
                    <Field><input placeholder='Building Name'/></Field>                    
                    <Field><input placeholder='Street'/></Field>                    
                    <Field><input placeholder='Locality/Area'/></Field>
                    <Field><input placeholder='City/Town/Villege'/></Field>
                    <Field><input placeholder='District'/></Field>
                    <Field><input placeholder='State'/></Field>
                    <Field><input placeholder='PINCODE'/></Field>
                </Section>
                <Section>
                    <Title>Contact Details</Title>
                    <Field><input placeholder='Mobile number. You will receive OTP on this number'/></Field>
                    <Field><input placeholder='email address'/></Field>
                </Section>
                <button>Next: Review & Confirm</button>
            </RegistrationFormWrapper>
        );
    }
}
export default Registration;