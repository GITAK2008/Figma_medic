import "../Page1/P1_secc4.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec4">
                <div className="Sec4_cen">
                    <div className="Text">
                        <h1>Always Caring</h1>
                        <p>Our Specialties</p>
                    </div>
                    <div className="Cards">
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Neurology</p>
                        </div>
                        <div className="Card_blue">
                            <img src={Photo.vec3}></img>
                            <p>Bones</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Oncology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Otorhinolaryngology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Otorhinolaryngology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Cardiovascular</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Pulmonology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Renal Medicine</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Gastroenterology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Urology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Dermatology</p>
                        </div>
                        <div className="Card">
                            <img src={Photo.vec3}></img>
                            <p>Gynaecology</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}