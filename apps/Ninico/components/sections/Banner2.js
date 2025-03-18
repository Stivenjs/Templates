
import Link from "next/link"

export default function Banner2() {
    return (
        <>
            <section className="banner-area pb-20">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="tpbanneritems p-relative">
                                <div className="tpbanneritem__thumb mb-20">
                                    <img src="/assets/img/banner/banner-03-01.jpg" alt="banner-img" />
                                    <div className="tpbanneritem__content">
                                        <p>Furniture</p>
                                        <h5 className="tpbanneritem__title mb-60"><Link href="/shop-2">Nuevas ideas <br /> Modernas</Link></h5>
                                        <div className="tpbanneritem__btn">
                                            <Link className="tp-btn green-btn banner-animation" href="/shop-2">Compra ahora <i className="fal fa-long-arrow-right" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-12 col-md-12">
                            <div className="tpbanneritem">
                                <div className="row">
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="tpbanneritem__thumb banner-animation p-relative">
                                            <img src="/assets/img/banner/banner-03-02.jpg" alt="banner-img" />
                                            <div className="tpbanneritem__text">
                                                <h5 className="tpbanneritem__text-title"><Link href="/shop-2">Colecciones de<br />Lamparas</Link></h5>
                                            </div>
                                            <span className="tp-banner-item-small">100 Added</span>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-6">
                                        <div className="tpbanneritem__thumb banner-animation p-relative">
                                            <img src="/assets/img/banner/banner-03-03.jpg" alt="banner-img" />
                                            <div className="tpbanneritem__text">
                                                <h5 className="tpbanneritem__text-title"><Link href="/shop">Silla minimalista</Link></h5>
                                                <h3 className="tpbanneritem__text-price">-Oferta 60%</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
