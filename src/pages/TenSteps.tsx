
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';

const TenSteps = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              10 Steps to Accepted – Your Insider's Guide to Getting Into Medical School
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Learn exactly what it takes to get into medical school…for the price of a trip to the movies!
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-lg mb-4">Dear Premed Student,</p>
              <p className="mb-4">
                My name is Mike Frazier and I'm a former UCLA medical school admissions committee member and 
                graduate of UCLA medical school. I remember well the days when I was a premed student. 
                It seemed like everything I was doing was geared towards one goal: getting into medical school. 
                I was studying like crazy, volunteering all over the place, and working part time, 
                all the while wondering if what I was doing was enough to get accepted.
              </p>
              <p className="mb-6">
                Maybe you can relate. Before I spent time on the UCLA admissions committee, I had a pretty good 
                idea of what it took to get into medical school. After my time on the admissions committee, 
                I can tell you that I now understand exactly what it takes to get accepted to a top medical school like UCLA.
              </p>
            </div>

            {/* Book Features */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-10">
              <h2 className="text-2xl font-bold mb-4">
                Here is a run-down of the exclusive, insider information that you will find in this eBook.
              </h2>
              <ul className="list-disc ml-6 space-y-2">
                <li>The exact categories that medical schools look at and how to beat your competitors in those categories</li>
                <li>Which categories are most important. Is MCAT everything? Find out here!</li>
                <li>The three keys to your activities. Everybody volunteers. What do you need to do to make your experiences stand out?</li>
                <li>How to describe your activities on AMCAS. What you do is very important, but how you describe it may be even more important</li>
                <li>The Rule of 4's that will help you know where to apply to medical school and that will save you time and money</li>
                <li>How to beat the computer. Learn how to get your application reviewed by a real person, even if your MCAT and/or GPA are low</li>
                <li>The admissions process from start to finish so you know exactly what happens to your application</li>
                <li>Why letters of recommendation matter more than you think and what you can do to make them great</li>
                <li>The purpose of the personal statement, how to write one that will help your application, and how much it really matters</li>
                <li>MCAT Tips to make your score the best it can be</li>
                <li>The medical school requirements and my picks to put you head and shoulders above the rest once you get to medical school</li>
                <li>How to choose where to apply and how to pick a school when you get multiple offers</li>
                <li>How to ace the medical school interview, including tips on the MMI (multiple mini interview)</li>
                <li>Financial aid tips including little known ways to get paid to go to medical school!</li>
              </ul>
            </div>

            {/* Testimonials */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-center">
                Here's what people are saying about 10 Steps to Accepted:
              </h2>
              <div className="space-y-6">
                <TestimonialCard 
                  quote="This book is a great and easy-to-read guide to prepare someone to get into medical school. Mike's advice on my personal statement and activities helped me to develop an application that more fully represented me as a person. I most appreciated his guidance on how to make my personal statement and AMCAS application more personable. I was proud of my final application, and I was ultimately accepted to Harvard, Brown, UCSF and the University of Colorado. It was great to have Mike's objective input and I would definitely recommend his help to other pre-med students!"
                  author="Michelle L"
                  credentials="Harvard Medical School"
                />
                
                <TestimonialCard 
                  quote="This book is the sole thing that kept my head on straight while I was trying to get into medical school. So many times I was not sure where to start or what the next step was. This book clearly lays out things that you must do to make yourself a stronger applicant. I was amazed at how detailed it was with each aspect of the application/interview/acceptance process. My very favorite part was its discussion about the interview. This saved my neck during my interviews!"
                  author="Blake Hansen"
                  credentials="accepted at Midwestern Medical School"
                />
                
                <TestimonialCard 
                  quote="Getting the perspective from someone who has seen the inner workings of the admissions committee was invaluable during the stressful application process. To sum it up, Dr. Frazier was awesome! And I would definitely recommend his products and services to anyone hoping to get accepted."
                  author="Thien Huang"
                  credentials="accepted at 4 medical schools"
                />
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h2 className="text-2xl font-bold mb-4">Put a former UCLA admissions committee member on your side!</h2>
              <p className="mb-6">
                During my time spent on the UCLA Admissions Committee, I learned exactly what it takes to 
                get into a top medical school. You'll get the insider information that will put you ahead 
                of the rest when it comes to applying to medical school.
              </p>
              <div className="bg-white p-6 rounded-lg shadow-md mb-8">
                <h3 className="text-xl font-bold mb-4">Along with the above benefits, you'll also get…</h3>
                <ul className="list-disc ml-6 text-left space-y-2 mb-6">
                  <li>The Killer Applicant Checklist that breaks down what you should be doing year by year</li>
                  <li>How to choose a major and how much it matters</li>
                  <li>Examples of strong and weak activities in each area</li>
                  <li>Examples from real applications so you can learn what works</li>
                  <li>What to do if your state doesn't have a medical school</li>
                  <li>How to know if you're competitive for certain schools</li>
                  <li>When to contact the school about your status</li>
                  <li>What to do if you're not accepted</li>
                  <li>An exclusive discount on my video-based, members-only site</li>
                  <li>And Much More!</li>
                </ul>
              </div>
              <div className="mb-6">
                <p className="text-2xl font-bold text-primary mb-2">All this for for just $20!</p>
                <p>Why so cheap? Like I said, I've been in your shoes. Like most premeds, I didn't have much money.</p>
                <p className="text-sm mt-2">However, the price may be going up soon, so take advantage of this offer now while it lasts!</p>
              </div>
              <button className="btn-accent">Add to Cart</button>
            </div>

            <div className="text-center mt-10">
              <p className="italic mb-4">
                If you are not satisfied with this product, you may ask for a full refund within 30 days of purchase.
              </p>
              <p className="mb-6">
                Keep in mind that 60% of medical school applicants are not accepted anywhere!
                Money spent to get insider secrets on how to set yourself apart is money well spent!
              </p>
              <div className="mb-8">
                <h3 className="font-bold mb-2">Order now via secure server!</h3>
                <p>You will get instant delivery of your eBook upon receipt of payment.</p>
                <button className="btn-primary my-6">Add to Cart</button>
                <p className="text-sm">
                  You can pay using your credit or debit card, or PayPal account.
                </p>
              </div>
              
              <p className="mb-4">Here's to your success and I'll see you soon as a fellow doctor!</p>
              
              <img 
                src="/placeholder.svg" 
                alt="Mike Frazier signature" 
                className="h-20 mx-auto mb-4"
              />
              
              <p className="font-bold">Mike Frazier</p>
              <p className="mb-6">Former UCLA Admissions Committee Member</p>
              
              <p className="font-bold mb-1">P.S. Remember, 6 out of 10 applicants are rejected every year. Don't be one of them!</p>
              <p className="font-bold mb-8">P.P. S. The information here has been proven successful by many applicants, as you can see above. Join them in getting into the school of your dreams!</p>
              
              <div className="border-t border-gray-300 pt-6">
                <p className="mb-4">
                  Also, now that you'll know how to get into medical school, pick up my eBook 
                  <strong> Succeeding in Medical School- How I Landed My Top Choice Residency.</strong> 
                  You'll learn what it takes to ace your licensing exams and become the doctor residency programs will fight over! 
                  Get it for just $5 when you buy both books!
                </p>
                <button className="btn-accent">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TenSteps;
