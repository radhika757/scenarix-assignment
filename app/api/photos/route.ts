import { NextResponse } from 'next/server';
import { createClient } from 'pexels';

export async function GET() {
  const apiKey = process.env.NEXT_PUBLIC_PEXELS_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: 'API key is missing' }, { status: 500 });
  }

  try {
    const client = createClient(apiKey);
    const response = await client.photos.search({
      query: 'ai generated art',
      per_page: 60,
    });

    if ("error" in response) {
      throw new Error(response.error);
    }

    const formattedPhotos = response.photos.map((photo) => ({
      id: photo.id,
      title: photo.alt || 'Untitled',
      description: photo.alt || 'No description available',
      image: photo.src.large2x,
      tags: ['Abstract', 'Digital', 'Art'],
      photographer: photo.photographer,
      photographerUrl: photo.photographer_url,
    }));

    return NextResponse.json(formattedPhotos);
  } catch (error) {
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Error fetching data' },
      { status: 500 }
    );
  }
}
