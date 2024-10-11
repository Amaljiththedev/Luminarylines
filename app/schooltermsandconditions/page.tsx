import Link from 'next/link';
import React from "react";

const TermsConditions = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="max-w-3xl p-8 bg-gray-800 rounded-lg shadow-lg">
        {/* Centered Heading */}
        <h1 className="text-4xl font-bold mb-2 text-center">Luminary Lines</h1>
        <h2 className="text-2xl font-semibold mb-6 text-center">Terms & Conditions</h2>

        <p className="mb-2">
          <strong>Effective Date:</strong> 01/08/2024
        </p>

        <p className="mb-4">
          By accessing or using our services, you agree to comply with and be bound by the following terms and conditions.
        </p>

        <h3 className="text-xl font-semibold mb-2">1. Enrollment and Payments</h3>
        <p className="mb-4">
          To enroll in our courses, you must complete the registration process and pay the required fees. All fees are non-refundable unless otherwise specified.
        </p>

        <h3 className="text-xl font-semibold mb-2">2. Course Access</h3>
        <p className="mb-4">
          You will receive access to course materials and live sessions upon successful registration and payment. Access to course materials is granted for the duration specified at the time of enrollment.
        </p>

        <h3 className="text-xl font-semibold mb-2">3. Code of Conduct</h3>
        <p className="mb-4">
          Respectful and professional behavior is expected from all students. Any form of harassment, discrimination, or disruptive behavior will not be tolerated and may result in expulsion without a refund.
        </p>

        <h3 className="text-xl font-semibold mb-2">4. Intellectual Property</h3>
        <p className="mb-4">
          All course materials, including videos, documents, and other content, are the intellectual property of Luminary Lines. You may not reproduce, distribute, or create derivative works from our materials without prior written permission.
        </p>

        <h3 className="text-xl font-semibold mb-2">5. Privacy</h3>
        <p className="mb-4">
          We are committed to protecting your privacy. Please refer to our Privacy Policy for details on how we collect, use, and protect your personal information.
        </p>

        <h3 className="text-xl font-semibold mb-2">6. Limitation of Liability and Disclaimer of Warranties</h3>
        <p className="mb-4">
          Luminary Lines is not responsible for any technical issues or disruptions that may occur during live sessions or while accessing course materials. We are not liable for any indirect, incidental, or consequential damages arising from your use of our services.
        </p>

        <h3 className="text-xl font-semibold mb-2">7. Amendments</h3>
        <p className="mb-4">
          We reserve the right to update or modify these terms and conditions at any time. Changes will be effective immediately upon posting on our website.
        </p>

        <h3 className="text-xl font-semibold mb-2">8. Contact Information</h3>
        <p className="mb-4">
          For any questions or concerns regarding these terms and conditions, please contact us at 
          <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline"> hello@luminarylines.com</a>.
        </p>

        {/* Cancellation/Refund Policy Section */}
        <h3 className="text-xl font-semibold mb-2">Cancellation/Refund Policy</h3>
        <ol className="list-decimal ml-5 mb-4">
          <li>We support full upfront payments as well as EMIs for our courses.</li>
          <li>
            Once purchased, a refund will be provided only if you write to us at <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline">hello@luminarylines.com</a> within the first two days of course commencement. A decision will be made by Luminary Lines Management on a case-by-case basis, subject to the mode of payment and the options provided by the payment processor.
          </li>
          <li>
            Luminary Lines does not store any of your payment information (debit card, credit card, net banking, etc.) or any other information restricted by the Reserve Bank of India (RBI) for processing payments. We have partnered with payment gateways for the payment towards the services.
          </li>
          <li>
            In case of any other payment, refund, or cancellation issues, decisions will be taken on a case-by-case basis, and Luminary Lines' decision will be final and binding.
          </li>
          <li>
            For any concerns related to payment or refunds, kindly write to <a href="mailto:hello@luminarylines.com" className="text-blue-300 underline">hello@luminarylines.com</a>.
          </li>
        </ol>

        <div className="flex justify-center">
          <Link href="/school" passHref>
            <button className="inline-block mt-8 bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;
