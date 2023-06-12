const AboutUs = () => {
  return (
      <section className="bg-gray-100 py-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold mb-4">About Us</h2>
            <div className="grid lg:grid-cols-3 items-baseline gap-10">
            <div className="text-lg text-gray-700">
              Introducing our brand, Navigating through various categories, such as educational toys, building blocks, puzzles, action figures, dolls, board games, and more, is a breeze, ensuring a seamless and enjoyable shopping experience for both kids and parents.
            </div>
            <div className="text-lg text-gray-700 mt-4">
            Our products are sourced from reputable manufacturers known for their commitment to child safety, ensuring that parents can browse our website with confidence and peace of mind.
            </div>
            <div className="text-lg text-gray-700 mt-4">
            Toys goes beyond just selling toys. We strive to be a valuable resource for parents, offering informative blog posts, articles, and expert advice on various topics related to child development, playtime ideas, and nurturing creativity. We believe in the power of play to inspire, educate, and bring families together.
            </div>
            </div>
          </div>
        </div>
      </section>
    
  );
};

export default AboutUs;
