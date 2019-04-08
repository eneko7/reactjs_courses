import React from 'react';
// import ShallowRenderer from 'react-test-renderer/shallow';
import TestRenderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import MoviesGrid from '../MoviesGrid';


// const shallow = new ShallowRenderer();
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const data = {
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
  isFetchingMovies: false,
  isFetchedMovies: true,
  fetchDefaultMovies: () => ('Hello'),
  fetchNextMovies: () => ('Hello'),
};

const dataDone = {
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
  isFetchingMovies: true,
  isFetchedMovies: false,
  fetchDefaultMovies: () => ('Hello'),
  fetchNextMovies: () => ('Hello'),
};

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
  isFetchingMovies: false,
  isFetchedMovies: true,
});

const failedData = {
  movies: [],
  isFetchingMovies: true,
  isFetchedMovies: false,
  fetchDefaultMovies: () => ('Hello'),
  fetchNextMovies: () => ('Hello'),
};

const storeFailed = mockStore({
  movies: [],
  isFetchingMovies: true,
  isFetchedMovies: false,
});

describe('MoviesGrid', () => {
  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesGrid {...data} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesGrid {...dataDone} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('renders correctly', () => {
    const component = TestRenderer.create(
      <Provider store={storeFailed}>
        <MoviesGrid {...failedData} />
      </Provider>,
    );
    expect(component).toMatchSnapshot();
  });

  it('function for fetch next films should be called after scrolling', () => {
    const eventMap = {
      scroll: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    Object.defineProperty(global.window, 'innerHeight', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.window, 'pageYOffset', {
      writable: true,
      value: 1000,
    });
    Object.defineProperty(global.document.body, 'scrollHeight', {
      writable: true,
      value: 1,
    });
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesGrid {...data} />
      </Provider>,
    );
    eventMap.scroll();
    expect(component).toMatchSnapshot();
  });

  it('function for fetch next films should be called after scrolling', () => {
    const eventMap = {
      scroll: null,
    };
    global.document.addEventListener = jest.fn((event, cb) => {
      eventMap[event] = cb;
    });
    Object.defineProperty(global.window, 'innerHeight', {
      writable: true,
      value: 0,
    });
    Object.defineProperty(global.window, 'pageYOffset', {
      writable: true,
      value: 0,
    });
    Object.defineProperty(global.document.body, 'scrollHeight', {
      writable: true,
      value: 1,
    });
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesGrid {...data} />
      </Provider>,
    );
    eventMap.scroll();
    expect(component).toMatchSnapshot();
  });

  it('lifecycle method should have been called', () => {
    const component = TestRenderer.create(
      <Provider store={store}>
        <MoviesGrid {...data} />
      </Provider>,
    );
    component.unmount();
  });
});
