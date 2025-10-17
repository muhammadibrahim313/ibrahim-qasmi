import { useState } from 'react';
import { ExternalLink, Database, TrendingUp, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const KaggleDatasets = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = [
    'All',
    'Economics & Finance',
    'Healthcare & Medical',
    'Research & Academia',
    'Public Data',
    'Transportation',
    'Space & Technology',
    'Security',
    'NLP & Text'
  ];

  const datasets = [
    // ECONOMICS & FINANCE
    {
      title: "Global Economic Indicators 2015-2024",
      category: "Economics & Finance",
      description: "Comprehensive economic indicators dataset covering global trends",
      usability: 10.0,
      upvotes: 42
    },
    {
      title: "World Bank Population, Total",
      category: "Economics & Finance",
      description: "Complete population statistics from World Bank",
      usability: 10.0,
      upvotes: 31
    },
    {
      title: "World Bank GDP per capita",
      category: "Economics & Finance",
      description: "GDP per capita metrics across countries and years",
      usability: 9.4,
      upvotes: 15
    },
    {
      title: "Crypto Assets Directory",
      category: "Economics & Finance",
      description: "Comprehensive cryptocurrency assets and metadata",
      usability: 9.4,
      upvotes: 10
    },
    {
      title: "NVIDIA Stock Data: Multi-Timeframe",
      category: "Economics & Finance",
      description: "NVIDIA stock price data across multiple timeframes",
      usability: 10.0,
      upvotes: 9
    },
    
    // HEALTHCARE & MEDICAL
    {
      title: "Health and Fitness Tracking 365 Days",
      category: "Healthcare & Medical",
      description: "Year-long personal health and fitness metrics dataset",
      usability: 10.0,
      upvotes: 30
    },
    {
      title: "Drug Adverse Events: Ibuprofen",
      category: "Healthcare & Medical",
      description: "FDA adverse event reports for Ibuprofen",
      usability: 10.0,
      upvotes: 17
    },
    {
      title: "FDA Medical Device Adverse Events",
      category: "Healthcare & Medical",
      description: "Medical device adverse event reports from FDA",
      usability: 9.4,
      upvotes: 4
    },
    
    // RESEARCH & ACADEMIA
    {
      title: "AI and ML Research Papers 2020-2024",
      category: "Research & Academia",
      description: "Curated collection of AI/ML research papers",
      usability: 9.4,
      upvotes: 37
    },
    {
      title: "OpenAlex Institutions — Pakistan",
      category: "Research & Academia",
      description: "Academic institutions in Pakistan from OpenAlex",
      usability: 10.0,
      upvotes: 25
    },
    
    // PUBLIC DATA
    {
      title: "Universities — Wikidata Sample",
      category: "Public Data",
      description: "University information from Wikidata repository",
      usability: 10.0,
      upvotes: 35
    },
    {
      title: "USGS Earthquakes M2.5+ Last 30 Days",
      category: "Public Data",
      description: "Recent earthquake data from USGS monitoring",
      usability: 10.0,
      upvotes: 19
    },
    
    // TRANSPORTATION
    {
      title: "Global Bike Share Networks",
      category: "Transportation",
      description: "Worldwide bike-sharing networks and stations",
      usability: 10.0,
      upvotes: 23
    },
    {
      title: "OpenSky Aircraft States Snapshot",
      category: "Transportation",
      description: "Real-time aircraft tracking data snapshot",
      usability: 10.0,
      upvotes: 15
    },
    
    // SPACE & TECHNOLOGY
    {
      title: "SpaceX Launches",
      category: "Space & Technology",
      description: "Complete SpaceX launch history and details",
      usability: 10.0,
      upvotes: 10
    },
    
    // SECURITY
    {
      title: "Credit Card Fraud Dataset",
      category: "Security",
      description: "Credit card transaction fraud detection dataset",
      usability: 10.0,
      upvotes: 22
    },
    
    // NLP & TEXT
    {
      title: "IMDb 50K Cleaned Movie Reviews",
      category: "NLP & Text",
      description: "Preprocessed IMDb movie reviews for sentiment analysis",
      usability: 10.0,
      upvotes: 22
    }
  ];

  const filteredDatasets = activeFilter === 'All' 
    ? datasets 
    : datasets.filter(dataset => dataset.category === activeFilter);

  const totalUpvotes = datasets.reduce((sum, dataset) => sum + dataset.upvotes, 0);

  return (
    <section id="kaggle-datasets" className="section-padding bg-background">
      <div className="container-custom">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 fade-in">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-foreground mb-4">
              Kaggle <span className="text-primary">Datasets</span>
            </h2>
            <p className="font-playfair text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
              Curated datasets for the ML community
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <Database className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">{datasets.length} Public Datasets</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">{totalUpvotes} Total Upvotes</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-4 w-4 text-primary" />
                <span className="font-semibold text-foreground">Datasets Master (Rank 29 of 8,722)</span>
              </div>
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <Button
                key={filter}
                variant={activeFilter === filter ? "default" : "outline"}
                onClick={() => setActiveFilter(filter)}
                className={activeFilter === filter 
                  ? "bg-primary text-primary-foreground neon-glow" 
                  : "border-primary/30 text-foreground hover:bg-primary/10"
                }
              >
                {filter}
              </Button>
            ))}
          </div>

          {/* Datasets Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {filteredDatasets.map((dataset, index) => (
              <Card 
                key={dataset.title} 
                className="p-6 card-hover neon-border slide-up hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-lg bg-primary/10 text-primary">
                      <Database className="h-5 w-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-foreground line-clamp-2 mb-1">
                        {dataset.title}
                      </h4>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {dataset.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="outline" className="border-primary/30">
                      Usability {dataset.usability}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <TrendingUp className="h-3 w-3" />
                      {dataset.upvotes} upvotes
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" asChild className="w-full h-10 hover:bg-primary/10 hover:scale-105 transition-all duration-300">
                    <a href="https://www.kaggle.com/ibrahimqasimi/datasets" target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1" />
                      View on Kaggle
                    </a>
                  </Button>
                </div>
              </Card>
            ))}
          </div>

          {/* View All Button */}
          <div className="text-center">
            <Button asChild size="lg" variant="outline" className="h-12 border-primary text-primary hover:bg-primary/10 hover:scale-105 transition-all duration-300">
              <a href="https://www.kaggle.com/ibrahimqasimi/datasets" target="_blank" rel="noopener noreferrer">
                <Database className="mr-2 h-5 w-5" />
                View All Datasets on Kaggle
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KaggleDatasets;
