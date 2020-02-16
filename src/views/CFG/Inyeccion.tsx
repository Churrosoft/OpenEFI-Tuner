import React from 'react';
import '../../css/CFG/iny.scss';


type MyProps = {
}
type MyState = {
    lambdaMin: string
}

class INY extends React.Component<MyProps,MyState>{

    constructor(props : any){
        super(props);
        this.state = {
            lambdaMin : '0'
        }
    }

    handleSubmit = (e:any) => {
        e.preventDefault();
        let lambda = this.state.lambdaMin;
        alert(lambda);
    }
    render(){
        return(
            <div>
                <div id ="CFG-Container">
                    <div id="cards-CFG"> 
                    <form onSubmit={this.handleSubmit}>

                        <p> <label htmlFor='lmbm'>Factor Lambda Minimo: </label>
                            <input 
                                id='lmbm' 
                                name = 'lmbda'
                                onChange={e => this.setState({ lambdaMin: e.target.value })}
                                placeholder = 'numero con triple decimal'
                                value={this.state.lambdaMin}
                            ></input>
                        </p> 
                            <p> <label htmlFor='lmbm'>Factor Lambda Maximo: </label>
                                <input
                                    id='lmbm2'
                                    name='lmbdb'
                                    placeholder='numero con triple decimal'
                                ></input>
                            </p> 


                        <button>Actualizar</button>
                    </form>
                    </div>
                   
                </div>
            </div>
        );
    }
}
export default INY;