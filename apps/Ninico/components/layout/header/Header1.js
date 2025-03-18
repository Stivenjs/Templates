'use client'
import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import { useState } from "react"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"


export default function Header1({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    const [isToggled, setToggled] = useState(true)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <header>
                <div className="header-top space-bg">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-welcome-text text-start ">
                                    <span>¡Bienvenido a nuestra tienda internacional! Disfruta del envío gratis en pedidos desde $100.</span>
                                    <Link href="/shop"> Compra ahora <i className="fal fa-long-arrow-right" /> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="logo-area mt-30 d-none d-xl-block">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-xl-2 col-lg-3">
                                <div className="logo">
                                    <Link href="/"><img src="/assets/img/logo/logo.png" alt="logo" /></Link>
                                </div>
                            </div>
                            <div className="col-xl-10 col-lg-9">
                                <div className="header-meta-info d-flex align-items-center justify-content-between">
                                    <div className="header-search-bar">
                                        <form action="#">
                                            <div className="search-info p-relative">
                                                <button className="header-search-icon"><i className="fal fa-search" /></button>
                                                <input type="text" placeholder="Buscar productos..." />
                                            </div>
                                        </form>
                                    </div>
                                    <div className="header-meta header-brand d-flex align-items-center">
                                        <div className="header-meta__lang">
                                            <ul>
                                                <li>
                                                    <Link href="#">
                                                        <img src="/assets/img/icon/lang-flag.png" alt="flag" />Español
                                                        <span><i className="fal fa-angle-down" /></span>
                                                    </Link>
                                                    <ul className="header-meta__lang-submenu">

                                                        <li>
                                                            <Link href="#">English</Link>
                                                        </li>

                                                    </ul>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="header-meta__value mr-15">
                                            <select>
                                                <option>USD</option>
                                                <option>YEAN</option>
                                                <option>EURO</option>
                                            </select>
                                        </div>
                                        <div className="header-meta__social d-flex align-items-center ml-25">
                                            <button className="header-cart p-relative tp-cart-toggle" onClick={handleCartSidebar}>
                                                <i className="fal fa-shopping-cart" />
                                                <CartShow />
                                            </button>
                                            <Link href="/sign-in"><i className="fal fa-user" /></Link>
                                            <Link href="/wishlist" className="header-cart p-relative tp-cart-toggle">
                                                <i className="fal fa-heart" />
                                                <WishListShow />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="main-menu-area mt-20 d-none d-xl-block">
                    <div className="for-megamenu p-relative">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-xl-2 col-lg-3">
                                    <div className="cat-menu__category p-relative">
                                        <a className="tp-cat-toggle" onClick={handleToggle} role="button"><i className="fal fa-bars" />Categorias</a>
                                        <div className="category-menu category-menu-off" style={{ display: `${isToggled ? "block" : "none"}` }}>
                                            <ul className="cat-menu__list">
                                                <li><Link href="/shop"><i className="fal fa-user" />Inicio</Link></li>
                                                <li className="menu-item-has-children"><Link href="/shop"><i className="fal fa-flower-tulip" /> Artesanías</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop-2">Sillas</Link></li>
                                                        <li><Link href="/shop-2">Mesas</Link></li>
                                                        <li><Link href="/shop">Madera</Link></li>
                                                        <li><Link href="/shop">Muebles</Link></li>
                                                        <li><Link href="/shop">Relojes</Link></li>
                                                        <li><Link href="/shop">Regalos</Link></li>
                                                        <li><Link href="/shop">Manualidades</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/shop"><i className="fal fa-shoe-prints" /> Regalos</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-smile" /> Regalos plasticos</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-futbol" /> Cosas practicas</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-crown" /> Cosméticos</Link></li>
                                                <li><Link href="/shop"><i className="fal fa-gift" /> Pequeños accesorios</Link></li>
                                            </ul>
                                            <div className="daily-offer">
                                                <ul>
                                                    <li><Link href="/shop">Oferta del dia</Link></li>
                                                    <li><Link href="/shop">100 Mejores ofertas</Link></li>
                                                    <li><Link href="/shop">Nuevos productos</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6">
                                    <div className="main-menu">
                                        <nav id="mobile-menu">
                                            <ul>
                                                <li className="has-dropdown">
                                                    <Link href="/">Inicio</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/">Decoraciones en madera</Link></li>
                                                        <li><Link href="/index-2">Accesorios lujosos</Link></li>
                                                        <li><Link href="/index-3">Muebles para el hogar</Link></li>
                                                        <li><Link href="/index-4">Cosmeticos el hogar</Link></li>
                                                        <li><Link href="/index-5">Para comidas</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/shop">Tienda</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/shop">Tienda</Link></li>
                                                        <li><Link href="/shop-2">Tienda 2</Link></li>
                                                        <li><Link href="/shop-details">Detalles de tienda</Link></li>
                                                        <li><Link href="/shop-details-2">Detalles de tienda 2</Link></li>
                                                        <li><Link href="/shop-location">Ubicacion de la tienda</Link></li>
                                                        <li><Link href="/cart">Carrito</Link></li>
                                                        <li><Link href="/sign-in">Inicia Sesión</Link></li>
                                                        <li><Link href="/checkout">Finalizar compra</Link></li>
                                                        <li><Link href="/wishlist">Lista de deseos</Link></li>
                                                        <li><Link href="/track">Seguimiento de producto</Link></li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown has-megamenu">
                                                    <Link href="/about">Pagina</Link>
                                                    <ul className="submenu mega-menu">
                                                        <li>
                                                            <a className="mega-menu-title">Diseño de Página</a>
                                                            <ul>
                                                                <li><Link href="/shop">Filtros de tienda v1</Link></li>
                                                                <li><Link href="/shop-2">Filtros de tienda v2</Link></li>
                                                                <li><Link href="/shop-details">Barra lateral de la tienda</Link></li>
                                                                <li><Link href="/shop-details-2">Barra lateral derecha</Link></li>
                                                                <li><Link href="/shop-location">Lista de visualizaciones de la tienda</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Diseño de Página</a>
                                                            <ul>
                                                                <li><Link href="/about">Acerca de</Link></li>
                                                                <li><Link href="/cart">Carrito</Link></li>
                                                                <li><Link href="/checkout">Finalizar compra</Link></li>
                                                                <li><Link href="/sign-in">Regístrate</Link></li>
                                                                <li><Link href="/sign-in">Inicia Sesión</Link></li>
                                                            </ul>
                                                        </li>
                                                        <li>
                                                            <a className="mega-menu-title">Tipo de Pagina</a>
                                                            <ul>
                                                                <li><Link href="/track">Seguimiento del producto</Link></li>
                                                                <li><Link href="/wishlist">Lista de Deseos</Link></li>
                                                                <li><Link href="/not-found">404 / Error</Link></li>
                                                                <li><Link href="/coming-soon">Coming Soon</Link></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </li>
                                                <li className="has-dropdown">
                                                    <Link href="/blog">Blog</Link>
                                                    <ul className="submenu">
                                                        <li><Link href="/blog">Blog</Link></li>
                                                        <li><Link href="/blog-details">Detalles del blog</Link></li>
                                                    </ul>
                                                </li>
                                                <li><Link href="/contact">Contacto</Link></li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-3">
                                    <div className="menu-contact">
                                        <ul>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        <i className="fal fa-phone" />
                                                    </div>
                                                    <div className="menu-contact__info">
                                                        <Link href="/tel:0123456">300656565</Link>
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="menu-contact__item">
                                                    <div className="menu-contact__icon">
                                                        <i className="fal fa-map-marker-alt" />
                                                    </div>
                                                    <div className="menu-contact__info">
                                                        <Link href="/shop-location">Encuentra la tienda</Link>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <HeaderSticky scroll={scroll} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderTabSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
            <HeaderMobSticky scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isCartSidebar={isCartSidebar} handleCartSidebar={handleCartSidebar} />
        </>
    )
}
