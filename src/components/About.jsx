import FadeIn from "./FadeIn.jsx";

const About = ({ isNavOpen }) => {
  return (
    <section
      id="about"
      className={`w-full ${
        isNavOpen ? "min-h-[calc(100vh-80px)]" : "min-h-screen"
      } bg-[#0a192f] text-gray-300 flex items-center justify-center`}
      aria-labelledby="about-heading"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen md:max-w-[700px] xl:max-w-[1200px] md:mx-auto px-6">

        {/* Section Heading */}
        <header className="w-full mb-4 lg:mb-6">
          <FadeIn>
            <h2
              id="about-heading"
              className="text-left text-xl md:text-2xl xl:text-3xl font-bold inline border-b-2 border-blue-600"
            >
              About Me
            </h2>
          </FadeIn>
        </header>

        {/* About Content */}
        <div className="max-w-[1000px] xl:max-w-[1200px] w-full grid grid-cols-1 gap-8">
          {[
            "After a professional sports career spanning over 20 years in tennis — as a player, coach, and club manager — around three years ago I had the opportunity to fully dedicate myself to something I had long wanted to pursue: web development and data analytics.",

            "Through vocational training programs supported by the German Federal Employment Agency, I built a strong foundation in modern frontend development and structured data analysis.",

            "My primary focus is frontend development with React, where I build clean, responsive, and user-centered interfaces. I care deeply about usability and creating intuitive digital experiences.",

            "Alongside frontend development, I specialize in SQL and Power BI — querying, cleaning, and analyzing data, and transforming it into clear dashboards and actionable insights.",

            "I’m particularly interested in the intersection of data and design: using analytics to improve user experience, and using thoughtful UI to make complex data understandable."
          ].map((text, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <p className="text-left text-sm md:text-base xl:text-xl mb-1 text-text-primary">
                {text}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
