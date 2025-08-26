"use client";

import { Merienda } from "next/font/google";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const merienda = Merienda({ subsets: ["latin"], weight: ["400", "700"] });

// Animations
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function PrivacyPolicySection() {
  const lastUpdated = "August 26, 2025"; // 🔁 Update this when you change the policy

  return (
    <section
      className="relative min-h-screen text-white bg-fixed bg-center bg-cover py-24"
      style={{ backgroundImage: "url('/hajj-background.jpg')" }}
    >
      {/* Themed overlays to match your packages section */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/75 to-black/90" />
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.25),transparent_60%)]" />

      <div className="relative z-10 container mx-auto px-6 max-w-5xl">
        {/* Header */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h1
            className={`${merienda.className} text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-amber-400 to-yellow-500 bg-clip-text text-transparent`}
          >
            Privacy Policy
          </h1>
          <p className="text-gray-300">Last updated: {lastUpdated}</p>
        </motion.div>

        {/* Card Wrapper */}
        <div className="space-y-6">
          {/* Intro */}
          <PolicyCard title="Introduction">
            <p>
              This Privacy Policy describes how <strong>Your Company Name</strong>
              ("we", "us", or "our") collects, uses, and shares information when you visit or use our website, mobile application, and related services (collectively, the "Services"). By using our Services, you agree to the collection and use of information in accordance with this policy.
            </p>
          </PolicyCard>

          {/* What We Collect */}
          <PolicyCard title="Information We Collect">
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>
                <strong>Personal Information:</strong> name, email, phone number, postal address, passport details (for Hajj/Umrah processing), and payment details (processed by secure third parties).
              </li>
              <li>
                <strong>Usage Data:</strong> IP address, device and browser type, pages viewed, time spent, and referring pages.
              </li>
              <li>
                <strong>Cookies & Similar Technologies:</strong> used for authentication, preferences, analytics, and marketing. You can control cookies through your browser settings.
              </li>
            </ul>
          </PolicyCard>

          {/* How We Use */}
          <PolicyCard title="How We Use Your Information">
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>To provide and personalize our Services, including booking, payment, and itinerary management.</li>
              <li>To communicate with you about confirmations, updates, support, and marketing (with your consent where required).</li>
              <li>To improve website performance, security, and user experience via analytics.</li>
              <li>To comply with legal obligations and prevent fraud or abuse.</li>
            </ul>
          </PolicyCard>

          {/* Legal Bases */}
          <PolicyCard title="Legal Bases for Processing (GDPR)">
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li><strong>Consent</strong> (e.g., marketing emails, optional cookies).</li>
              <li><strong>Contract</strong> (to fulfill bookings and provide requested services).</li>
              <li><strong>Legitimate Interests</strong> (to improve Services and secure our platform).</li>
              <li><strong>Legal Obligation</strong> (e.g., identity verification, accounting, and regulatory requirements).</li>
            </ul>
          </PolicyCard>

          {/* Sharing */}
          <PolicyCard title="Sharing of Information">
            <p>
              We do not sell your personal information. We may share data with:
            </p>
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Service providers (e.g., airlines, hotels, transport, visa processing) strictly as needed to deliver your bookings.</li>
              <li>Payment processors (e.g., Stripe) for secure transactions. We do not store full card details.</li>
              <li>Analytics and marketing tools (e.g., Google Analytics) to understand and improve our Services.</li>
              <li>Authorities or third parties when required by law or to protect rights and safety.</li>
            </ul>
          </PolicyCard>

          {/* International Transfers */}
          <PolicyCard title="International Data Transfers">
            <p>
              Your information may be transferred to and processed in countries other than your own. Where required, we use appropriate safeguards (such as standard contractual clauses) to protect your data.
            </p>
          </PolicyCard>

          {/* Retention */}
          <PolicyCard title="Data Retention">
            <p>
              We retain personal data only for as long as necessary to provide Services, comply with legal obligations, resolve disputes, and enforce agreements. Retention periods may vary by data type and legal requirements.
            </p>
          </PolicyCard>

          {/* Your Rights */}
          <PolicyCard title="Your Rights">
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              <li>Access, correct, update, or delete your personal data.</li>
              <li>Object to or restrict certain processing, and withdraw consent where processing is based on consent.</li>
              <li>Portability: request a copy of your data in a structured, machine-readable format.</li>
              <li>Complain to a supervisory authority if you believe your rights have been violated.</li>
            </ul>
          </PolicyCard>

          {/* Cookies */}
          <PolicyCard title="Cookies & Analytics">
            <p>
              We use cookies to keep you signed in, remember preferences, and analyze traffic. You can manage cookies via browser settings. For analytics, we may use tools such as Google Analytics. Learn more about Google’s practices at
              {" "}
              <Link href="https://policies.google.com/privacy" target="_blank" className="underline text-amber-300">Google Privacy & Terms</Link>.
            </p>
          </PolicyCard>

          {/* Advertising (Optional) */}
          <PolicyCard title="Advertising & Remarketing (Optional)">
            <p>
              We may work with advertising partners to show relevant ads. Partners may set cookies or use similar technologies to measure ad performance. You can opt out via your browser or device settings.
            </p>
          </PolicyCard>

          {/* Children */}
          <PolicyCard title="Children’s Privacy">
            <p>
              Our Services are not directed to children under 13 (or the age defined by local law). We do not knowingly collect data from children. If you believe a child has provided us data, contact us to delete it.
            </p>
          </PolicyCard>

          {/* Security */}
          <PolicyCard title="Data Security">
            <p>
              We implement administrative, technical, and physical safeguards designed to protect personal information. However, no method of transmission over the Internet is 100% secure.
            </p>
          </PolicyCard>

          {/* Third-Party Links */}
          <PolicyCard title="Third-Party Links">
            <p>
              Our site may contain links to other websites. We are not responsible for the privacy practices of those websites. We encourage you to review their policies.
            </p>
          </PolicyCard>

          {/* Changes */}
          <PolicyCard title="Changes to This Policy">
            <p>
              We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.
            </p>
          </PolicyCard>

          {/* Contact */}
          <PolicyCard title="Contact Us">
            <p>
              If you have any questions or requests concerning this Privacy Policy, contact us at:
            </p>
            <ul className="text-gray-200">
              <li><strong>Email:</strong> privacy@yourdomain.com</li>
              <li><strong>Phone:</strong> +92 300 1234567</li>
              <li><strong>Address:</strong> Office #123, Main Boulevard, Lahore, Pakistan</li>
            </ul>
          </PolicyCard>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------ */
/* Reusable Card Component         */
/* ------------------------------ */
function PolicyCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <motion.article
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-2xl hover:border-amber-400/40 hover:shadow-amber-400/20 transition-all"
    >
      {/* soft gradient sheen */}
      <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br from-yellow-500/30 via-amber-300/20 to-transparent" />

      <h2 className={`${merienda.className} text-2xl font-bold mb-4 text-amber-400`}>{title}</h2>
      <div className="leading-relaxed text-gray-100/90">{children}</div>
    </motion.article>
  );
}
