import project1 from "../../../Assets/Project1.jpg"
import project2 from "../../../Assets/Project2.jpg"
import challenge6 from "../../../Assets/Challenge6.png"

const projects = [
  {
    image: project1,
    link: 'https://namhn123.github.io/Currency-Converter/'
  },
  {
    image: project2,
    link: 'https://study-group-maker-61e342b966ed.herokuapp.com/',
  },
  {
    image: challenge6,
    github: 'https://namhn123.github.io/challenge-6/',
  }
];

export default function Portfolio() {
  return (
    <div className="d-flex align-items-center flex-column w-100">
      <h1>Projects</h1>
      <div className="row w-100">
        {projects.map((project) => (
          <div className="col-4">
            <a href={project.link}>
              <img src={project.image} width="400" height="200"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
