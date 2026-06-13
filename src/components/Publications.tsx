import { ExternalLink, FileText, Calendar, Users, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Publications = () => {
  const publications = [
    {
      title: "A Clinically-Aligned Multi-Family Explainable AI Framework for Diabetic Retinopathy Detection on Fundus Images",
      authors: "Muhammad Ibrahim Qasmi, Aqib Rehman Pirzada, Saira Akram Mughal",
      date: "May 21, 2026",
      publisher: "Preprints.org",
      tags: ["Explainable AI", "Healthcare", "Deep Learning", "DenseNet121"],
      description:
        "DenseNet121-based binary classifier trained on 3,662 APTOS 2019 retinal fundus images, achieving 95.45% test accuracy and 0.9881 AUC-ROC. Benchmarks six XAI techniques (Occlusion Sensitivity, LIME, RISE, Integrated Gradients, Grad-CAM++, Score-CAM) for clinically meaningful explanations.",
      link: "https://www.preprints.org/manuscript/202605.1128",
    },
    {
      title: "Exploiting Frozen Self-Supervised Features for Copy-Move Forgery Localisation in Biomedical Research Images",
      authors: "Muhammad Ibrahim Qasmi",
      date: "May 2026",
      publisher: "Preprints.org",
      tags: ["Self-Supervised Learning", "Image Forensics", "Biomedical AI"],
      description:
        "A novel approach leveraging frozen self-supervised feature representations to detect and localise copy-move forgery in biomedical research imagery — addressing research integrity at scale.",
      link: "https://www.preprints.org/manuscript/202605.0174",
    },
  ];

  return (
    <section id="publications" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-4">
              <BookOpen className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Research</span>
            </div>
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Published <span className="text-primary">Papers</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
              Selected peer-style preprints in Explainable AI and Biomedical Image Forensics.
              More work is currently in progress and under review.
            </p>
          </div>

          {/* Publications Grid */}
          <div className="grid md:grid-cols-2 gap-6 slide-up">
            {publications.map((pub, idx) => (
              <Card
                key={idx}
                className="p-6 neon-border card-hover flex flex-col h-full group"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <FileText className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 text-xs text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {pub.date}
                      </span>
                      <span>•</span>
                      <span className="text-primary font-medium">{pub.publisher}</span>
                    </div>
                    <h3 className="font-playfair text-lg md:text-xl font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                  </div>
                </div>

                <div className="flex items-start gap-2 text-sm text-muted-foreground mb-3">
                  <Users className="h-4 w-4 mt-0.5 shrink-0 text-primary/70" />
                  <span>{pub.authors}</span>
                </div>

                <p className="text-sm text-muted-foreground/90 leading-relaxed mb-4 flex-1">
                  {pub.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tags.map((tag) => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-primary/30 text-primary text-xs"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 w-full mt-auto"
                >
                  <a
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Read publication: ${pub.title}`}
                  >
                    Read on Preprints.org
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </Card>
            ))}
          </div>

          {/* Footer note */}
          <p className="text-center text-sm text-muted-foreground/70 mt-8 italic">
            Additional manuscripts are currently in progress — stay tuned for upcoming work
            in agricultural AI, healthcare imaging, and large-scale model interpretability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Publications;
