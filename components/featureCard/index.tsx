import { Feature } from "../../types/feature";
import "./styles.scss";
import Image from "next/image";

export const FeatureCard = ({ feature }: { feature: Feature }) => {
  return (
    <div className="feature-card">
      <Image src={feature.icon} width={42} height={42} alt={feature.title} />
      <h3>{feature.title}</h3>
      <p>{feature.text}</p>
    </div>
  );
};
