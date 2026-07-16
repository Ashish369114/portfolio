import { profile } from '../../data/profile';
import { socialLinks } from '../../data/social';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-background pt-16 pb-8">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-8">
          <div>
            <a href="#" className="text-2xl font-bold tracking-tighter text-white">
              {profile.name.split(' ')[0]}
              <span className="text-primary">.</span>
            </a>
            <p className="text-white/60 mt-2 max-w-xs">{profile.headline}</p>
          </div>
          
          <div className="flex gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white/70 hover:bg-primary hover:text-white transition-all"
                >
                  <Icon size={20} />
                </a>
              );
            })}
          </div>
        </div>
        
        <div className="text-center text-white/40 text-sm mt-16">
          <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
