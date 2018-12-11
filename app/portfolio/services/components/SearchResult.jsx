import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const SearchResultWrapper = styled.div`
    margin-left: 5px;
    margin-top: 5px;
    margin-bottom: 5px;
    padding-left: 5px;
`;

const Title = styled.div`
    color: #0BB;
`;

const Address = styled.div`
    color: gray;
    font-style: italic;
`;



class SearchResult extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SearchResultWrapper>
                <Title>{this.props.result.title}</Title>
                <Address>{this.props.result.address}</Address>
            </SearchResultWrapper>
        );
    }
}

export default SearchResult;
