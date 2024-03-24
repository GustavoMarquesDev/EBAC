/// <reference types="cypress" />

describe("Testes para atualização da agenda", () => {
  beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
  });

  it("Deve verificar se a aplicação foi renderizada", () => {
    cy.get("h1").contains("Agenda");
    cy.get("input").should("have.length", 3);
  });

  it("Deve adicionar um contato novo", () => {
    cy.get('input[type="text"]').type("Gustavo");
    cy.get('input[type="email"]').type("gustavo-markes@hotmail.com");
    cy.get('input[type="tel"]').type("18997999999");
    cy.get(".adicionar").click();
  });

  it("Deve remover um contato existente", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .delete").click();
  });

  it("Deve editar um contato", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .edit").click();
    cy.get('input[type="text"]').type(" Manoel Gomes");
    cy.get(".alterar").click();
  });
});
