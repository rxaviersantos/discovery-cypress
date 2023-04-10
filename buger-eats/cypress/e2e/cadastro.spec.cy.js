/**Validação
 * Checkinpoint
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
    };
    cy.get('input[name="name"]').type(entregador.nome);
    cy.get('input[name="cpf"]').type(entregador.cpf);
    cy.get('input[name="email"]').type(entregador.email);
    cy.get('input[name="whatsapp"]').type(entregador.whatsapp);
  });
});
