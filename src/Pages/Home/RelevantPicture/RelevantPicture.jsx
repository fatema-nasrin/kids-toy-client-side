import Marquee from "react-fast-marquee";

const RelevantPicture = () => {
  return (
    <div className="my-16 text-center text-black container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-5xl">Some Of Our Collections!</h1>
      <p className=" text-xl mx-10 my-4">
        Our extraordinary gallery is a treasure trove of vibrant and playful
        musical instruments that will ignite your child's imagination and
        creativity. Explore an enchanting assortment of colorful guitars,
        whimsical xylophones, cheerful drums, and more. Each instrument is like
        a magical companion, ready to bring joy and laughter through delightful
        melodies. Let your little ones embark on a musical adventure,
        discovering the rhythm and harmony that fills the air. With every
        instrument they encounter, they'll unlock a world of musical
        possibilities and unlock their inner superstar. Come and join the
        musical fun in our captivating gallery, where the power of music and the
        joy of play come together in perfect harmony!
      </p>
      <Marquee>
        <div className="gap-10 flex">
          <div className="card rounded-xl w-96 bg-base-100 shadow-slate-400">
            <img
              src="https://i.etsystatic.com/36331234/c/2000/2000/0/0/il/0f7452/4177424025/il_300x300.4177424025_47xu.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/18840488/c/3000/3000/0/0/il/29f18a/3994474605/il_300x300.3994474605_24op.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96  bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/19202290/r/il/bcb54b/2012215768/il_300x300.2012215768_rlje.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/35875603/c/733/733/40/67/il/a712f5/3957759452/il_300x300.3957759452_dzzo.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/18090643/r/il/91ba26/1690502491/il_300x300.1690502491_jea6.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/18856482/r/il/d41b07/3633028003/il_300x300.3633028003_kbkx.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/38140072/r/il/34bc62/4920129242/il_300x300.4920129242_2pri.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/30564155/r/il/0e444e/3431102435/il_300x300.3431102435_4m7b.jpg"
              alt=""
              className="rounded-xl"
            />
          </div>
          <div className="card rounded-xl w-96 bg-base-100 shadow-xl">
            <img
              src="https://i.etsystatic.com/17970358/r/il/710a5b/3790511267/il_300x300.3790511267_eu63.jpg"
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
