//imports generales:
import React from 'react';

//SCSS:
import '../../css/info.scss';

class Info extends React.Component {
    render(){
        return (
          <div id="INF-container">
            <div id="cards-INF">
              <div id="cards-INF-cnt">
                <table>
                  <tr>
                    <td>Version bootloader</td>
                    <td>v0.2.15</td>
                  </tr>
                  <tr>
                    <td>Version firmware</td>
                    <td>v2.168.58</td>
                  </tr>
                  <tr>
                    <td>Numero de serie</td>
                    <td>456587-898</td>
                  </tr>
                  <tr>
                    <td>Memoria disponible</td>
                    <td>27% (480 bytes)</td>
                  </tr>
                </table>
              </div>
            </div>
          </div>
        );
    }
}

export default Info;