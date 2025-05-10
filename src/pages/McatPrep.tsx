
import React from 'react';

const McatPrep = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              MCAT Prep Courses Review
            </h1>
            <p className="text-lg text-center">
              Comprehensive reviews of the best MCAT preparation courses to help you succeed
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Choosing the Right MCAT Prep Course</h2>
              <p className="mb-4">
                This page will soon be updated with comprehensive reviews of various MCAT preparation courses.
                As a former UCLA admissions committee member, I'll provide insights on which courses best prepare
                you for the exam and optimize your chances of achieving a competitive score.
              </p>
              <p>
                Check back soon for detailed comparisons of popular MCAT prep options including Kaplan, Princeton Review,
                Blueprint (formerly Next Step), Examkrackers, and more.
              </p>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-3">Coming Soon:</h3>
              <ul className="list-disc ml-6 space-y-2">
                <li>Side-by-side comparisons of leading MCAT prep courses</li>
                <li>Cost analysis and value assessments</li>
                <li>Detailed reviews of course materials and practice tests</li>
                <li>Recommendations based on learning style and starting score</li>
                <li>Tips for self-study approaches</li>
                <li>Special discounts negotiated for Medical School Insider readers</li>
              </ul>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Why the MCAT Matters</h2>
              <p className="mb-4">
                The MCAT is one of the most important factors in your medical school application. While 
                not the only criteria, a strong MCAT score can compensate for weaknesses in other areas
                of your application. Similarly, a poor MCAT score can seriously hurt your chances of
                admission, even with an otherwise stellar application.
              </p>
              <p>
                As someone who's reviewed thousands of applications while serving on UCLA's admissions committee,
                I've seen firsthand how MCAT scores influence admissions decisions. Choosing the right preparation
                strategy is crucial for maximizing your potential.
              </p>
            </div>

            <div className="border-t border-gray-300 pt-8">
              <h3 className="text-xl font-bold mb-4">Need Immediate MCAT Guidance?</h3>
              <p className="mb-6">
                While I finalize my comprehensive MCAT prep reviews, consider checking out my eBook
                "10 Steps to Accepted," which includes valuable MCAT preparation strategies as part
                of its complete guide to medical school admissions.
              </p>
              <div className="flex justify-center">
                <button className="btn-primary">
                  Get "10 Steps to Accepted" Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default McatPrep;
