import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Category from './Category.jsx'

const CategoryListWrapper = styled.div`

`;



class CategoryList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            categories: [{
                title:'ఆరోగ్యం',
                keys: 'ఆసుపత్రులు, అంబులెన్సులు, మందుల షాపులు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'విద్య',
                keys: 'పాఠశాలలు, కళాశాలలు, ఉన్నత విద్యాసంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆర్ధికసంస్థలు',
                keys: 'బ్యాంకులు, భీమా సంస్థలు, ఏటీఎం, ఫైనాన్స్ సంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆరోగ్యం',
                keys: 'ఆసుపత్రులు, అంబులెన్సులు, మందుల షాపులు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'విద్య',
                keys: 'పాఠశాలలు, కళాశాలలు, ఉన్నత విద్యాసంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆర్ధికసంస్థలు',
                keys: 'బ్యాంకులు, భీమా సంస్థలు, ఏటీఎం, ఫైనాన్స్ సంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆరోగ్యం',
                keys: 'ఆసుపత్రులు, అంబులెన్సులు, మందుల షాపులు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'విద్య',
                keys: 'పాఠశాలలు, కళాశాలలు, ఉన్నత విద్యాసంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆర్ధికసంస్థలు',
                keys: 'బ్యాంకులు, భీమా సంస్థలు, ఏటీఎం, ఫైనాన్స్ సంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆరోగ్యం',
                keys: 'ఆసుపత్రులు, అంబులెన్సులు, మందుల షాపులు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'విద్య',
                keys: 'పాఠశాలలు, కళాశాలలు, ఉన్నత విద్యాసంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            },{
                title:'ఆర్ధికసంస్థలు',
                keys: 'బ్యాంకులు, భీమా సంస్థలు, ఏటీఎం, ఫైనాన్స్ సంస్థలు',
                image: 'http://www.glarimy.com/cities/images/logo-background.png'
            }]
        }
    }

    render() {
        return(
            <CategoryListWrapper>
                {this.state.categories.map(category=>
                    <Category summary={category}/>
                )}
            </CategoryListWrapper>
        );
    }
}
export default CategoryList;