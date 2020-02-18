Feature('search');

Scenario('search test', (I) => {
    I.amOnPage('https://investinperm.ru/');
    I.click({css: '.header__search-btn'});
    I.fillField({css: '.prompt'},'123');
    I.pressKey('Enter');
    I.see('Капитальный ремонт автомобильной дороги Кудымкар-Гайны');
});
