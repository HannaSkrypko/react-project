import React from 'react';

import {
    ModalWrapper, ModalOverlay, ModalContent,
    ModalTitle, ModalCloseButton,
    ModalBottomGroupOfButtons, ModalMainButton, ModalCancelButton,
} from './styled';

const Modal = ( props ) => {
    return(
        <ModalWrapper>
            <ModalOverlay onClick={props.close} />
            <ModalContent> 
                <ModalCloseButton onClick={props.close}>X</ModalCloseButton>
                {props.title ? <ModalTitle>{props.title}</ModalTitle> : null}
                {props.children} 
                {/* <ModalBottomGroupOfButtons>
                    <ModalCancelButton onClick={props.close}>Cancel</ModalCancelButton>
                    <ModalMainButton>{props.button ? props.button : "Submit"}</ModalMainButton>
                </ModalBottomGroupOfButtons> */}
            </ModalContent>
        </ModalWrapper>
    )
}

export default Modal;