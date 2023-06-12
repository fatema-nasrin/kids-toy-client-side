const Banner = () => {
  return (
    <div
      className="hero lg:min-h-screen"
      style={{
        backgroundImage: `url("https://bdeduarticle.com/wp-content/uploads/Kindergarten.jpg")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-left text-neutral-content">
        <div className="max-w-md"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="mb-5 text-5xl font-bold" >Welcome!</h1>
          <p className="mb-5">
            Unleash the magic of your child happiness with our extraordinary collection of
           toys – where endless melodies and boundless imagination
            harmonize in perfect harmony.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
