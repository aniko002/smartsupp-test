import { test, expect } from '@playwright/test';

test('create bot', async ({ page })=> {
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

    // await expect(page.getByTestId('chatbot-garage-new-bot')).toBeVisible();

    await page.getByTestId('ai-onboarding-primary-button').dispatchEvent('click');

    // await page.getByRole('dialog').getByRole('button', { name: 'Spustit' }).click();

    await page.getByTestId('ai-onboarding-survey-option-web').click();

    await page.getByTestId('ai-onboarding-primary-button').click();

    await page.getByTestId('ai-onboarding-input-web-url').fill('example.com');

    await page.getByRole('button', { name: 'Načíst stránky' }).click();

    await page.getByTestId('ai-onboarding-primary-button').click();

    await page.getByTestId('chatbot-identity-modal-name-input').fill('test');

    await page.getByTestId('ai-onboarding-primary-button').click();

    await page.getByTestId('ai-onboarding-primary-button').click();

    await expect(page.getByTestId('chatbot-workflow-form-publish-btn')).toBeVisible();

})