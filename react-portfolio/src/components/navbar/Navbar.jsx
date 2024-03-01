import styles from './navbar.module.css'
function Navbar() {
  return (
    <>
    <nav className={styles.navbar}>
        <a className={styles.title} href="/">Portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <a href='#about'>About </a>
                </li>
                <li>
                    <a href='#expirence'>Exprience </a>
                </li>
                <li>
                    <a href='#projects'>Projects </a>
                </li>
                <li>
                    <a href='#contactme'>Contact </a>
                </li>
            </ul>
        </div>
    </nav>


    </>
  )
}

export default Navbar
