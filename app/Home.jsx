import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import ArticalList from './portfolio/articals/components/ArticalList.jsx';
import ServiceList from './portfolio/services/components/ServiceList.jsx';

const HomeWrapper = styled.div`
    margin: 15px;
`;

const Section = styled.div`
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

const Head = styled.div`
    padding-top: 5px;
    position: fixed;
    top: 0px;
    left: 0px;
    background-color: black;
    width: 100%;
    background: url('http://www.glarimy.com/cities/images/logo-background.png');
    background-color: black;
    background-size: cover;
`;

const TagLine = styled.div`
    text-align: center;
    font-size: 12px;
    color: white;
`;

const Title = styled.div`
    text-align: center;
    font-size: 24px;
    margin-bottom: 5px;
    color: #0BB;
`;

const Menu = styled.div`
    background-color: none;
    width: 100%;
    text-align: center;
    display: inline-block;
    padding-top: 5px;
    padding-bottom: 5px;
    border-top: gray 1px solid;
    box-shadow: 0px 5px 5px gray;
    button {
        color: #DDD;
        cursor: pointer;
        margin-left: 5px;
        margin-right: 5px;
        font-size: 12px;
        font-weight: bold;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        &:hover {
            color: rgb(217, 37, 62);
        }
    ;
`;

const Buffer = styled.div`{
    padding-bottom: 75px;
`;

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            articals: 'none',
            services: 'block',
            register: 'none'
        }
        this.onArticals = () => {
            console.log('clicked articals');
            this.setState({
                articals: 'block',
                services: 'none',
                register: 'none'
            });
        }
        this.onServices = () => {
            console.log('clicked search');
            this.setState({
                articals: 'none',
                services: 'block',
                register: 'none'
            });
        }
        this.onRegister = () => {
            console.log('clicked  register');
            this.setState({
                articals: 'none',
                services: 'none',
                register: 'block'
            });
        }
    }
    render(){ 
        return(
            <HomeWrapper>
                <Head>
                <Title>Glarimy Cities</Title>
                <TagLine>మన ఊరు - మన భాష</TagLine>
                <Menu>
                    <button onClick={this.onArticals}>సంగతులు</button>
                    <button onClick={this.onServices}>సేవలు</button>
                    <button onClick={this.onRegister}>సరదాలు</button>
                </Menu>
                </Head>
                <Buffer/>
                <ArticalList display={this.state.articals}/>
                <ServiceList display={this.state.services}/>
            </HomeWrapper>
        )}
}
export default Home;