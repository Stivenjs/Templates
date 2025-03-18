
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function SignIn() {

    return (
        <>
            <Layout headerStyle={3} footerStyle={1} breadcrumbTitle="Iniciar Sesión">
                <section className="track-area pt-80 pb-40">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6 col-sm-12">
                                <div className="tptrack__product mb-40">
                                    <div className="tptrack__thumb">
                                        <img src="/assets/img/banner/login-bg.jpg" alt="" />
                                    </div>
                                    <div className="tptrack__content grey-bg-3">
                                        <div className="tptrack__item d-flex mb-20">
                                            <div className="tptrack__item-icon">
                                                <img src="/assets/img/icon/lock.png" alt="" />
                                            </div>
                                            <div className="tptrack__item-content">
                                                <h4 className="tptrack__item-title">Inicia sesión</h4>
                                                <p>Tus datos personales se utilizarán para mejorar tu experiencia en este sitio web y para gestionar el acceso a tu cuenta.</p>
                                            </div>
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-user" /></span>
                                                <input type="email" placeholder="Nombre de usuario / Correo electrónico" />
                                            </form>
                                        </div>
                                        <div className="tptrack__email mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-key" /></span>
                                                <input type="text" placeholder="Contraseña" />
                                            </form>
                                        </div>
                                        <div className="tpsign__remember d-flex align-items-center justify-content-between mb-15">
                                            <div className="form-check">
                                                <input className="form-check-input" type="checkbox" id="flexCheckDefault" />
                                                <label className="form-check-label" htmlFor="flexCheckDefault">Recuérdame en este dispositivo.</label>
                                            </div>
                                            <div className="tpsign__pass">
                                                <Link href="#">Olvidé la contraseña.</Link>
                                            </div>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button className="tptrack__submition">Iniciar Sesión<i className="fal fa-long-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="tptrack__product mb-40">
                                    <div className="tptrack__thumb">
                                        <img src="/assets/img/banner/sign-bg.jpg" alt="" />
                                    </div>
                                    <div className="tptrack__content grey-bg-3">
                                        <div className="tptrack__item d-flex mb-20">
                                            <div className="tptrack__item-icon">
                                                <img src="/assets/img/icon/sign-up.png" alt="" />
                                            </div>
                                            <div className="tptrack__item-content">
                                                <h4 className="tptrack__item-title">Regístrate</h4>
                                                <p>Tus datos personales se utilizarán para mejorar tu experiencia en este sitio web y para gestionar el acceso a tu cuenta.</p>
                                            </div>
                                        </div>
                                        <div className="tptrack__id mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-envelope" /></span>
                                                <input type="email" placeholder="Correo Electrónico" />
                                            </form>
                                        </div>
                                        <div className="tptrack__email mb-10">
                                            <form action="#">
                                                <span><i className="fal fa-key" /></span>
                                                <input type="text" placeholder="Contraseña" />
                                            </form>
                                        </div>
                                        <div className="tpsign__account">
                                            <Link href="#">¿Ya tienes cuenta?</Link>
                                        </div>
                                        <div className="tptrack__btn">
                                            <button className="tptrack__submition tpsign__reg">Regístrate Ahora!<i className="fal fa-long-arrow-right" /></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </Layout>
        </>
    )
}