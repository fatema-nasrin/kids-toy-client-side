import Marquee from "react-fast-marquee";

const RelevantPicture = () => {
  return (
    <div className="my-16 text-center text-black container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl">Some Of Our Collections!</h1>
      <p className=" text-xl mx-10 my-4">
      At FunPlay Toys, we believe that playtime is essential for a child's growth and development. That's why we offer an extensive range of toys carefully selected to spark creativity, imagination, and learning. From classic favorites to the latest trends, our collection encompasses a diverse array of toys that cater to every interest and preference.
      </p>
      <Marquee>
        <div className="gap-10 flex">
          <div className="card rounded-xl w-96 bg-base-100 shadow-slate-400">
            <img
              src="https://static-01.daraz.com.bd/p/0d23cbad4abc3b891ca29d1c412089c0.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/2bd261d220d8e265e16f10fb5b082a00.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96  bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/c77f6ac2d633352a3e8bef1c2c584a45.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/018101c3990fd9e3bd020adf60195fa5.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/9e40596b5385a20e9c20b481eb5dd364.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/bb1a542fe5724549fc4f650e644d39a2.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/f92d7f49dc3772c946f0ae9850ae7dec.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/42613cb980f89a0d90b18c98c5d3db36.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 overflow-hidden bg-base-100 shadow-xl">
            <img
              src="https://static-01.daraz.com.bd/p/3e8d20734f25d258100c2b2c3049410e.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <br />
        </div>
      </Marquee>
    </div>
  );
};

export default RelevantPicture;
