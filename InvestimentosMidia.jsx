import React, { Component } from 'react';
import { Input, InputProps, InputCSS, Box, Label, DatePicker, DatePickerProps, Button, ButtonCSS } from '@admin-bro/design-system';
import Select from 'react-select';
import { Text } from '@admin-bro/design-system'
import { Link } from '@admin-bro/design-system'
import styled, { css } from 'styled-components'
import CurrencyInput from 'react-currency-masked-input'


const BrancoIn = styled(Input)`
    background: #ffffff;
    border-radius: 4px;
`;

const Botao = styled(Button)`
background: white;
color: #4268F6;

&:hover {
    background: #4268F6;
    color: white;
    border: 2px solid #4268F6;
};

align: center;
min-width: 60%;
font-size: 1em;
margin-bottom: 1em;
padding: 1em 2em;
border: 2px solid #4268F6;
border-radius: 3px;
`;


class InvestimentosMidia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cliente: '',
            tipo: '',
            valor: '',
            inicio: '',
            final: '',
            inicioFormat: '00/00/0000',
            finalFormat: '00/00/0000',
            valorFormat: '0'
        }
        this.salvar = this.salvar.bind(this);
    }

    salvar() {
        let dadosInvestMidia = [
         {
            cliente: this.state.cliente,
            tipo: this.state.tipo,
            valor: this.state.valor,
            inicio: this.state.inicio,
            final: this.state.final
         }
        ]
        console.log(dadosInvestMidia);
    }


    render() {
        const clientes = [
            { value: 'C6 bank', label: 'C6 bank' },
            { value: 'Telhanorte', label: 'Telhanorte' },
            { value: 'Tumelero', label: 'Tumelero' },
            { value: 'Obraja', label: 'Obraja' },
            { value: 'Klabin', label: 'Klabin' },
            { value: 'Locaweb', label: 'Locaweb' },
            { value: 'Mitsubishi', label: 'Mitsubishi' },
            { value: 'Suhai', label: 'Suhai' }
        ]
        const tipos = [
            { value: 'TV Aberta', label: 'TV Aberta' },
            { value: 'TV Fechada', label: 'TV Fechada' },
            { value: 'Mídia Out of Home', label: 'Mídia Out of Home' }
        ]
    
        return (
            
            <div>
                <Box margin="2%">
                    <Label>                       
                        <Text fontSize="h4" fontWeight="3px">Cliente</Text>
                    </Label>
                    <Select
                        options={clientes}
                        onChange={(optionSelected) => {
                            let clienteSelecionado = optionSelected.value;
                            this.setState({ cliente: clienteSelecionado });
                        }} />
                </Box>
                <Box margin="2%">
                    <Label>
                        <Text fontSize="h4" fontWeight="3px">Tipo</Text>
                    </Label>
                    <Select
                        options={tipos}
                        onChange={(optionSelected) => {
                            let tipoSelecionado = optionSelected.value;
                            this.setState({ tipo: tipoSelecionado });
                        }} />
                </Box>
                <Box margin="2%">
                    <Label htmlFor="input1">
                        <Text fontSize="h4" fontWeight="3px" value={this.state.valor}> Valor</Text>
                    </Label>
                    <CurrencyInput
                        placeholder="R$ 0.00"
                        type="text"                        
                        border="0"
                        borderRadius="4px"
                        padding="8px 15px"
                        font-size="28px"
                        onChange={(e) => {
                            let valorDigitado = e.target.value;
                            //let valorFormatado = valorDigitado.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
                            this.setState({ valor: valorDigitado });
                        }}
                    />
                </Box>
                <Box display={["block", "flex"]} flexDirection="row" justifyContent="space-between" margin="2%">
                    <Box minWidth="40%">
                        <Label>
                            <Text fontSize="h4" fontWeight="3px">Início: {this.state.inicioFormat == '00/00/0000' ? '' : this.state.inicioFormat }</Text>
                        </Label>
                        <DatePicker  
                            propertyType="date"
                            onChange={(date) => {                          
                                let dia = date.substring(8, 10);
                                let mes = date.substring(5, 7);
                                let ano = date.substring(0, 4);
                                let inicioF = dia+'/'+mes+'/'+ano;
                                this.setState({ inicioFormat: inicioF, inicio: date })                                               
                            }} />
                    </Box>
                    <Box minWidth="40%">
                        <Label>
                            <Text fontSize="h4" fontWeight="3px">Final: {this.state.finalFormat == '00/00/0000' ? '' : this.state.finalFormat }</Text>
                        </Label>
                        <DatePicker
                            propertyType="date"
                            onChange={(date) => {                          
                                let dia = date.substring(8, 10);
                                let mes = date.substring(5, 7);
                                let ano = date.substring(0, 4);
                                let finalF = dia+'/'+mes+'/'+ano;                                
                                this.setState({ finalFormat: finalF, final: date })                                               
                            }} />
                    </Box>
                </Box>
                <Box marginX="35%" marginY="4%" display={["block", "flex"]} flexDirection="row" justifyContent="center" >
                    <Botao alignSelf="center" onClick={this.salvar}>
                        <Text fontSize="h4" fontWeight="3px"><strong>Salvar</strong></Text>
                    </Botao>
                </Box>
            </div>
        );
    }
}

export default InvestimentosMidia;