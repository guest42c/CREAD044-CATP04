export default function Footer(props) {
  // Este componente usa PROPS para receber dados do "pai" (App.jsx)
  return (
     <footer
      id="rodape"
      class="bg-dark text-white pt-5 pb-4 mt-5 border-top border-secondary"
    >
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-lg-6 mb-8 mb-md-0">
            <h5 class="text-uppercase fw-bold mb-4">Go & Bits</h5>
            <p class="small text-white-50">
              Um projeto dedicado à exploração das conexões da Inteligência
              Artificial com o milenar jogo Go.
            </p>
            <p class="small text-white-50">
              <i class="bi bi-geo-alt-fill text-primary"></i> Porto Alegre, RS -
              Brasil
            </p>
          </div>

          <div class="col-md-3 col-lg-3 mb-4 mb-md-0">
            <h5 class="text-uppercase fw-bold mb-4 text-white">Acadêmico</h5>
            <p class="small mb-1 fw-bold">UFRGS</p>
            <p class="small text-white-50">
              CREAD044 - Programação para Web e Sistemas Multimídia
            </p>
            <a
              href="https://www.ufrgs.br/computacaorobotica"
              target="_blank"
              class="btn btn-outline-light btn-sm mt-2"
              >Licenciatura em Computação e Robótica Educativa</a
            >
          </div>

          <div class="col-md-3 col-lg-3">
            <h5 class="text-uppercase fw-bold mb-4">Conecte-se</h5>
            <div class="d-flex gap-3">
              <a
                href="https://github.com/guest42c/CREAD044-CATP01"
                class="text-white fs-4 opacity-75 hover-opacity-100"
                ><i class="bi bi-github"></i
              ></a>
              <a
                href="mailto:00150821@ufrgs.br"
                class="text-white fs-4 opacity-75 hover-opacity-100"
                ><i class="bi bi-envelope-at"></i
              ></a>
            </div>
          </div>
        </div>

        <hr class="my-4 border-secondary" />

        <div class="row">
          <div class="col-md-12 text-center">
            <p class="small mb-0 text-white-50">
              &copy; {props.data} <strong>{props.nome}</strong>.
            </p>
            <p>Deploy realizado em: <a href="https://guest42c.github.io/CREAD044-CATP04/">https://guest42c.github.io/CREAD044-CATP04/</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}