///<reference types="cypress"/>
describe('Baixando vídeos do you tube', () => {
    let link = 'https://www.youtube.com/watch?v=XXYlFuWEuKI';
    it('Download do Vídeo', () => {
        cy.visit('https://x2download.com/pt52');
        cy.get('#s_input').type(link, { delay: 0 });
        cy.get('.btn-red').click();
        cy.get('#btn-action').click();
        cy.get('#asuccess').click();
    });
});