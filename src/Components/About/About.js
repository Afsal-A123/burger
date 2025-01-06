import about1 from '../../asserts/about1.png';
import "./About.css";
function About()
{
    return(
        <div className='about'>
            <div>

            <img src={about1} alt='about'/>
            </div>
            <div className='desc'>
                <h1>Nothing brings people together like a good burger </h1>
                <p>Semper lacus cursus porta primis ligula risus tempus and sagittis ipsum mauris lectus laoreet purus ipsum tempor enim ipsum porta justo integer ultrice aligula lectus aenean magna and pulvinar purus at pretium gravida</p>
                <ul>
                    <li>Fringilla risus, luctus mauris orci auctor purus euismod pretium purus pretium ligula rutrum tempor sapien</li>
                    <li>Quaerat sodales sapien euismod purus blandit</li>
                    <li>Nemo ipsam egestas volute turpis dolores ut aliquam quaerat sodales sapien undo pretium a purus mauris</li>
                </ul>
            </div>
        </div>
    )
}
export default About;