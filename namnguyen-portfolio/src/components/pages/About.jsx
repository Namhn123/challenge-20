import profilePic from "../../../Assets/ProfilePic.jpg"

export default function About() {
  return (
    <div className="d-flex align-items-center flex-column">
      <h1>About me</h1>
      <img src={profilePic} width="200" height="200"/>
      <p className="m-5 h5">
      My name is Nam Nguyen. I graduated from University of Kansas with a Bachelor's degree in Computer Science. 
      I am currently unemployed and joined KU's coding bootcamp in hopes of learning more on topics that weren't as touched upon in my courses. 
      I chose Computer Science because I wasn't sure what to do at first. I initially enrolled in Electrical Engineering courses, but I wasn't understanding or enjoying classes. 
      A programming course was required for the major, and after taking the class, I understood what was going on and I loved seeing things that i built working. 
      I immediately switched over majors. Fun facts about me is that I enjoy watching anime and reading manga. 
      I'm also meeting up with friends to play Dungeons and Dragons and we've been meeting for over 2 years.
      </p>
    </div>
  );
}
