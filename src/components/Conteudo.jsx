import { useState } from "react";

export default function Conteudo() {
  const [legenda, setLegenda] = useState("Tabuleiro de GO com tamanho 19x19 de uma partida com diversas jogadas realizadas.");
  const txtAlt = "Tabuleiro de Go";

  const [hover, setHover] = useState(false);
  const containerStyle = { position: "relative", display: "inline-block" };
  const captionStyle = {
    position: "absolute",
    bottom: 0,
    background: "rgba(0,0,0,0.6)",
    color: "white",
    width: "100%",
    textAlign: "center",
    opacity: hover ? 1 : 0, // Show/Hide
    transition: "opacity 0.3s",
  };

  return (
    <main class="container my-5">
      <section class="container my-5 pt-4">
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="card border-0 shadow-sm p-4 rounded-4">
              <h4 class="mb-4 text-center border-bottom pb-2 border-secondary">
                Sumário do Site
              </h4>
              <div class="row g-3">
                <div class="col-6 col-md-4 col-lg-2 text-center">
                  <a
                    href="#regras"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-journal-text d-block fs-3 mb-2"></i>
                    <small>Regras</small>
                  </a>
                </div>

                <div class="col-6 col-md-4 col-lg-2 text-center border-start border-secondary">
                  <a
                    href="#ia-alphago"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-cpu d-block fs-3 mb-2"></i>
                    <small>IA & AlphaGo</small>
                  </a>
                </div>

                <div class="col-6 col-md-4 col-lg-2 text-center border-start border-secondary">
                  <a
                    href="#estudos"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-mortarboard d-block fs-3 mb-2"></i>
                    <small>Estudos</small>
                  </a>
                </div>

                <div class="col-6 col-md-4 col-lg-2 text-center border-start border-secondary d-none d-md-block">
                  <a
                    href="#ferramentas"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-tools d-block fs-3 mb-2"></i>
                    <small>Ferramentas</small>
                  </a>
                </div>

                <div class="col-6 col-md-4 col-lg-2 text-center border-start border-secondary">
                  <a
                    href="#sobre"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-person-badge d-block fs-3 mb-2"></i>
                    <small>Sobre</small>
                  </a>
                </div>
                <div class="col-6 col-md-4 col-lg-2 text-center border-start border-secondary">
                  <a
                    href="#rodape"
                    class="text-decoration-none opacity-75 hover-opacity-100"
                  >
                    <i class="bi bi-journal-arrow-down d-block fs-3 mb-2"></i>
                    <small>Rodapé</small>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="regras" class="py-5">
        <div class="row align-items-center">
          <div class="col-lg-6">
            <h2 class="display-5 fw-bold">Regras do Jogo</h2>
            <p class="lead">
              O Go é um jogo de estratégia com mais de 2.500 anos, onde o
              objetivo é cercar mais território que o oponente. Veja as 9 regras
              básicas do jogo:
            </p>
            <ul class="list-group">
              <li class="list-group-item">
                1. Go é jogado entre dois jogadores.
              </li>
              <li class="list-group-item">
                2. Um dos jogadores usa as pedras brancas e o outro as pretas.
                (Os jogadores se revezam colocando as pedras no tabuleiro, uma a
                uma. O primeiro movimento, isto é, a colocação da primeira pedra
                no tabuleiro, é feito pelas Pretas. Num jogo com “handicap”,
                entretanto, Brancas jogam primeiro.)
              </li>
              <li class="list-group-item">
                3. A pedra deve ser colocada em um dos cruzamentos.
              </li>
              <li class="list-group-item">
                4. A pedra, uma vez colocada, não pode ser retirada (exceto
                quando se aplica a regra número 6).
              </li>
              <li class="list-group-item">
                5. O jogador que obtem mais território ganha o jogo.
              </li>
              <li class="list-group-item">
                6. As pedras que perderem suas liberdades, ou “espaço para
                respirar”, são retiradas do tabuleiro.
              </li>
              <li class="list-group-item">
                7. Nenhuma pedra pode ser colocada num cruzamento onde não tenha
                liberdade.
              </li>
              <li class="list-group-item">
                8. Há restrições especiais nos movimentos de um jogador, na
                situação chamada Ko.
              </li>
              <li class="list-group-item">
                9. Regra referente ao jogo com “handicap” ou vantagem.
              </li>
            </ul>
            <div class="mt-3">
              <p>
                <strong>Veja as regras detalhadas em: </strong>
                <a
                  href="https://baduk.com.br/regras-detalhadas/"
                  target="_blank"
                >
                  https://baduk.com.br/regras-detalhadas/
                </a>
              </p>
            </div>
            <div class="alert alert-info mt-3">
              <p>
                <strong>Dica de Abertura:</strong> Comece pelos cantos, depois
                as laterais e, por fim, o centro. O "Star Point" (Hoshi) é o
                ponto de partida mais comum.
              </p>
            </div>
          </div>
          <div class="col-lg-6 text-center">
            <div class="p-5 border rounded-3 italic text-muted">
              <div
                style={containerStyle}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
              >
                <img
                  src="tabuleiro-jogo.png"
                  class="img-fluid"
                  alt="{txtAlt}"
                />
                <div style={captionStyle}>{legenda}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section id="ia-alphago" class="py-5 rounded-4 p-4 shadow-sm">
        <div class="row">
          <div class="col-12">
            <h2 class="display-5 fw-bold">IA & AlphaGo</h2>
            <p>
              Para nós da computação, o Go é fascinante pela sua complexidade
              combinatória. Segundo a Wikipedia o cientista da computação Victor
              Allis observa que partidas típicas entre jogadores de alto nível
              duram cerca de 150 jogadas, com uma média de aproximadamente 250
              escolhas por jogada, o que sugere uma complexidade da árvore de
              jogo de 10<sup>360</sup>. Para se ter uma ideia o número de átomos
              no universo é estimado em cerca de 10<sup>80</sup>.
            </p>
            <p>
              O <strong>AlphaGo</strong>, desenvolvido pela DeepMind,
              revolucionou a área ao combinar
              <em>Monte Carlo Tree Search</em> (MCTS) com redes neurais
              profundas (Deep Learning). Ele não apenas venceu Lee Sedol, mas
              introduziu jogadas que muitos dos melhores jogadores de Go
              caracterizaram como pouco ortodoxas com movimentos aparentemente
              questionáveis que inicialmente confundiram os espectadores, mas
              faziam sentido em retrospectiva. Ele foi um marco na história do
              jogo, estabelecendo um novo estilo de jogo moderno.
            </p>
            <div class="container my-5">
              <div class="row justify-content-center">
                <div class="col-lg-10">
                  <h3 class="mb-4 text-center">
                    Documentário: AlphaGo - The Movie
                  </h3>
                  <div class="ratio ratio-16x9 shadow rounded overflow-hidden">
                    <iframe
                      width="560"
                      height="315"
                      src="https://www.youtube.com/embed/WXuK6gekU1Y?si=9JD93xjcKoDUucJS"
                      title="YouTube video AlphaGo - The movie"
                      frameBorder="0"
                      allow="
                        accelerometer;
                        autoplay;
                        clipboard-write;
                        encrypted-media;
                        gyroscope;
                        picture-in-picture;
                        web-share;
                      "
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                  </div>

                  <p class="mt-3 text-muted small text-center">
                    Assista à jornada completa da DeepMind ao enfrentar o
                    lendário Lee Sedol.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="table-responsive mt-4 shadow-sm rounded">
            <table class="table table-hover align-middle">
              <thead>
                <tr>
                  <th scope="col">Característica</th>
                  <th scope="col">Xadrez</th>
                  <th scope="col">Go (Baduk)</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">Tamanho do Tabuleiro</th>
                  <td>8 x 8 (64 casas)</td>
                  <td>19 x 19 (361 interseções)</td>
                </tr>
                <tr>
                  <th scope="row">IA que venceu o Campeão Mundial</th>
                  <td>Deep Blue (IBM, 1997)</td>
                  <td>AlphaGo (DeepMind, 2016)</td>
                </tr>
                <tr>
                  <th scope="row">Fator de Ramificação (Média)</th>
                  <td>~35 movimentos possíveis</td>
                  <td>~250 movimentos possíveis</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section id="ferramentas" class="py-5 rounded-4 p-4">
        <div class="row">
          <div class="offset-md-1 col-md-10">
            <h2>Ferramentas de Análise</h2>
            <p>
              A ferramenta mais poderosa atualmente para estudo é o
              <strong>KataGo</strong>. Diferente do AlphaGo, ele é aberto e
              permite analisar pontuações e probabilidades de vitória em
              qualquer posição do tabuleiro.
            </p>
            <p>
              Uma das interfaces de código aberto para <strong>KataGO</strong> é
              o KaTrain e pode ser encontrado no GitHub
              <a
                href="https://github.com/sanderland/katrain"
                class="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              >
                https://github.com/sanderland/katrain
              </a>
            </p>
            <span class="badge bg-primary">Código Aberto</span>
            <span class="badge bg-info">Neural Network</span>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section id="estudos" class="py-5 text-center">
        <h2 class="mb-4">Minha Rotina de Estudos</h2>
        <div class="row g-4 text-start">
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="bi bi-phone"></i>BadukPop e OGS
                </h5>
                <p class="card-text">
                  Uso o aplicativo
                  <strong>
                    <a
                      class="text-decoration-none"
                      href="https://play.google.com/store/apps/details?id=com.coreplane.badukpop.prod&hl=pt_BR"
                    >
                      BadukPop
                    </a>
                  </strong>
                  para resolver <em>Tsumegos</em> (problemas de vida e morte) e
                  jogar partidas rápidas com tempo controlado como por exemplo
                  máximo de 24h para cada movimento. É excelente para treinar o
                  reconhecimento de padrões e me permite seguir com o hobby
                  mesmo com pouco tempo disponível.
                </p>
                <p class="card-text">
                  Já o <strong>OGS</strong> (
                  <a class="text-decoration-none" href="online-go.com">
                    online-go.com
                  </a>
                  ) é um dos maiores e mais populares servidores de Go
                  (Weiqi/Baduk) online do mundo. Ele funciona diretamente no
                  navegador, sem necessidade de instalação de software,
                  tornando-o extremamente acessível para jogadores de todos os
                  níveis. Atualmente não estou jogando muito pois tenho
                  preferido jogar pelo aplicativo BadukPop que me da mais
                  flexibilidade para jogar rapidamente em diferentes momentos do
                  dia.
                </p>
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <div class="card h-100 border-0 shadow-sm">
              <div class="card-body">
                <h5 class="card-title">
                  <i class="bi bi-book"></i> Retomada Pós-Pandemia
                </h5>
                <p class="card-text">
                  Conheci o jogo online durante a pandemia. Após um bom tempo
                  sem jogar, estou retomando meus estudos revisando as aberturas
                  (Fuseki) e resolvendo Tsumegos que são problemas de "vida e
                  morte" onde o objetivo é encontrar a sequência correta de
                  movimentos para capturar um grupo de pedras inimigo ou salvar
                  o seu próprio grupo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <hr class="my-5" />

      <section id="sobre" class="py-5">
        <div class="text-center">
          <h2>Sobre o Autor</h2>
          <p class="lead">Guilherme</p>
          <p>
            Estudante de
            <strong>
              {" "}
              Licenciatura em Computação e Robótica Educativa na UFRGS
            </strong>
            . Este projeto une minha paixão por jogos milenares com a fronteira
            da inteligência artificial e educação.
          </p>
        </div>
      </section>
    </main>
  );
}
