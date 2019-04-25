import React from 'react';

import { Modal } from '../../UI';
import SignUpForm from './SignUpForm.jsx';

const SignUpModal = ( props ) => {
    return(
        <Modal
            title="Sign Up"
            close={props.close}
        >
            <SignUpForm close={props.close}/>   
        </Modal>
    )
    
}

export default SignUpModal;