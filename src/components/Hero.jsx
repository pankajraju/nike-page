const HeroSection = () => {
  return (
    <main className="Hero container">
      <div className="Hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="Hero-button">
          <button>Shop Now</button>
          <button className="secondary-button">Category</button>
        </div>
        <div className="shopping">
          <p>also available on </p>
          <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon_logo" />
            <img src="/images/flipkart.png" alt="flipkart_logo" />
          </div>
        </div>
      </div>
      <div className="Hero-images">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
};
export default HeroSection;
