"use client";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const swiperOptions = {
  modules: [Autoplay, Pagination, Navigation],
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },

  // Navigation
  navigation: {
    nextEl: ".h1n",
    prevEl: ".h1p",
  },

  // Pagination
  pagination: {
    el: ".slider-pagination",
    clickable: true,
  },
};

import Link from "next/link";

export default function Slider1() {
  return (
    <>
      <section className="slider-area pb-25">
        <div className="container">
          <div className="row justify-content-xl-end">
            <div className="col-xl-9 col-xxl-7 col-lg-9">
              <div className="tp-slider-area p-relative">
                <div className="swiper-container slider-active">
                  <Swiper {...swiperOptions}>
                    <SwiperSlide>
                      <div className="tp-slide-item">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accesorios
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Arriba del
                            <i>
                              {" "}
                              40% de descuento
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>
                            Productos seleccionados
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Comprar ahora{" "}
                            <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img src="/assets/img/slider/banner-1.jpg" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="tp-slide-item">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accesorios
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Arriba del{" "}
                            <i>
                              35% de descuento{" "}
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>{" "}
                            en ultimas Creaciones
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Comprar ahora{" "}
                            <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img src="/assets/img/slider/banner-2.jpg" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                    <SwiperSlide>
                      <div className="tp-slide-item">
                        <div className="tp-slide-item__content">
                          <h4 className="tp-slide-item__sub-title">
                            Accesorios
                          </h4>
                          <h3 className="tp-slide-item__title mb-25">
                            Arriba del{" "}
                            <i>
                              45% de descuento{" "}
                              <img
                                src="/assets/img/icon/title-shape-02.jpg"
                                alt=""
                              />
                            </i>{" "}
                            en ultimas Creaciones
                          </h3>
                          <Link
                            className="tp-slide-item__slide-btn tp-btn"
                            href="/shop"
                          >
                            Comprar Ahora{" "}
                            <i className="fal fa-long-arrow-right" />
                          </Link>
                        </div>
                        <div className="tp-slide-item__img">
                          <img src="/assets/img/slider/banner-3.jpg" alt="" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </div>
                <div className="slider-pagination" />
              </div>
            </div>
            <div className="col-xl-3 col-xxl-3 col-lg-3">
              <div className="row">
                <div className="col-lg-12 col-md-6">
                  <div className="tpslider-banner tp-slider-sm-banner mb-30">
                    <Link href="/shop-details">
                      <div className="tpslider-banner__img">
                        <img
                          src="/assets/img/slider/banner-slider-01.jpg"
                          alt=""
                        />
                        <div className="tpslider-banner__content">
                          <span className="tpslider-banner__sub-title">
                            Artesanales
                          </span>
                          <h4 className="tpslider-banner__title">
                            Nuevas artesanías de <br /> Estilo moderno
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="tpslider-banner">
                    <Link href="/shop-details">
                      <div className="tpslider-banner__img">
                        <img
                          src="/assets/img/slider/banner-slider-02.jpg"
                          alt=""
                        />
                        <div className="tpslider-banner__content">
                          <span className="tpslider-banner__sub-title">
                            Popular
                          </span>
                          <h4 className="tpslider-banner__title">
                            Energía con nuesta <br /> Colección más reciente
                          </h4>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
