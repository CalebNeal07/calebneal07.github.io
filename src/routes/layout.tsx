import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";

export default component$(() => {
  const isHomePage = useLocation().url.pathname === "/";

  return (
    <div>
      {!isHomePage && ( // Only render navbar if not homepage
        <header>
          {/* Your navbar content here */}
          <nav>
            <a href="/">Caleb O'Neal</a>
            <a href="/experience">About</a>
            <a href="/projects">Projects</a>
            <a href="/awards">Awards & Certifications</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
      )}
      <main>
        <Slot />
      </main>
    </div>
  );
});
