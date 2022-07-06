import { Page, expect} from "@playwright/test";

export async function APItest(page:Page) {
    
    await page.on( "request", req => console.log( `→ ${req.method()} ${req.resourceType()} ${req.url()} `));
    await page.goto("https://www.google.com/");

}

export async function APICheck({ request }) {
    const response = await request.get('https://emumba-test.herokuapp.com/trend');
    expect(response.status()).toBe(201);
    console.log(response.status())
}

export async function PostRequest({ request }) {
    const response = await request.post('https://emumba-test.herokuapp.com/user', {
        data: {
            "first_name": "Ali",
            "last_name": "Ahmad",
            "email": "ali.ahmadAPItest0@gmail.com",
            "password": "12345",
            "confirm_password": "12345"
              }
    });
    expect(response.status()).toBe(200);
    console.log(response.status())
}