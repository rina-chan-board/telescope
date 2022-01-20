const About = () => {
    return ( <div className="about">
        <div className="aboutmsg">
            <h1 className="abouttitle">ABOUT TELESCOPE</h1>

            <p className="aboutbody">
            welcome to telescope! Look back through years of daily astronomy photos from NASA's photo of the day API. 
            Save the ones you like best for later. <br> <br>
            
            future features:
            <ul>
                <li>view picture by selecting date</li>
                <li>improve mobile layout</li>
                <li>more interesting animated transitions</li>
            </ul>
           
            made by <a target="_blank" href="https://www.mishmort.net">misha</a>
            </p>
        </div>
    </div> );
}
 
export default About;
