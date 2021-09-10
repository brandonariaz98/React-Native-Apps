import axios from "axios";

const movieDB = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie',
  params: {
    api_key: '660c9273aabe8cc35f4aef9d4bc39cfa',
    language: 'es-ES'
  }
});

export default movieDB;