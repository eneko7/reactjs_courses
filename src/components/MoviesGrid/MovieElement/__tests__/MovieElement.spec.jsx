import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Enzyme, { configure, mount } from 'enzyme';
import { MemoryRouter } from 'react-router';
import MovieElement from '../MovieElement';

const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

configure({ adapter: new Adapter() });

global.scrollTo = jest.fn();

const shallowRenderer = new ShallowRenderer();
const data = {
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
};

const failedData = {
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
  runtime: 105,
};

jest.mock('../../ImagePoster/ImagePoster', () => () => <div>test</div>);
const historyMock = { push: jest.fn() };

describe('MovieElement', () => {
  it('renders correctly', () => {
    shallowRenderer.render(<MovieElement data={data} movie={data} history={historyMock} fetchSearchMovies={() => ('Hello')} />);
    const result = shallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });
  it('renders without data correctly', () => {
    shallowRenderer.render(<MovieElement data={null} movie={data} history={historyMock} fetchSearchMovies={() => ('Hello')} />);
    const result = shallowRenderer.getRenderOutput();
    expect(result).toMatchSnapshot();
  });

  it('MovieElement -> Click on Movie card (open)', () => {
    const wrapper = mount((
      <MemoryRouter>
        <MovieElement data={data} movie={data} history={historyMock} fetchSearchMovies={() => ('Hello')} />
      </MemoryRouter>
    ));
    const element = wrapper.find('.movie_element').simulate('click');
    expect(element).toMatchSnapshot();
  });

  it('MovieElement -> Click on Movie card (open) and scroll up', () => {
    Object.defineProperty(global.window, 'scrollY', {
      writable: true,
      value: 0,
    });
    const wrapper = mount((
      <MemoryRouter>
        <MovieElement data={data} movie={data} history={historyMock} fetchSearchMovies={() => ('Hello')} />
      </MemoryRouter>
    ));
    const element = wrapper.find('.movie_element').simulate('click');
    expect(element).toMatchSnapshot();
  });

  it('renders without data correctly', () => {
    const wrapper = mount((
      <MemoryRouter>
        <MovieElement data={failedData} movie={failedData} history={historyMock} fetchSearchMovies={() => ('Hello')} />
      </MemoryRouter>
    ));
    const element = wrapper.find('.movie_element').simulate('click');
    expect(element).toMatchSnapshot();
  });
});
