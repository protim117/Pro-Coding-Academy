import React from 'react';
import { useHistory } from 'react-router-dom';

const AboutUs = () => {
    // using history 
    const history=useHistory();
    const handleCourses=()=>{
        history.push('/services')
    }
    return (
        <div className='text-center mt-5 pb-5'>
            {/* About the website  */}
            <h1 className='text-decoration-underline fw-bold'>WELCOME</h1>
            <h5 className='pt-5 lh-lg'>Welcome to PRO Coding Academy! We are a learning community engaging students in computer science pathways and innovative academic experiences that empower them to make confident decisions about their life’s journey. To grow students from being tech consumers to tech creators, teacher teams will use inquiry investigations, integrated across contents. Student-centered learning experiences focus on meeting the students where they are, highlighting humanity at its best so students can discover and create their own meaning.  </h5>

            {/* redirecting to courses  */}
            <h4>See Our Courses </h4>
            <button className='learn-button' onClick={handleCourses}>All Courses</button>
        </div>
    );
};

export default AboutUs;