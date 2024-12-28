import Nav from "./components/Nav";
import { Hero, CustomerReviews, Footer, PopularProducts, Services, SpecialOffer, Subscribe, SuperQuality } from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />

      <section className="xl:padding-l wide:padding-r padding-b">
        <Hero />
      </section>

      {/* Popular Product Component */}
      <section className="padding">
        <PopularProducts />
      </section>

      {/* SuperQuality Component */}
      <section className="padding">
        <SuperQuality />
      </section>

      {/* Services Component */}
      <section className="padding-x py-10">
        <Services />
      </section>

      {/* SpecialOffer Component */}
      <section className="padding">
        <SpecialOffer />
      </section>

      {/* CustomerReviews Component */}
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>

      {/* Subscribe Component */}
      <section className="padding-x sm:py-32 w-full py-16">
        <Subscribe />
      </section>

      {/* Footer Component */}
      <section className="bg-black padding-x padding-t pb-8" >
        <Footer />
      </section>
    </main>
  );
};

export default App;
