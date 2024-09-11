// src/pages/api/register.ts
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { username, email, password } = data;

  // Here, you would typically:
  // 1. Validate the input
  // 2. Check if the user already exists
  // 3. Hash the password
  // 4. Create the user in your database (Strapi)

  // For now, we'll just return a mock response
  return new Response(JSON.stringify({
    success: true,
    message: 'User registered successfully'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};