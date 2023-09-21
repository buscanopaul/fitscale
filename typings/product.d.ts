type Product = {
  id: string;
  title: string;
  rating: number;
  image: string;
  advantages: Advantage[];
};

type Advantage = {
  id: string;
  title: string;
};
