import { Header } from "../components/Header";
import { Grid } from "../components/Grid";
import { PhotoGrid } from "../components/PhotoGrid";
import { Testimonials } from "../components/Testimonials";
import { Footer } from "../components/Footer";
import { Banner } from "../components/Banner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Grid />
      <Testimonials />
      <PhotoGrid />
      <Footer />
    </>
  );
}

export default Home;
