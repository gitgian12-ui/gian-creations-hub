import { Code, Database, Palette, Globe } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js"]
    },
    {
      title: "Backend Development", 
      icon: <Database className="w-6 h-6" />,
      skills: ["PHP", "Python", "Java", "C#", "C++", "Express.js", "MongoDB", "MySQL"]
    },
    {
      title: "Design & Tools",
      icon: <Palette className="w-6 h-6" />,
      skills: ["Canva", "UI/UX Design", "Responsive Design", "XAMPP"]
    },
    {
      title: "Specializations",
      icon: <Globe className="w-6 h-6" />,
      skills: ["Business Websites", "E-commerce", "Portfolio Sites", "QR Integration"]
    }
  ];

  const allSkills = [
    "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue.js", 
    "PHP", "Python", "Java", "C#", "C++", "Express.js",
    "MongoDB", "MySQL", "Canva", "UI/UX Design", "XAMPP"
  ];

  return (
    <section id="skills" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-1/3 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <div key={index} className="card-elegant p-6 text-center group">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/20 text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-tag">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* All Skills Cloud */}
        <div className="card-elegant p-8">
          <h3 className="text-2xl font-bold text-center mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {allSkills.map((skill, index) => (
              <span 
                key={index}
                className="skill-tag"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Special Skills */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Code className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Full-Stack Development</h4>
            <p className="text-muted-foreground text-sm">
              Complete web applications from frontend to backend
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Palette className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Creative Design</h4>
            <p className="text-muted-foreground text-sm">
              Beautiful, modern interfaces with smooth animations
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <Database className="w-8 h-8 text-primary" />
            </div>
            <h4 className="text-lg font-semibold mb-2">Database Management</h4>
            <p className="text-muted-foreground text-sm">
              Efficient data handling with MySQL and MongoDB
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;