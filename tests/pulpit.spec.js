import { test, expect } from '@playwright/test';

test.describe('Pulpit test', () => {

    test('test', async ({ page }) => {
        await page.goto('https://demo-bank.vercel.app/pulpit.html');
        await page.getByTestId('login-input').fill('testerlo');
        await page.getByTestId('password-input').fill('12345678');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_transfer_receiver').selectOption('2');
        await page.locator('#widget_1_transfer_amount').fill('150');
        await page.locator('#widget_1_transfer_title').fill('Zwrot środków');

        await page.locator('#execute_btn').click();
        await page.getByTestId('close-button').click();

        
      });

      test('successful mobile top-up', async ({page}) => {

        await page.goto('https://demo-bank.vercel.app/pulpit.html');
        await page.getByTestId('login-input').fill('testerlo');
        await page.getByTestId('password-input').fill('12345678');
        await page.getByTestId('login-button').click();

        await page.locator('#widget_1_topup_receiver').selectOption('500 xxx xxx');
        await page.locator('#widget_1_topup_amount').fill('40');
        await page.locator('#uniform-widget_1_topup_agreement span').click();
        await page.getByRole('button', { name: 'doładuj telefon' }).click();
        await page.getByTestId('close-button').click();

        await expect(page.locator('#show_messages')).toHaveText('Doładowanie wykonane! 40,00PLN na numer 500 xxx xxx')
      });
      
});
