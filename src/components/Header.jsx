
const Header = ({children}) => {
    return(
        <header className="main-header">
            <div className="container">
                <div className="even-column">
                {children}
                </div>
            </div>
        </header>
    )
}

export default Header