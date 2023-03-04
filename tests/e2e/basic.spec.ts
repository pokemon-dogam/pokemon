import { test, expect } from '@playwright/test'

test('homepage details', async ({ page }) => {
  await page.goto('/')

  await expect(page).toHaveTitle('Vue3-Vite-Skeleton')
  await expect(page.locator('h2').first()).toHaveText('테스트 컴포넌트')
})
