import Auth from "../utils/auth";

const Nav = (props) => {
    const {pageSelected, setPageSelected} = props;

    return (
        <>
        <ul>
            <li>
                <a href='#Home' onClick={() => setPageSelected('Home')}>Home</a>
            </li>
            {!Auth.loggedIn() && 
            <li>
                <a href='#Login' onClick={() => setPageSelected('Login')}>Login</a>
            </li>}
            {!Auth.loggedIn() && 
            <li>
                <a href='#SignUp' onClick={() => setPageSelected('Signup')}>Sign Up</a>
            </li>}
            {Auth.loggedIn() && 
            <li>
                <a href='/' onClick={() => {
                    Auth.logout()
                    setPageSelected('Home')
                    }}>Logout</a>
            </li>}
        </ul>
        </>
    )
}

export default Nav;