import React, { Component } from 'react';
import { Input, InputProps, InputCSS, Box, Label, DatePicker, DatePickerProps, Button, ButtonCSS } from '@admin-bro/design-system';
import Select from 'react-select';

class InvestimentosMidia extends Component {
    render() {
        const clientes = [
            { value: 'C6 bank', label: 'C6 bank' },
            { value: 'Telhanorte', label: 'Telhanorte' },
            { value: 'Tumelero', label: 'Tumelero' },
            { value: 'Obraja', label: 'Obraja'},
            { value: 'Klabin', label: 'Klabin'},
            { value: 'Locaweb', label: 'Locaweb'},
            { value: 'Mitsubishi', label: 'Mitsubishi'},
            { value: 'Suhai', label: 'Suhai'}
        ]
        const tipos = [
            { value: 'TV Aberta', label: 'TV Aberta' },
            { value: 'TV Fechada', label: 'TV Fechada' },
            { value: 'Mídia Out of Home', label: 'Mídia Out of Home' }
        ]
        return (
            <div>
                <Box p="xl">
                    <Label htmlFor="input1">Cliente</Label>
                    <Select options={clientes} />
                    <Label htmlFor="input1">Tipo</Label>
                    <Select options={tipos} />
                    <Label htmlFor="input1">Valor</Label>
                    <Input id="input1" width={1 / 2} />
                    <Label htmlFor="input1">Início</Label>
                    <DatePicker onChange={(date) => console.log(date)}/>
                    <Label htmlFor="input1">Final</Label>
                    <DatePicker onChange={(date) => console.log(date)}/>
                    <Button>Salvar</Button>                    
                </Box>
            </div>
        );
    }
}

export default InvestimentosMidia;