import "@/components/Card//CardComponent.scss";
import { Button } from "@mui/material";
import Link from "next/link";

type CardProps = {
    id: number;
    name: string;
    image: string;
};

const CardComponent: React.FC<CardProps> = ({ id, name, image }) => {
  return (
    <div className="card-grid">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img src={image} alt="Personaje" className="card-img" />
          </div>
          <div className="flip-card-back">
            <h2>{name}</h2>
            <Link href={`/character/${id}`}>
              <Button fullWidth variant="contained">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
