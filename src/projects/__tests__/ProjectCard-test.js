import { render, screen } from '@testing-library/react';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { Project } from '../Project';
import ProjectCard from '../ProjectCard';
import userEvent from '@testing-library/user-event';
import renderer from 'react-test-renderer';

describe('<ProjectCard />', () => {
  let project;
  let handleEdit;
  beforeEach(() => {
    project = new Project({
      id: 1,
      name: 'Mission Impossible',
      description: 'This is really difficult',
      budget: 100,
    });
    handleEdit = jest.fn();
    render(
      <MemoryRouter>
        <ProjectCard project={project} onEdit={handleEdit} />
      </MemoryRouter>
    );
  });

  it('handler called when edit clicked', () => {
    // this query works screen.getByText(/edit/i)
    // but using role is better
    userEvent.click(screen.getByRole('button'));
    expect(handleEdit).toBeCalledTimes(1);
    expect(handleEdit).toBeCalledWith(project);
  });

  test('snapshot', () => {
    const tree = renderer
      .create(
        <MemoryRouter>
          <ProjectCard project={project} onEdit={handleEdit} />
        </MemoryRouter>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
