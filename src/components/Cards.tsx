type CardProps = {
    name: string;
    price: number;
  };
  
  export default function Card({ name, price }: CardProps) {
    return (
      <div className="card">
        <h2>{name}</h2>
        <p>Price: ${price.toFixed(2)}</p>
      </div>
    );
  }