const MusicalEducationResources = () => {
  const resources = [
    {
      title: "The Cognitive Benefits of Music Education",
      type: "Article",
      url: "https://degree.lamar.edu/online-programs/education/master-music-education/music-education-matters-to-cognitive-development/#:~:text=Music%20education%20boosts%20fine%20motor,and%20fosters%20superior%20thinking%20skills.",
    },
    {
      title: "The Impact of Music on Child Development",
      type: "Video",
      url: "https://youtu.be/R0JKCYZ8hng",
    },
    {
      title: "Video: Why Music Education Matters for Kids",
      type: "Video",
      url: "https://youtu.be/kr-9ybV7iOc",
    },
    {
      title: "Choosing the Right Musical Instrument for Your Child",
      type: "Article",
      url: "https://www.nammfoundation.org/articles/2020-03-11/top-10-instruments-children-learn-play-music",
    },
  ];

  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" >
        {/* <h2 className="text-3xl font-semibold text-center mb-8">Musical Education Resources</h2> */}
        <div className="flex flex-col gap-4">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg overflow-hidden shadow-lg p-6 flex flex-col justify-between"
            >
              <div >
                <h3 className="text-lg font-semibold mb-2">{resource.title}</h3>
                <p className="text-gray-700 mb-4">Type: {resource.type}</p>
              </div>
              <p className="text-blue-500 font-medium">Read More</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MusicalEducationResources;
