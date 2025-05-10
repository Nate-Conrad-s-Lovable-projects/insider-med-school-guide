
import React from 'react';
import EmailSignup from '../components/EmailSignup';

const AdmissionsSecrets = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Admissions Secrets
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Insider knowledge from a former UCLA Medical School Admissions Committee Member
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-10">
              <h2 className="text-2xl font-bold mb-4">The Hidden Truths About Medical School Admissions</h2>
              <p className="mb-4">
                After spending time on the UCLA admissions committee, I gained insight into exactly what happens 
                behind closed doors during the selection process. Most applicants have misconceptions about 
                what admissions committees are really looking for.
              </p>
              <p>
                This page will share some of the most important admissions secrets that can dramatically 
                improve your chances of acceptance.
              </p>
            </div>

            {/* Free Report Section */}
            <div className="bg-white shadow-lg rounded-lg p-8 mb-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg p-6 transform rotate-3 shadow-xl">
                    <h3 className="text-xl font-bold mb-2">FREE REPORT</h3>
                    <h4 className="text-2xl font-bold mb-4">The 8 Secrets to Getting Accepted</h4>
                    <p className="text-white/80 text-sm">
                      Insider knowledge from a former UCLA admissions committee member
                    </p>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-2xl font-bold mb-4 text-primary">
                    Get My Free Report: The 8 Secrets to Getting Accepted
                  </h3>
                  <p className="mb-4">
                    This exclusive report reveals the critical factors that most applicants miss but that 
                    admissions committees pay close attention to, including:
                  </p>
                  <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>The truth about how applications are really evaluated</li>
                    <li>What matters more than high grades and test scores</li>
                    <li>Common mistakes that instantly flag an application</li>
                    <li>Little-known strategies that can push a borderline application into the acceptance pile</li>
                    <li>How to stand out in a sea of qualified applicants</li>
                  </ul>
                  <div>
                    <form className="flex flex-col sm:flex-row gap-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="px-4 py-3 border rounded-md flex-grow"
                      />
                      <button className="btn-accent whitespace-nowrap">
                        Get Free Report
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Preview Content */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Preview: Three Lesser-Known Admissions Secrets</h2>
              
              <div className="space-y-8">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-primary">Secret #1: Timing Matters</h3>
                  <p>
                    Many applicants don't realize that when you submit your application can significantly 
                    impact your chances of acceptance. Early applications generally receive more thorough 
                    reviews and have higher acceptance rates than later applications, even when all other 
                    factors are equal. The full report reveals exactly when to submit for maximum impact.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-primary">Secret #2: Activity Quality Over Quantity</h3>
                  <p>
                    Contrary to popular belief, admissions committees are not impressed by a long list of 
                    superficial activities. What they're really looking for is depth of commitment and meaningful 
                    impact. In the full report, I'll explain the exact formula for presenting activities that will 
                    catch the committee's attention.
                  </p>
                </div>
                
                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-bold mb-3 text-primary">Secret #3: The Critical "Fit" Factor</h3>
                  <p>
                    Each school has its own mission and values that influence who gets accepted. Understanding this 
                    hidden selection criterion and tailoring your application accordingly can dramatically increase 
                    your chances at specific schools. The full report provides guidance on how to identify a school's 
                    values and align your application with them.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mb-12">
              <p className="text-lg mb-4">
                These are just three of the eight critical secrets revealed in the full report.
              </p>
              <button className="btn-primary">
                Get All 8 Secrets Now (Free)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />
    </div>
  );
};

export default AdmissionsSecrets;
