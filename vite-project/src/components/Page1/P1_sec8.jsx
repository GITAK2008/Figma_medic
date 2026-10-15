import "../Page1/P1_secc8.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec8">
                <div className="Cetyr">
                    <div className="tezxxt">
                        <h1>Get in touch</h1>
                        <p>Contact</p>
                    </div>
                    <div className="Depeche">
                        <div className="Mode">
                            <div className="Jesus">
                                <img src={Photo.group1}></img>
                                <h1>Emergency</h1>
                                <p>(237) 681-812-255</p>
                                <p>(237) 666-331-894</p>
                            </div>
                        </div>
                        <div className="Mode1">
                            <div className="Jesus">
                                <img src={Photo.group2}></img>
                                <h1>Location</h1>
                                <p>0123 Some place</p>
                                <p>9876 Some country</p>
                            </div>
                        </div>
                        <div className="Mode">
                            <div className="Jesus">
                                <img src={Photo.group3}></img>
                                <h1>Email</h1>
                                <p>fildineeesoe@gmil.com</p>
                                <p>myebstudios@gmail.com</p>
                            </div>
                        </div>
                        <div className="Mode">
                            <div className="Jesus">
                                <img src={Photo.group4}></img>
                                <h1>Working Hours</h1>
                                <p>Mon-Sat 09:00-20:00</p>
                                <p>Sunday Emergency only</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}