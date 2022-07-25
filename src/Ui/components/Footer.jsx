export const Footer = () => {
    return (
        <footer>
            <div className="container footer">

                <div className="socials">
                    <li>
                        <i className="fa-brands fa-facebook-f"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-twitter"></i>
                    </li>
                    <li>
                        <i className="fa-brands fa-instagram"></i>
                    </li>
                </div>

                <div className="exact-ubication">
                    <p> C. 60 S/N, Centro, 97000 Mérida, Yuc. </p>
                </div>

                <div>
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3328.2954145416707!2d-89.61924078337822!3d20.966148005640107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f5671623c0fd4c3%3A0xda42c2632f3ddfe2!2sPlaza%20Principal%20de%20M%C3%A9rida%20%22Plaza%20Grande%22!5e0!3m2!1ses-419!2smx!4v1658527417751!5m2!1ses-419!2smx"
                        className="map-size"
                    >
                    </iframe>
                </div>
            </div>

            <p className="copyright"> From Javier Ramirez &copy; </p>
        </footer>
    );
};
