import { read } from "fs";

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
let port: SerialPort | undefined;
let reader: ReadableStreamDefaultReader | any;
let writer: WritableStream | any;
const encoder = new TextEncoder();

let rpm = 1;
let ver = '';
let SerialState = false;
class SerialAPI {
  getRPM() {
    return rpm;

  }
  getVer = () => {
    console.log({VERLOCA: ver});
    return ver;
    
  };
  isConected = () => {
    return SerialState;
  }
  //funcion principale:
  async run() {
    if (port) {
      if (reader) reader.cancel();
      await port.close();
    } else {
      port = await navigator.serial.requestPort({});
      // console.log(port);
      const options = {
        baudrate: 115200
      };

      //console.log(options);
      await port.open(options);

      console.log("<CONNECTED>");

     // SerialAPI.get_info(port);
      while (port.readable) {
        try {
          reader = port.readable.getReader();
          if (port && port.writable) {
            const value = parseInt('45\n');
            const bytes = new Uint8Array([value]);
            const writer = port.writable.getWriter();
            console.log("en teoria mande algo");
            writer.write(bytes);
            writer.releaseLock();
          }
          SerialState = true;
          while (true) {
            const { value, done } = await reader.read();
             
            let test = SerialAPI.ByteToString(value);
            let args = test.split(" ");
            if (args[0].startsWith('INF')) {
              console.log("FUNCAAAA");
              console.log(args);
              ver = args[1];
            }
            if (args[1] !== undefined) {
              if (parseInt(args[1]) > 500) {
                rpm = parseInt(args[1]);
                console.log(args[1]);
              }
            }
            test = "";
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


}

export default SerialAPI;
