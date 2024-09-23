/**
 * This code was generated by Builder.io.
 */
import React from "react";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/2b2a49c0f51916a92538b50fe8804cf3eacc04587347b6a6bdda005b5d202b55?placeholderIfAbsent=true&apiKey=b54505003cfa42f49d13ceb598b36320",
    title: "Create custom products",
    description:
      "Easily add your designs to a wide range of products using our free tools",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0830c78c08bb4788dcca957a43d0e15161f9dbb10afc1582f588210b282fbb0e?placeholderIfAbsent=true&apiKey=b54505003cfa42f49d13ceb598b36320",
    title: "Sell on your terms",
    description: "You choose the products, sale price, and where to sell",
  },
  {
    icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/39ced643406df800778d85ad45aa648a103dbfeda542660e1c5b09970d020982?placeholderIfAbsent=true&apiKey=b54505003cfa42f49d13ceb598b36320",
    title: "We handle fulfillment",
    description:
      "Once an order is placed, we automatically handle all the printing and delivery logistics",
  },
];

function HowItWorks() {
  return (
    <section className={styles.howItWorks}>
      <h2 className={styles.sectionTitle}>How It Works</h2>
      <div className={styles.stepsContainer}>
        {steps.map((step, index) => (
          <div key={index} className={styles.step}>
            <img src={step.icon} alt="" className={styles.icon} />
            <h3 className={styles.stepTitle}>{step.title}</h3>
            <p className={styles.stepDescription}>{step.description}</p>
          </div>
        ))}
      </div>
      <div className={styles.designToolsPromo}>
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a457158caf892431e894e5d77537364be8d61be199d776acbd73d333ce941878?placeholderIfAbsent=true&apiKey=b54505003cfa42f49d13ceb598b36320"
          alt="Design tools interface"
          className={styles.designToolsImage}
        />
        <div className={styles.designToolsContent}>
          <h3 className={styles.designToolsTitle}>
            Easily add your design to a wide range of products
          </h3>
          <p className={styles.designToolsDescription}>
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <a href="#" className={styles.allProductsLink}>
            All products
          </a>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
