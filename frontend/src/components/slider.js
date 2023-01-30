import React from "react";
import Carousel from 'react-bootstrap/Carousel'
import Chip from '@material-ui/core/Chip'
import { Form, FormControl} from 'react-bootstrap'
const Slider = () => {
    return(
        <div className="slider">
            <Carousel>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src="images/img4.jpg"
                    alt="First slider"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src="images/img5.jpg"
                    alt="First slider"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100"
                    src="images/img6.jpg"
                    alt="First slider"
                    />
                </Carousel.Item>
            </Carousel>
            <div className="hn">
                <p>Find the perfect <i>Services for your Business</i></p>
                <Form inline>
                    <img className="searchlogo" alt="logo" src="images/searchlogo.jpg"/>
                    <FormControl type="text" placeholder='Try "building mobile app"' className="mr-lg-0"/>
                    <button className="btnn">Search</button>
                </Form>
                <div className="populer">
                    popular:
                    <Chip className="Chip" 
                        variant="outlined" 
                        size="small" 
                        label="React" 
                        component="a" 
                        href="#chip" 
                        clickable />

                    <Chip className="Chip" 
                        variant="outlined" 
                        size="small" 
                        label="Web" 
                        component="a" 
                        href="#chip" 
                        clickable />

                    <Chip className="Chip" 
                        variant="outlined" 
                        size="small" 
                        label="Node js" 
                        component="a" 
                        href="#chip" 
                        clickable />
                    
                    <Chip className="Chip" 
                        variant="outlined" 
                        size="small" 
                        label="UI/UX" 
                        component="a" 
                        href="#chip" 
                        clickable />


                </div>

            </div>
        </div>
    )
}

export default Slider