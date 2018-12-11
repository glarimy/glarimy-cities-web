import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SearchResultList from './SearchResultList.jsx';

const CategoryWrapper = styled.div`
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
    martin-bottom: 10px;
`;

const Picture = styled.div`
    float: left;
`;

const Title = styled.div`
    color: red;
    padding-top: 5px;
    padding-bottom: 5px;
    padding-left: 5px;
    cursor: pointer;
    &:hover {
        background-color: #EEE
    }
`;

const Keys = styled.div`
    color: gray;
    padding-left: 5px;
`;

const Detail = styled.div`
    color: gray;
    padding-left: 5px;
`;

class Category extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            display: 'none',
            items: [{
                title: "Prasad Hospitals1",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            },{
                title: "Prasad Hospitals2",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            },{
                title: "Prasad Hospitals3",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            },{
                title: "Prasad Hospitals",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            },{
                title: "Prasad Hospitals",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            },{
                title: "Prasad Hospitals",
                address: "Behind Indian Petrol Bunk, KN Raod, Tadepalligudem",
                phone: 898989898,
                hours: "9AM-5PM",
                specialities: "ortho, gynocology",
                beds: 50,
                pharmacy: true, 
                lab: true,
                ventilator: true
            }]
        }
        this.onClick = () => {
            this.setState({
                display: this.state.display == 'none'? 'block': 'none'
            });
        }
    }
    render(){
        return(
            <CategoryWrapper onClick={this.onClick}>
                <Title>{this.props.summary.title}</Title>
                <Keys>{this.props.summary.keys}</Keys>
                <SearchResultList results={this.state.items} display={this.state.display}/>
            </CategoryWrapper>
        );
    }
}

export default Category;
