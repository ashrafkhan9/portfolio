import { useEffect, useState } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="fixed inset-0 bg-[var(--primary)] flex flex-col items-center justify-center z-50">
      <div className="text-4xl font-bold text-[var(--accent)] mb-8">MA<span className="text-[var(--text-primary)]">.</span></div>
      
      <div className="w-64 h-1 bg-[var(--secondary)] rounded-full overflow-hidden mb-4">
        <div 
          className="h-full bg-[var(--accent)] transition-all duration-300 ease-out"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      
      <div className="text-[var(--text-secondary)]">Loading... {progress}%</div>
    </div>
  );
};

export default Loader;