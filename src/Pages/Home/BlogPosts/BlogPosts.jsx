import MusicalEducationResources from "../MusicalEducationResources/MusicalEducationResources";

const BlogPosts = () => {
  const blogPosts = [
    {
      title: "The Benefits of Music Education for Children",
      excerpt:
        "Discover how music education positively impacts children's cognitive development,",
      imageUrl:
        "https://archive.shine.cn/newsimage/2016/04/25/020160425221955.jpg",
      url: "https://www.connectionsacademy.com/support/resources/article/the-benefits-of-music-education-for-children/",
    },
    {
      title: "Exploring Different Types of Musical Instruments",
      excerpt:
        "Learn about the various types of musical instruments and find out which one might be ",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM3rzudFIe8YEWm4KvooohOX-cv1Qd8b_8vGH5x5UF9eRGLTWsBgb2dWVUpaEuaS2qXq0&usqp=CAU",
      url: "https://byjus.com/english/musical-instruments-names/",
    },
    {
      title: "How to Foster a Love for Music in Your Child",
      excerpt:
        "Discover practical tips and strategies for nurturing a passion for music in your ",
      imageUrl:
        "https://kidscareclub.com/wp-content/uploads/2022/11/iStock-1398609726.jpg",
      url: "https://thenewageparents.com/how-to-cultivate-the-gift-of-music-in-your-child/#:~:text=Finding%20an%20engaging%20teacher%2C%20regular,music%20camps%20or%20music%20concerts.",
    },
    {
      title: "The Power of Music in Emotional Expression",
      excerpt:
        "Explore how music can be a powerful tool for emotional expression and ",
      imageUrl:
        "https://ecdn.teacherspayteachers.com/thumbitem/Social-Emotional-Learning-Bundle-Character-Education-SEL-Elementary-Music-8659662-1680255381/original-8659662-1.jpg",
      url: "https://www.teacherspayteachers.com/Browse/Search:music%20and%20emotions",
    },
    {
      title: "Music Games for Kids: Fun and Educational Activities",
      excerpt:
        "Discover engaging music games and activities that can help your child learn and enjoy",
      imageUrl:
        "https://www.momjunction.com/wp-content/uploads/2016/01/Easy-Music-Games-For-Children.jpg",
      url: "https://www.momjunction.com/articles/music-games-activities-for-kids_00387016/",
    },
    {
      title: "The Role of Music in Brain Development",
      excerpt:
        "Learn how music can influence brain development in children and enhance cognitive abilities",
      imageUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTabcIZyOyREpe8u88MDQU6GBMz-HlnNuJtX2ggw6uZIpqyojlXjfkPnsZTTb5paX_-5w&usqp=CAU",
      url: "https://shemarookids.wordpress.com/2016/01/22/music-helps-brain-development/",
    },
  ];

  return (
    <section className="container py-10 grid lg:grid-flow-col-dense mx-auto my-16" >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <a
              key={post.title}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-40 object-cover" 
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-700">
                  {post.excerpt}{" "}
                  <span className="text-blue-500 font-medium">
                    read More...
                  </span>{" "}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <MusicalEducationResources />
    </section>
  );
};

export default BlogPosts;
