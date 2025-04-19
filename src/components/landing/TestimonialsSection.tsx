
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Marketing Director, TechGrowth",
    image: "https://randomuser.me/api/portraits/women/45.jpg",
    quote: "Autoverse transformed our lead nurturing process. What used to take hours of manual work is now fully automated. Our team saves 15+ hours a week!",
    stars: 5
  },
  {
    name: "Michael Chen",
    role: "CEO, StartupLaunch",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    quote: "As a non-technical founder, I struggled with automation tools. Autoverse changed that - I just describe what I need, and it builds it for me. Game changer!",
    stars: 5
  },
  {
    name: "Jessica Williams",
    role: "Operations Manager, FitnessPro",
    image: "https://randomuser.me/api/portraits/women/63.jpg",
    quote: "We automated our entire client onboarding process with Autoverse. Now our clients have a seamless experience from day one, without any manual work on our end.",
    stars: 5
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-autoverse-50/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Loved by Business Owners
          </h2>
          <p className="text-lg text-gray-600">
            See how businesses like yours are transforming with Autoverse's automation platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center mb-4">
                {Array(testimonial.stars).fill(0).map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 italic">
                "{testimonial.quote}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-heading font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-white rounded-xl p-8 shadow-md border border-gray-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h3 className="text-2xl font-heading font-bold mb-3">
                Business Success Metrics
              </h3>
              <p className="text-gray-600 mb-6">
                Our customers are seeing real results with Autoverse's automation platform:
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {[
                  { metric: "85%", label: "Time Saved on Manual Tasks" },
                  { metric: "3.5x", label: "Increase in Workflow Efficiency" },
                  { metric: "12hrs", label: "Saved per Week per Employee" }
                ].map((item, i) => (
                  <div key={i} className="text-center">
                    <div className="text-3xl font-bold text-autoverse-600 mb-1">
                      {item.metric}
                    </div>
                    <p className="text-sm text-gray-600">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="w-full md:w-1/3 bg-gradient-to-br from-autoverse-100 to-tech-softBlue/40 rounded-lg p-6">
              <div className="text-center">
                <h4 className="font-heading font-semibold mb-3">
                  Join 500+ companies automating their workflows
                </h4>
                <div className="flex flex-wrap justify-center gap-4">
                  {["TechGrowth", "StartupLaunch", "FitnessPro", "EcommerceHub", "ConsultPro"].map((company, i) => (
                    <div key={i} className="px-3 py-1 bg-white/80 rounded-full text-sm">
                      {company}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
