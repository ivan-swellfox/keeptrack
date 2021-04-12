// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from '../App';
// import HomePage from './HomePage';
// import { shallow } from 'enzyme';

// test('renders home heading', () => {
//   render(<App />);
//   expect(screen.getByRole('heading')).toHaveTextContent('Home');
// });

// test('renders title tag', () => {
//   let wrapper;
//   wrapper = shallow(<HomePage />);
//   expect(wrapper.exists('h2')).toBeTruthy();
// });
import React from 'react';
import { render, screen } from '@testing-library/react';
import { shallow, ShallowWrapper } from 'enzyme';
import App from '../App';
import HomePage from './HomePage';
import renderer from 'react-test-renderer';

describe('<HomePage />', () => {
  test('should render without crashing', () => {
    render(<App />);
  });

  test('snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('<HomePage/>', () => {
  test('renders learn react link', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading')).toHaveTextContent('Home');
  });
  test('snapshot', () => {
    const tree = renderer.create(<HomePage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
