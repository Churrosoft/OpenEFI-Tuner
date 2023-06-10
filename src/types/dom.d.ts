interface CustomEventMap {
  beforeendedit: CustomEvent<IEditEvent>;
}
declare global {
  interface Document {
    //adds definition to Document, but you can do the same with HTMLElement
    addEventListener<K extends keyof CustomEventMap>(
      type: K,
      listener: (this: Document, ev: CustomEventMap[K]) => void
    ): void;
    dispatchEvent<K extends keyof CustomEventMap>(ev: CustomEventMap[K]): void;
  }
}

interface GlobalEventHandlersEventMap {
  beforeendedit: CustomEvent<IEditEvent>;
}

export {}; //keep that for TS compiler.
