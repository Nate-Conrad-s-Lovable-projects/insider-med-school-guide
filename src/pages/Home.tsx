
import { Link } from 'react-router-dom';
import EmailSignup from '../components/EmailSignup';
import TestimonialCard from '../components/TestimonialCard';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12 md:py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-800">
                Put a Former UCLA Medical School Admissions Committee Member on Your Side!
              </h1>
              <p className="text-lg mb-8">
                You probably came to this site wondering: What should I do to get into medical school? 
                I know how stressful it is to try to make yourself that applicant who will be accepted.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/10-steps-to-accepted" className="btn-primary">
                  Learn the 10 Steps to Get Accepted
                </Link>
                <Link to="/about" className="btn-accent">
                  About Dr. Mike
                </Link>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="/placeholder.svg" 
                alt="Dr. Mike Frazier - Former UCLA admissions committee member" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-12 md:py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <p className="text-lg mb-6">
              After a lot of hard work and some luck, I was able to get into UCLA, one of the top schools in the country. 
              I was jumping off the walls when I got that letter!
            </p>
            <p className="text-lg mb-6">
              This site is designed to help you get that acceptance letter of your dreams.
            </p>
            <div className="bg-gray-100 p-6 rounded-lg mb-8">
              <p className="text-lg italic mb-4">You might be asking yourself, "Can this guy really help me do that?"</p>
              <p className="text-xl font-bold text-primary">My answer is: Yes!</p>
            </div>
            <div className="space-y-6">
              <p>
                First, I successfully got into 3 medical schools myself. While I learned a lot from this process, 
                I still wasn't totally sure why I got in.
              </p>
              <p>
                So, I spent time on the UCLA medical school admissions committee.
              </p>
              <p>
                Here I interviewed applicants, reviewed applications, and ranked applicants along 
                with other members of the committee.
              </p>
              <p>
                From this experience, I can say that I learned exactly what it takes to get into a top school.
              </p>
              <p>
                Over the past several years, I have been using that knowledge to help many people get into medical school.
              </p>
              <p className="font-semibold">
                Here's a review from one of the people that I helped:
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-blue-50 py-12 md:py-16">
        <div className="container-custom">
          <TestimonialCard 
            quote="As someone who had no clue how the medical school admissions process even worked, I was pretty nervous to apply. I knew the basics such as the progression from primary to secondary application. But, when it came to starting my personal statement and navigating which schools to apply to, I was lost. I then came across Mike's services. When my medical school interview days arrived, I am proud to say that I wasn't nervous at all! Thanks to Dr. Frazier's interview preparation, I was fully prepared for all the questions thrown my way. In fact, I received my first acceptance from UC Davis (one of my dream schools!) as early as October, and Dr. Frazier's help was definitely pivotal in helping me get there."
            author="Thien Huang"
            credentials="premed student, accepted at 4 medical schools"
          />
          
          <div className="text-center mt-10">
            <p className="text-lg font-bold mb-4">I want you to succeed! I did it, I've helped many people to do it, and I can help you too!</p>
            <div className="h-1 w-24 bg-primary mx-auto my-6"></div>
            <p className="text-xl font-bold text-red-600 mb-4">
              However, 6 out of 10 applicants don't get accepted.
            </p>
            <p className="text-lg mb-6">
              This means that there are many pitfalls along the way. You definitely need a guide through the process.
            </p>
            <p className="text-xl italic mb-8">
              I want to be that guide for you.
            </p>
            <Link to="/admissions-secrets" className="btn-primary">
              Get my free report, the 8 secrets to getting accepted
            </Link>
          </div>
        </div>
      </section>

      {/* Email Signup */}
      <EmailSignup />

      {/* Closing */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto text-center">
            <img 
              src="/placeholder.svg" 
              alt="Mike Frazier signature" 
              className="h-20 mx-auto mb-4"
            />
            <p className="text-lg italic">
              -Mike Frazier MD, Former UCLA Medical School Admissions Committee Member
            </p>
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-4 text-sm text-gray-600">
        <div className="container-custom">
          <p className="max-w-3xl mx-auto text-center">
            Disclaimer: This website is not associated with the Medical School Insider annual event hosted by Kaplan. 
            However, I would encourage all you premed students to check out the event as it will give you great 
            insight into the admissions process and getting into medical school.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
