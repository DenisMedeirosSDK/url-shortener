import { Request, Response } from 'express';

import { UrlShortener } from '../schemas/UrlShortener';
import { generateEncoded } from '../utils/generateEncoded';

export async function createUrlShortener(
  request: Request,
  response: Response
): Promise<Response> {
  const { originalUrl } = request.body;

  if (originalUrl === null || originalUrl === '') {
    new Error('Url cannot be empty or null');

    return response.json({ error: 'Url cannot be empty or null' });
  }

  let encoded = generateEncoded();

  const encodedExists = await UrlShortener.findOne({
    encoded,
  });

  if (encodedExists) {
    for (let i = 0; i < 10; i++) {
      encoded = generateEncoded();
    }
  }

  const urlShortener = await UrlShortener.create({
    originalUrl,
    encoded,
    createdAt: new Date(Date.now()),
  });

  return response.status(201).json(urlShortener);
}

export async function redirectUrlShortener(
  request: Request,
  response: Response
) {
  try {
    const { encoded } = request.params;

    const urlShortener = await UrlShortener.findOne({
      encoded,
    });

    if (!urlShortener) {
      throw new Error('Url shortener not exists!');
    }

    if (urlShortener.originalUrl === null) {
      return response.status(404);
    }
    const originalUrl = urlShortener.originalUrl;

    response.status(302).redirect(originalUrl);
  } catch (error) {
    return response.status(400);
  }
}
