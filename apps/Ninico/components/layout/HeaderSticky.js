import Link from "next/link"
import CartShow from "../elements/CartShow"
import WishListShow from "../elements/WishListShow"

export default function HeaderSticky({ scroll, isCartSidebar, handleCartSidebar }) {
    return (
      <>
        <div
          id="header-sticky"
          className={`logo-area tp-sticky-one mainmenu-5 ${
            scroll ? "header-sticky" : ""
          }`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xl-2 col-lg-3">
                <div className="logo">
                  <Link href="/">
                    <img src="/assets/img/logo/logo.png" alt="logo" />
                  </Link>
                </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                <div className="main-menu">
                  <nav>
                    <ul>
                      <li className="has-dropdown">
                        <Link href="/">Inicio</Link>
                        <ul className="submenu">
                          <li>
                            <Link href="/">Decoraciones en madera</Link>
                          </li>
                          <li>
                            <Link href="/index-2">Accesorios lujosos</Link>
                          </li>
                          <li>
                            <Link href="/index-3">Casa Amoblada</Link>
                          </li>
                          <li>
                            <Link href="/index-4">Cosmeticos para casa</Link>
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
                            <Link href="/Tienda-2">Tienda 2</Link>
                          </li>
                          <li>
                            <Link href="/shop-details">
                              Detalles de tienda{" "}
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-details-2">
                              Detalles de tienda 2
                            </Link>
                          </li>
                          <li>
                            <Link href="/shop-location">
                              Ubicacion de la tienda
                            </Link>
                          </li>
                          <li>
                            <Link href="/cart">Carrito</Link>
                          </li>
                          <li>
                            <Link href="/sign-in">Inicia Sesión</Link>
                          </li>
                          <li>
                            <Link href="/checkout">Verificar</Link>
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
                        <Link href="/about">Paginas</Link>
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
                                <Link href="/shop-details">
                                  Barra lateral de la tienda
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-details-2">
                                  Barra lateral derecha
                                </Link>
                              </li>
                              <li>
                                <Link href="/shop-location">
                                  Lista de visualizaciones de la tienda
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li>
                            <a className="mega-menu-title">Diseño de Página</a>
                            <ul>
                              <li>
                                <Link href="/about">Sobre</Link>
                              </li>
                              <li>
                                <Link href="/cart">Carrito</Link>
                              </li>
                              <li>
                                <Link href="/checkout">Pagar</Link>
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
                                <Link href="/track">
                                  Seguimiento del producto
                                </Link>
                              </li>
                              <li>
                                <Link href="/wishlist">Lista de Deseos</Link>
                              </li>
                              <li>
                                <Link href="/not-found">404 / Error</Link>
                              </li>
                              <li>
                                <Link href="/coming-soon">Coming Soon</Link>
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
              </div>
              <div className="col-xl-4 col-lg-9">
                <div className="header-meta-info d-flex align-items-center justify-content-end">
                  <div className="header-meta__social  d-flex align-items-center">
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
                  <div className="header-meta__search-5 ml-25">
                    <div className="header-search-bar-5">
                      <form action="#">
                        <div className="search-info-5 p-relative">
                          <button className="header-search-icon-5">
                            <i className="fal fa-search" />
                          </button>
                          <input type="text" placeholder="Buscar productos..." />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}
