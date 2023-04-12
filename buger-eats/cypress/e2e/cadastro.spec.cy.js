/** Prenchimento do formulário de cadastro
 * Função view port - redimensioando tamanho da janela do site
 * Função visit - acessa a página principal do site
 * Função get - subfunção click passando um localizador para encontrar o botão
 * Checkipoint - para garantir a página correta
 * Espressões regulares básicas para encontrar elementos no HTML
 */

describe("cadastro", () => {
  it("Usuário deve se tornar um entregador", () => {
    cy.viewport(1440, 900);
    cy.visit("https://buger-eats.vercel.app");

    cy.get('[href="/deliver"]').click();
    cy.get("#page-deliver form h1").should(
      "have.text",
      "Cadastre-se para  fazer entregas"
    );

    var entregador = {
      nome: "Rodrigo Xavier",
      cpf: "09354312356",
      email: "rodrigo@gmail.com",
      whatsapp: "11985785690",
      endereco: {
        cep: "04534011",
        rua: "Rua Joaquim Floriano",
        numero: "1000",
        complemento: "Apt 145",
        bairro: "Itaim Bibi",
        cidade_uf: "São Paulo/SP",
      },
      metodo_entrega: "Moto",
      cnh: "cnh-digital.jpg",
    };

    cy.get('input[name="name"]').type(entregador.nome);
    cy.get('input[name="cpf"]').type(entregador.cpf);
    cy.get('input[name="email"]').type(entregador.email);
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp);

    cy.get('input[name="postalcode"]').type(entregador.endereco.cep);
    cy.get('input[type="button"][value="Buscar CEP"]').click();

    cy.get('input[name="address-number"]').type(entregador.endereco.numero);
    cy.get('input[name="address-details"]').type(
      entregador.endereco.complemento
    );

    cy.get('input[name="address"]').should(
      "have.value",
      entregador.endereco.rua
    );
    cy.get('input[name="district"]').should(
      "have.value",
      entregador.endereco.bairro
    );
    cy.get('input[name="city-uf"]').should(
      "have.value",
      entregador.endereco.cidade_uf
    );

    cy.contains(".delivery-method li", entregador.metodo_entrega).click();

    cy.get('input[accept^="image"]').attachFile("/image/" + entregador.cnh);
  });
});
