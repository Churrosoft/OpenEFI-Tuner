export interface MemoryInterface {
  toogleMenu: boolean;
}

function state(): MemoryInterface {
  return {
    toogleMenu: false,
  };
}

export default state;
