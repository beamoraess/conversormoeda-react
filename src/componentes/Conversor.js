import React, { Component } from 'react';
import "./Conversor.css";

export default class Conversor extends Component {
    
    // eslint-disable-next-line no-useless-constructor
    constructor(props){
            super(props);

            this.state = {
                moedaA_valor: "",
                moedaB_valor: 0,           
            }

            this.converter = this.converter.bind(this);
        }

        converter(){
            let de_para = `${this.props.moedaA}_${this.props.moedaB}`;
            let url = `https://free.currconv.com/api/v7/convert?q=${de_para}&compact=ultra&apiKey=34ecafa3fe251d160f2d`
            

            fetch(url)
            .then(res=> {
                return res.json()
            }).then(json=>{
                let cotacao = json[de_para]
                let moedaB_valor = (parseFloat(this.state.moedaA_valor * cotacao).toFixed(2))
                this.setState({moedaB_valor})
            })

            console.log(this.state.moedaB_valor);
            
        }

    render(){
        
        return(
            <div className="conversor">
                <h2>{this.props.moedaA} para {this.props.moedaB}</h2>
                <input type="text" onChange={(event)=>{this.setState({moedaA_valor: event.target.value})}}></input> 
                {/* onChange dispara o evento e o target é o input, value o valor dentro dele */}
                <input type="button" value="Converter" onClick={this.converter}></input>
                <h2>Valor Convertido {this.state.moedaB_valor}</h2>   
            </div>
        )
    }
}

