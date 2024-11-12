import './styles.scss'
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { features } from "../../constants/features";
import { FeatureCard } from "../featureCard";

export const About = () => {
  return (
    <section className="about">
      <div className="content-container">
        <div className="new">
          <div className="title">
            <h2>
              A nova era dos lançamentos: Tudo que você precisa em um só lugar
            </h2>
            <div className="arrow-container">
              <Image
                src="/arrow-vector.svg"
                alt="Arrow background"
                width={25}
                height={102}
              />
              <IoIosArrowForward className="arrow" size={18} />
            </div>
          </div>
          <div className="text">
            <p>
              Imagine uma plataforma projetada para simplificar cada passo do
              seu lançamento digital do planejamento ao acompanhamento de
              resultados. É exatamente isso que estamos criando.
            </p>
            <button className="button-secondary">
              Simplifique. Automatize. Cresça.
            </button>
          </div>
        </div>
        <div className="features">
          <h2>O que você vai encontrar na FORLYL?</h2>
          <div className="list">
            {features.map((feature, index) => (
              <FeatureCard feature={feature} key={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
