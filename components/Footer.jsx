import { profile } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="border-t hairline">
      <div className="shell flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="font-mono text-xs text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p className="font-mono text-xs text-muted">
          Built with Next.js &amp; Tailwind · Deployed on Vercel
        </p>
        <a href="#top" className="link-underline font-mono text-xs text-muted hover:text-text">
          Back to top ↑
        </a>
      </div>
    </footer>
  );
}
