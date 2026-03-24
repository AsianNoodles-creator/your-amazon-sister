import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Amazon Training — Your Amazon Sister",
  description: "Learn the exact system that helped Wensey McComb build a 6-figure Amazon business from scratch.",
  robots: "noindex, nofollow",
};

export default function FreeTrainingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)]">
      {children}
    </div>
  );
}
