
import React from 'react';

const PersonalStatement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-50 to-blue-100 py-12">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Personal Statement Strategy
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
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">The Truth About Personal Statements</h2>
              <p className="mb-4">
                As a former UCLA admissions committee member, I've read hundreds of personal statements. 
                The truth is, most of them blend together because they follow the same tired formula and 
                use the same clichés.
              </p>
              <p>
                A truly exceptional personal statement can elevate your entire application and make 
                admissions committees fight to interview you. Conversely, a poor personal statement 
                can sink an otherwise strong application.
              </p>
            </div>

            {/* Common Mistakes */}
            <div className="mb-10">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Common Personal Statement Mistakes</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Starting with a cliché</h3>
                  <p className="text-sm">
                    "I've always wanted to be a doctor since I was five years old..." or "My 
                    grandfather's battle with cancer inspired me..." These openings are overused 
                    and cause admissions committees to tune out immediately.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Telling instead of showing</h3>
                  <p className="text-sm">
                    Stating "I am compassionate and hardworking" without providing vivid examples 
                    that demonstrate these qualities in action.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Focusing solely on academic achievements</h3>
                  <p className="text-sm">
                    Your grades and MCAT are already in your application. The personal statement 
                    should reveal your character and qualities that can't be found elsewhere.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Being too abstract or philosophical</h3>
                  <p className="text-sm">
                    Long pontificating about the meaning of medicine without concrete personal 
                    connections to your own journey.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Poor structure and flow</h3>
                  <p className="text-sm">
                    Jumping between ideas without a coherent narrative that builds toward a compelling conclusion.
                  </p>
                </div>
                
                <div className="bg-red-50 p-5 rounded-lg">
                  <h3 className="text-lg font-bold text-red-700 mb-2">Focusing on the wrong experiences</h3>
                  <p className="text-sm">
                    Highlighting experiences that don't actually demonstrate your readiness 
                    or suitability for a medical career.
                  </p>
                </div>
              </div>
            </div>

            {/* Winning Strategies */}
            <div className="mb-12">
              <h2 className="text-xl font-bold mb-6 border-b pb-2">Winning Personal Statement Strategies</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">1. Start with a compelling hook</h3>
                  <p className="mb-3">
                    Begin your personal statement with something unexpected and memorable. A vivid scene, 
                    a surprising realization, or an intriguing question can capture attention immediately.
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                    <p className="italic text-sm">
                      <span className="font-bold text-green-700">Strong example:</span> "The monitor flatlined as I stood 
                      frozen in the corner of the ICU. As a first-year clinical volunteer, I wasn't prepared for this moment—but 
                      what happened next would fundamentally change my understanding of what it means to be a physician."
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">2. Develop a central theme</h3>
                  <p className="mb-3">
                    Your personal statement should have a unifying theme that weaves through your experiences and 
                    connects to your motivation for medicine. This creates coherence and memorability.
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                    <p className="italic text-sm">
                      Effective themes might include resilience, curiosity, service, bridging disparate worlds, 
                      or personal transformation. The theme should authentically represent your journey.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">3. Show meaningful growth</h3>
                  <p className="mb-3">
                    Admissions committees want to see reflection and growth. Describe how specific experiences 
                    changed your thinking, developed your skills, or deepened your commitment to medicine.
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                    <p className="italic text-sm">
                      Don't just list what you did—explain what you learned, how you changed, and how these 
                      insights have prepared you for a medical career.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">4. Be authentic and specific</h3>
                  <p className="mb-3">
                    Write in your own voice about your genuine experiences. Specific details and authentic 
                    reflections will stand out far more than generic statements or trying to sound "medical."
                  </p>
                  <div className="bg-gray-50 p-4 rounded border-l-4 border-green-500">
                    <p className="italic text-sm">
                      Include sensory details, dialogue, and specific moments that bring your experiences to life.
                    </p>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold text-primary mb-3">5. Connect past experiences to future goals</h3>
                  <p className="mb-3">
                    Your personal statement should not just look backward at what you've done; it should connect 
                    those experiences to your future in medicine. Help the committee see how your unique background 
                    will make you an exceptional physician.
                  </p>
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-blue-50 p-8 rounded-lg text-center">
              <h3 className="text-2xl font-bold mb-4">Need Help With Your Personal Statement?</h3>
              <p className="mb-6">
                I offer personal statement review services that have helped countless applicants craft statements 
                that stand out from the crowd and highlight their unique qualities. My detailed feedback comes from 
                the perspective of someone who has reviewed thousands of statements on an actual admissions committee.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary">
                  Personal Statement Guide ($39)
                </button>
                <button className="btn-accent">
                  Professional Review Service ($149)
                </button>
              </div>
              <p className="text-sm mt-4">
                Many clients have told me this was the best investment they made in their application process.
              </p>
            </div>

            <div className="mt-10 text-center">
              <p className="italic">
                "Mike's advice on my personal statement helped me to develop an application that more fully 
                represented me as a person. I was ultimately accepted to Harvard, Brown, UCSF and the University of Colorado."
              </p>
              <p className="font-bold mt-2">
                - Michelle L, Harvard Medical School
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PersonalStatement;
