import React from "react";
import ReactDOM from 'react-dom';
import styled from 'styled-components';

const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px'
}

const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`
};

const ArticalWrapper = styled.div`
    border-bottom: #DDD 1px solid;
    padding-bottom: 5px;
    margin-bottom: 5px;
    padding-top: 5px;
    img {
        width: 100%;
        margin-right: 5px;
        border: 0px #DDD solid;
        margin-top: 5px;
    }

`;

const Caption = styled.div`
    color: #0BB;
    font-size: 10px;
`;

const Title = styled.div`
    color: rgb(217, 37, 62);
    font-size: 20px;
    width: 100%;
`;

const Date = styled.span`
    color: #0BB;
    font-size: 10px;
    margin-right: 5px;
`;

const Author = styled.span`
    color: gray;
    font-size: 10px;
`;

const Summary = styled.div`
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: justify;
    font-size: 14px;
`;

const Hint = styled.div`
    color: gray;
    font-size: 12px;
    cursor: pointer
`;

const Content = styled.div`
    text-align: justify;
    font-size: 14px;
    display: none;
    padding-top: 5px;
    padding-bottom: 5px;
`;

class Artical extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: false
        }
        this.onHint = () => {
            console.log('on hint');
            this.setState({
                content: !this.state.content
            })
        }
    }

    render() {
        return(
            <ArticalWrapper>
                <Title>{this.props.artical.title}</Title>
                <Caption>
                    <Date>{this.props.artical.date}</Date>
                    <Author>{this.props.artical.author}</Author>
                </Caption>
                <img src={this.props.artical.img}/>
                <Summary>{this.props.artical.summary}</Summary>
                <Hint onClick={this.onHint} style={{display: this.state.content?'none': 'block'}}>more ...</Hint>
                {
                    this.props.artical.contents.map(content=>
                        <Content key={content.id} style={{display: this.state.content?'block': 'none'}}>{content.text}</Content>
                    )
                }
                <Hint onClick={this.onHint} style={{display: this.state.content?'block': 'none'}}>less ...</Hint>
            </ArticalWrapper>
        )
    }
}

export default Artical;