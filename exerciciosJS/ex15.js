function escolhaCarro(carro) {
    switch (carro) {
        case "hatch":
            console.log('Compra efetuada com sucesso')
            break
        case "sedan":
        case "motocicleta":
        case "caminhonete":
            console.log('Tem certeza que não prefere outro modelo?')
            break
        default:
            console.log('Não trabalhamos com esse tipo de automóvel aqui.')

    }
}
escolhaCarro("hatch")
escolhaCarro("caminhonete")
escolhaCarro("sedan")
escolhaCarro("caminhão")
escolhaCarro("motocicleta")