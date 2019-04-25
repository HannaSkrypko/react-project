import React from 'react';

import { Modal } from '../../UI';
import SignInForm from './SignInForm.jsx';

const SignInModal = ( props ) => {
    return(
        <Modal
            title="Sign In"
            close={props.close}
        >
            <SignInForm close={props.close}/>   
        </Modal>
    )
}

export default SignInModal;