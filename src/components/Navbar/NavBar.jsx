import CartWidget from '../CartWidget/CartWidget'
import classes from './Navbar.module.css'

const Navbar=() =>{
    return(
        <header>
            <nav className={classes.navbar}>
                <a className={classes.accords}>Nintendo Switch</a>
                <a className={classes.accords}>PS5</a>
                <a className={classes.accords}>Xbox</a>
                <CartWidget/>
            </nav>
            
        </header>
    )
}

export default Navbar