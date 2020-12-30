import classes from './main.module.css';
const main = (props) => {

return (
    <div className={props.smallDevice ? classes.Block : classes.Main}>
        <h1 >This is {props.section} page</h1>
    </div>
    
)
}

export default main;