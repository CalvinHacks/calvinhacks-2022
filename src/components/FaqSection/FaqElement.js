import styled from 'styled-components';

export const FaqContainer = styled.div`
    background: #cccccc;
    display:flex;
    flex-direction: column;
    justify-content:center;
    align-items: center;
    height:100%;
    margin-top: 30px;
    margin-bottom: 30px;
    
`

export const CardContainer = styled.div `
    width: 90%;
    padding: 30 auto 30 auto;
    display:grid;
    border-radius:20px;
    grid-template-rows: repeat(5, 10%);
    grid-template-columns: repeat(2, 30%);
    grid-gap: 10px;
    justify-content: center;
    align-items:center;
    
`

export const DataContainer = styled.div`
    padding-bottom: 20px;
    
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
    // box-shadow: 2px 10px 35px 1px rgba(153, 153, 153, 0.3);

    h1 {
        padding: 1rem;
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
        padding-left: 10px;
        text-align: right;
    }


`

export const Dropdown = styled.div `
    background: #fff;
    border-left: 2px solid #8C2131;

    p {
        padding: 2rem;
        margin: 0 0;

    }
`