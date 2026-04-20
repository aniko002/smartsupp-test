import { test, expect } from '@playwright/test';

test('delete bot', async ({ page })=> {
    await page.goto('https://app.smartsupp.com/app/dashboard/ai-automations/onboarding');

    //Insert of e-mail
    await page.getByTestId('signin-email').fill('');

    //Insert of password 
    await page.getByTestId('signin-password').fill('');

    //Click log in
    await page.getByTestId('signin-submit').click()

    // await expect(page.getByTestId('sidebar-ai-automations')).toBeVisible();

    //click on Mira AI
    await page.locator('a[href="/app/dashboard/ai-automations/"]').click();

    await page.getByTestId('chatbot-card-dropdown').click();

    await page.getByTestId('chatbot-card-dropdown-remove').click();

    await page.getByTestId('delete-modal-confirm').click();
    
})
