import styled from 'styled-components';

export const AboutImageContainer = styled.div`

`


export const FaqContainer = styled.div`
    background: linear-gradient(135deg, hsla(351, 58%, 43%, 1) 0%, hsla(351, 55%, 41%, 1) 50%, hsla(351, 62%, 34%, 1) 100%);
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height:100%;
    margin-bottom: 30px;
    
`
export const FaqHeader = styled.h1`
    color: white;
    font-family: 'Open Sans', sans-serif;
    text-transform: uppercase;
`

export const CardContainer = styled.div `
    width: 90%;
    display:inline-flex;
    flex-direction: column;
    /* display:grid;
    grid-template-rows: repeat(5, 10%);
    grid-template-columns: repeat(2, 30%); */
    grid-gap: 10px;
    align-items:center;
    justify-content: stretch;
    
`

export const DataContainer = styled.div`
    padding-bottom: 20px;
    border-radius: 30px;
    width: 500px;
`





export const Wrap = styled.div `
    color: black;
    background-color: white;
    display:grid;
    grid-template-rows: 1;
    grid-template-columns: 5% 90% 5%;
    align-items: center;
    width:100%;
    text-align: center;
    cursor: pointer;

    h1 {
        padding-left: 40px;
        font-size: 1rem;
        text-transform: uppercase;
        text-align: left;
    }

    p {
        text-align: left;
        padding-left: 10px;
    }

    span {
        padding-right: 10px;
        text-align: right;
    }


`

export const Dropdown = styled.div `
    background: #fff;
    border-left: 2px solid #fff;

    p {
        padding: 2rem;
        margin: 0 0;

    }
`