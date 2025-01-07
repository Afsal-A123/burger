import about1 from '../../asserts/about1.png';
import about2 from '../../asserts/about2.png';
import about3 from '../../asserts/about3.png';
import "./About.css";
function About() {
    return (
        <div className='about'>
            <div className='about1'>

                <div>

                    <img src={about1} alt='about' />
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
            <div className="about2">
                <div className="container">
                    <div className="row">

                        <div className="col-md-5 col-lg-6">
                            <div className="about-4-txt mb-40">
                                <h2 className="h2-sm">Discover the new taste of the burger</h2>
                                    <p className="p-md grey-color">
                Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor an tempus feugiat dolor lacinia cubilia a curae integer orci congue and metus mollislorem primis
                                    </p>
                                    <img className="img-fluid" src={about2} alt="about-image"  />
                            </div>
                        </div>

   
                        <div className="col-md-5 col-lg-6">
                            <div className="about-4-img mb-40">
                                <img className="img-fluid" src={about3} alt="about-image" />
                                        <p className="p-md grey-color">
                Porta semper lacus cursus, feugiat primis ultrice and ligula risus auctor orci tempus feugiat dolor lacinia cubilia integer
                                        </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;