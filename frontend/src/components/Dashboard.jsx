import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LogOut, BookOpen, User, Star } from 'lucide-react';

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="flex-1 flex flex-col p-6 max-w-6xl mx-auto w-full">
      <header className="flex justify-between items-center py-6 mb-8 border-b border-white/10">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-textSecondary mt-1">Welcome back, {user?.name}</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center px-4 py-2 text-sm font-medium text-red-400 bg-red-400/10 rounded-lg hover:bg-red-400/20 transition"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Logout
        </button>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mb-4">
            <User className="w-6 h-6 text-primary" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1">Profile Role</h3>
          <span className="px-3 py-1 bg-surface rounded-full text-sm text-textSecondary capitalize">
            {user?.role}
          </span>
        </div>
        
        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center mb-4">
            <BookOpen className="w-6 h-6 text-secondary" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1">Career Paths</h3>
          <p className="text-sm text-textSecondary">Explore suggestions based on your interests.</p>
        </div>

        <div className="glass-panel p-6 rounded-2xl flex flex-col items-center text-center">
          <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-4">
            <Star className="w-6 h-6 text-green-400" />
          </div>
          <h3 className="text-lg font-medium text-white mb-1">Saved Items</h3>
          <p className="text-sm text-textSecondary">View your saved career options and mentors.</p>
        </div>
      </div>

      <div className="glass-panel rounded-2xl p-6 flex-1 flex flex-col">
        <h2 className="text-xl font-bold text-white mb-4">Your AI Roadmap</h2>
        <div className="flex-1 flex flex-col items-center justify-center border-2 border-dashed border-white/10 rounded-xl p-8">
          <p className="text-textSecondary text-center max-w-md">
            This module will be populated with personalized AI career suggestions, progress tracking, and comparison tools in the upcoming steps.
          </p>
        </div>
      </div>
    </div>
  );
}
