// src/pages/api/login.ts
import type { APIRoute } from 'astro';

export const post: APIRoute = async ({ request }) => {
  const data = await request.json();
  const { email, password } = data;

  // Here, you would typically:
  // 1. Validate the input
  // 2. Check the user's credentials against your database (Strapi)
  // 3. Generate a JWT token if the credentials are valid

  // For now, we'll just return a mock response
  return new Response(JSON.stringify({
    success: true,
    message: 'Login successful',
    token: 'mock_jwt_token'
  }), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
};