import image from '../../../assets/pages/about.jpg';
import { Footer } from '../../Ui';


export const About = () => {
    return (

        <>
            <div className='about-us'>
                <h1> About us </h1>

                <div className="about-grid">
                    <div className="about-image">
                        <img src={ image } alt="About us" />
                    </div>

                    <div className="about-info">
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae temporibus doloremque commodi eveniet, dolorem, nam quisquam vel sint veritatis porro qui aliquam repudiandae saepe voluptatem quia distinctio dolorum pariatur quaerat.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};
