import styled from 'styled-components';

import * as colors from '../../constants/colors';

export const ProfileWrapper = styled.div`
    width: 80%;
    max-width: 1000px;
    margin: 0 auto; 
`;

export const ProfileInfoHeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px 0;
`;

export const ProfileInfoHeader = styled.div`
    position: relative;
    height: 60px;
    padding: 0 20px 0 35px;
    background-color: ${colors.GOLD};
    color: white;
    line-height: 60px;
    font-size: 1.5em;

    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 100%;
        border: 30px solid ${colors.GOLD};
        border-right-color: transparent;
        border-top-color: transparent;
        border-bottom-color: transparent;
    }
`;

export const ProfileInfoWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const ProfileInfoImage= styled.div`
    width: 20%;
    margin-right: 100px;
`;

export const ProfileInformation = styled.div`
`;

export const ProfileInfoLine = styled.div`
    display: grid;
    grid-template-columns: 60px 1fr;
    grid-gap: 10px;
    align-items: center;

    margin-bottom: 10px;
`;

export const ProfileInfoLabel = styled.p`
    
`;

export const ProfileInfoInput = styled.input`
    width: 100%;
`;

export const ProfileInfoField = styled.p`
    font-size: ${props => (props.username ? "1.5em" : "inherit")};
    font-weight: 500;
`;

export const ProfileInfoLinePassword = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    margin: 30px 0;

    & input {
        width: 100%;
    }
`;

export const ProfileInfoError = styled.p`
    display: inline-block;
    margin-left: 20px;
    color: ${colors.DANGER};
`;