// import React, { useState, useEffect } from 'react';
import React, { useEffect } from 'react';
// import { Project } from './Project';
import { useSelector, useDispatch } from 'react-redux';
// import { projectAPI } from './projectAPI';
import { loadProjects } from './state/projectActions';
// import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';

function ProjectsPage() {
  // const [projects, setProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(undefined);
  // const [currentPage, setCurrentPage] = useState(1);

  const loading = useSelector((appState) => appState.projectState.loading);
  const projects = useSelector((appState) => appState.projectState.projects);
  const error = useSelector((appState) => appState.projectState.error);
  const currentPage = useSelector((appState) => appState.projectState.page);
  const dispatch = useDispatch();

  const handleMoreClick = () => {
    // setCurrentPage((currentPage) => currentPage + 1);
    dispatch(loadProjects(currentPage + 1));
  };

  // useEffect(() => {
  //   setLoading(true);
  //   projectAPI
  //     .get(currentPage)
  //     .then((data) => {
  //       setLoading(false);

  //       if (currentPage === 1) {
  //         setProjects(data);
  //       } else {
  //         setProjects((projects) => [...projects, ...data]);
  //       }
  //     })
  //     .catch((e) => {
  //       setLoading(false);
  //       setError(e.message);
  //     });
  // }, [currentPage]);

  useEffect(() => {
    dispatch(loadProjects(1));
  }, [dispatch]);

  // Approach 2: using async/await
  // useEffect(() => {
  //   async function loadProjects() {
  //     setLoading(true);
  //     try {
  //       const data = await projectAPI.get(1);
  //       setProjects(data);
  //     } catch (e) {
  //       setError(e.message);
  //     } finally {
  //       setLoading(false);
  //     }
  //   }
  //   loadProjects();
  // }, []);

  // const saveProject = (project) => {
  //   projectAPI
  //     .put(project)
  //     .then((updatedProject) => {
  //       let updatedProjects = projects.map((p) => {
  //         return p.id === project.id ? new Project(updatedProject) : p;
  //       });
  //       setProjects(updatedProjects);
  //     })
  //     .catch((e) => {
  //       setError(e.message);
  //     });
  // };
  return (
    <>
      <h1>Projects</h1>
      {error && (
        <div className="row">
          <div className="card large error">
            <section>
              <p>
                <span className="icon-alert inverse "></span>
                {error}
              </p>
            </section>
          </div>
        </div>
      )}
      {/* <ProjectList projects={projects} onSave={saveProject} /> */}
      <ProjectList projects={projects} />
      {!loading && !error && (
        <div className="row">
          <div className="col-sm-12">
            <div className="button-group fluid">
              <button className="button default" onClick={handleMoreClick}>
                More...
              </button>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="center-page">
          <span className="spinner primary"></span>
          <p>Loading...</p>
        </div>
      )}
    </>
  );
}

export default ProjectsPage;
