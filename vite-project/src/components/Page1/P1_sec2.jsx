import "../Page1/P1_secc2.scss"
import { Photo } from "../../Photo"
export default function App(){
    return(
        <>
            <section className="Sec2">
                <div className="Sec2_cen">
                    <div className="Text">
                        <h1>Welcome to Meddical</h1>
                        <p>A Great Place to Receive Care</p>
                        <p className="P2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque tortor ornare ornare. Convallis felis vitae tortor augue. Velit nascetur proin massa in. Consequat faucibus porttitor enim et.</p>
                        <div className="Learn_more">
                            <p>Learn More</p>
                            <h1>→</h1>
                        </div>
                    </div>
                    <img src={Photo.gandon}></img>
                </div>
            </section>
        </>
    )
}