import CartShow from "@/components/elements/CartShow"
import WishListShow from "@/components/elements/WishListShow"
import Link from "next/link"
import HeaderMobSticky from "../HeaderMobSticky"
import HeaderSticky from "../HeaderSticky"
import HeaderTabSticky from "../HeaderTabSticky"

export default function Header2({ scroll, isMobileMenu, handleMobileMenu, isCartSidebar, handleCartSidebar }) {
    return (
      <>
        <header>
          <div className="header-top space-bg">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-xl-8 col-lg-12 col-md-12">
                  <div className="header-welcome-text ">
                    <span>
                      ¡Bienvenido a nuestra tienda internacional! Disfruta del envío gratis en pedidos desde $100.
                    </span>
                    <Link href="/shop">
                      Compra ahora!
                      <i className="fal fa-long-arrow-right" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-4 d-none d-xl-block">
                  <div className="headertoplag d-flex align-items-center justify-content-end">
                    <div className="headertoplag__lang">
                      <ul>
                        <li>
                          <Link href="#">
                            Español
                            <span>
                              <i className="fal fa-angle-down" />
                            </span>
                          </Link>
                          <ul className="header-meta__lang-submenu">
                            <li>
                              <Link href="#">Arabic</Link>
                            </li>
                            <li>
                              <Link href="#">English</Link>
                            </li>
                            <li>
                              <Link href="#">Mandarin</Link>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                    <div className="menu-top-social">
                      <Link href="#">
                        <i className="fab fa-facebook-f" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-twitter" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-behance" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-youtube" />
                      </Link>
                      <Link href="#">
                        <i className="fab fa-linkedin" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mainmenuarea d-none d-xl-block">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-9">
                  <div className="mainmenu d-flex align-items-center">
                    <div className="mainmenu__search">
                      <form action="#">
                        <div className="mainmenu__search-bar p-relative">
                          <button className="mainmenu__search-icon">
                            <i className="fal fa-search" />
                          </button>
                          <input
                            type="text"
                            placeholder="Buscar productos..."
                          />
                        </div>
                      </form>
                    </div>
                    <div className="mainmenu__main d-flex align-items-center p-relative">
                      <div className="main-menu">
                        <nav id="mobile-menu">
                          <ul>
                            <li className="has-dropdown">
                              <Link href="/">Inicio</Link>
                              <ul className="submenu">
                                <li>
                                  <Link href="/">Decoraciones en madera</Link>
                                </li>
                                <li>
                                  <Link href="/index-2">
                                    Accesorios lujosos
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/index-3">Muebles para el hogar</Link>
                                </li>
                                <li>
                                  <Link href="/index-4">
                                    Cosmeticos el hogar
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/index-5">Para comidas</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/shop">Tienda</Link>
                              <ul className="submenu">
                                <li>
                                  <Link href="/shop">Tienda</Link>
                                </li>
                                <li>
                                  <Link href="/shop-2">Tienda 2</Link>
                                </li>
                                <li>
                                  <Link href="/shop-details">Detalles de tienda{" "}
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop-details-2">Detalles de tienda 2
                                  </Link>
                                </li>
                                <li>
                                  <Link href="/shop-location">Ubicacion de la tienda</Link>
                                </li>
                                <li>
                                  <Link href="/cart">Carrito</Link>
                                </li>
                                <li>
                                  <Link href="/sign-in">Inicia Sesión</Link>
                                </li>
                                <li>
                                  <Link href="/checkout">Finalizar compra</Link>
                                </li>
                                <li>
                                  <Link href="/wishlist">Lista de deseos</Link>
                                </li>
                                <li>
                                  <Link href="/track">Seguimiento de producto</Link>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown has-megamenu">
                              <Link href="/about">Pagina</Link>
                              <ul className="submenu mega-menu">
                                <li>
                                  <a className="mega-menu-title">Diseño de Página</a>
                                  <ul>
                                    <li>
                                      <Link href="/shop">Filtros de tienda v1</Link>
                                    </li>
                                    <li>
                                      <Link href="/shop-2">Filtros de tienda v2</Link>
                                    </li>
                                    <li>
                                      <Link href="/shop-details">Barra lateral de la tienda</Link>
                                    </li>
                                    <li>
                                      <Link href="/shop-details-2">Barra lateral derecha</Link>
                                    </li>
                                    <li>
                                      <Link href="/shop-location">Lista de visualizaciones de la tienda</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a className="mega-menu-title">Diseño de Página</a>
                                  <ul>
                                    <li>
                                      <Link href="/about">Acerca de</Link>
                                    </li>
                                    <li>
                                      <Link href="/cart">Carrito</Link>
                                    </li>
                                    <li>
                                      <Link href="/checkout">Finalizar compra</Link>
                                    </li>
                                    <li>
                                      <Link href="/sign-in">Regístrate</Link>
                                    </li>
                                    <li>
                                      <Link href="/sign-in">Inicia Sesión</Link>
                                    </li>
                                  </ul>
                                </li>
                                <li>
                                  <a className="mega-menu-title">Tipo de Pagina</a>
                                  <ul>
                                    <li>
                                      <Link href="/track">Seguimiento del producto</Link>
                                    </li>
                                    <li>
                                      <Link href="/wishlist">Lista de Deseos</Link>
                                    </li>
                                    <li>
                                      <Link href="/not-found">404 / Error</Link>
                                    </li>
                                    <li>
                                      <Link href="/coming-soon">
                                        Coming Soon
                                      </Link>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                            </li>
                            <li className="has-dropdown">
                              <Link href="/blog">Blog</Link>
                              <ul className="submenu">
                                <li>
                                  <Link href="/blog">Blog</Link>
                                </li>
                                <li>
                                  <Link href="/blog-details">Detalles del blog</Link>
                                </li>
                              </ul>
                            </li>
                            <li>
                              <Link href="/contact">Contacto</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      <div className="mainmenu__logo">
                        <Link href="/">
                          <img src="/assets/img/logo/logo.png" alt="" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-3 col-lg-3">
                  <div className="header-meta d-flex align-items-center justify-content-end">
                    <div className="header-meta__value mr-15">
                      <select>
                        <option>USD</option>
                        <option>YEAN</option>
                        <option>EURO</option>
                      </select>
                    </div>
                    <div className="header-meta__social d-flex align-items-center ml-25">
                      <button
                        className="header-cart p-relative tp-cart-toggle"
                        onClick={handleCartSidebar}
                      >
                        <i className="fal fa-shopping-cart" />
                        <CartShow />
                      </button>
                      <Link href="/sign-in">
                        <i className="fal fa-user" />
                      </Link>
                      <Link
                        href="/wishlist"
                        className="header-cart p-relative tp-cart-toggle"
                      >
                        <i className="fal fa-heart" />
                        <WishListShow />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <HeaderSticky
          scroll={scroll}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
        <HeaderTabSticky
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
        <HeaderMobSticky
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
          isCartSidebar={isCartSidebar}
          handleCartSidebar={handleCartSidebar}
        />
      </>
    );
}
