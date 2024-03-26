import React from 'react'

const About = () => {
  return (
    <div className='about-us'>
        <h3>Empowering Doctors, Improving Lives</h3> <br />
        
        <div>
            <b>About BetterHealth LDMS</b> <br />
            BetterHealth LDMS is a cutting-edge platform designed 
            to aid healthcare professionals in the early detection
            and prevention of four major lifestyle diseases: cardiovascular disease, 
            diabetes, lung cancer, and stroke. 
            Our mission is to equip doctors with the tools they need to provide comprehensive 
            and proactive care, ultimately improving patient outcomes and quality of life.
        </div>

        <div className="abt-cards">
            <div className='abt-card'>
                <b>Revolutionizing Lifestyle Disease Screening</b> <br />
                At the core of BetterHealth LDMS lies our advanced risk assessment technology. 
                By analyzing a patient's risk factors, our platform generates a personalized 
                risk score (probability score) for each of the four lifestyle diseases. 
                This invaluable information empowers doctors to identify potential health 
                concerns early on, enabling timely interventions and preventive measures.
            </div>

            
            <div className='abt-card'>
                <b>Comprehensive Risk Factor Analysis</b> <br />
                Our platform takes into account a wide range of risk factors, including medical history, 
                lifestyle habits, and demographic information. By combining these data points, 
                BetterHealth LDMS provides a holistic view of a patient's health, allowing doctors 
                to make informed decisions and tailor their recommendations accordingly.            
            </div>

            <div className='abt-card'>
                <b>Evidence-Based Recommendations</b> <br />
                In addition to risk scores, BetterHealth LDMS offers comprehensive recommendations
                tailored to each patient's unique circumstances. Our recommendations are based on 
                the latest scientific research and clinical guidelines, ensuring that doctors have 
                access to the most up-to-date and effective strategies for disease prevention and management.
            </div>

            <div className='abt-card'>
                <b>Knowledge Hub for Lifestyle Diseases</b> <br />
                BetterHealth LDMS goes beyond risk assessment and recommendations. Our platform serves 
                as a valuable knowledge hub, providing doctors and patients with access to educational 
                resources, statistics, and general awareness about lifestyle diseases. 
                By promoting education and awareness, we aim to empower individuals to make informed 
                decisions and adopt healthier lifestyles.
            </div>

            <div className='abt-card'>
                <b>Collaborative Care</b> <br />
                We understand the importance of collaboration in healthcare. BetterHealth LDMS 
                facilitates seamless communication between doctors and patients, enabling them 
                to work together towards achieving better health outcomes. Our platform ensures 
                that patients receive personalized guidance and support throughout their journey to a healthier lifestyle.
            </div>

            <div className='abt-card'>
                <b>Committed to Innovation</b> <br />
                At BetterHealth LDMS, we are constantly exploring new technologies and advancements 
                in the field of lifestyle disease prevention and management. Our team of experts 
                works tirelessly to incorporate the latest research findings and innovative solutions 
                into our platform, ensuring that our users always have access to the most cutting-edge 
                tools and resources.
            </div>
        </div>

        <b><i>Join us in our mission to build a healthier future. Together, with BetterHealth LDMS, 
            we can empower doctors, raise awareness, and ultimately improve the lives of countless 
            individuals affected by lifestyle diseases.
        </i></b>
    </div>
  )
}

export default About