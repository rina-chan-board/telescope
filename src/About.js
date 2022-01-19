const About = () => {
    return ( <div className="about">
        <div className="aboutmsg">
            <h1 className="abouttitle">ABOUT TELESCOPE</h1>

            <p className="aboutbody">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  <br/> <br/> 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br/> <br/> 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. <br/> <br/>
            
            Some features I'd like to add: 

            <ul>
                <li>remove spacing between liked photo rows DONE</li>
                <li>clean up about page lol</li>
                <li>make it so you can't go to the future DONE</li>
                <li>save likes using local storage DONE</li>
                <li>make cooler like animation DONE </li>
                <li>add stars and rotate background</li>
                <li>decide where to center background DONE</li>
                <li>improve mobile layout</li>
                <li>expand photo to view full/original size DONE</li>
                <li>view picture by selecting date</li>
                <li>more interesting animated transitions between pages</li>
            </ul>
            
            made by <a target="_blank" href="https://www.mishmort.net">misha</a>
            </p>
        </div>
    </div> );
}
 
export default About;