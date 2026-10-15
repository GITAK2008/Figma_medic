import { Photo } from "../../Photo"
import "./Footer.scss"
export default function App(){
    return(
        <>
            <footer>
                <div className="Centrff">
                    <div className="kont">
                        <div className="raz">
                            <h1>Meddical</h1>
                            <p>Leading the Way in Medical Execellence, Trusted Care.</p>
                        </div>
                        <div className="dva">
                            <h1>Important Links</h1>
                            <div className="text">
                                <p>Appointment</p>
                                <p>Doctors</p>
                                <p>Services</p>
                                <p>About Us</p>
                            </div>
                        </div>
                        <div className="tri">
                            <h1>Contact Us</h1>
                            <div className="text1">
                                <p>Call: (237) 681-812-255</p>
                                <p>Email: fildineesoe@gmail.com</p>
                                <p>Address: 0123 Some place</p>
                                <p>Some country</p>
                            </div>
                        </div>
                        <div className="four">
                            <h1>Newsletter</h1>
                            <button className="Savage">Enter your email address<img src={Photo.vec5}></img></button>
                        </div>
                    </div>
                    <div className="polosa"></div>
                    <div className="konec">
                        <h1>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</h1>
                        <div className="knopk">
                            <img src={Photo.inaaaa}></img>
                            <img src={Photo.facee}></img>
                            <img src={Photo.instaa}></img>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}