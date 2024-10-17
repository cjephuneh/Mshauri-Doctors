import Image from 'next/image';
import { Search, ShoppingCart, User, ChevronRight, Star } from 'lucide-react';
import HomeImg from '@/assets/image.png';
import Navbar from '@/components/landing/navbar';

const SpecialityCard = ({ icon, title }) => (
  <div className="flex flex-col items-center p-4 bg-gray-50 rounded-xl">
    <Image src={HomeImg} alt={title} width={60} height={60} className="mb-2" />
    <span className="text-sm text-gray-900 font-medium">{title}</span>
  </div>
);

const CommonHealthCard = ({ doctorCount, title, className }) => (
  <div className={`${className} rounded-2xl p-6 relative overflow-hidden`}>
    <span className="inline-block px-2 py-1 bg-black/10 rounded-full text-sm mb-4">
      +{doctorCount} Doctor
    </span>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <button className="flex items-center text-sm font-medium bg-white rounded-full px-4 py-2">
      CONSULT NOW <ChevronRight className="w-4 h-4 ml-1" />
    </button>
    <div className="absolute right-0 bottom-0">
      <Image src="/api/placeholder/150/150" alt={title} width={150} height={150} />
    </div>
  </div>
);


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-800"> {/* Darker background */}
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-[#111326] rounded-2xl overflow-hidden relative"> {/* Darker hero background */}
          <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 flex flex-row items-center gap-12 md:gap-20 lg:gap-24 text-white">
            {/* Content Area */}
            <div className="w-1/2"> {/* Adjust width as needed */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Save <span className="text-emerald-400">time and money</span><br /> on travel expenses
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-300">
                Experience hassle-free healthcare with online doctor consultations.
              </p>

              <button className="mt-8 px-8 py-3 bg-yellow-400 text-gray-900 rounded-full font-medium flex items-center gap-2 hover:bg-yellow-300 transition-colors">
                Consult Now
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Image Area */}
            <div className="w-1/2 relative"> {/* Adjust width as needed */}
              <Image
                src={HomeImg}
                alt="Online consultation"
                width={600}
                height={400}
                className="rounded-xl"
              />
            </div>
          </div>
        </div>
        


        {/* Specialities Section */}
        <section className="bg-gray-400 rounded-2xl p-6 mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">25+ Symptom Specialities</h2>
            <button className="text-indigo-600 font-medium flex items-center">
              SEE ALL SPECIALITIES <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          <div className="grid grid-cols-6 gap-4">
            {['Orthopedists', 'Obesity', 'Neck pain', 'Neurology', 'Headache', 'Shoulder'].map((title) => (
              <SpecialityCard key={title} title={title} />
            ))}
          </div>
        </section>

        {/* How it works section */}
        <section className="bg-[#1a1b3f] text-white rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-center mb-12">How it works</h2>
          <div className="grid grid-cols-3 gap-8">
            {[
              {
                title: 'Select a speciality or symptom',
                icon: 'clipboard'
              },
              {
                title: 'Audio/video call with a verified doctor',
                icon: 'phone'
              },
              {
                title: 'Get a digital prescription & a free follow-up',
                icon: 'document'
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-white/10 rounded-xl flex items-center justify-center">
                  <Image src="/api/placeholder/32/32" alt={step.icon} width={32} height={32} />
                </div>
                <h3 className="text-xl font-medium">{step.title}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-8 mt-16 text-center">
            <div>
              <div className="text-4xl font-bold">24,833</div>
              <div className="text-gray-400 mt-2">People</div>
            </div>
            <div>
              <div className="text-4xl font-bold">4 million+</div>
              <div className="text-gray-400 mt-2">Light sessions</div>
            </div>
            <div>
              <div className="text-4xl font-bold">8+</div>
              <div className="text-gray-400 mt-2">Clinical trials*</div>
            </div>
          </div>
        </section>

        {/* Consultation Cards */}
        <section className="grid grid-cols-2 gap-6">
          <div className="bg-pink-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="max-w-[60%]">
              <div className="bg-pink-200 text-pink-700 rounded-full px-3 py-1 text-sm inline-block mb-4">
                Offer
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Consult with specialists at just $199
              </h3>
              <button className="bg-white rounded-full px-4 py-2 flex items-center text-sm font-medium">
                Consult now <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image src="/api/placeholder/200/200" alt="Doctor" width={200} height={200} />
            </div>
          </div>

          <div className="bg-green-100 rounded-2xl p-8 relative overflow-hidden">
            <div className="max-w-[60%]">
              <div className="bg-green-200 text-green-700 rounded-full px-3 py-1 text-sm inline-block mb-4">
                Medicare Plus
              </div>
              <h3 className="text-2xl font-bold mb-4">
                Free online consultations starting at $799/mn
              </h3>
              <button className="bg-white rounded-full px-4 py-2 flex items-center text-sm font-medium">
                Get membership <ChevronRight className="w-4 h-4 ml-1" />
              </button>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image src="/api/placeholder/200/200" alt="Patient" width={200} height={200} />
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="text-center py-12">
          <h2 className="text-3xl font-bold mb-6">
            Our doctors and clinics have earned<br />
            over 5,000+ reviews on Google!
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[1, 2, 3, 4].map((i) => (
              <Star key={i} className="w-8 h-8 fill-green-500 text-green-500" />
            ))}
            <Star className="w-8 h-8 fill-green-500 text-green-500" strokeWidth={0.5} />
          </div>
          <div className="text-gray-600">Average Google Rating is 4.6</div>
        </section>
      </main>
    </div>
  );
};


export default HomePage;