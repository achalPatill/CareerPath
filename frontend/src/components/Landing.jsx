import { Link } from 'react-router-dom';
import { Compass, Sparkles, Navigation } from 'lucide-react';

export default function Landing() {
  return (
    <div className="flex-1 flex flex-col">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-primary to-secondary flex items-center justify-center">
            <Navigation className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold tracking-tight text-white">CareerAI</span>
        </div>
        <div className="space-x-4">
          <Link to="/login" className="text-sm font-medium text-textSecondary hover:text-white transition">
            Sign In
          </Link>
          <Link to="/signup" className="text-sm font-medium bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition shadow-lg shadow-primary/25">
            Get Started
          </Link>
        </div>
      </nav>

      <main className="flex-1 flex flex-col items-center justify-center p-6 text-center max-w-4xl mx-auto w-full mt-10 mb-20">
        <div className="inline-flex items-center px-3 py-1 rounded-full bg-surface/50 border border-white/5 text-sm text-textSecondary mb-8">
          <Sparkles className="w-4 h-4 mr-2 text-primary" />
          AI-Powered Career Guidance
        </div>
        <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-textSecondary tracking-tight mb-6 leading-tight">
          Find your perfect career path after 10th
        </h1>
        <p className="text-xl text-textSecondary mb-10 max-w-2xl leading-relaxed">
          Explore streams, compare options, and get personalized AI recommendations tailored to your unique skills and interests.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link to="/signup" className="px-8 py-3.5 rounded-xl bg-primary text-white font-semibold text-lg hover:bg-primary/90 transition shadow-lg shadow-primary/25 w-full sm:w-auto">
            Start Your Journey
          </Link>
          <button className="px-8 py-3.5 rounded-xl border border-white/10 bg-surface/50 text-white font-semibold text-lg hover:bg-surface transition w-full sm:w-auto flex items-center justify-center">
            <Compass className="w-5 h-5 mr-2" />
            Explore Fields
          </button>
        </div>
      </main>

      {/* Decorative background elements */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      <div className="fixed bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/20 blur-[120px] rounded-full pointer-events-none -z-10"></div>
    </div>
  );
}
