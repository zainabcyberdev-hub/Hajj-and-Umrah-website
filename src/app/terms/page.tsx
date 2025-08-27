"use client";

import { Merienda } from "next/font/google";

const merienda = Merienda({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function TermsPage() {
  return (
    <div
      className={`min-h-screen bg-gradient-to-b from-black via-gray-900 to-black py-12 px-6 md:px-20 ${merienda.className}`}
    >
      <div className="max-w-4xl mx-auto backdrop-blur-lg bg-white/10 shadow-2xl rounded-2xl p-10 border border-white/20">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          Terms & Services
        </h1>

        <p className="text-gray-300 mb-6 leading-relaxed text-center">
          Welcome to our platform. By using our services, you agree to the
          following terms and conditions. Please read them carefully before
          continuing.
        </p>

        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              1. Acceptance of Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              By accessing this website, you acknowledge that you have read,
              understood, and agreed to be bound by these terms. If you do not
              agree, you must not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              2. Use of Services
            </h2>
            <p className="text-gray-300 leading-relaxed">
              You may use our services for personal and lawful purposes only.
              Misuse or harmful activities that affect our platform or other
              users are strictly prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              3. Privacy Policy
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Your privacy is important to us. Please review our Privacy Policy
              to understand how we collect, use, and safeguard your personal
              data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              4. Limitation of Liability
            </h2>
            <p className="text-gray-300 leading-relaxed">
              We are not liable for any damages resulting from the use or
              inability to use our services. Usage is entirely at your own risk.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-yellow-400 mb-2">
              5. Changes to Terms
            </h2>
            <p className="text-gray-300 leading-relaxed">
              These terms may be updated periodically. Any changes will be
              reflected on this page, and continued use of our services implies
              acceptance of such changes.
            </p>
          </section>
        </div>

        <p className="text-gray-400 mt-10 text-center">
          For any questions, please contact us at{" "}
          <span className="font-semibold text-white">
            support@example.com
          </span>
        </p>
      </div>
    </div>
  );
}
