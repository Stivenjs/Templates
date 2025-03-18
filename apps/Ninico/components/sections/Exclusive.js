import Link from "next/link";

export default function Exclusive() {
  return (
    <>
      <section className="exclusive-area pb-65">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-8">
              <div className="exclusiveitem banner-animation p-relative mb-30">
                <div className="exclusiveitem__thumb">
                  <img src="/assets/img/banner/banner-offer-01.jpg" alt="" />
                </div>
                <div className="tpexclusive__content">
                  <h4 className="tpexclusive__subtitle">Colección de</h4>
                  <h3 className="tpexclusive__title mb-30">
                    Invierno <br /> Exclusivo aquí
                  </h3>
                  <div className="tpexclusive__btn">
                    <Link href="/shop" className="tp-btn banner-animation">
                      Comprar Ahora
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="exclusivearea banner-animation p-relative mb-30">
                <div className="exclusivearea__thumb">
                  <img src="/assets/img/banner/banner-offer-02.jpg" alt="" />
                </div>
                <div className="tpexclusive__contentarea text-center">
                  <h4 className="tpexclusive__subtitle subcolor">Descuentos</h4>
                  <h3 className="tpexclusive__title mb-10">Ofertas del 50%</h3>
                  <p>
                    Soporte para ropa masculina <br /> moderna, y a la moda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
