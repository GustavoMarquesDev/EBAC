/// <reference types="cypress" />

describe("Testes para a pagina de candidatura", () => {
  beforeEach(() => {
    cy.visit("https://ebac-jobs-e2e.vercel.app/");
  });

  it("Deve levar o usuário até o formulário de incrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get("input").should("have.length", 7);
    cy.screenshot("tela-inscricao");
  });

  it("Deve preencher o formulário de inscrição", () => {
    cy.get(".Vaga_vagaLink__DeFkk").first().click();
    cy.get('input[name="nome-completo"]').type("Gustavo Marques");
    cy.get('input[name="email"]').type("gustavo-markes@hotmail.com");
    cy.get('input[name="telefone"]').type("18997133333");
    cy.get('input[name="endereco"]').type(
      "Rua Antonio Buzzeto, 457 , Vila Cicma, Adamantina-SP"
    );
    cy.get("#linux").check();
    cy.get('select[name="escolaridade"]').select("outros");
    cy.get(".Aplicacao_button__tw2AE").click();

    cy.on("window:alert", (conteudo) => {
      expect(conteudo).contain("Obrigado pela candidatura!");
    });

    cy.screenshot("tela-inscricao-preenchido");
  });
});
