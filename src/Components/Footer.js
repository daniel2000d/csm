import '../Styles/Footer.css';

const Footer = () => {
    return(
        <div className="footer">
            <div className="container">
                <div className="row text-center">
                    <p className="col-sm">&copy;{new Date().getFullYear()} CSM Suceava. All rights reserved.</p>
                </div>
                <div className="row justify-content-md-center">
                    {/* Column1 */}
                    <div className="col-md-auto">
                        <p>Privacy Policy</p>
                    </div>
                    {/* Column2 */}
                    <div className="col-md-auto">
                        <p>Terms of Use</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;