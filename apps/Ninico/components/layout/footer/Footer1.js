import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area theme-bg pt-65">
                    <div className="container">
                        <div className="main-footer pb-15 mb-30">
                            <div className="row">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-1 mb-40">
                                        <div className="footer-logo mb-30">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>Elegant pink origami design three <br /> dimensional view and decoration co-exist.
                                                <br /> Great for adding a decorative touch to <br /> any room’s decor.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-2 ml-30 mb-40">
                                        <h4 className="footer-widget__title mb-30">Información</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#">Servicio personalizado</Link></li>
                                                <li><Link href="#">FAQs</Link></li>
                                                <li><Link href="/track">Seguimiento de pedidos</Link></li>
                                                <li><Link href="/contact">Contactos</Link></li>
                                                <li><Link href="#">Eventos</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-3 mb-40">
                                        <h4 className="footer-widget__title mb-30">Mi cuenta</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#">Información de pedido</Link></li>
                                                <li><Link href="#">Politicas de privacidad</Link></li>
                                                <li><Link href="#">Descuento</Link></li>
                                                <li><Link href="#">Servicio personalizado</Link></li>
                                                <li><Link href="#">Términos y condiciones</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-4 col-sm-6">
                                    <div className="footer-widget footer-col-4 mb-40">
                                        <h4 className="footer-widget__title mb-30">Redes Sociales</h4>
                                        <div className="footer-widget__links">
                                            <ul>
                                                <li><Link href="#"><i className="fab fa-facebook-f" />Facebook</Link></li>
                                                <li><Link href="#"><i className="fab fa-dribbble" />Dribbble</Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" />Twitter</Link></li>
                                                <li><Link href="#"><i className="fab fa-behance" />Behance</Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" />Youtube</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4">
                                    <div className="footer-widget footer-col-5 mb-40">
                                        <h4 className="footer-widget__title mb-30">Suscribirse al boletín</h4>
                                        <p>¡Únete a la lista y obtén un 10% de descuento en tu primer pedido!</p>
                                        <div className="footer-widget__newsletter">
                                            <form action="#">
                                                <input type="email" placeholder="Ingresa tu correo electrónico" />
                                                <button className="footer-widget__fw-news-btn tpsecondary-btn">Inscríbete aquí.







<i className="fal fa-long-arrow-right" /></button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-cta pb-20">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-xl-6 col-lg-4 col-md-4 col-sm-6">
                                    <div className="footer-cta__contact">
                                        <div className="footer-cta__icon">
                                            <i className="far fa-phone" />
                                        </div>
                                        <div className="footer-cta__text">
                                            <Link href="/tel:0123456">300656565</Link>
                                            <span>Horas de atención 8:00 - 22:00</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-8 col-md-8 col-sm-6">
                                    <div className="footer-cta__source">
                                        <div className="footer-cta__source-content">
                                            <h4 className="footer-cta__source-title">Descarga la App en el celular.</h4>
                                            <p>15 % de descuento en tu primera compra.</p>
                                        </div>
                                        <div className="footer-cta__source-thumb">
                                            <Link href="#"><img src="/assets/img/footer/f-google.jpg" alt="google" /></Link>
                                            <Link href="#"><img src="/assets/img/footer/f-app.jpg" alt="app" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-copyright footer-bg">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-6 col-lg-7 col-md-5 col-sm-12">
                                    <div className="footer-copyright__content">
                                        <span>Copyright {new Date().getFullYear()} <Link href="/">©Ninico</Link>. All rights reserved. Developed by
                                            <Link href="https://themeforest.net/user/alithemes/portfolio"> AliThemes</Link>.</span>
                                    </div>
                                </div>
                                <div className="col-xl-6 col-lg-5 col-md-7 col-sm-12">
                                    <div className="footer-copyright__brand">
                                        <img src="/assets/img/footer/f-brand-icon-01.png" alt="footer-brand" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    )
}
