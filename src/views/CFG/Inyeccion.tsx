import React from 'react';
import '../../css/CFG/iny.scss';


type MyProps = {
}

type MyState = {
    lambdaMin: string,
    lambdaMax: string
}

class INY extends React.Component<MyProps,MyState>{

    constructor(props : any){
        super(props);
        this.state = {
            lambdaMin : '0',
            lambdaMax: '1'
        }
    }
    test2 = () =>{
        this.setState({lambdaMin:'data', lambdaMax:'dat2'});
    }
    handleSubmit = (e:any) => {
        e.preventDefault();
        let lambda = this.state.lambdaMin;
        let lambda2 = this.state.lambdaMax;

        console.log({lambda, lambda2});
    }
    render(){
        return(
            <div>
                <div>
                    <div id="INY-Cards"> 
                    <form id='INY-Form' onSubmit={this.handleSubmit}>
                    <table><tbody>
                    <tr>
                        <td>
                        <p>
                            <label htmlFor='lmbm'>Factor Lambda Minimo: </label>
                            <input 
                                id='lmbm' 
                                name = 'lmbda'
                                placeholder = 'numero con triple decimal'
                                onChange={e => this.setState({ lambdaMin: e.target.value })}
                                value={this.state.lambdaMin}
                            />
                        </p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p> 
                            <label htmlFor='lmbm2'>Factor Lambda Maximo: </label>
                                <input
                                    id='lmbm2'
                                    name='lmbdb'
                                    placeholder='numero con triple decimal'
                                    onChange={e => this.setState({lambdaMax: e.target.value})}
                                    value={this.state.lambdaMax}
                                />
                            </p>
                        </td>
                    </tr>
                    </tbody></table>    
                    <button type='submit'>Actualizar</button>   
                    </form>
                    <button onClick={this.test2}>Traer Info</button>
                    </div>
                </div>
            </div>
        );
    }
}
export default INY;