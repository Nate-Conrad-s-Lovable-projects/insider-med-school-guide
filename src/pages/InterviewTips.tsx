
import React from 'react';

const InterviewTips = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Interview Tips
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Master your medical school interviews with insider strategies
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Interview: Your Final Hurdle to Acceptance</h2>
              <p className="mb-4">
                Congratulations on receiving an interview invitation! This means the school is interested in you,
                and your application has already passed several rounds of screening. Now, the interview will be
                the deciding factor in whether you receive that coveted acceptance letter.
              </p>
              <p>
                As a former UCLA admissions committee member who conducted numerous interviews, I can share
                firsthand insights about what interviewers are really looking for and how to make a lasting
                positive impression.
              </p>
            </div>

            {/* Traditional Interviews */}
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Traditional Interview Strategies</h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Preparation is Key</h3>
                  <p className="mb-2">
                    The most successful candidates are those who have thoroughly prepared. This means:
                  </p>
                  <ul className="list-disc ml-6 space-y-1 mb-4">
                    <li>Reviewing your entire application - be ready to discuss anything you mentioned</li>
                    <li>Researching the school's mission, values, and unique programs</li>
                    <li>Practicing answers to common medical school interview questions</li>
                    <li>Preparing thoughtful questions about the school to ask your interviewer</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Common Questions to Master</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>Why do you want to be a doctor?</li>
                    <li>Why are you interested in our medical school specifically?</li>
                    <li>Tell me about this experience on your application.</li>
                    <li>How would you handle an ethical dilemma in medicine? (with examples)</li>
                    <li>What are your greatest strengths and weaknesses?</li>
                    <li>Where do you see yourself in 10 years?</li>
                    <li>How would you contribute to our medical school community?</li>
                    <li>What do you think is the biggest challenge facing healthcare today?</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">Interview Day Essentials</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Dress professionally - a conservative suit is always appropriate</li>
                    <li>Arrive 15-20 minutes early</li>
                    <li>Bring extra copies of your CV or résumé</li>
                    <li>Turn off your phone completely</li>
                    <li>Make eye contact and offer a firm handshake</li>
                    <li>Be friendly to everyone you meet, including administrative staff</li>
                    <li>Send a thank-you email within 24 hours</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* MMI Section */}
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Multiple Mini Interview (MMI) Strategies</h2>
              
              <div className="bg-gray-50 p-6 rounded-lg mb-6">
                <p className="italic">
                  "The MMI evaluates qualities that traditional interviews often miss: your ability to think on your feet,
                  your ethical reasoning, and how you interact in challenging scenarios. As an interviewer, I could
                  quickly see which candidates had prepared for this format and which hadn't."
                </p>
              </div>
              
              <p className="mb-4">
                Many schools now use the Multiple Mini Interview (MMI) format, which consists of a series of short
                stations (usually 6-10) where you'll encounter different scenarios, tasks, or questions.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">MMI Station Types</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li><span className="font-semibold">Ethical scenarios</span> - Discussing moral dilemmas in healthcare</li>
                    <li><span className="font-semibold">Role-playing stations</span> - Interacting with an actor in a difficult situation</li>
                    <li><span className="font-semibold">Policy stations</span> - Discussing healthcare policy issues</li>
                    <li><span className="font-semibold">Teamwork stations</span> - Working with other candidates on a task</li>
                    <li><span className="font-semibold">Traditional interview stations</span> - Standard questions about your application</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-2">MMI Success Strategies</h3>
                  <ul className="list-disc ml-6 space-y-1">
                    <li>Practice timing - you typically have only 2 minutes to read the prompt and 6-8 minutes at each station</li>
                    <li>Structure your responses with a clear framework (e.g., for ethical scenarios: identify stakeholders, consider perspectives, weigh options, propose solution)</li>
                    <li>Speak clearly and concisely - avoid rambling</li>
                    <li>Show empathy in scenarios involving patients or conflicts</li>
                    <li>Be authentic - the MMI is designed to reveal your true character</li>
                    <li>Let go of each station when it ends - don't let a difficult station affect your performance at the next one</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Get Comprehensive Interview Preparation</h3>
              <p className="mb-6">
                For detailed interview strategies, sample answers, MMI practice scenarios, and personalized 
                interview coaching, check out my interview preparation materials. These have helped hundreds 
                of applicants successfully navigate both traditional and MMI interviews.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Interview Preparation Guide ($29)
                </button>
                <button className="btn-accent">
                  1-on-1 Mock Interview ($199)
                </button>
              </div>
            </div>

            <div className="mt-10 text-center">
              <p className="italic">
                "Thanks to Dr. Frazier's interview preparation, I was fully prepared for all the questions thrown my way. 
                I received my first acceptance from UC Davis (one of my dream schools!) as early as October."
              </p>
              <p className="font-bold mt-2">
                - Thien Huang, accepted to 4 medical schools
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewTips;
