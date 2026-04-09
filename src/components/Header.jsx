import { useState, useEffect } from "react";

export default function Header() {
  // Estado para armazenar o ID do link ativo no hover
  const [hovered, setHovered] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    // Apply the theme to the HTML tag
    const theme = isDarkMode ? "dark" : "light";
    document.documentElement.setAttribute("data-bs-theme", theme);
    if (theme === "dark") {
        document.body.setAttribute("background-color", "#4b462a");
    } else {
        document.body.setAttribute("background-color", "#fcee93");
    }
    localStorage.setItem("theme", theme);
  }, [isDarkMode]);

  return (
    <header>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top shadow">
        <div class="container">
          <a class="navbar-brand fw-bold" href="#">
            <i class="bi bi-grid-3x3-gap-fill"></i> Go & IA
          </a>

          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a
                  href="#regras"
                  onMouseEnter={() => setHovered("regras")}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    hovered === "regras" ? "nav-link highlighted" : "nav-link"
                  }
                >
                  Regras do Jogo
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#ia-alphago"
                  onMouseEnter={() => setHovered("ia")}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    hovered === "ia" ? "nav-link highlighted" : "nav-link"
                  }
                >
                  IA & AlphaGo
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#ferramentas"
                  onMouseEnter={() => setHovered("ferramentas")}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    hovered === "ferramentas"
                      ? "nav-link highlighted"
                      : "nav-link"
                  }
                >
                  Ferramentas
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#estudos"
                  onMouseEnter={() => setHovered("estudos")}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    hovered === "estudos" ? "nav-link highlighted" : "nav-link"
                  }
                >
                  Estudos
                </a>
              </li>
              <li class="nav-item">
                <a
                  href="#sobre"
                  onMouseEnter={() => setHovered("sobre")}
                  onMouseLeave={() => setHovered(null)}
                  className={
                    hovered === "sobre" ? "nav-link highlighted" : "nav-link"
                  }
                >
                  Sobre
                </a>
              </li>
              <li class="nav-item">
                <div class="nav-link">
                  <i
                    onClick={() => setIsDarkMode(!isDarkMode)}
                    className={
                      isDarkMode ? "bi bi-brightness-high" : "bi bi-moon"
                    }
                  ></i>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
