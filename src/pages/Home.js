
import React from 'react';

function Home() {
  return (
    <div className="bg-gradient-to-r from-gray-200 to-gray-100 min-h-screen flex flex-col justify-center items-center" >
      <header className="text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to our Hiring Platform</h1>
        <p className="text-lg text-gray-600">Find the Perfect Candidates for Your Organization</p>
      </header>
      <main className="mt-8">
        <section className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700">
          We specialize in providing exceptional HR solutions for organizations of all sizes.
          Our platform connects you with top talent and streamlines your hiring process.
          Learn more about our company and how we can assist you in finding the right candidates.
          </p>
       <br/>
        </section>
        <section className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">Key Features</h2>
          
          <ul className="text-gray-700">
           <li>
             <p>
            Easily create and manage job postings with our intuitive interface. Craft detailed job 
            descriptions, specify required qualifications, and set application deadlines, ensuring 
            accurate and enticing job listings.
            </p>

            </li>

             <li>
             <p>
             Automated Applicant Tracking: Our system automates the applicant tracking process, 
             making it a breeze to review candidate applications. All applicant data is organized and
              stored in a centralized location, allowing you to easily access resumes, cover letters, 
              and other relevant materials.
             </p>

           </li>

             <li>
             <p>
             AI-Powered Candidate Screening: Leverage the power of artificial intelligence to automatically
              filter and screen candidates based on predefined criteria. Say goodbye to manual screening processes,
               as our solution intelligently selects the most qualified applicants, saving you precious time.
             </p>

             </li>

             <li>
             <p>
             Seamless Communication: Maintain effective communication with applicants through our platform. Send automated/              emails to acknowledge applications, schedule interviews, and share updates. Providing a positive candidate 
              experience is crucial in building a strong employer brand.
             </p>

             </li>
             <li>
             <p>
             Collaborative Decision-Making: Enable collaboration among stakeholders by granting access to applicant profiles.
              Hiring managers and HR professionals can leave comments, ratings, and feedback, facilitating transparent and 
              unbiased decision-making.
             </p>

             </li>
            </ul>
          
          <br/>
        </section>
        <section className="max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl font-bold mb-4">Benefits</h2>
         
          <ul className="text-gray-700">
            <li>
              <p>
              Time and Cost Savings: Our online recruitment solution eliminates repetitive manual tasks, saving you time 
              and reducing costs associated with traditional recruitment methods. Spend your resources more efficiently 
              by focusing on strategic initiatives.
              </p>
            </li>

            <li>
              <p>
              Our AI-driven screening feature ensures that only the most qualified candidates are 
              considered for further evaluation. This improves the overall quality of your applicant pool, increasing the chances
              of making successful hires.
              </p>
            </li>

            <li>
              <p>
              Centralize all recruitment activities within our platform, creating a streamlined and organized
              workflow. From job posting to candidate selection, our solution enhances efficiency and enables faster decision-making.
              </p>
            </li>

            <li>
              <p>
              We prioritize creating a positive experience for applicants. Our user-friendly interface
              makes it easy for candidates to submit their applications and stay updated throughout the recruitment process, enhancing 
              your employer brand.
              </p>
            </li>

            <li>
              <p>
              Gain valuable insights into your recruitment processes with our comprehensive analytics and reports.
              Monitor recruitment metrics, identify areas for improvement, and make data-driven decisions to optimize your hiring strategy
              </p>
            </li>

          </ul>
          <br/>
        </section>
      </main>
      <footer className="bg-gray-200 text-center py-4">
        <p className="text-gray-600">&copy; 2023 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Home;
