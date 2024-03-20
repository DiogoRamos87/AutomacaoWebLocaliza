import {test} from "@playwright/test";
import { getParseTreeNode } from "typescript";


// // teste 001 pagina -- ok


// test ('teste de pagina localiza', async ({ page }) => {
// await page.goto('https://www.localiza.com/brasil/pt-br')

// });

// teste 002 visualizar pop-up localiza quer saber sua localização ------- não aparece no debug o pop-up - tirar duvida com henrique

// teste 003 conheça nossa frota- 

test ('teste de pagina localiza', async ({ page }) => {
    await page.goto('https://www.localiza.com/brasil/pt-br');
    await page.getByRole('link', { name: 'Confira todos os grupos' }).click();

  // ver com henrique... no final ta sumindo o teste e não dar pra ver o local.

});


//teste abas: "grupo de carros", "rede de agências", "ofertas", "fidelidade","para empresas", "dúvidas"


// test ('teste abas', async ({page}) => {
//     await page.goto('https://www.localiza.com/brasil/pt-br'),
//   await page.getByRole('link', { name: 'GRUPOS DE CARROS' }).click();
//   await page.getByTestId('loc-menu-desk').getByRole('link', { name: 'REDE DE AGÊNCIAS' }).click();
//   await page.getByTestId('loc-menu-desk').getByRole('link', { name: 'OFERTAS' }).click();
//   await page.getByTestId('loc-menu-desk').getByRole('link', { name: 'FIDELIDADE' }).click();
//   await page.getByTestId('para_empresas_mobile').click();
//   await page.getByTestId('loc-menu-desk').getByRole('link', { name: 'Dúvidas' }).click();

// });

//test()