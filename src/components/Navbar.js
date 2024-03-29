const Navbar = (props) => {

    return (
        <div>
            <h1>{props.navHeading}</h1>
            <ul>
                <li>
                    <a href="">ABOUT</a>
                    </li>
                <li>
                    <a href="">HOME</a>
                    </li>
                <li>
                    <a href="">CONTACT</a>
                    </li>
                <li>
                    <a href="">{props.navText}</a>
                    </li>
            </ul>
        </div>
    )
}

export default Navbar