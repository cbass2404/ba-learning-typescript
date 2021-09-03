type Dinosaur = {
  id: number;
  species: string;
  age: number;
  trainer?: string;
  location?: {
    longitude: number;
    latitude: number;
  };
};

const dinoCache: { [index: string]: Dinosaur } = {};
export { dinoCache, Dinosaur };
