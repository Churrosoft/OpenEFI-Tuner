export interface LayoutInterface {
  toogleMenu: boolean;
}

function state(): LayoutInterface {
  return {
    toogleMenu: false,
  };
}

export default state;
