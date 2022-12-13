import SignupPage from "./pages/SignupPage.cy"

describe('Cadastro', () => {
    it('seja um deliver', () => {
    
        let deliver = {
            name: 'Clara Barretto',
            cpf: '00000014141',
            email: 'cl@hotmail.com',
            whatsapp: '11999999999 ',
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

        let signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        
        signup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', () => {
        let deliver = {
            name: 'Clara Barretto',
            cpf: '0000001414AA',
            email: 'cl@hotmail.com',
            whatsapp: '11999999999 ',
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

        let signup = new SignupPage()

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')

 
    })
    
})