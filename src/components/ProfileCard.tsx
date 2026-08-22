import { Github, Linkedin, Instagram } from "./BrandIcons";
import { cn } from "../lib/utils";

interface ProfileCardProps {
  name: string;
  title: string;
  description: string;
  imageUrl?: string;
  githubUrl?: string;
  linkedinUrl?: string;
  instagramUrl?: string;
  className?: string;
}

export function ProfileCard({
  name,
  title,
  description,
  imageUrl,
  githubUrl,
  linkedinUrl,
  instagramUrl,
  className,
}: ProfileCardProps) {
  return (
    <div
      className={cn(
        "glass-strong rounded-3xl p-6 w-80 sm:w-96 flex flex-col items-center text-center border border-white/10 glow-accent shadow-2xl bg-[#0b0b0b]/95 backdrop-blur-xl pointer-events-auto select-none",
        className
      )}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border border-primary/20 mb-4 shadow-[0_0_15px_rgba(222,219,200,0.15)]"
        />
      )}
      <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
      <p className="text-[10px] text-primary font-mono tracking-widest uppercase mt-1">
        {title}
      </p>
      <p className="text-xs text-muted-foreground mt-4 leading-relaxed font-light">
        {description}
      </p>

      <div className="flex gap-5 mt-6 border-t border-white/5 pt-4 w-full justify-center">
        {githubUrl && (
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <Github size={18} />
          </a>
        )}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <Linkedin size={18} />
          </a>
        )}
        {instagramUrl && (
          <a
            href={instagramUrl}
            target="_blank"
            rel="noreferrer"
            className="text-primary/60 hover:text-primary transition-colors"
          >
            <Instagram size={18} />
          </a>
        )}
      </div>
    </div>
  );
}
