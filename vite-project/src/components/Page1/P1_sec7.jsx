import "../Page1/P1_secc7.scss"
import { Photo } from "../../Photo"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
export default function App(){
    return(
        <>
            <section className="Sec7">
                <div className="Cenh">
                    <div className="tezxxt">
                        <h1>Better information, Better health</h1>
                        <p>News</p>
                    </div>
                    <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    pagination={{
                        clickable: true,
                    }}
                    navigation={false}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                   >
                    <SwiperSlide>
                        <div className="Toose">
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Toose">
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="Toose">
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                        <div className="konta">
                            <img src={Photo.niggas}></img>
                            <div className="tet">
                                <h1>Monday 05, September 2021 | By Author</h1>
                                <p>This Article’s Title goes Here, but not too long.</p>
                                <img src={Photo.balod}></img>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                   </Swiper>
                    <img src={Photo.toch}></img>
                </div>
            </section>
        </>
    )
}