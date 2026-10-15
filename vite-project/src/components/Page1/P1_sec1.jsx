import "../Page1/P1_secc1.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec1">
                <div className="Sec1_cen">
                    <div className="Headline">
                        <div className="Text">
                            <h1>Caring for Life</h1>
                            <p>Leading the Way in Medical Excellence</p>
                        </div>
                        <button className="Button">Our Services</button>
                    </div>
                    <div className="Book_sec">
                        <div className="Book1">
                            <p>Book an Appointment</p>
                            <img src={Photo.calendar}/>
                        </div>
                        <div className="Book2">
                            <p>Book an Appointment</p>
                            <img src={Photo.guys}/>
                        </div>
                        <div className="Book3">
                            <p>Book an Appointment</p>
                            <img src={Photo.cash}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}