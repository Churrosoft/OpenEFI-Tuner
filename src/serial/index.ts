/**
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// Importamos el redu:
import mystore from '../GS';

let port: SerialPort | undefined;
let reader: ReadableStreamDefaultReader | any;
let SerialState = false;

let commands : { [index: string]: any} = {
  "rpm"  :{
    value: '100',
    trigger: 'RPM'
  },
  "inf": {
    value: '',
    trigger: 'INF'
  }
};
class SerialAPI {
  isConected = () => {
    return SerialState;
  }
  getValues = (key : string, int:boolean | false) =>{
    if(int){
      return parseInt(commands[key].value);
    }else{
      return commands[key].value;
    }
    
  }
  //funcion principale:
  async run() {
    if (port) {
      if (reader) reader.cancel();
      await port.close();
      SerialState = false;
    } else {
      port = await navigator.serial.requestPort({});
      const options = { baudrate: 115200 };
      await port.open(options);

      console.log("<CONNECTED>");
      SerialAPI.SendCommand();
      while (port.readable) {
        try {
          
          //Test enviar numero "45"
         
          reader = port.readable.getReader();
          //empezamos a leer
          SerialState = true;
          while (true) {
            const { value, done } = await reader.read();
             
            let test = SerialAPI.ByteToString(value);
            let args = test.split(" ");
            Object.keys(commands).map(function (key, index) {
              
              if (args[0].startsWith(commands[key].trigger)){
                commands[key].value = args[1];
                mystore.dispatch({ type: commands[key].trigger, val: args[1] });
                console.log({ type: commands[key].trigger, val: args[1] });
              }
            // console.log({ [commands[key].trigger] : commands[key].value });
            });      
          }
        } catch (e) {
          //error
        }
      }

      port = undefined;
    }
  }

  static ByteToString(value:any){
    let test = "";
    value.map(
      (hex: number) => (
        test += String.fromCharCode(hex)
        )
    );
    return test;
  }

  static SendCommand(){
    if (port && port.writable) { //&& port.writable
      const value = parseInt('45\n');
      const bytes = new Uint8Array([value]);
      const writer = port.writable.getWriter();
      console.log("en teoria mande algo");
      writer.write(bytes);
      writer.releaseLock();

    }
  }


}

export default SerialAPI;
