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
