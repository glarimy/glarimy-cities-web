import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Registration from './Registration.jsx';
import CategoryList from './CategoryList.jsx';

const ServiceListWrapper = styled.div`

`;

class ServiceList extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
        return(
            <ServiceListWrapper style={{display: this.props.display}}>
                <CategoryList/>
            </ServiceListWrapper>
        );
    }
}
export default ServiceList;