import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import SearchResult from './SearchResult.jsx';

const SearchResultListWrapper = styled.div`

`;

class SearchResultList extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return(
            <SearchResultListWrapper style={{display: this.props.display}}>
            {
                this.props.results.map(result => 
                    <SearchResult result={result}/>
                )
            }
            </SearchResultListWrapper>
        );
    }
}

export default SearchResultList;
