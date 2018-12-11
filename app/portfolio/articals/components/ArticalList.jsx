import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Artical from './Artical.jsx';
import {fetchArticals, fetchMoreArticals} from '../actions/rest.js';
import store from '../store/store.js';

const ArticalListWrapper = styled.div`
`;

const More = styled.div`
    button{
        width: 100%;
        border: none;
        font-size: 12px;
        cursor: pointer;
        background-color: black;
        color: #0BB;
        padding-top: 5px;
        padding-bottom: 5px;
        &:hover {
            color: red;
        }
    }
`;


class ArticalList extends React.Component {
    constructor(props){
        super(props);
        store.subscribe(()=>this.forceUpdate());
        fetchArticals();
        this.onMore = () => {
            if(store.getState().more)
                fetchMoreArticals();
        }
    }

    render() {
        return(
            <ArticalListWrapper style={{display: this.props.display}}>
                {store.getState().articals.map(a => <Artical key={a.id} artical={a}></Artical>)}
                <More><button onClick={this.onMore}>{store.getState().more ? "Load More": "No More"}</button></More>
            </ArticalListWrapper>
        )
    }
}

export default ArticalList;