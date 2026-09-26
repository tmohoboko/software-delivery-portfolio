import { test, expect } from "@playwright/test";

test("SMOKE-001 Homepage loads", async ({ page }) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  const response = await page.goto("/");
  expect(response.status()).toBe(200);
  await expect(page).toHaveTitle(
    "Software Delivery & QA Portfolio | Tshepo Mohoboko",
  );
  await expect(page.locator("#operations h2")).toBeVisible();
  await expect(page.locator("#stakeholders h2")).toBeVisible();
  await page.screenshot({ path: "qa/screenshots/desktop.png", fullPage: true });
  expect(errors).toEqual([]);
});

test("SMOKE-002 Hero heading visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Software Delivery,QA & DevOpsPortfolio",
  );
  await expect(
    page.getByRole("heading", { name: "From Requirement to Release" }),
  ).toBeVisible();
  await expect(
    page.locator('.hero a[href="https://github.com/tmohoboko"]'),
  ).toBeVisible();
  await expect(
    page.locator(
      '.hero a[href="https://www.linkedin.com/in/tshepo-undefined-594170330/"]',
    ),
  ).toBeVisible();
});

test("SMOKE-003 Manifesto visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#manifesto")).toBeVisible();
  await expect(
    page.getByText(
      "I build software as a delivery system, not as isolated code.",
    ),
  ).toBeVisible();
  await expect(page.locator(".completion strong")).toHaveText(
    "working software + verified behavior + documented evidence + reproducible delivery.",
  );
});

test("SMOKE-004 Capability matrix visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#capabilities h2")).toBeVisible();
  await expect(page.locator(".capability")).toHaveCount(11);
});

test("SMOKE-005 Moya Glow project card visible", async ({ page }) => {
  await page.goto("/");
  const card = page.getByTestId("moya-card");
  await expect(
    card.getByRole("heading", { name: "Moya Glow Commerce" }),
  ).toBeVisible();
  await expect(card.getByText("SHIPPED", { exact: true })).toBeVisible();
  await expect(page.locator(".planned .badge")).toHaveCount(6);
  for (const badge of await page.locator(".planned .badge").all())
    await expect(badge).toHaveText("PLANNED");
});

test("SMOKE-006 Moya Glow external production link is correct", async ({
  page,
}) => {
  await page.goto("/");
  const link = page
    .getByTestId("moya-card")
    .getByRole("link", { name: "View live project" });
  await expect(link).toHaveAttribute(
    "href",
    "https://moya-glow-commerce.vercel.app",
  );
  await expect(link).toHaveAttribute("target", "_blank");
  await expect(link).toHaveAttribute("rel", "noopener noreferrer");
});

test("SMOKE-007 QA process section visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#qa h2")).toBeVisible();
  await expect(page.locator("#qa .flow li")).toHaveCount(9);
  await expect(
    page.locator("#qa .flow li").filter({ hasText: "Release Assessment" }),
  ).toBeVisible();
});

test("SMOKE-008 Delivery lifecycle visible", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("#lifecycle h2")).toBeVisible();
  await expect(page.locator(".lifecycle li")).toHaveCount(12);
  await expect(page.locator(".lifecycle li").last()).toContainText("Improve");
});

test("SMOKE-009 Mobile viewport renders without catastrophic layout failure", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toBeInViewport();
  await expect(page.getByRole("navigation")).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(390);
  for (const id of [
    "projects",
    "manifesto",
    "capabilities",
    "lifecycle",
    "qa",
    "operations",
    "stakeholders",
  ]) {
    const section = page.locator("#" + id);
    await section.scrollIntoViewIfNeeded();
    await expect(section).toBeVisible();
    const bounds = await section.boundingBox();
    expect(bounds.x).toBeGreaterThanOrEqual(0);
    expect(bounds.x + bounds.width).toBeLessThanOrEqual(390);
  }
  await page.screenshot({ path: "qa/screenshots/mobile.png", fullPage: true });
});

test("SMOKE-010 Primary navigation and section links work", async ({
  page,
}) => {
  await page.goto("/");
  for (const link of await page
    .getByRole("navigation")
    .getByRole("link")
    .all()) {
    const href = await link.getAttribute("href");
    await link.click();
    await expect(page).toHaveURL(new RegExp(href + "$"));
    await expect(page.locator(href + " h2")).toBeInViewport();
  }
  for (const link of await page.locator('a[href^="#"]').all()) {
    const href = await link.getAttribute("href");
    await expect(page.locator(href)).toHaveCount(1);
  }
  for (const [name, id] of [
    ["View Projects", "projects"],
    ["View QA Evidence", "qa"],
    ["View Delivery Process", "lifecycle"],
  ]) {
    await page.locator(".hero").getByRole("link", { name }).click();
    await expect(page).toHaveURL(new RegExp("#" + id + "$"));
    await expect(page.locator("#" + id + " h2")).toBeInViewport();
  }
});
