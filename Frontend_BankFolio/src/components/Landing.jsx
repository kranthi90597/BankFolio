import React from 'react'
import '../css/Landing.css'; 
const Landing = () => {
  return (
    <div className="landing-page">
      <header className="landing-header">
        <h1>Welcome to Kranthi's BankFolio</h1>
        <p>Your trusted partner in financial management</p>
      </header>
      <section className="landing-content">
        <div className="content-section">
          <h2>About Us</h2>
          <p>At Kranthi's BankFolio, we strive to redefine banking by offering a personalized experience tailored to your financial needs. With a customer-centric approach and modern technology, we specialize in innovative banking solutions for individuals and businesses. Our mission is to help you manage your finances effortlessly and securely.

</p>
        </div>
        <div className="content-section">
          <h2>Our Services</h2>
          <ul>
            <li><strong>Personal Banking:</strong> Access a wide range of products, including savings accounts, fixed deposits, and custom financial planning services to suit your lifestyle.</li>
            <li><strong>Business Banking:</strong> Empower your business with our tailored solutions, including current accounts, merchant services, and business loans to fuel growth.</li>
            <li><strong>Loans:</strong> Flexible loan options for every need—home, vehicle, education, or personal—offering competitive interest rates and fast approvals.</li>
            <li><strong>Digital Solutions</strong> Seamless online banking with secure fund transfers, bill payments, and account management—all from the comfort of your home.

</li>
          </ul>
        </div>
        <div className="content-section">
          <h2>Why Choose Kranthi's BankFolio?</h2>
          <p>At Kranthi's BankFolio, we prioritize your unique needs by offering personalized banking solutions, backed by advanced security to keep your data and transactions safe. With cutting-edge technology ensuring fast and intuitive services, and years of trusted expertise guiding every step of your financial journey, we are committed to delivering a seamless and reliable banking experience.






</p>
        </div>
        <div className="content-section">
          <h2>Contact Us</h2>
          <p>Have a question or need help? Our support team is available to assist you:</p>
          <ul>
            <li><strong>Phone:</strong> +91-9059768920</li>
            <li><strong>Email:</strong> kranthi90597@gmail.com</li>
          </ul>
        </div>
      </section>
      <footer className="landing-footer">
        <p>&copy; {new Date().getFullYear()} Kranthi's BankFolio. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default Landing
