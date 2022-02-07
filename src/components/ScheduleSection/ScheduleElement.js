import styled from 'styled-components';

export const ScheduleContainer = styled.div`
    background: #fff;
    display:flex;
    justify-content:center;
    align-items: center;
    height:800px;
    width: 100vw;
`
export const ScheduleTableContainer = styled.div`
    width: 90%;
    display:flex;
    justify-content:center;
    object-fit: contain;

    table {
        width: 100%
    }
    
    th {
        font-size: 20px;
        font-weight: 150;
        padding-bottom: 5px;
    }
`


export const ScheduleImageContainer = styled.div`
    
    @media screen and (max-width: 1000px) {
        img {
            width: 400p;
            height: 270px;
        }
    }   


`

export const ScheduleTh = styled.th`
    font-size: 20px;
    font-weight: 300;
    border-bottom: 1px solid grey;
`
export const ScheduleTr = styled.tr`
`
