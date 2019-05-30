import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { Provider } from 'react-redux';

import MoviesGridContainer from '../index';

const mockStore = configureMockStore();
const store = mockStore({
  movies: [
    {
      id: 412059,
      title: 'Mobile Homes',
      tagline: '',
      vote_average: 0,
      vote_count: 1,
      release_date: '2018-04-04',
      poster_path: 'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
      overview: 'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
      budget: 0,
      revenue: 0,
      genres: [
        'Drama',
      ],
      runtime: 105,
    },
    {
      id: 424585,
      title: 'Mademoiselle Paradis',
      tagline: '',
      vote_average: 6,
      vote_count: 2,
      release_date: '2018-04-04',
      poster_path: 'https://image.tmdb.org/t/p/w500/k93b9hE30fdYG63atluVP5aDm2V.jpg',
      overview: '18th century Vienna. The true story of Maria Theresia von Paradis, a gifted piano player and close friend of Mozart’s, who lost her eye-sight as a child. Desperate to cure their talented daughter, the Paradis entrust Maria to Dr. Mesmer, a forward-thinking-physician who gives her the care and attention that she requires. With the doctor’s innovative techniques of magnetism, Maria slowly recovers her sight. But this miracle comes at a price as the woman progressively starts to lose her gift for music. Faced with a heavy dilemma, Mademoiselle Paradis will have to choose: an ordinary life in the light or an extraordinary life in darkness, as a virtuoso.',
      budget: 0,
      revenue: 0,
      genres: [
        'History',
        'Drama',
      ],
      runtime: 97,
    },
  ],
  movie: {
    id: 412059,
    title: 'Mobile Homes',
    tagline: '',
    vote_average: 0,
    vote_count: 1,
    release_date: '2018-04-04',
    poster_path: 'https://image.tmdb.org/t/p/w500/of72rtl3j0C9yJMlSJZHXnaByz8.jpg',
    overview: 'In forgotten towns along the American border, a young mother drifts from one motel to the next with her intoxicating boyfriend and her 8-year-old son. The makeshift family scrapes by, living one hustle at a time, until the discovery of a mobile home community offers an alternative life.',
    budget: 0,
    revenue: 0,
    genres: [
      'Drama',
    ],
    runtime: 105,
  },
  fetchMovie: () => ('Hello'),
  fetchSearchMovies: () => ('Hello'),
});

jest.mock('../MoviesGrid', () => jest.fn().mockReturnValue(null));

describe('MoviesGrid', () => {
  it('MoviesGridContainer.spec ', () => {
    TestRenderer.create(
      <Provider store={store}>
        <MoviesGridContainer />
      </Provider>,
    );
    expect(MoviesGridContainer).toBeCalledTimes(1);
  });
});
