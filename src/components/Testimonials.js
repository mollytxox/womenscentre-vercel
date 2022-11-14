import AOS from 'aos'
import 'aos/dist/aos.css';

const Testimonials = () => {
    AOS.init()
    return (
        <>
            <div data-aos="zoom-in-up" className="testimonials-container">
                <h1 className="testimonials-header">Testimonials</h1>
                <h3 className="testimonials-subheader"><i>Find out how the Women's Centre has made a difference in people's lives</i></h3>
                <div className="testimonial-boxes-container">
                    <div className="testimonial-box">
                        <p className="testimonial-text">“I cannot thank the Women’s Centre enough for the help I have received... Because of your free counselling service I was finally able to get the professional help I had been desperately seeking for 3 years.”</p>
                        <p className="testimonial-author"><i>— Counselling client</i></p>
                    </div>
                    <div className="testimonial-box">
                        <p className="testimonial-text">“From the moment I entered the Women’s Centre I felt safe. I just don’t know where I would be if I had not sought this help. I found my voice and this has allowed me to confidently move forward into the next phase of my life.”</p>
                        <p className="testimonial-author"><i>— Counselling client</i></p>
                    </div>
                    <div className="testimonial-box">
                        <p className="testimonial-text">“A cliché, I know - I truly have learnt how to love & accept myself and be 100% okay with that. I know where to draw my strength from and how to continue leading the life I want. A miracle!!”</p>
                        <p className="testimonial-author"><i>— Counselling client</i></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials