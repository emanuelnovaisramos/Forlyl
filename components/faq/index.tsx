
import { FaqAccordion } from "../accordion";
import "./styles.scss";

export const Faq = () => {
  const faq = [
    {
      title: "O que acontece depois de eu me cadastrar?",
      text: "Assim que o MVP for lançado, você receberá um link exclusivo para explorar todas as funcionalidades gratuitamente.",
    },
    {
      title: "Esta plataforma é indicada para agências?",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quod odit voluptate ipsum. Voluptatem culpa minima, cupiditate, provident excepturi eveniet totam eaque praesentium unde tenetur nihil quae voluptatum consectetur ratione.",
    },
    {
      title: "Vai haver período de teste gratuito?",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quod odit voluptate ipsum. Voluptatem culpa minima, cupiditate, provident excepturi eveniet totam eaque praesentium unde tenetur nihil quae voluptatum consectetur ratione.",
    },
  ];

  return (
    <section className="faq">
      <div className="content-container">
        <h2>Perguntas frequentes</h2>
        <div className="list">
          {faq.map((question) => (
            <div>
              <FaqAccordion question={question} />
            </div>
          ))}
        </div>
        <div className="card">
          <h2>Esta é a oportunidade de transformar seus lançamentos e sua carreira digital.</h2>
          <p>Não fique de fora. Cadastre-se e faça parte da nova era dos lançamentos!</p>
          <button className="button-primary">quero me cadastrar</button>
        </div>
      </div>
    </section>
  );
};
