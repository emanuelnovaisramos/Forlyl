import "./styles.scss";

export const VipList = () => {
  return (
    <section className="vip-list">
      <div className="content-container">
        <div className="texts">
          <h2>A revolução começa agora. Entre para a lista VIP!</h2>
          <p>
            Seja avisado antes de todos e tenha acesso antecipado a nossa
            solução inovadora para lançamentos digitais!{" "}
            <b>Preencha o campo com seu e-mail e garanta seu lugar</b>
          </p>
        </div>
        <div className="form">
            <input type="text" placeholder="Seu melhor e-mail" />
            <button className="button-primary">Quero Fazer Parte da Lista VIP</button>
        </div>
      </div>
    </section>
  );
};
