function Footer() {
    let Footerstyle = {
        position: "absolute",
        top: "100vh",
        width: "100%",     
}
return (
    <footer>
        <div className="bg-dark text-light py-5 tc" style={Footerstyle}>
            <p className="text-centre">
                 2021 React development. All rights reserved.
            </p>
            <a className="App link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
           </a>

        </div>
    </footer>


)
}

export default Footer;

