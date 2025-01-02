const Footer = () => {
    return (
      <>
        {/* Newsletter Section */}
        <section className="bg-blue-600 text-black py-12">
          <div className="container mx-auto flex flex-wrap justify-between items-center px-6">
            <div className="mb-6 md:mb-0">
              <h1 className="text-3xl font-medium">
                Newsletter - Stay tuned and get the latest update
              </h1>
              <span>Far far away, behind the word mountains</span>
            </div>
            <div className="flex items-center space-x-4">
              <input
                type="text"
                placeholder="Enter email address"
                className="p-3 border border-gray-300 rounded focus:outline-none"
              />
              <i className="fas fa-paper-plane text-xl text-blue-600 bg-white p-2 rounded-full"></i>
            </div>
          </div>
        </section>
  
        {/* Footer Section */}
        <footer className="bg-blue-600 text-white py-12">
          <div className="container mx-auto grid gap-6 md:grid-cols-5 px-6">
            {/* Anti-Ragging Policy */}
            <div>
              <h1 className="text-lg font-semibold">ANTI-RAGGING POLICY</h1>
              <span className="block text-sm mb-4">ONLINE EDUCATION & LEARNING</span>
              <p className="text-sm">
                Vasavi College of Engineering, in strict compliance with UGC Regulations on Curbing the Menace of Ragging
                in Higher Educational Institutions, 2009...
              </p>
              <div className="mt-4 space-x-2">
                <i className="fab fa-facebook-f text-xl bg-green-400 p-2 rounded-full"></i>
                <i className="fab fa-twitter text-xl bg-green-400 p-2 rounded-full"></i>
                <i className="fab fa-instagram text-xl bg-green-400 p-2 rounded-full"></i>
              </div>
            </div>
  
            {/* Downloads */}
            <div>
              <h3 className="text-lg font-semibold">Downloads</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>I.T. declaration form 2024-25</li>
                <li>Certificates offline (Transcripts/Duplicates)</li>
                <li>Exam Fee Form (Accounts Dept.)</li>
                <li>VCE GST No. 36AAATV1119R1Z2</li>
                <li>Student No Dues Certificate</li>
                <li>Online fee payment details</li>
                <li>Revaluation of Answer Scripts Form</li>
              </ul>
            </div>
  
            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold">Useful Links</h3>
              <ul className="mt-4 space-y-2 text-sm">
                <li>Contact Us</li>
                <li>Pricing</li>
                <li>Terms & Conditions</li>
                <li>Privacy</li>
                <li>Feedback</li>
              </ul>
            </div>
  
            {/* Contact Us */}
            <div>
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <ul className="mt-4 space-y-4 text-sm">
                <li>
                  <i className="fas fa-map-marker-alt"></i> Vasavi College of Engineering, Ibrahimbagh, Hyderabad - 500031,
                  Telangana, India
                </li>
                <li>
                  <i className="fas fa-phone"></i> Tel: +91 40 23146003
                </li>
                <li>
                  <i className="fas fa-envelope"></i> principal@staff.vce.ac.in
                </li>
              </ul>
            </div>
          </div>
        </footer>
  
        {/* Legal Section */}
        <div className="bg-blue-800 text-white py-6 text-center">
          <p className="text-sm">
            Copyright ©2024. Vasavi College of Engineering, Ibrahimbagh, Hyderabad, India. All Rights Reserved.
          </p>
        </div>
      </>
    );
  };
  
  export default Footer;
  