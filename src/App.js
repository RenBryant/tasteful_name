import './App.css';

function App() {
  return (
    <>
    {/*name of webpage*/}
    <title>Lauren's Portfolio Webpage</title>
    <h1>
      {/*link to style sheet and profile picture image*/}
      <link rel="stylesheet" href="./assets/style.css" />
      <div>
        <img
          atl="Placeholder-Profile-Pictre"
          src="./assets/images/Profile Picture.JPG"
        />
        <a href="https://github.com/RenBryant">Lauren Bryant</a>
      </div>
    </h1>
    <nav>
      {/*About me, Resume, Experience, Contacts: links*/}
      <ul>
        <li>
          <a href="#About-Me">About Me</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
        <li>
          <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Contacts">Contacts</a>
        </li>
      </ul>
    </nav>
    <br />
    <main>
      <section>
        {/*biography about myself and an introduction to the page*/}
        <article id="About-Me" className="#About-Me" />
        <h2>About Me</h2>
        <p>
          My name is Lauren Bryant. I am a very hard worker, who is used to
          collaborating with a team, but can also work well in isolation. I work
          full-time as a Beauty Advisor who is in training to be the Beauty
          Department Lead. I am also very great at handling difficult schedules
          and multi-tasking. I have been a full-time worker, while also being a
          full-time student at the same time. Even right now I am currently
          enrolled in the UNC Chapel Hill's Coding Camp while also working
          full-time. So I am very good at managing my priorities and getting stuff
          done! I enjoy reading, playing video games, gardening, and coding in my
          free time. I hope that you find that my projects and this biography show
          you that I am an eligible candidate to working with you. Enjoy the rest
          of my page!
        </p>
      </section>
      <br />
      <section>
        {/*Picture of my resume*/}
        <article id="Resume" className="#Resume" />
        <h2>Resume</h2>
        <p>
          <img alt="Resume-Picture" src="./assets/images/Resume.JPG" />
        </p>
      </section>
      <br />
      <section>
        {/*clickable images that send you to deployed website of projects*/}
        <article id="Projects" className="#Projects" />
        <h2>Projects</h2>
        <p></p>
        <div className="fadein">
          <p>Password-Generator-Application</p>
          <a href="https://renbryant.github.io/Password-Generator-Practice/">
            <img
              alt="Password-Generator-Application"
              src="./assets/images/Password-gen-pic.png"
            />
          </a>
          <p>Horiseon-Website</p>
          <a href="https://renbryant.github.io/Horiseon/">
            <img
              alt="Horiseon-Website"
              src="./assets/images/HoriseonWebpageSmaller.jpg"
            />
          </a>
          <p>Beers-and-Cheers-Application</p>
          <a href="https://beatricekallen.github.io/beers-and-cheers/">
            <img
              alt="Beers-and-Cheers-Application"
              src="./assets/images/Beers-and-Cheers-Pic-Small.jpg"
            />
          </a>
          <a href="https://github.com/Qlaub/potluck/">
            <img
              alt="PotLuck-Application"
              src="./assets/images/PotLuck_Application.jpg"
            />
          </a>
        </div>
        <p />
      </section>
      <br />
      <section>
        {/*area for contact information*/}
        <article id="Contacts" className="#Contacts" />
        <h2>Contacts</h2>
        <p>
          <br />
          Phone Number: 123-456-7890
          <br />
          Email: placeholderemail@email.com
          <br />
          <a href="https://www.linkedin.com/in/lauren-bryant-961667230">
            LinkedIn: Lauren Bryant
          </a>
        </p>
        <br />
      </section>
    </main>
    <footer>
      <div>
        {/*link to the top of webpage plus a note stating when and who made it*/}
        <a href="#top">Back to top</a>
        <br />
        Made in 2022 by RenBryant 😁
      </div>
    </footer>
  </>
  );
}

export default App;
