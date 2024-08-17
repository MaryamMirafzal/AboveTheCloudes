import { FaArrowRight, FaChevronRight, FaHome } from "react-icons/fa"
import styles from "./HomePage.module.css"
import { Link } from "react-router-dom"
function HomePage() {
  return (
    <div className={`${styles.header}`}>
    <nav className={`${styles.navbar}`}>
        <ul className={`${styles.navUl}`}>
            <Link to='/' className={`${styles.link} ${styles.home}`}><FaHome /> Home</Link>
            <Link to='/account' className={`${styles.link} ${styles.text}`}>Account</Link>
            <Link to='/categories' className={`${styles.link} ${styles.text}`}>Categories</Link>
            <Link to='/login' className={`${styles.link} ${styles.text}`}>Login</Link>
            <Link to='/allMembers' className={`${styles.link} ${styles.text}`}>Team</Link>
        </ul>
    </nav>
    <div className={`${styles.texts} `}>
        <h1 className={`${styles.titel} `}>Live above the clouds</h1>
        <p className={`${styles.siteInf}`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, ab ipsum blanditiis quidem numquam magni reprehenderit at repudiandae esse voluptatem nostrum velit est expedita in harum repellat sint ratione. Culpa, quibusdam. Quam repellat autem neque. Illum reprehenderit expedita ipsa dolorum.
        </p>
        <Link to="/discoverNow" className={`${styles.btn}`}>Discover Now <FaChevronRight /></Link>
    </div>
   </div>
  )
}

export default HomePage