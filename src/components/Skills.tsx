import { Card } from '@/components/ui/card';

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "JavaScript", "TypeScript", "SQL", "R", "Java", "C++"]
    },
    {
      title: "Libraries",
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "OpenCV", "Hugging Face"]
    },
    {
      title: "Frameworks",
      skills: ["React", "Next.js", "FastAPI", "Django", "Flask", "Streamlit", "Gradio"]
    },
    {
      title: "Machine Learning & AI",
      skills: ["Deep Learning", "Computer Vision", "NLP", "MLOps", "Time Series", "Reinforcement Learning"]
    },
    {
      title: "Data Visualization",
      skills: ["Matplotlib", "Seaborn", "Plotly", "Tableau", "Power BI", "D3.js"]
    },
    {
      title: "Other Tools",
      skills: ["Docker", "Git", "AWS", "GCP", "Jupyter", "VS Code", "Linux"]
    }
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Technical <span className="text-primary">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive toolkit for building intelligent solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="p-6 card-hover neon-border slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="skill-chip px-3 py-1 text-sm rounded-full transition-all duration-200 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;