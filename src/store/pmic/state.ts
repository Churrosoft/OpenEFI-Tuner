export interface PMICInterface {
  toogleMenu: boolean;
}

function state(): PMICInterface {
  return {
    toogleMenu: false,
  };
}

export default state;
