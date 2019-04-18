import React from 'react';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';

import MovieElementContainer from '../index';

const mockStore = configureMockStore();
const store = mockStore({
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
  data: {
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

jest.mock('../MovieElement', () => jest.fn().mockReturnValue(null));

describe('MovieElement', () => {
  it('MovieElementContainer.spec ', () => {
    TestRenderer.create(
      <Provider store={store}>
        <MemoryRouter>
          <MovieElementContainer />
        </MemoryRouter>
      </Provider>,
    );
    expect(MovieElementContainer).toBeCalledTimes(1);
  });
});
