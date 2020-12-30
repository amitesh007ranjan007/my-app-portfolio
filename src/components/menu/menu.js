import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import classes from './menu.module.css';

const menu = (props) => {
    return (
        <FontAwesomeIcon icon={props.smallDevice ? faTimes : faBars} className={classes.Menu} onClick={props.clicked}/>
    )
}

export default menu;