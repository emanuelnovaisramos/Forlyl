import "./styles.scss";
import Image from "next/image";
import { About } from "../components/about";
import { Differences } from "../components/differences";
import { BeFirst } from "../components/beFirst";
import { VipList } from "../components/listVip";
import { Faq } from "../components/faq";

export default function Home() {
  return (
    <main className="home">
      <section className="start">
        <div className="content-container">
          <div className="infos">
            <div className="logo">
              <Image src="/logo.png" alt="logo" width={180} height={80} />
              <p>Leverage Your Launches & Leave Your Legacy</p>
            </div>
            <div className="text">
              <h1>Alavanque seus lançamentos e deixe o seu legado</h1>
              <p>
                A nova era dos lançamentos: Tudo que você precisa em um só lugar
              </p>
            </div>
            <button className="button-primary">Quero me cadastrar</button>
          </div>
        </div>
      </section>
      <About />
      <Image
        className="text"
        src="/differences-bg.png"
        width={1920}
        height={70}
        alt="text"
      />
      <Differences />
      <BeFirst />
      <VipList />
      <Faq />
      <footer>
        FORLYL • Todos os direitos reservados
      </footer>
    </main>
  );
}
