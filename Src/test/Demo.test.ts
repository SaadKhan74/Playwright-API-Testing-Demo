import { APICheck, APItest, PostRequest } from "../main/Demo.tasks";
import { test } from "@playwright/test";

test('API Requests and Responses', async ({ page }) => {
  
    await APItest(page);
    await APICheck(page);
    await PostRequest(page);

  });