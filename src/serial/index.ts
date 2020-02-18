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

const encoder = new TextEncoder();

let rpm = 1;

class SerialAPI {

    getRPM(){
        return rpm;
    }
     hex2a(hexx:any) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

async  run(){
    if (port) {
        if (reader)
            reader.cancel();
        await port.close();
    } else {
        port = await navigator.serial.requestPort({});
        console.log(port);
      // await this.connectToPort();
  //  }
//}

//async  connectToPort() {
    if (!port) {
        return;
    }

    const options = {
        baudrate: 115200,
    };
    console.log(options);
    await port.open(options);

    console.log('<CONNECTED>');

    while (port.readable) {
        try {
            reader = port.readable.getReader();
            while (true) {
                const { value, done } = await reader.read();

                let test = '';
                value.map( (hex: number) => test += String.fromCharCode(hex))
                let args = test.split(' ');

                if(args[1] !== undefined){
                    if(parseInt(args[1]) > 500){
                        rpm = parseInt(args[1]);
                        console.log(args[1]);
                    }
                    
                }
               // console.log(test);
                test = '';
                if (done) {
                    break;
                }
            }
            reader = undefined;
        } catch (e) {
            //error
        }
    }

    port = undefined;}
}

 getSelectedBaudRate() {
    return Number.parseInt('115200');
}
}

export default SerialAPI;