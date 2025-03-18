'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.slidertwo_pagination',
        clickable: true,
    },

}

export default function Slider2() {
    return (
        <>
            <section className="slider-area slider-bg slider-bg-height">
                <div className="slider-pagination-2 p-relative">
                    <div className="swiper-containers slidertwo-active">
                        <Swiper {...swiperOptions}>
                            <SwiperSlide className="slider-bg">
                                <div className="container">
                                    <div className="slider-top-padding pt-55">
                                        <div className="row p-relative align-items-end">
                                            <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-center">
                                                <div className="tpslidertwo__item">
                                                    <div className="tpslidertwo__content">
                                                        <h4 className="tpslidertwo__sub-title">Solo en</h4>
                                                        <h3 className="tpslidertwo__title mb-10">Invierno <br /> Colección de invierno</h3>
                                                        <p>Soporte para ropa moderna, elegante y estilizada.</p>
                                                        <div className="tpslidertwo__slide-btn">
                                                            <Link className="tp-btn banner-animation" href="/shop">Comprar ahora <i className="fal fa-long-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-7 col-lg-6 col-md-6 d-none d-md-block">
                                                <div className="tpslidertwo__img p-relative text-end">
                                                    <img src="/assets/img/slider/slider-01.png" alt="" />
                                                    <div className="tpslidertwo__img-shape">
                                                        <img src="/assets/img/slider/fasion-tag-01.png" alt="tag" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg">
                                <div className="container">
                                    <div className="slider-top-padding pt-55">
                                        <div className="row p-relative align-items-end">
                                            <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-center">
                                                <div className="tpslidertwo__item">
                                                    <div className="tpslidertwo__content">
                                                        <h4 className="tpslidertwo__sub-title">Solo en</h4>
                                                        <h3 className="tpslidertwo__title mb-10">Invierno <br /> Moda femenina</h3>
                                                        <p> Nuevo y moderno soporte para ropa femenina a la moda</p>
                                                        <div className="tpslidertwo__slide-btn">
                                                            <Link className="tp-btn banner-animation" href="/shop">Compra ahora <i className="fal fa-long-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-7 col-lg-6 col-md-6 d-none d-md-block">
                                                <div className="tpslidertwo__img p-relative text-end">
                                                    <img src="/assets/img/slider/slider-02.png" alt="" />
                                                    <div className="tpslidertwo__img-shape">
                                                        <img src="/assets/img/slider/fasion-tag-01.png" alt="tag" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="slider-bg">
                                <div className="container">
                                    <div className="slider-top-padding pt-55">
                                        <div className="row p-relative align-items-end">
                                            <div className="col-xl-5 col-lg-6 col-md-6 d-flex align-self-center">
                                                <div className="tpslidertwo__item">
                                                    <div className="tpslidertwo__content">
                                                        <h4 className="tpslidertwo__sub-title">Solo en</h4>
                                                        <h3 className="tpslidertwo__title mb-10">Invierno <br /> Colección de verano</h3>
                                                        <p>Soporte para ropa femenina moderna, elegante y a la moda</p>
                                                        <div className="tpslidertwo__slide-btn">
                                                            <Link className="tp-btn banner-animation" href="/shop">Compra ahora <i className="fal fa-long-arrow-right" />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-7 col-lg-6 col-md-6 d-none d-md-block">
                                                <div className="tpslidertwo__img p-relative text-end">
                                                    <img src="/assets/img/slider/slider-03.png" alt="" />
                                                    <div className="tpslidertwo__img-shape">
                                                        <img src="/assets/img/slider/fasion-tag-01.png" alt="tag" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="slider-two-pagination">
                        <div className="container">
                            <div className="slider-two-pagination-item p-relative">
                                <div className="slidertwo_pagination" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
