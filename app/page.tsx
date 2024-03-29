'use client'
import MoviesContext from "./contexts/MoviesContext";
import FormSection from "./sections/FormSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-0 md:p-24 bg-sky-400">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-base">
        <MoviesContext>
          <FormSection />
        </MoviesContext>
      </div>
    </main>
  );
}
