import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';

function Backdrop(props){
return <div onClick={props.onClick} className={classes.backdrop}></div>
}

function ModalOverlay(props){
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById('overlays');

function Modal(props){
return <Fragment>
    {ReactDOM.createPortal(<Backdrop onClick={props.onClick}/>,portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalElement)}
</Fragment>
}

export default Modal;