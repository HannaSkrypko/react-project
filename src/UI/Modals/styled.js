import styled from 'styled-components';

import * as colors from '../../constants/colors';

export const ModalWrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden auto;
    z-index: 997;
`;

export const ModalOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
`;

export const ModalContent = styled.div`
    position: absolute;
    max-height: 80vh;
    min-width: 400px;
    padding: 50px 30px 30px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: ${colors.DEFAULT_WHITE};
    overflow-y: auto;
`;

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background-color: transparent;
    border: none;
    color: ${colors.GRAY};

    &:hover {
        color: ${colors.DANGER};
    }
`;

export const ModalTitle = styled.h2`
    margin-bottom: 20px;
`;

export const ModalBottomGroupOfButtons = styled.div`
    position: absolute;
    bottom: 20px;
    right: 20px;
    text-align: right;
`;

export const ModalMainButton = styled.button`
    height: 40px;
    width: auto;
    min-width: 150px;
    text-align: center;
    background-color: transparent;
    border: thin solid ${colors.GOLD};
    
    &:hover,
    &:focus {
        background-color: ${colors.GOLD};
        color: ${colors.DEFAULT_WHITE};
    }
`;

export const ModalCancelButton = styled.button`
    height: 40px;
    width: auto;
    min-width: 150px;
    text-align: center;
    background-color: transparent;
    border: none;
    color: ${colors.GRAY};

    &:hover,
    &:focus {
        color: ${colors.GOLD};
    }
`;
