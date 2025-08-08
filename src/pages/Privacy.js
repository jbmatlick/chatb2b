import React from 'react';
import { COMPANY_NAME, COMPANY_PRIVACY_EMAIL, COMPANY_EU_REP_EMAIL } from '../constants';

const Privacy = () => (
  <div className="min-h-screen w-full relative">
    <div className="absolute inset-0 bg-gradient-to-b from-teal-800/70 to-blue-900/80" aria-hidden="true"></div>
    <main className="relative max-w-4xl mx-auto px-4 py-20 z-10 fade-in">
      <div className="glass-card p-8 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-white">Privacy Policy</h1>
        <p className="text-sm text-white/70 mb-8">Last Updated: January 2025</p>
        
        <div className="space-y-6 text-white/90">
          <p>
            {COMPANY_NAME}, Inc., its subsidiaries and affiliates (collectively, "{COMPANY_NAME}", or "we", "us", "our") respect the privacy and security of your personal data.
          </p>
          
          <p>
            This Privacy Policy describes how {COMPANY_NAME} collects, uses, and shares your Personal Data when you visit our website, use our platform, or interact with us. This Privacy Policy also describes your rights and choices regarding your Personal Data. This Privacy Policy applies to individuals who visit {COMPANY_NAME}, partner or client websites, and individuals who have a business relationship with {COMPANY_NAME}, such as vendors and corporate sponsors, in their business interactions with {COMPANY_NAME}. If you are a California resident, please review the "Notice of Collection for California" section below for important information about the categories of Personal Data we collect and disclose.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Information We Collect</h2>
          
          <p>
            We may collect information about you from various sources, including:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Data:</strong> Information that identifies, relates to, describes, is reasonably capable of being associated with, or could reasonably be linked, directly or indirectly, with a particular individual or household, such as name, email address, phone number, company name, job title, and other contact information.</li>
            <li><strong>Usage Information:</strong> Information about your computer, mobile device or other technology, when you visit {COMPANY_NAME}, partner or client websites, including IP address, browser type, operating system, your responses to advertisements delivered by us, date and time, referring URLs and other information normally transmitted in HTTP requests.</li>
            <li><strong>Device Information:</strong> Information about the device you use to access our services, including device type, operating system, browser type, and device identifiers.</li>
            <li><strong>Location Information:</strong> General location information based on your IP address or more precise location if you grant us permission.</li>
          </ul>
          
          <h2 className="text-xl font-bold mb-4 text-white">How We Use Your Information</h2>
          
          <p>
            {COMPANY_NAME} may use the information we obtain, license and collect about and from you for a number of business purposes, including, for example, to: better tailor our website and promotional content to your interests and preferences; provide you with information about our products and services; improve our products and services; and comply with legal obligations.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Cookies and Similar Technologies</h2>
          
          <p>
            {COMPANY_NAME}, and our publishing partners, Clients, affiliates, or analytics or service providers, use technologies such as cookies, beacons, tags, and scripts, to analyze trends, administer websites, track users' movements around websites, and to gather demographic information about our user base as a whole. When you access and interact with {COMPANY_NAME} (as a representative of a business), {COMPANY_NAME} and its service providers may collect certain information about those visits. We collect this information in the context of our business relationship with you, to allow you to explore the business research and intelligence services we provide.
          </p>
          
          <p>
            {COMPANY_NAME} may use a variety of technologies, including "cookies" that automatically or passively collect information from your computer, mobile device or other technology, when you visit {COMPANY_NAME}, partner or Client websites. We may also collect information in this way on a third party's behalf when we serve advertisements and store your Personal Data in log files.
          </p>
          
          <p>
            We may use this information to provide you with personalized content and advertisements, to analyze website usage, and to improve our services. We may also use this information to deliver targeted advertising content to each individual's interests. {COMPANY_NAME} does not use this information to discern your identity or to disclose your identity to any third party. {COMPANY_NAME} stores Personal Data in a separate database from any Usage Information.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Opt-Out Options</h2>
          
          <p>
            If you opt-out of targeted advertising, {COMPANY_NAME} will no longer use or disclose any of your Personal Data, with the exception of Personal Data submitted within the last 30 days to access free content, which the Content Provider may access.
          </p>
          
          <p>
            When you opt out of {COMPANY_NAME}'s Platform, we will place a special {COMPANY_NAME} cookie on (or otherwise identify) your device or browser in a way that informs our systems not to record information related to your business research activities. If you browse the web from multiple devices, change browsers or delete the {COMPANY_NAME} opt-out cookie (or clear all cookies), you will need to perform this opt-out task again.
          </p>
          
          <p>
            In instances where you visit a Client website through the {COMPANY_NAME} Platform, the Client may use third-party vendors for the purposes of retargeting. We do not disclose Personal Data to these third parties, but they may set and access their own cookies, pixel tags, and similar technologies on your device, and they may collect or have access to information about you, including Usage Information.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Information Sharing</h2>
          
          <p>
            We may share your information in the following circumstances:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Service Providers:</strong> We may share your information with third-party service providers who perform services on our behalf, such as hosting, analytics, and customer support.</li>
            <li><strong>Business Partners:</strong> We may share your information with our business partners for marketing and other business purposes.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
            <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
          </ul>
          
          <h2 className="text-xl font-bold mb-4 text-white">Data Security</h2>
          
          <p>
            We implement appropriate technical and organizational measures to protect your Personal Data against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is 100% secure.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">International Data Transfers</h2>
          
          <p>
            Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Your Rights</h2>
          
          <p>
            Depending on your location, you may have certain rights regarding your Personal Data, including:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>The right to access and receive a copy of your Personal Data</li>
            <li>The right to rectify or update your Personal Data</li>
            <li>The right to delete your Personal Data</li>
            <li>The right to restrict or object to processing of your Personal Data</li>
            <li>The right to data portability</li>
            <li>The right to withdraw consent</li>
          </ul>
          
          <h2 className="text-xl font-bold mb-4 text-white">Children's Privacy</h2>
          
          <p>
            Our services are not intended for children under the age of 16. We do not knowingly collect Personal Data from children under 16.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Contact Us</h2>
          
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone: 9145236060</li>
            <li>Email: {COMPANY_PRIVACY_EMAIL}</li>
            <li>Address: Data Privacy Officer, {COMPANY_NAME} Inc., 123 Example St, New York, NY, 10001</li>
          </ul>
          
          <h2 className="text-xl font-bold mb-4 text-white">GDPR Compliance</h2>
          
          <p>
            If you are located in the European Economic Area (EEA) or the United Kingdom, you have additional rights under the General Data Protection Regulation (GDPR). You may contact our Data Protection Officer at {COMPANY_PRIVACY_EMAIL}.
          </p>
          
          <p>
            If you are located in the EEA or the UK, you may contact our Article 27 local representative at {COMPANY_EU_REP_EMAIL}.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">CCPA Compliance</h2>
          
          <p>
            If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA). You may request information about the categories of Personal Data we collect, the sources of that information, the business purposes for collecting it, and the categories of third parties with whom we share it.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Notice of Collection for California Residents</h2>
          
          <p>
            The following table provides information about the categories of Personal Data we collect and disclose for business purposes:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-white/20">
              <thead>
                <tr className="bg-white/10">
                  <th className="border border-white/20 p-2 text-left">Category</th>
                  <th className="border border-white/20 p-2 text-left">Collected</th>
                  <th className="border border-white/20 p-2 text-left">Disclosed for Business Purposes</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-white/20 p-2">Identifiers</td>
                  <td className="border border-white/20 p-2">Yes</td>
                  <td className="border border-white/20 p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">Personal Information</td>
                  <td className="border border-white/20 p-2">Yes</td>
                  <td className="border border-white/20 p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">Internet Activity</td>
                  <td className="border border-white/20 p-2">Yes</td>
                  <td className="border border-white/20 p-2">Yes</td>
                </tr>
                <tr>
                  <td className="border border-white/20 p-2">Geolocation Data</td>
                  <td className="border border-white/20 p-2">Yes</td>
                  <td className="border border-white/20 p-2">Yes</td>
                </tr>
              </tbody>
            </table>
          </div>
          
          <h2 className="text-xl font-bold mb-4 text-white">Data Retention</h2>
          
          <p>
            We retain your Personal Data for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Data Security</h2>
          
          <p>
            {COMPANY_NAME} takes precautions to protect all Personal Data and any other information under its control from misuse, loss or alteration. {COMPANY_NAME}'s security measures include industry-standard technology and equipment to help protect your information, and {COMPANY_NAME} maintains security measures to allow only the appropriate personnel and contractors access to your information. Unfortunately, no system can ensure complete security, and {COMPANY_NAME} disclaims any liability resulting from use of the Platform or from third-party hacking events or intrusions.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Third-Party Links</h2>
          
          <p>
            Platform may contain links to or integrations with other sites that {COMPANY_NAME} does not own or operate. This includes links from Clients and partners that may use the {COMPANY_NAME} logo in a co-branding agreement, or websites and web services that we work with in order to provide the Platform. {COMPANY_NAME} does not control, nor is {COMPANY_NAME} responsible for, these sites or services or their content, products, services, privacy policies or practices. If you submit Personal Data on a web site using the Platform, you are choosing to disclose information to both {COMPANY_NAME} and the third party with whose brand the website is associated. This Privacy Policy only governs {COMPANY_NAME}'s use of your Personal Data. A third party's use of your Personal Data is governed by the third party's privacy policy and practices, and not by this Privacy Policy.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Children's Privacy</h2>
          
          <p>
            {COMPANY_NAME} does not knowingly collect Personal Data or Usage Information from children under the age of 16 through its website or from any of our affiliates and partners. If you are under 16, please do not provide any Personal Data to us. If we learn that we have collected or received Personal Data from a child under 16, we will delete that information. If you believe we might have any information from or about a child under the age of 16, please contact us using one of the means provided in the "Contact Us" section below and we will seek to delete such Personal Data from our database.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Changes to This Privacy Policy</h2>
          
          <p>
            We may update this Privacy Policy from time to time. The date of the most recent revision will appear at the top of this page. If we make material changes to this Privacy Policy, we will notify you by email or by posting a notice on our website. We encourage you to periodically revisit the {COMPANY_NAME} Privacy Policy to see if it has been updated. We will always state the latest modification date of the Privacy Policy at the top of this page for your reference.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">{COMPANY_NAME} Services</h2>
          
          <p>
            {COMPANY_NAME} acts as a data processor in the provision of its services to its Clients ("Services") where it collects information under the direction of any one of its Clients, which may include Personal Data. In such cases, {COMPANY_NAME} will only process Personal Data in accordance with the Client's instructions and applicable data protection laws. If you have questions about how your Personal Data is processed in connection with our Services, please contact the relevant Client directly.
          </p>
          
          <h2 className="text-xl font-bold mb-4 text-white">Contact Information</h2>
          
          <p>
            If you have any questions about this Privacy Policy or our data practices, please contact us:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone: 9145236060</li>
            <li>Send an email to {COMPANY_PRIVACY_EMAIL}</li>
            <li>Mail a letter to Data Privacy Officer, {COMPANY_NAME} Inc., 123 Example St, New York, NY, 10001</li>
          </ul>
          
          <p>
            For questions about our Services as a data processor:
          </p>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>Phone: 9145236060</li>
            <li>Send an email to {COMPANY_PRIVACY_EMAIL}</li>
            <li>Mail a letter to Data Privacy Officer, {COMPANY_NAME} Inc., 123 Example St, New York, NY, 10001</li>
          </ul>
          
          <p>
            If you are located in the EEA or the UK, you may contact our Article 27 local representative at {COMPANY_EU_REP_EMAIL}.
          </p>
        </div>
      </div>
    </main>
  </div>
);

export default Privacy; 