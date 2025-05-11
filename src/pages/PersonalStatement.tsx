import React from 'react';
import { Link } from 'react-router-dom';

const PersonalStatement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              The Medical School Personal Statement – Tips from a Former Medical School Admissions Committee Member
            </h1>
            <p className="text-lg md:text-xl mb-6">
              Craft a compelling personal statement that captures attention and showcases your unique qualities
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Introduction */}
            <div className="mb-8">
              <div className="md:flex md:gap-6 md:items-start mb-6">
                <div className="md:flex-1">
                  <p className="mb-4">
                    The medical school personal statement can strike fear into the heart of the medical school applicant.
                  </p>
                  <p className="mb-4">
                    However, it does not have to be that way! Think of this as your chance to set yourself apart from 
                    other medical students. With at little bit of work, your personal statement for medical school can 
                    tell the medical school admissions committee who you are and why they should want you.
                  </p>
                  <p className="mb-4">
                    Remember, however, that there are many factors that medical schools are looking for in choosing an applicant. 
                    You need to understand all the things that schools are looking for to make your dream of becoming a doctor a reality.
                  </p>
                </div>
                <div className="md:w-1/3 mb-4 md:mb-0 flex justify-center">
                  <img 
                    src="/public/lovable-uploads/ed170e1e-721e-4c88-8c5e-e52440670ff6.png" 
                    alt="Medical school application" 
                    className="styled-img max-w-full md:max-w-[240px]" 
                  />
                </div>
              </div>
              
              <p className="mb-4">
                <Link to="/admissions-secrets" className="text-primary underline">
                  Click here to learn what it takes (in addition to a great medical school essay) to get accepted to medical school.
                </Link>
              </p>
              <p className="mb-4">
                Now, back to explaining what it takes to write a great personal statement for medical school.
              </p>
            </div>

            {/* Common Mistakes Box */}
            <div className="bg-amber-50 p-6 rounded-lg border-l-4 border-amber-500 mb-10">
              <h2 className="text-xl font-bold mb-4">Here is what a lot of medical school essays look like:</h2>
              <p className="italic mb-4">
                I want to be a doctor because I want to help people.
              </p>
              <p className="italic mb-4">
                I did research. I did community service. I worked at a hospital.
              </p>
              <p className="italic mb-4">
                My dad was a doctor and that's what made me want to be a doctor.
              </p>
              <p className="italic mb-4">
                I will be good in medical school.
              </p>
              <p className="italic mb-4">
                The end.
              </p>
              <p className="font-medium mt-4">
                This is an exaggeration, but many medical school admission essays look the same.
              </p>
            </div>

            {/* CTA Box */}
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-10">
              <div className="md:flex md:gap-6 md:items-center">
                <div className="md:flex-1">
                  <p className="mb-4">
                    Below are some rules to follow to make your medical school admission essay stand out.
                  </p>
                  <p className="mb-4">
                    If after going through these rules you find that you would like some more medical school essay help,
                    editing of your statement is available by MedSchoolCoach.
                  </p>
                  <p className="mb-4">
                    MedSchoolCoach is the company I recommend for medical school personal statement help as well as 
                    admissions advising. They are all former admissions committee members, which means they know exactly 
                    what schools are looking for and what it takes to be accepted. Their rates are also very reasonable 
                    compared to other companies. 
                  </p>
                  <p className="font-medium">
                    Consulting can cost some money, but think of it as an investment. Whatever you spend now will get you 
                    $150,000 to $500,000 for 30+ years, doing something you love. Not a bad return on investment!
                  </p>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <img 
                    src="/public/lovable-uploads/5b5eca8f-6618-4cdb-80d1-f328fc39d138.png" 
                    alt="Dr. Mike Frazier" 
                    className="styled-img max-w-full md:max-w-[220px]" 
                  />
                </div>
              </div>
            </div>

            {/* Inside Track Promo */}
            <div className="bg-gray-50 p-6 rounded-lg mb-10">
              <div className="md:flex md:gap-6 md:items-center">
                <div className="md:flex-1">
                  <p className="mb-4">
                    If you're looking for something that's more than a book, (which you can pick up here for lots of tips about 
                    getting into medical school) but less expensive than 1 on 1 advising and editing services, check out my 
                    new members only site, Medical School Inside Track.
                  </p>
                  <h3 className="text-lg font-bold mb-3">Inside you'll find:</h3>
                  <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>Videos describing the entire admissions process, from choosing to apply to choosing between multiple acceptances</li>
                    <li>A custom tool to know your chances based on MCAT, GPA and race</li>
                    <li>A custom tool to know exactly where to apply based on MCAT, GPA and state of residence</li>
                    <li>Examples from successful applicants of AMCAS activities, personal statements, secondary essays, descriptions of hardship and descriptions of disciplinary actions</li>
                    <li>4 hours of recorded interview prep to learn what it takes to ace an interview</li>
                    <li>And much more! All for less than the cost of 1 hour of one on one advising.</li>
                  </ul>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <img 
                    src="/public/lovable-uploads/17ec88e1-f0d0-4c07-bbf7-661fc64ddf3b.png" 
                    alt="10 Steps to Accepted eBook" 
                    className="styled-img max-w-full md:max-w-[200px]" 
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn-primary">Check it out here</button>
              </div>
            </div>

            {/* Rules Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Rules for an Outstanding Personal Statement</h2>
              
              <div className="space-y-8">
                {/* Rule 1 */}
                <div className="md:flex md:gap-6 md:items-start">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Rule #1: Show, Don't Tell</h3>
                    <p className="mb-4">
                      A common theme in the medical school personal statement is "I want to be a doctor because I want to help people." 
                      This is probably true, but the problem is this: anyone can say that, and most applicants do say that. You need 
                      to show me why that's true. What experience did you have that made you want to help people? Likewise, don't 
                      just say that you've done research or community service. Tell a story only you can tell about it and what it 
                      taught you that will make you a good doctor.
                    </p>
                    <div className="bg-gray-50 p-4 rounded-lg mb-4">
                      <p className="font-bold mb-2">Here's part of a sample medical school essay that shows that you want to help people:</p>
                      <p className="italic">
                        I could smell the rotting garbage in the streets. I was far from home in my third week in Guatemala as part 
                        of a medical mission. The people were so poor, but so grateful. I was working with Pedro, bandaging a cut on 
                        his hand after an accident sharpening his machete. He looked up at me and said "Gracias, amigo." Those simple 
                        words lifted my spirits. My work here was making a difference, small as it might be. I want to continue to make 
                        that difference and feel the joy of helping others through a career in medicine.
                      </p>
                    </div>
                    <p>
                      What's good about this: It shows that you want to help people by your experience and it's an experience that 
                      only you had. Individuality is the key to the medical school personal statement.
                    </p>
                  </div>
                  <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                    <img 
                      src="/public/lovable-uploads/336e6a2c-c19d-475f-9c0a-f40b72f625f4.png" 
                      alt="Medical students volunteering" 
                      className="styled-img max-w-full md:max-w-[220px]" 
                    />
                  </div>
                </div>
                
                {/* Rule 2 */}
                <div className="md:flex md:gap-6 md:items-start">
                  <div className="md:flex-1">
                    <h3 className="text-xl font-bold text-primary mb-3">Rule #2: It's story time</h3>
                    <p className="mb-4">
                      This goes along with show don't tell, but your medical school personal statement should be a collection of your 
                      experiences and what they taught you. Those experiences should have taught you things that will make you a good doctor. 
                    </p>
                    <p className="mb-4">
                      Remember to think from the perspective of the reader. The reader wants to know who you are and that you have developed 
                      certain character traits through your experiences. These should include things like service, compassion, integrity, 
                      dedication, diligence, tenacity, leadership, etc.
                    </p>
                    <p className="mb-4">
                      Everyone will be trying to show that they have those qualities, but you will have the advantage because you will
                      show the reader by your experiences that you have those qualities.
                    </p>
                    <p>
                      Tell a story, then tell what it taught you. How will that lesson make you a good doctor? This is what will make your 
                      personal statement for medical school stand out.
                    </p>
                  </div>
                  <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                    <img 
                      src="/public/lovable-uploads/a624ead4-be83-441d-80e7-7fc5614c7f19.png" 
                      alt="Medical school competition" 
                      className="styled-img max-w-full md:max-w-[220px]" 
                    />
                  </div>
                </div>
                
                {/* Keep the remaining rules */}
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Rule #3: Make it entertaining. If you're not having fun writing it, they're not having fun reading it!</h3>
                  <p className="mb-4">
                    Remember that the people reading these have read many, many medical school personal statements. If you are telling stories 
                    that are meaningful to you, that will come across and make it an entertaining read for the person reviewing your application.
                  </p>
                  <p className="mb-4">
                    If you're not having fun writing it, they're not having fun reading it. I'm repeating this because it's so important.
                    Remember this as your write all of your essays, including the medical school personal statement, your descriptions 
                    of activities, and your secondary application essays.
                  </p>
                  <p>
                    Use humor if that is one of your talents. If someone laughs while reading your essay, that's a good thing. It may be the 
                    first laugh the person reading all these medical school essays has had in a while.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Rule #4: Don't make it too personal</h3>
                  <p className="mb-4">
                    While you want to show who you are in your medical school personal statement, you don't want to give up too much. 
                    This can be a fine line, but just keep this principle in mind: Don't write anything that you don't want the interviewer 
                    to ask you about. Do that and you'll be fine.
                  </p>
                  <p>
                    For example, your medical school admission essay is not the time to bring up your past as a juvenile delinquent. If you do
                    this, you need some medical school essay help!
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-primary mb-3">Rule #5: Have other people read your medical school personal statement</h3>
                  <p className="mb-4">
                    At the end of the day, writing is about how other people respond to what you have written. Have someone look through 
                    your medical school essay.
                  </p>
                  <p className="mb-4">
                    The ideal person to review your medical school essay will be someone who is a good writer and who will give you 
                    honest feedback about your personal statement for medical school. Don't just choose people who will say your essay 
                    is great even if it's not. Your mom probably falls under this category. Your boyfriend or girlfriend probably does too.
                  </p>
                  <div className="bg-amber-50 p-4 rounded-lg border-l-4 border-amber-500">
                    <p className="font-bold mb-2">You probably don't need professional editing unless:</p>
                    <ul className="list-disc ml-6 space-y-1">
                      <li>You can't find someone who is a good writer to review your essay</li>
                      <li>You're explaining hardships</li>
                      <li>English is not your first language</li>
                    </ul>
                    <p className="mt-2">
                      If one of these or other reasons is the case, a good editor really comes in handy. The company I recommend for 
                      this is MedSchoolCoach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Basic Outline Section */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">The Basic Outline</h2>
              <p className="mb-6">
                Your medical school personal statement should look something like this:
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold mb-2">Introduction</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-medium">Hook:</span> Something that immediately grabs the reader's attention. From the sample 
                      medical school essay above, the first sentence was "I could smell the rotting garbage in the streets." That's something 
                      interesting that makes the reader want to keep reading.
                    </li>
                    <li>
                      <span className="font-medium">Story time:</span> Tell your first story.
                    </li>
                    <li>
                      <span className="font-medium">What it taught you:</span> What character trait/quality does this experience demonstrate 
                      or what did the experience teach you? In our example this part read as follows: "My work here was making a difference, 
                      small as it might be. I want to continue to make that difference and feel the joy of helping others through a career in medicine."
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Body Paragraphs</h3>
                  <p>Same as introduction</p>
                  <p className="text-sm">
                    You only want the medical school personal statement to be about one page. So, don't get carried away.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-bold mb-2">Here's part of a sample medical school essay from my personal statement:</p>
                  <p className="italic">
                    Not only have I had the chance to be a mentor, I have had the chance to be mentored by inspiring physicians. 
                    I sat in the small whitewashed room with Dr. Petrie at the red cross building in El Fuerte, Mexico, waiting for 
                    our next patient. Dr. Petrie had flown us from Fullterton, CA to Mexico at his own expense in his 4-seater yellow 
                    Bonanza aircraft. A man in cowboy boots and hat came into the small whitewashed room with his family, rolled up his plaid
                    sleeve and showed us a large growth on his right bicep. Dr. Petrie asked a few questions about it and whether he wanted 
                    it removed. When the man said yes, Dr. Petrie replied with a smile, "So you don't want to look like a strong man anymore?" 
                    There was a sense of relief in the laughter of the man and his family. They knew that the person who would perform the 
                    surgery cared not just about the growth but about the man.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold mb-2">Conclusion</h3>
                  <ul className="list-disc ml-6 space-y-2">
                    <li>
                      <span className="font-medium">Summary of your qualities learned/demonstrated by your experiences:</span> You want 
                      the reader to finish reading your personal statement for medical school with an understanding of how these experiences 
                      will make you a great doctor.
                    </li>
                    <li>
                      <span className="font-medium">Power statement:</span> The last sentence/few sentences should give the reader something to remember.
                    </li>
                  </ul>
                  <div className="bg-gray-50 p-4 rounded-lg mt-4">
                    <p className="font-bold mb-2">Here are the last sentences from my medical school essay, which you can use as a sample:</p>
                    <p className="italic">
                      ...They knew that the person who would perform the surgery cared not just about the growth but about the man. I
                      want to be that kind of doctor. The kind who shows he cares with a smile. The kind that takes the time not only to 
                      prescribe, but to educate. The kind dedicated to healing and helping. That's who I want to be.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Outlining Tips */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Outlining your essay</h2>
              <p className="mb-4">
                As I've been editing medical school personal statements, I've been giving some advice that I think would be useful. 
                When you write your personal statement for medical school, start by outlining it in the following way:
              </p>
              <ul className="list-disc ml-6 space-y-2 mb-6">
                <li>Start with your initial interest in medicine</li>
                <li>Then track your progress through your most meaningful experiences</li>
                <li>By the end, we should see how your interest in medicine turned into a passion for medicine</li>
              </ul>
              <p>
                It can also be useful to have an "MO" as you write. The committee should have a good idea of what your main interest 
                in medicine is. It might be service, research, an interest in the human body, or something else. Whatever it is, it 
                should be clear by the end of your essay.
              </p>
            </div>

            {/* Key Points */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">A Few Other Key Points</h2>
              <ul className="list-disc ml-6 space-y-4">
                <li>
                  <span className="font-medium">Use names.</span> Using names makes the personal statement for medical school more, well, personal.
                </li>
                <li>
                  <span className="font-medium">Be active and specific in your language.</span> When you do your description of activities in AMCAS, 
                  use active language. For example, instead of writing "Mentor" in your heading, write "Mentor to Sam, 10 year old with cerebral palsy." 
                  This is more personal and more descriptive. Instead of "worked at Albertson's" write "Courtesy Clerk at Albertson's." Then tell 
                  your story and what it taught you in your description, always remembering that the reader is looking for things that will make 
                  you a good doctor. This is the key of great medical school essays.
                </li>
                <li>
                  <span className="font-medium">Don't be afraid to make it short.</span> The medical school essay should only be about one page long. 
                  In fact, AMCAS limits your medical school personal statement to 5300 characters (about one page). Likewise, the descriptions of 
                  activities should not be too long. One of my best activities was "Husband and Father" and the description was "the best, hardest, 
                  most rewarding thing I do." Memorable and unique. That's what you're going for in the medical school personal statement.
                </li>
                <li>
                  <span className="font-medium">Block left.</span> This means do not indent your paragraphs. It's easier for the eye to read this 
                  way and it looks better. Remember that the reader is reading many medical school personal statements and this will give him or 
                  her a break for the eyes.
                </li>
              </ul>
            </div>

            {/* Professional Editing Services */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6">Using professional editing services</h2>
              <div className="md:flex md:gap-6 md:items-center">
                <div className="md:flex-1">
                  <p className="mb-4">
                    As I said above, there are many medical school personal statement editing services available online and even through 
                    your college. You can use your premed office or many schools have a writing center where people who are good writers 
                    can review your statement.
                  </p>
                  <p className="mb-6">
                    However, your personal statement for medical school should not be something you leave to
                    chance. Your best bet is to work with someone who has experience with the medical school personal statement from the 
                    other side of the admissions table. As I said above, the company I recommend for medical school essay help is MedSchoolCoach.
                  </p>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <img 
                    src="/public/lovable-uploads/41609bf1-bba6-466f-87cf-5bc387604184.png" 
                    alt="Editing services" 
                    className="styled-img max-w-full md:max-w-[220px]" 
                  />
                </div>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500 mb-6">
                <p className="mb-4">
                  The reason I like this company is because they are all doctors who have had experience on a medical school admissions committee. 
                  That means they know exactly what it is that schools are looking for. They also have an excellent success rate and have 
                  helped students get into top tier schools like Harvard medical school.
                </p>
                <p>
                  I also like them because their prices are very reasonable, even compared to other companies with less specialized experience. 
                  They offer personal statement editing along with many other options to help you achieve your goal of becoming a doctor. 
                  Remember, the personal statement for medical school is only part of the equation. MedSchoolCoach offers complete packages 
                  (which include medical school essay help) for a great price.
                </p>
              </div>

              <div className="text-center mb-8">
                <button className="btn-primary">Click here to visit MedSchoolCoach</button>
              </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gray-50 p-6 rounded-lg mb-12">
              <div className="md:flex md:gap-6 md:items-center">
                <div className="md:flex-1">
                  <p className="mb-4">
                    If you're looking for something that's more than a book, (which you can pick up here for lots of tips about getting into 
                    medical school) but less expensive than 1 on 1 advising and editing services, check out my new members only site, 
                    Medical School Inside Track.
                  </p>
                  <h3 className="text-lg font-bold mb-3">Inside you'll find:</h3>
                  <ul className="list-disc ml-6 space-y-2 mb-6">
                    <li>Videos describing the entire admissions process, from choosing to apply to choosing between multiple acceptances</li>
                    <li>A custom tool to know your chances based on MCAT, GPA and race</li>
                    <li>A custom tool to know exactly where to apply based on MCAT, GPA and state of residence</li>
                    <li>Examples from successful applicants of AMCAS activities, personal statements, secondary essays, descriptions of hardship and descriptions of disciplinary actions</li>
                    <li>4 hours of recorded interview prep to learn what it takes to ace an interview</li>
                    <li>And much more! All for less than the cost of 1 hour of one on one advising.</li>
                  </ul>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0 flex justify-center">
                  <img 
                    src="/public/lovable-uploads/17ec88e1-f0d0-4c07-bbf7-661fc64ddf3b.png" 
                    alt="10 Steps to Accepted eBook" 
                    className="styled-img max-w-full md:max-w-[200px]" 
                  />
                </div>
              </div>
              <div className="text-center">
                <button className="btn-primary">Check it out here</button>
              </div>
            </div>

            {/* Footer links */}
            <div className="text-center">
              <p className="mb-3">
                <Link to="/interview-tips" className="text-primary underline">
                  For more info on Medical School Interviews, click here.
                </Link>
              </p>
              <p className="mb-3">
                <Link to="/admissions-secrets" className="text-primary underline">
                  For more info on Medical School Admissions, click here
                </Link>
              </p>
              <p>
                <Link to="/" className="text-primary underline">
                  Return from Medical School Personal Statement to Medical School Insider
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalStatement;
