import React, { useEffect, useState } from "react";
import axios from "axios";
import ProjectList from "./ProjectList";
import styled from "styled-components";

function AllProjects(props) {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/projects/")
      .then(response => {
        console.log(response.data);
        setProjects(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [projects]);

  return (
    <section>
      <h1>Projects</h1>
      {projects.map(project => (
        <ProjectList key={project.id} project={project} />
      ))}
    </section>
  );
}

export default AllProjects;

const Card = styled.div`
  display: grid;
  justify-content: space-evenly;
  flex-direction: column;
  align-items: center;
  margin: 1vw;
  padding: 1vw;
  background: lightblue;
`;
