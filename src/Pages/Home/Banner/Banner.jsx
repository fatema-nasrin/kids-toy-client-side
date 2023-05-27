const Banner = () => {
  return (
    <div
      className="hero lg:min-h-screen"
      style={{
        backgroundImage: `url("https://t4.ftcdn.net/jpg/03/11/26/27/240_F_311262728_8nh4mHiqUPFPHNsEIJzM41OODvm6xBdw.webp")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md"data-aos="fade-right"
     data-aos-offset="300"
     data-aos-easing="ease-in-sine">
          <h1 className="mb-5 text-5xl font-bold" >𝔼𝕞𝕓𝕒𝕣𝕜</h1>
          <p className="mb-5">
            Unleash the magic of music with our extraordinary collection of
            musical toys – where endless melodies and boundless imagination
            harmonize in perfect harmony.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
