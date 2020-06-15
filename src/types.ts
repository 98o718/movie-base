export type Film = {
  popularity: number
  vote_count: number
  video: boolean
  poster_path: string
  id: number
  adult: boolean
  backdrop_path: string
  original_language: string
  original_title: string
  genre_ids: number[]
  title: string
  vote_average: number
  overview: string
  release_date: string
}

export type Details = {
  adult: boolean
  backdrop_path: string | null
  belongs_to_collection: null | any
  budget: number
  genres: {
    id: number
    name: string
  }[]
  homepage: string | null
  id: number
  imdb_id: string | null
  original_language: string
  original_title: string
  overview: string | null
  popularity: number
  poster_path: string | null
  production_companies: {
    id: number
    logo_path: string | null
    name: string
    origin_country: string
  }[]
  production_countries: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string | undefined
  revenue: number
  runtime: number | null
  spoken_languages: {
    iso_639_1: string
    name: string
  }[]
  status: string
  tagline: string | null
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export type ShortFilm = {
  poster: string
  releaseDate: string
  title: string
  id: number
}

export type ReqResult = {
  page: number
  total_results: number
  total_pages: number
  results: Film[]
}
