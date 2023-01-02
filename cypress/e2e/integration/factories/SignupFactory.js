
export default {
    deliver: function () {

        let data = {
            name: 'clara maria',
            cpf: '00000014141',
            email: 'clara@barretto',
            whatsapp: '11999999999',
            address: {
                cep: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'sala full',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'sun.jpg'
        }

        return data
    }
}