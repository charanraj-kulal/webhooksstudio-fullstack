import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Particles from "@/components/magicui/particles";
import { MagicCard } from "@/components/magicui/magic-card";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Meteors from "@/components/magicui/meteors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import {
  faAngleLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const TermsAndCondition = () => {
  const { theme } = useTheme();
  const navigate = useNavigate();
  const [color, setColor] = useState("#ffffff");
  const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const toggleSection = (index: number) => {
    setExpandedSection((prevIndex) => (prevIndex === index ? null : index));
  };

  const sections = [
    {
      title: " 1. OUR SERVICES",
      content: `The information provided when using the Services is not intended for distribution to or use by any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or which would subject us to any registration requirement within such jurisdiction or country. Accordingly, those persons who choose to access the Services from other locations do so on their own initiative and are solely responsible for compliance with local laws, if and to the extent local laws are applicable.
`,
    },
    {
      title: " 2.INTELLECTUAL PROPERTY RIGHTS",
      content: `Our intellectual property


We are the owner or the licensee of all intellectual property rights in our Services, including all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics in the Services (collectively, the "Content"), as well as the trademarks, service marks, and logos contained therein (the "Marks").


Our Content and Marks are protected by copyright and trademark laws (and various other intellectual property rights and unfair competition laws) and treaties in the United States and around the world.


The Content and Marks are provided in or through the Services "AS IS" for your personal, non-commercial use or internal business purpose only.


Your use of our Services


Subject to your compliance with these Legal Terms, including the "PROHIBITED ACTIVITIES" section below, we grant you a non-exclusive, non-transferable, revocable license to:
access the Services; and
download or print a copy of any portion of the Content to which you have properly gained access.
solely for your personal, non-commercial use or internal business purpose.


Except as set out in this section or elsewhere in our Legal Terms, no part of the Services and no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed, encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial purpose whatsoever, without our express prior written permission.


If you wish to make any use of the Services, Content, or Marks other than as set out in this section or elsewhere in our Legal Terms, please address your request to: webhooksstudio@gmail.com. If we ever grant you the permission to post, reproduce, or publicly display any part of our Services or Content, you must identify us as the owners or licensors of the Services, Content, or Marks and ensure that any copyright or proprietary notice appears or is visible on posting, reproducing, or displaying our Content.


We reserve all rights not expressly granted to you in and to the Services, Content, and Marks.


Any breach of these Intellectual Property Rights will constitute a material breach of our Legal Terms and your right to use our Services will terminate immediately.


Your submissions


Please review this section and the "PROHIBITED ACTIVITIES" section carefully prior to using our Services to understand the (a) rights you give us and (b) obligations you have when you post or upload any content through the Services.


Submissions: By directly sending us any question, comment, suggestion, idea, feedback, or other information about the Services ("Submissions"), you agree to assign to us all intellectual property rights in such Submission. You agree that we shall own this Submission and be entitled to its unrestricted use and dissemination for any lawful purpose, commercial or otherwise, without acknowledgment or compensation to you.


You are responsible for what you post or upload: By sending us Submissions through any part of the Services you:
confirm that you have read and agree with our "PROHIBITED ACTIVITIES" and will not post, send, publish, upload, or transmit through the Services any Submission that is illegal, harassing, hateful, harmful, defamatory, obscene, bullying, abusive, discriminatory, threatening to any person or group, sexually explicit, false, inaccurate, deceitful, or misleading;
to the extent permissible by applicable law, waive any and all moral rights to any such Submission;
warrant that any such Submission are original to you or that you have the necessary rights and licenses to submit such Submissions and that you have full authority to grant us the above-mentioned rights in relation to your Submissions; and
warrant and represent that your Submissions do not constitute confidential information.
You are solely responsible for your Submissions and you expressly agree to reimburse us for any and all losses that we may suffer because of your breach of (a) this section, (b) any third party’s intellectual property rights, or (c) applicable law.


`,
    },
    {
      title: " 3. USER REPRESENTATIONS",
      content: `By using the Services, you represent and warrant that: (1) you have the legal capacity and you agree to comply with these Legal Terms; (2) you are not under the age of 13; (3) you are not a minor in the jurisdiction in which you reside, or if a minor, you have received parental permission to use the Services; (4) you will not access the Services through automated or non-human means, whether through a bot, script or otherwise; (5) you will not use the Services for any illegal or unauthorized purpose; and (6) your use of the Services will not violate any applicable law or regulation.


If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to suspend or terminate your account and refuse any and all current or future use of the Services (or any portion thereof).
`,
    },

    {
      title: "4. PURCHASES AND PAYMENT",
      content: `We accept the following forms of payment:

You agree to provide current, complete, and accurate purchase and account information for all purchases made via the Services. You further agree to promptly update account and payment information, including email address, payment method, and payment card expiration date, so that we can complete your transactions and contact you as needed. Sales tax will be added to the price of purchases as deemed required by us. We may change prices at any time. All payments shall be in INR.

You agree to pay all charges at the prices then in effect for your purchases and any applicable shipping fees, and you authorize us to charge your chosen payment provider for any such amounts upon placing your order. We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or received payment.

We reserve the right to refuse any order placed through the Services. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. These restrictions may include orders placed by or under the same customer account, the same payment method, and/or orders that use the same billing or shipping address. We reserve the right to limit or prohibit orders that, in our sole judgment, appear to be placed by dealers, resellers, or distributors.`,
    },
    {
      title: "5. POLICY",
      content: "All sales are final and no refund will be issued.",
    },
    {
      title: "6. PROHIBITED ACTIVITIES",
      content: `You may not access or use the Services for any purpose other than that for which we make the Services available. The Services may not be used in connection with any commercial endeavors except those that are specifically endorsed or approved by us.

As a user of the Services, you agree not to:
• Systematically retrieve data or other content from the Services to create or compile, directly or indirectly, a collection, compilation, database, or directory without written permission from us.
• Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account information such as user passwords.
• Circumvent, disable, or otherwise interfere with security-related features of the Services, including features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the Services and/or the Content contained therein.
• Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Services.
• Use any information obtained from the Services in order to harass, abuse, or harm another person.
• Make improper use of our support services or submit false reports of abuse or misconduct.
• Use the Services in a manner inconsistent with any applicable laws or regulations.
• Engage in unauthorized framing of or linking to the Services.
• Upload or transmit (or attempt to upload or to transmit) viruses, Trojan horses, or other material, including excessive use of capital letters and spamming (continuous posting of repetitive text), that interferes with any party's uninterrupted use and enjoyment of the Services or modifies, impairs, disrupts, alters, or interferes with the use, features, functions, operation, or maintenance of the Services.
• Engage in any automated use of the system, such as using scripts to send comments or messages, or using any data mining, robots, or similar data gathering and extraction tools.
• Delete the copyright or other proprietary rights notice from any Content.
• Attempt to impersonate another user or person or use the username of another user.
• Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active information collection or transmission mechanism, including without limitation, clear graphics interchange formats ("gifs"), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as "spyware" or "passive collection mechanisms" or "pcms").
• Interfere with, disrupt, or create an undue burden on the Services or the networks or services connected to the Services.
• Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion of the Services to you.
• Attempt to bypass any measures of the Services designed to prevent or restrict access to the Services, or any portion of the Services.
• Copy or adapt the Services' software, including but not limited to Flash, PHP, HTML, JavaScript, or other code.
• Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the software comprising or in any way making up a part of the Services.
• Except as may be the result of standard search engine or Internet browser usage, use, launch, develop, or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper, or offline reader that accesses the Services, or use or launch any unauthorized script or other software.
• Use a buying agent or purchasing agent to make purchases on the Services.
• Make any unauthorized use of the Services, including collecting usernames and/or email addresses of users by electronic or other means for the purpose of sending unsolicited email, or creating user accounts by automated means or under false pretenses.
• Use the Services as part of any effort to compete with us or otherwise use the Services and/or the Content for any revenue-generating endeavor or commercial enterprise.
• Use the Services to advertise or offer to sell goods and services.`,
    },
    {
      title: "7. USER GENERATED CONTRIBUTIONS",
      content: `The Services does not offer users to submit or post content. We may provide you with the opportunity to create, submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on the Services, including but not limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Services and through third-party websites. When you create or make available any Contributions, you thereby represent and warrant that:
   
The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.
You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Services, and other users of the Services to use your Contributions in any manner contemplated by the Services and these Legal Terms.
You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness of each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Services and these Legal Terms.
Your Contributions are not false, inaccurate, or misleading. 
Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.
Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us). 
Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.
Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.
Your Contributions do not violate any applicable law, regulation, or rule.
Your Contributions do not violate the privacy or publicity rights of any third party.
Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.
Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.
Your Contributions do not otherwise violate, or link to material that violates, any provision of these Legal Terms, or any applicable law or regulation.
Any use of the Services in violation of the foregoing violates these Legal Terms and may result in, among other things, termination or suspension of your rights to use the Services.

`,
    },
    {
      title: "8. CONTRIBUTION LICENSE",
      content: "All sales are final and no refund will be issued.",
    },

    {
      title: "9. SERVICES MANAGEMENT",
      content: `We reserve the right, but not the obligation, to: (1) monitor the Services for violations of these Legal Terms; (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Legal Terms, including without limitation, reporting such user to law enforcement authorities; (3) in our sole discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion and without limitation, notice, or liability, to remove from the Services or otherwise disable all files and content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the Services in a manner designed to protect our rights and property and to facilitate the proper functioning of the Services.
`,
    },
    {
      title: "10. PRIVACY POLICY",
      content: "All sales are final and no refund will be issued.",
    },
    {
      title: "11. TERM AND TERMINATION",
      content: `These Legal Terms shall remain in full force and effect while you use the Services. WITHOUT LIMITING ANY OTHER PROVISION OF THESE LEGAL TERMS, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR LIABILITY, DENY ACCESS TO AND USE OF THE SERVICES (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT CONTAINED IN THESE LEGAL TERMS OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR PARTICIPATION IN THE SERVICES OR DELETE ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME, WITHOUT WARNING, IN OUR SOLE DISCRETION.


If we terminate or suspend your account for any reason, you are prohibited from registering and creating a new account under your name, a fake or borrowed name, or the name of any third party, even if you may be acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive redress.
`,
    },
    {
      title: "12. MODIFICATIONS AND INTERRUPTIONS",
      content: `We reserve the right to change, modify, or remove the contents of the Services at any time or for any reason at our sole discretion without notice. However, we have no obligation to update any information on our Services. We also reserve the right to modify or discontinue all or part of the Services without notice at any time. We will not be liable to you or any third party for any modification, price change, suspension, or discontinuance of the Services.


We cannot guarantee the Services will be available at all times. We may experience hardware, software, or other problems or need to perform maintenance related to the Services, resulting in interruptions, delays, or errors. We reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Services at any time or for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or inconvenience caused by your inability to access or use the Services during any downtime or discontinuance of the Services. Nothing in these Legal Terms will be construed to obligate us to maintain and support the Services or to supply any corrections, updates, or releases in connection therewith.
`,
    },
    {
      title: "13. GOVERNING LAW",
      content: `These Legal Terms shall be governed by and defined following the laws of India. Webhooksstudio and yourself irrevocably consent that the courts of India shall have exclusive jurisdiction to resolve any dispute which may arise in connection with these Legal Terms.
`,
    },
    {
      title: "14. DISPUTE RESOLUTION",
      content: `You agree to irrevocably submit all disputes related to these Legal Terms or the legal relationship established by these Legal Terms to the jurisdiction of the India courts. Webhooksstudio shall also maintain the right to bring proceedings as to the substance of the matter in the courts of the country where you reside or, if these Legal Terms are entered into in the course of your trade or profession, the state of your principal place of business.
`,
    },
    {
      title: "15. CORRECTIONS",
      content: `There may be information on the Services that contains typographical errors, inaccuracies, or omissions, including descriptions, pricing, availability, and various other information. We reserve the right to correct any errors, inaccuracies, or omissions and to change or update the information on the Services at any time, without prior notice.
`,
    },
    {
      title: "16. DISCLAIMER",
      content: `THE SERVICES ARE PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SERVICES WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR IMPLIED, IN CONNECTION WITH THE SERVICES AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SERVICES' CONTENT OR THE CONTENT OF ANY WEBSITES OR MOBILE APPLICATIONS LINKED TO THE SERVICES AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF THE SERVICES, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM THE SERVICES, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE TRANSMITTED TO OR THROUGH THE SERVICES BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SERVICES, ANY HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.
`,
    },
    {
      title: "17. LIMITATIONS OF LIABILITY",
      content:
        "IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT, LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SERVICES, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.",
    },
    {
      title: "18. INDEMNIFICATION",
      content:
        "You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out of: (1) use of the Services; (2) breach of these Legal Terms; (3) any breach of your representations and warranties set forth in these Legal Terms; (4) your violation of the rights of a third party, including but not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Services with whom you connected via the Services. Notwithstanding the foregoing, we reserve the right, at your expense, to assume the exclusive defense and control of any matter for which you are required to indemnify us, and you agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of it.",
    },
    {
      title: "19. USER DATA",
      content:
        "We will maintain certain data that you transmit to the Services for the purpose of managing the performance of the Services, as well as data relating to your use of the Services. Although we perform regular routine backups of data, you are solely responsible for all data that you transmit or that relates to any activity you have undertaken using the Services. You agree that we shall have no liability to you for any loss or corruption of any such data, and you hereby waive any right of action against us arising from any such loss or corruption of such data. ",
    },
    {
      title: "20. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES",
      content:
        "Visiting the Services, sending us emails, and completing online forms constitute electronic communications. You consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and other communications we provide to you electronically, via email and on the Services, satisfy any legal requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES, CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SERVICES. You hereby waive any rights or requirements under any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any means other than electronic means. ",
    },
    {
      title: "21. MISCELLANEOUS",
      content: `These Legal Terms and any policies or operating rules posted by us on the Services or in respect to the Services constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any right or provision of these Legal Terms shall not operate as a waiver of such right or provision. These Legal Terms operate to the fullest extent permissible by law. We may assign any or all of our rights and obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of these Legal Terms is determined to be unlawful, void, or unenforceable, that provision or part of the provision is deemed severable from these Legal Terms and does not affect the validity and enforceability of any remaining provisions. There is no joint venture, partnership, employment or agency relationship created between you and us as a result of these Legal Terms or use of the Services. You agree that these Legal Terms will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you may have based on the electronic form of these Legal Terms and the lack of signing by the parties hereto to execute these Legal Terms.
`,
    },
    {
      title: "22. CONTACT US",
      content: `In order to resolve a complaint regarding the Services or to receive further information regarding use of the Services, please contact us at:
Webhooksstudio
Bantwal
Bantwal, Karnataka 574211
India
Phone: +91 9353649294 
webhooksstudio@gmail.com
      `,
    },
  ];

  useEffect(() => {
    setColor("#ffffff");
  }, [theme]);

  return (
    <>
      <div className="relative">
        <div style={{ overflowX: "hidden" }}>
          <Particles
            className="absolute inset-0 -z-50"
            quantity={100}
            ease={80}
            color={color}
            refresh
          />

          <Nav />
          <Meteors number={7} />

          {/* MagicCard for More About Us, Refund Policy, and Privacy Policy */}
          <MagicCard
            className="container w-11/12 md:w-full  transition min-h-96 duration-700 ease-in-out flex-col items-center justify-center text-center shadow-[0_10px_190px_rgba(8,_112,_184,_0.2)] hover:shadow-[0_10px_190px_rgba(8,_112,_184,_0.4)] p-10 sm:p-8 lg:p-10 border  border-white/30 hover:border-white/50 rounded-xl"
            gradientColor="#A020F0"
          >
            <div className="hidden sm:block absolute p-2 px-2 border rounded-lg border-white/30 hover:bg-white hover:text-black transition-all">
              <p className="text-lg">
                <button onClick={() => navigate(-1)} className="">
                  <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                  Back
                </button>
              </p>
            </div>
            <h2 className="text-3xl mt-6 font-bold mb-6">
              TERMS AND CONDITIONS
            </h2>
            <p className="mb-4">Last updated September 05, 2024</p>

            <h3 className="text-2xl font-bold mb-4">
              AGREEMENT TO OUR LEGAL TERMS
            </h3>

            <p className="mb-4">
              We are Webhooksstudio ("Company," "we," "us," "our"), a startup
              company registered in India at Bantwal, Karnataka 574211.
            </p>

            <p className="mb-4">
              We operate the website https://webhooksstudio.vercel.app/ (the
              "Site"), as well as any other related products and services that
              refer or link to these legal terms (the "Legal Terms")
              (collectively, the "Services").
            </p>

            <p className="mb-4">
              You can contact us by phone at +91 9353649294, email at
              webhooksstudio@gmail.com, or by post to Annalike House, Koila,
              Bantwal, Karnataka 574211, India.
            </p>

            <p className="mb-4">
              These Legal Terms constitute a legally binding agreement made
              between you, whether personally or on behalf of an entity ("you"),
              and Webhooksstudio, concerning your access to and use of the
              Services. You agree that by accessing the Services, you have read,
              understood, and agreed to be bound by all of these Legal Terms. IF
              YOU DO NOT AGREE WITH ALL OF THESE LEGAL TERMS, THEN YOU ARE
              EXPRESSLY PROHIBITED FROM USING THE SERVICES AND YOU MUST
              DISCONTINUE USE IMMEDIATELY.
            </p>

            <p className="mb-4">
              Supplemental terms and conditions or documents that may be posted
              on the Services from time to time are hereby expressly
              incorporated herein by reference. We reserve the right, in our
              sole discretion, to make changes or modifications to these Legal
              Terms at any time and for any reason. We will alert you about any
              changes by updating the "Last updated" date of these Legal Terms,
              and you waive any right to receive specific notice of each such
              change. It is your responsibility to periodically review these
              Legal Terms to stay informed of updates. You will be subject to,
              and will be deemed to have been made aware of and to have
              accepted, the changes in any revised Legal Terms by your continued
              use of the Services after the date such revised Legal Terms are
              posted.
            </p>

            <p className="mb-4">
              The Services are intended for users who are at least 13 years of
              age. All users who are minors in the jurisdiction in which they
              reside (generally under the age of 18) must have the permission
              of, and be directly supervised by, their parent or guardian to use
              the Services. If you are a minor, you must have your parent or
              guardian read and agree to these Legal Terms prior to you using
              the Services.
            </p>

            <p className="mb-4">
              We recommend that you print a copy of these Legal Terms for your
              records.
            </p>

            {sections.map((section, index) => (
              <div key={index} className="mb-4 border-b border-gray-200 pb-4">
                <button
                  onClick={() => toggleSection(index)}
                  className="flex justify-between items-center w-full text-left font-semibold text-gray-700 hover:text-gray-900 focus:outline-none"
                >
                  <span className="text-white">{section.title}</span>
                  {expandedSection === index ? (
                    <FontAwesomeIcon
                      icon={faChevronUp}
                      className="h-5 w-5 text-gray-500"
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      className="h-5 w-5 text-gray-500"
                    />
                  )}
                </button>
                <div
                  className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
                    expandedSection === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="mt-2 text-white text-start text-sm whitespace-pre-wrap p-4">
                    {section.content}
                  </div>
                </div>
              </div>
            ))}
            <p className="mt-6 text-lg">
              For any further queries, feel free to{" "}
              <Link to="/#contact" className="text-purple-500 hover:underline">
                contact WebHooks Studio
              </Link>
              .
            </p>

            <p className="mt-6 text-lg">
              <Link to="/" className=" hover:underline">
                <FontAwesomeIcon className="mr-2" icon={faAngleLeft} />
                Back to Home
              </Link>
            </p>
            <div className="mt-4 flex justify-center text-left md:text-center md:ml-0 ml-20 items-center">
              <div className=" justify-center items-center">
                <ul className=" flex flex-col md:flex-row">
                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/privacy-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Privacy-policy
                    </Link>
                  </li>
                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/shipping-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Shipping-policy
                    </Link>
                  </li>

                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/Cancellation-and-refund-policy"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Cancellation-and-refund-policy
                    </Link>
                  </li>
                  <li className="mt-1 md:mt-0">
                    <Link
                      to={"/contact-us"}
                      className="hover:underline text-white/60 hover:text-white hover:tracking-widest px-1 md:px-2 transition-all"
                    >
                      <FontAwesomeIcon
                        icon={faChevronRight}
                        className="mr-1.5 inline-flex md:hidden"
                      />
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </MagicCard>

          <Footer />
        </div>
      </div>
    </>
  );
};

export default TermsAndCondition;
