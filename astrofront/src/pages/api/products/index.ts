// src/pages/api/products/index.ts
import type { APIRoute } from 'astro';
import { readJsonFile } from '../../../utils/jsonUtils';

export const get: APIRoute = async ({ request }) => {
  try {
    const { products } = await readJsonFile('products.json');
    return new Response(JSON.stringify({ products }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch products' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};

// src/pages/api/products/[id].ts dynamic routing
export const get: APIRoute = async ({ params }) => {
  try {
    const { products } = await readJsonFile('products.json');
    const product = products.find((p: any) => p.id === params.id);
    
    if (product) {
      return new Response(JSON.stringify(product), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    } else {
      return new Response(JSON.stringify({ error: 'Product not found' }), {
        status: 404,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
  } catch (error) {
    console.error('Error fetching product:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch product' }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};