import classes from "./ItemListContainer.module.css"

const ItemListContainer = (props) => {
    return(
        <div>
            <h2 className={classes.ContenedorSaludo}>{props.Greetings}</h2>
        </div>
    )
}
export default ItemListContainer