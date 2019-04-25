import styled from 'styled-components';

const CartWrapper = styled.div`
    width: 400px;
    max-height: 480px;
    position: absolute;
    top: 50px;
    right: 50px;
    background: white;
    padding: 30px 0px 80px;
    border: thin solid #f9f9f9;
    box-shadow: 0 0 10px 5px rgba(0,0,0,0.2);
`;

const CartListItems = styled.div`
    max-height: 320px;
    overflow-y: auto;
`;

const CartTitle = styled.h2`
    padding-left: 20px;
    margin-bottom: 10px;
`;

const OrderButtonWrapper = styled.div`
    text-align: right;
    position: absolute;
    bottom: 20px;
    right: 15px;
`;

const Styled = {
    CartWrapper,
    CartListItems,
    CartTitle,
    OrderButtonWrapper,
} 

export default Styled; 