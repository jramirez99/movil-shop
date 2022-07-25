import { Form } from "../../Ui/components/Form";

import image from '../../../assets/pages/contact.jpg';
import { Footer } from "../../Ui/components/Footer";

export const Contact = () => {
    return (
        <>
            <div className="contact-content">
                <h2 className="contact-title"> 
                    <span> Contact </span> 
                    Us 
                </h2>

                <div className="contact-grid">
                    <Form />

                    <div className="contact-image">
                        <img 
                            src={ image } 
                            alt="Contact us"
                            className="image" 
                        />
                    </div>
                </div>
            </div>
        </>

    );
};
