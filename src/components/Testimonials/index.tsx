import { ClientTestimonial } from "./ClientTestimonial";

import emilyImg from "/public/images/image-emily.jpg";
import thomasImg from "/public/images/image-thomas.jpg";
import jennieImg from "/public/images/image-jennie.jpg";

import styles from "./Testimonials.module.scss";

export function Testimonials() {
  return (
    <section className={styles.container}>
      <h4>CLIENT TESTIMONIALS</h4>

      <div className={styles.clients}>
        <ClientTestimonial
          image={{ src: emilyImg, alt: "Emily, marketing director" }}
        >
          <p>
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and deadlines were always hit.
          </p>
          <h5>Emily R.</h5>
          <span>Marketing Director</span>
        </ClientTestimonial>
        <ClientTestimonial
          image={{ src: thomasImg, alt: "Thomas, chief operating officer" }}
        >
          <p>
            Sunnyside&lsquo;s enthisiasm coupled with their keen interest in our
            brand&lsquo;s success made it a satisfying and enjoyable experience.
          </p>
          <h5>Thomas S.</h5>
          <span>Chief Operating Officer</span>
        </ClientTestimonial>
        <ClientTestimonial
          image={{ src: jennieImg, alt: "Jennie, business owner" }}
        >
          <p>
            Incredible end result! Our sales increased over 400% when we worked
            with Sunnyside. Highly recommended!
          </p>
          <h5>Jennie F.</h5>
          <span>Business Owner</span>
        </ClientTestimonial>
      </div>
    </section>
  );
}
