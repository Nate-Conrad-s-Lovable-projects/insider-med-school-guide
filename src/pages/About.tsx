
import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              About Dr. Mike
            </h1>
            <p className="text-lg text-center">
              Former UCLA Medical School Admissions Committee Member and Advisor
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8 flex flex-col md:flex-row gap-8 items-start">
              <div className="md:w-1/3">
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/placeholder.svg" 
                    alt="Dr. Mike Frazier - Former UCLA admissions committee member" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
              <div className="md:w-2/3">
                <h2 className="text-2xl font-bold mb-4">Dr. Mike Frazier, MD</h2>
                <p className="mb-4">
                  I'm Dr. Mike Frazier, a physician and former member of the UCLA Medical School Admissions Committee.
                  My journey in medicine has provided me with unique insights into what it takes to succeed in this
                  challenging and rewarding field.
                </p>
                <p>
                  After successfully navigating the medical school application process myself and gaining acceptance to
                  multiple top schools, I served on the UCLA admissions committee where I interviewed candidates,
                  reviewed applications, and participated in selection decisions that determined who would become
                  the next generation of physicians.
                </p>
              </div>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">My Background</h3>
              <p className="mb-4">
                I graduated from UCLA School of Medicine, where I excelled academically and was actively 
                involved in student leadership, research, and community service. During my time there, 
                I developed a passion for helping others achieve their dream of becoming physicians.
              </p>
              <p className="mb-4">
                After completing my medical training, I was invited to serve on the UCLA Medical School 
                Admissions Committee, where I gained invaluable insight into the selection process. 
                This experience allowed me to see firsthand what distinguishes successful applicants 
                from those who are rejected.
              </p>
              <p>
                For several years now, I've been using this knowledge to help pre-med students craft 
                winning applications, prepare for interviews, and ultimately gain acceptance to medical school.
              </p>
            </div>
            
            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">My Approach</h3>
              <p className="mb-4">
                I believe that every aspiring physician has unique strengths and a personal story that can make 
                them stand out in the competitive medical school application process. My approach is to help 
                students identify and showcase these strengths while addressing any weaknesses in their application.
              </p>
              <p className="mb-4">
                Unlike some admissions consultants who provide generic advice, I offer insights based on actual 
                experience evaluating applications. I know what admissions committees are truly looking for because 
                I've been on that side of the table.
              </p>
              <p>
                My goal is not just to help you get into medical school, but to help you get into the right 
                medical school for you—one where you'll thrive and develop into the physician you aspire to be.
              </p>
            </div>

            <div className="mb-10">
              <h3 className="text-xl font-bold mb-4">Success Stories</h3>
              <p className="mb-4">
                Over the years, I've helped hundreds of pre-med students achieve their dreams of becoming doctors. 
                My clients have been accepted to top medical schools across the country, including Harvard, Johns Hopkins, 
                UCSF, NYU, Vanderbilt, and many others.
              </p>
              <p>
                I'm particularly proud of my work with non-traditional applicants, re-applicants, and those with 
                academic challenges who had been told their dreams of becoming physicians were unrealistic. 
                Many of these students are now successful doctors, proving that with the right guidance and 
                preparation, seemingly insurmountable obstacles can be overcome.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg mb-10">
              <h3 className="text-xl font-bold mb-4">How I Can Help You</h3>
              <p className="mb-4">
                Whether you're just beginning your pre-med journey or preparing for interviews, I offer a range 
                of services to support you at every stage:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>Comprehensive guides to the medical school application process</li>
                <li>Personal statement review and editing</li>
                <li>Application strategy consulting</li>
                <li>Interview preparation (traditional and MMI)</li>
                <li>School selection guidance</li>
                <li>Reapplication strategy for those who have been rejected</li>
              </ul>
              <div className="flex justify-center">
                <Link to="/10-steps-to-accepted" className="btn-primary">
                  Explore My Services
                </Link>
              </div>
            </div>

            <div className="text-center">
              <p className="italic text-lg mb-6">
                "I'm committed to helping you navigate the complex journey to medical school. With the right guidance, 
                you can join the ranks of successful physicians making a difference in patients' lives."
              </p>
              <img 
                src="/placeholder.svg" 
                alt="Mike Frazier signature" 
                className="h-20 mx-auto mb-4"
              />
              <p className="font-bold">
                Mike Frazier, MD
              </p>
              <p>
                Former UCLA Medical School Admissions Committee Member
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
