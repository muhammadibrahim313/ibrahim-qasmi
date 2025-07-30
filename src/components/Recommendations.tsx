import { Card } from '@/components/ui/card';

const Recommendations = () => {
  return (
    <section id="recommendations" className="section-padding" style={{ display: 'none' }}>
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-primary">Recommendations</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              LinkedIn recommendations from colleagues and clients
            </p>
          </div>

          <Card className="p-8 text-center">
            <p className="text-muted-foreground">
              LinkedIn recommendations will be added here soon. Check back for updates!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Recommendations;