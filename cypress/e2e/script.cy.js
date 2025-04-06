describe('Kirby Weather App', () => {
  it('should render the webpage visible with input field', () => {
    cy.visit('https://dasariadi66.github.io/kirby-temperature-app/');
    cy.get('#cityInput').should('be.visible');
    cy.get('#cityInput').should('have.attr', 'placeholder', 'Enter city name');
     });
  it('should display an error for an invalid city name', ()=>{
    cy.visit('https://dasariadi66.github.io/kirby-temperature-app/');
    cy.get('#cityInput').type('invalidName');
    cy.get('button').click();
    cy.get('#weatherInfo').should('contain.text', 'Error: City not found');
  });
  it('should fetch weather data for a city when a city is entered and user clicks Enter on keyboard', ()=>{
    cy.visit('https://dasariadi66.github.io/kirby-temperature-app/');
    cy.get('#cityInput').type('Toronto');
    cy.get('button').click();
    cy.get('#weatherInfo').should('contain.text', 'Toronto');
    cy.get('#weatherInfo').should('contain.text', 'Temperature');
    cy.get('#weatherInfo').should('contain.text', 'Humidity');
    cy.get('#weatherInfo').should('contain.text', 'Wind Speed');
  })
  }
);