import type { Metadata } from "next";
import { alternateLanguages, localizedPath } from "@/lib/locale-path";
import styles from "./privacy.module.css";

type PageProps = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;

  return {
  title: "Privacy Policy",
  description: "Learn how TPKELE collects, uses, and protects your personal information.",
    alternates: {
      canonical: localizedPath("/privacy-policy", locale),
      languages: alternateLanguages("/privacy-policy"),
    },
  };
}

export default function PrivacyPolicy() {
  return (
    <main className={styles.page}>
      <div className={styles.container}>
        <h1>Privacy Policy</h1>
        <p className={styles.updated}>Last updated: June 4, 2026</p>

        <section>
          <h2>Introduction</h2>
          <p>
            TPKELE ("we", "our", or "us") respects your privacy and is committed to protecting your personal data. 
            This privacy policy explains how we collect, use, and safeguard your information when you visit our website.
          </p>
        </section>

        <section>
          <h2>Information We Collect</h2>
          <h3>Automatically Collected Information</h3>
          <p>When you visit our website, we may automatically collect:</p>
          <ul>
            <li>Usage data (pages visited, time spent, referring URLs)</li>
            <li>Device information (browser type, operating system, IP address)</li>
            <li>Analytics data through Google Analytics</li>
          </ul>

          <h3>Information You Provide</h3>
          <p>When you contact us or submit an inquiry, we collect:</p>
          <ul>
            <li>Name and company information</li>
            <li>Email address and phone number</li>
            <li>Product inquiry details</li>
            <li>Any other information you choose to provide</li>
          </ul>
        </section>

        <section>
          <h2>How We Use Cookies</h2>
          <p>We use cookies and similar tracking technologies to:</p>
          <ul>
            <li><strong>Essential Cookies:</strong> Enable core website functionality</li>
            <li><strong>Analytics Cookies:</strong> Understand how visitors use our website (Google Analytics)</li>
            <li><strong>Preference Cookies:</strong> Remember your cookie consent choices</li>
          </ul>
          <p>You can control cookie settings through the banner on our website or your browser settings.</p>
        </section>

        <section>
          <h2>How We Use Your Information</h2>
          <p>We use collected information to:</p>
          <ul>
            <li>Respond to your inquiries and provide customer support</li>
            <li>Improve our website and user experience</li>
            <li>Analyze website traffic and usage patterns</li>
            <li>Send product information and marketing communications (with your consent)</li>
          </ul>
        </section>

        <section>
          <h2>Data Sharing and Disclosure</h2>
          <p>We do not sell your personal data. We may share information with:</p>
          <ul>
            <li><strong>Service Providers:</strong> Google Analytics for website analytics</li>
            <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
          </ul>
        </section>

        <section>
          <h2>Your Rights</h2>
          <p>Depending on your location, you may have the right to:</p>
          <ul>
            <li>Access the personal data we hold about you</li>
            <li>Request correction or deletion of your data</li>
            <li>Opt-out of marketing communications</li>
            <li>Withdraw consent for cookie usage</li>
            <li>Lodge a complaint with a data protection authority</li>
          </ul>
        </section>

        <section>
          <h2>Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal data. 
            However, no method of transmission over the Internet is 100% secure.
          </p>
        </section>

        <section>
          <h2>International Data Transfers</h2>
          <p>
            Your data may be transferred to and processed in countries other than your own. 
            We ensure appropriate safeguards are in place to protect your data.
          </p>
        </section>

        <section>
          <h2>Children's Privacy</h2>
          <p>
            Our website is not intended for children under 16. We do not knowingly collect personal data from children.
          </p>
        </section>

        <section>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page 
            and updating the "Last updated" date.
          </p>
        </section>

        <section>
          <h2>Contact Us</h2>
          <p>If you have any questions about this privacy policy or our data practices, please contact us:</p>
          <ul>
            <li><strong>Email:</strong> info@tpkele.com</li>
            <li><strong>Website:</strong> www.tpkele.com</li>
          </ul>
        </section>

        <div className={styles.compliance}>
          <p>
            <strong>Compliance:</strong> This privacy policy is designed to comply with GDPR (EU), CCPA (California), 
            and other applicable data protection regulations.
          </p>
        </div>
      </div>
    </main>
  );
}
