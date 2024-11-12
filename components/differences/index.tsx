import "./styles.scss";
import Image from "next/image";

export const Differences = () => {
  return (
    <section className="differences">
      <div className="content-container">
        <h2>Por que a FORLYL é diferente?</h2>
        <div className="container">
          <div className="left">
            <div className="card">
              <div className="title">
                <Image
                  src="/pencil-icon.png"
                  width={78}
                  height={78}
                  alt="icon pencil"
                />
                <h3>Redução de custos inteligente</h3>
              </div>
              <p>
                Em vez de gastar milhares de reais em cursos dispersos e
                diversas ferramentas para organizar e executar lançamentos, a
                FORLYL oferece tudo que você precisa em um só lugar.
              </p>
              <p>
                Com ela, você terá orientação completa, ferramentas organizadas
                e um passo a passo claro para cada etapa tudo por um valor
                simbólico.
              </p>
              <p>
                Esqueça a necessidade de unir várias soluções por conta própria:
                centralizamos conhecimento e tecnologia para que você economize
                tempo e dinheiro, focando no que importa o crescimento do seu
                negócio.
              </p>
            </div>
          </div>
          <div className="right">
            <div className="card">
              <div className="title">
                <Image
                  src="/light.png"
                  width={78}
                  height={78}
                  alt="icon light"
                />
                <h3>Feita para pequenos e médios produtores</h3>
              </div>
              <p>
                Projetada para quem está começando ou ainda não tem uma equipe
                robusta. Lançar sem dor de cabeça é possível!
              </p>
            </div>
            <div className="card">
              <div className="title">
                <Image
                  src="/tendencies.png"
                  width={78}
                  height={78}
                  alt="icon tendencies"
                />
                <h3>Sempre atualizada com as tendências do mercado</h3>
              </div>
              <p>
                A plataforma evolui com você, incorporando novas práticas e
                ferramentas automaticamente.
              </p>
            </div>
            <div className="card">
              <div className="title">
                <Image
                  src="/control.png"
                  width={78}
                  height={78}
                  alt="icon control"
                />
                <h3>Gamificação para manter você motivado</h3>
              </div>
              <p>
                Complete tarefas, acumule pontos e ganhe benefícios. Quanto mais
                você usa, mais vantagens conquista!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
