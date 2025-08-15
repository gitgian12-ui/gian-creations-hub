import { Code2, Palette, Zap, Heart } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Web Development",
      description: "Creating modern websites with multiple technologies"
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Creative Design",
      description: "UI/UX principles with colorful and playful styles"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Adaptation",
      description: "Fast learner with problem-solving mindset"
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Passionate",
      description: "Love for coding and creative challenges"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A young, ambitious developer with a passion for creating beautiful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <div className="space-y-6">
            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">My Story</h3>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Hi! I'm Gian Christo Yuhendi, a 14-year-old passionate web developer from 
                  Tarakan, North Kalimantan, Indonesia. Born on November 28, 2011, I discovered 
                  my love for coding at a young age and have been creating websites ever since.
                </p>
                <p>
                  I specialize in building modern, smooth, and visually appealing websites for 
                  various purposes including business landing pages, company profiles, portfolios, 
                  and service-based sites. My approach combines technical skills with creative 
                  design to deliver exceptional user experiences.
                </p>
                <p>
                  When I'm not coding, you'll find me on the badminton court practicing three 
                  times a week. I believe the discipline and strategic thinking from sports 
                  enhances my problem-solving abilities in programming.
                </p>
              </div>
            </div>

            <div className="card-elegant p-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">Goals & Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                My goal is to become a world-class web developer, creating innovative solutions 
                that make a positive impact. I'm ready to work with both local and international 
                clients, bringing creativity and technical excellence to every project.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="card-elegant p-6 text-center group"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">14</div>
            <p className="text-muted-foreground">Years Old</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">10+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gradient mb-2">3x</div>
            <p className="text-muted-foreground">Weekly Badminton</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;