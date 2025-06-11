"use client"

import Footer from "@/components/layout/footer"
import Header from "@/components/layout/header"
import { motion } from "framer-motion"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container max-w-4xl mx-auto px-4 lg:px-6 py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Privacy Policy</h1>
          <p className="text-gray-600 text-sm mb-8">Updated: October 15, 2023</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Respecting your privacy is critically important to achieving our mission of motivating every student. These are our guiding privacy principles:</h2>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>We don't ask you for personal information unless we truly need it.</li>
            <li>We don't keep your personal information longer than is necessary to provide our services to you.</li>
            <li>We don't share your personal information with anyone except to comply with the law, provide our services, or protect our rights.</li>
            <li>We don't rent, sell or exchange your personal information.</li>
            <li>We aim to make it as simple as possible for you to control what's visible to the public, seen by search engines, kept private, and permanently deleted.</li>
          </ul>
          <p className="text-gray-700 mb-6">This Privacy Policy describes how LivQuiz collects, uses, shares, stores, and protects your personally identifiable information and how you can access, update, delete, limit, and otherwise halt the use of this information. We offer you choices regarding the collection, use, and sharing of your personal information, including the option to use services without providing personal information. We strive to support as many people as possible, including those with disabilities. If a screen reader makes this policy more accessible to you, we recommend the following browser and screen reader combinations: Chrome and ChromeVox, Safari and VoiceOver (for Mac users), and Firefox and NVDA (for Windows users).</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Protecting students and their personal information</h2>
          <p className="text-gray-700 mb-6">LivQuiz believes the personally identifiable information of children and students deserves special protections and we comply with the Children's Online Privacy Protection Act ("COPPA") and The General Data Protection Regulation ("GDPR"). We also assist schools in meeting their obligations pursuant to the Family Educational Rights Privacy Act ("FERPA"). LivQuiz offers a limited feature set and web site experience for young users of LivQuiz. We do not require students to submit their name or contact information, nor do we require them to create accounts. When a student indicates that they are under the age when they can grant consent on their own, LivQuiz does not collect personal information as defined under COPPA and may take additional steps to safeguard student privacy as required by law. Except as described in this privacy policy, LivQuiz does not accumulate personal information about any child for distribution, sharing, or selling.</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Behaviorally targeted advertising is not permitted on LivQuiz.</li>
            <li>Students can join games without creating an account.</li>
            <li>Students who have not or cannot provide consent have a limited product experience.</li>
            <li>The platform does not facilitate direct messaging between students.</li>
            <li>Quizzes are subject to proactive content filters and reactive reporting tools.</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Parental Rights</h2>
          <p className="text-gray-700 mb-6">LivQuiz empowers parents and legal guardians of children younger than the age of consent (in the U.S., this means under 13) who have registered accounts with LivQuiz to exercise their legal rights pursuant to legislation such as COPPA. Parents/guardians can consent to collection and use by LivQuiz of a child's personally identifiable information (PII) without consenting to the disclosure of information to third parties by LivQuiz. Currently, the only personal information we collect from a child younger than 13 is their parent's or guardian's email address. Parents/guardians may delete, modify, and review information their children shared with LivQuiz by accessing their child's account. They may also create a parent account to manage their child's access to LivQuiz. Parents may also request that LivQuiz delete that information and refuse to allow LivQuiz to collect further information from their children by contacting us at <a href="mailto:privacy@livquiz.com" className="text-purple-600 hover:underline">privacy@livquiz.com</a>. LivQuiz may ask additional questions or take other steps to verify the identity of parents/guardians before responding to a request to review or delete their child's information, or a request to refuse further collection from children. LivQuiz will never require a child to share more information than is reasonably necessary for using LivQuiz. While LivQuiz will assign persistent identifiers to all LivQuiz users to recognize repeat visitors and improve their LivQuiz experience, LivQuiz does not knowingly collect personally identifiable information from children younger than the age of consent without a parent or guardian's consent. If we become aware, despite our intention not to gather this information, that we collected personally identifiable information from a child younger than the age of consent without permission then we will either delete this information or seek to obtain verifiable parental consent from the child's parent or guardian to collect and use that data to provide the child with LivQuiz services in the future.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">How LivQuiz Collects Personal Information</h2>
          <p className="text-gray-700 mb-6">The information that LivQuiz collects depends on the nature of the services you request. For example, fewer data are collected from a student joining a game without an account than from a teacher who creates an account in order to create quizzes and host games. All interactions with the LivQuiz website or app produce metadata that may identify you or could be identifiable information when paired with other information about you. In every case, LivQuiz strives to collect only the minimum necessary information from you as is necessary or appropriate to fulfill the purpose of the visitor's interaction with LivQuiz or that is required by law. Visitors to the LivQuiz website or app may always refuse to supply personally identifying information, however, doing so may prevent you from engaging in certain website-related activities.</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Information you provide to LivQuiz</h3>
          <p className="text-gray-700 mb-6">Accounts are not a prerequisite to using LivQuiz, but are required to access some features and to save progress over time. If you create an account, LivQuiz saves the account information you provide. This information may include: an email address, a parent or guardian email address, first name, last name, profile photo, or organization name. You may choose not to provide specific information or to delete or modify it at any time. These actions may prevent you from engaging with specific services or features that require this information. Additional information may be provided to LivQuiz if you communicate with our support team, participate in user research, marketing campaigns or sweepstakes, or otherwise use the services. If you engage in a financial transaction with LivQuiz, you may be asked to provide additional information such as a credit card number, billing address or full name. As you use the service, you may also create academic content including quizzes and certain forms of responses. This information is not typically personally identifying, but it may be deleted at any time either by the relevant account holder or by reaching out to our team at <a href="mailto:support@livquiz.com" className="text-purple-600 hover:underline">support@livquiz.com</a>.</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Information collected automatically</h3>
          <p className="text-gray-700 mb-6">We receive and store some types of information automatically as you use the service. These may include device information such as device model, operating system, and device identifiers such as IDFA and UDID. LivQuiz also collects log information as you use the service. These data may include information regarding how and when you use the service as well as your browser type, preferred language, time zone, referring site, and internet protocol (IP) address. We may use your IP address to generate a general approximation of your location to provide the service. Examples include providing the right version of LivQuiz based on your state or country and helping teachers select their school when they sign up. LivQuiz does not collect fine location data such as GPS or bluetooth beacons. We use Google Analytics to help us understand how users engage with the service. Google Analytics uses cookies to compile reports that demonstrate how LivQuiz is being used without identifying individual visitors. You can opt out of Google Analytics at any time and continue to use LivQuiz. To learn more about opting out, click here. Aggregated demographic and activity data may be used for research purposes.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">How does LivQuiz use this information?</h2>
          <p className="text-gray-700 mb-6">LivQuiz limits its disclosure of both information that could on its own or in combination with other information be used to identify you. We only disclose personally identifying information to LivQuiz employees, contractors and subcontractors that: (i) must access that information in order to process it on LivQuiz's behalf or to provide services available at LivQuiz's website and mobile applications; and, (ii) agree not to disclose that information to others. LivQuiz does not rent, sell or exchange potentially personally-identifying and personally-identifying information to any third party without your consent. Other than to LivQuiz's employees, contractors and affiliated organizations, as described above, LivQuiz discloses potentially personally-identifying and personally-identifying information only when required to do so by law such as to comply with a court order, or when LivQuiz believes in good faith that disclosure is reasonably necessary to protect the property, or legal rights or safety of LivQuiz, third parties or the public at large. The information we collect helps us to provide the service, maintain a consistent experience, and improve it or develop new services. Examples of how this information is used include:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Providing access to your account and saving progress over time.</li>
            <li>Personalizing your experience based on factors such as general location, preferred language and areas of study.</li>
            <li>Helping teachers identify and support individual students.</li>
            <li>Analyzing engagement with specific features over time.</li>
          </ul>
          <p className="text-gray-700 mb-6">We also use personal information to enforce our policies, comply with the law, and promote safety on the platform. These efforts protect the property, or legal rights or safety of LivQuiz, third parties or the public at large. Examples of these efforts include:</p>
          <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
            <li>Preventing security breaches and fraud.</li>
            <li>Protecting users from inappropriate content.</li>
            <li>Verifying the identity of a user.</li>
            <li>Complying with privacy legislation.</li>
          </ul>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Communicating with you</h3>
          <p className="text-gray-700 mb-6">If you are a registered LivQuiz user, LivQuiz may occasionally send you communications via email (if provided) or push notification (for mobile app users) to tell you about new features, get your feedback, and to keep you up to date with what's going on with LivQuiz and our products. By registering to use our service you consent to the receipt of these communications, including text communications. You may choose to participate in sweepstakes and promotions which may have additional information regarding the use of Personal Information. If you send us a request (for example via a support email or via one of our feedback mechanisms), we reserve the right to publish it in order to help us clarify or respond to your request or to help us support other users. We engage in these activities where we have a legitimate interest or with your consent. You may choose to stop receiving such communications by unsubscribing from emails and by disabling push notifications.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">How is my information shared?</h2>
          <p className="text-gray-700 mb-6">As described in this policy, LivQuiz does not share your personal information to third party. LivQuiz may aggregate statistics about the behavior of visitors to our website and app to improve our services. For instance, LivQuiz may monitor the most popular quizzes on the LivQuiz site. LivQuiz may display this information publicly or provide it to others.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Managing your personal information</h2>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Data Subject Rights</h3>
          <p className="text-gray-700 mb-6">You have the right to delete, access, update, correct errors in, and export for transfer any of your personal information. LivQuiz makes these data subject rights available to you regardless of which country or US state in.</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Managing the subsequent use and disclosure of your personal information</h3>
          <p className="text-gray-700 mb-6">As explained throughout this Privacy Policy, you have the ability to control the use of your personal information by LivQuiz. Should you wish to prevent LivQuiz from using your information, you should delete your account. With the exceptions explained below for information you shared with other LivQuiz users, this allows you to eliminate any subsequent use and disclosure of your personal information. If your personally identifiable information changes, or if you no longer want to use LivQuiz, you may review, edit, or delete any time from the mobile app settings screen. Parents may remove, delete or update an account or any information concerning their child that is posted on LivQuiz by visiting their child's settings page, working with their child's teacher or by contacting us at <a href="mailto:support@livquiz.com" className="text-purple-600 hover:underline">support@livquiz.com</a>. Certain activity on LivQuiz may be displayed to other users, such as commentary on quiz content, blog posts, support articles, feedback forums or our blog, or the information on your LivQuiz Profile and quizzes that you have made public. You should be aware that any information you provide in these areas may be read, collected, and used by others who access them. You may delete this information or change sharing settings directly. If you are unable to do this or need help, please contact our team at <a href="mailto:support@livquiz.com" className="text-purple-600 hover:underline">support@livquiz.com</a>.</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Data Retention</h3>
          <p className="text-gray-700 mb-6">We will retain your information for as long as your account is active or as needed to provide you services. In most cases, we delete user accounts if they have been inactive for more than twelve months. We may retain and use your information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. You may delete your account or update your information at any time from the mobile app settings screen.</p>

          <h3 className="text-xl font-bold text-gray-800 mb-3">Data Security</h3>
          <p className="text-gray-700 mb-6">LivQuiz follows generally accepted industry standards to protect the personal information submitted to us, both during transmission and once we receive it. Our security measures include the use of access-controlled data centers, encryption of all data in transit, and the encryption of user password data both in transit and at rest. No method of transmission over the Internet, or method of electronic storage, however, is 100% secure. In the event of a security breach, we will notify affected account holders within the amount of time required by law so that you can take steps to keep your data safe. If you have any questions about LivQuiz security practices, you can contact us at <a href="mailto:privacy@livquiz.com" className="text-purple-600 hover:underline">privacy@livquiz.com</a>. LivQuiz reserves the right not to disclose our policies, procedures and the technologies and methods we employ to advance the security of your data so as to safeguard our practices.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Contact Us</h2>
          <p className="text-gray-700 mb-6">If you have questions or wish to send us comments about this Privacy Policy, please send an email to <a href="mailto:privacy@livquiz.com" className="text-purple-600 hover:underline">privacy@livquiz.com</a>, or write us at:</p>
          <p className="text-gray-700 mb-2">LivQuiz Inc.</p>
          <p className="text-gray-700 mb-2">56A Mill St E</p>
          <p className="text-gray-700 mb-6">Unit #220 Acton, ON L7J1H3</p>
          <p className="text-gray-700 mb-6">Any additional questions, comments or complaints may be addressed to our Data Protection Officer, Connor Pierson, who may be reached by either of these methods of contact.</p>

          <h2 className="text-2xl font-bold text-gray-800 mb-4">Privacy Policy Changes</h2>
          <p className="text-gray-700 mb-6">LivQuiz reserves the right to modify this privacy statement at any time, so please review it frequently. If we make a material change to our practices regarding your personally identifiable information, we will notify, by email, and/ or by means of a notice on our Web site prior to the change becoming effective and seek your consent for those new practices.</p>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}
 