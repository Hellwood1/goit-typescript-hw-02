import axios from 'axios';

axios.defaults.baseURL = "https://api.unsplash.com/";
axios.defaults.headers.common['Authorization'] = "Client-ID jTHS3Vv6z-bXZfWLysjf1qTlFUOnpGH82vdOJRHowy0";

export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}

interface UnsplashResponse {
  results: Photo[];
  total: number;
  total_pages: number;
}

export default async function getPhotosByQuery(searchQuery: string, page: number): Promise<Photo[]> {
  const response = await axios.get<UnsplashResponse>('search/photos', {
    params: {
      query: searchQuery,
      per_page: 6,
      page,
    },
  });

  return response.data.results;
}