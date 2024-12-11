import React, { useRef } from 'react'

export default function Body() {

  const sectionRef1 = useRef(null);
  const sectionRef2 = useRef(null);
  const sectionRef3 = useRef(null);
  const sectionRef4 = useRef(null);
  const sectionRef5 = useRef(null);
  const sectionRef6 = useRef(null);
  const sectionRef7 = useRef(null);
  const sectionRef8 = useRef(null);
  const sectionRef9 = useRef(null);
  const sectionRef10 = useRef(null);
  const sectionRef11 = useRef(null);

  // Step 2: Function to handle scrolling
  const handleScrollToSection = () => {
    if (sectionRef1.current) {
      sectionRef1.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <>

      <section style={{borderRadius: '0'}}>

        <div id='toc-nav-cnt'>
          <h6>Table Of Contents</h6>
          {/* <br /> */}
          <nav>
            {/* <br /> */}
            <ol id='tou-list-cnt'>
              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef1)} id='tou-list'>Introduction</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef2)} id='tou-list'>Account Activation</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef3)} id='tou-list'>Shopiva Rights</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef4)} id='tou-list'>Your Responsibilities</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef5)} id='tou-list'>Payment Of Fees And Taxes</li>

              {/* <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection('confidentiality')} id='tou-list'>Payment Via Crypto Currencies</li> */}

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef6)} id='tou-list'>Confidentiality</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef7)} id='tou-list'>Limitation Of Liability and Indemification</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef8)} id='tou-list'>Intellectual Property And Your Materials</li>

              {/* <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection('')} id='tou-list'>Additional Services</li>
               */}
              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef9)} id='tou-list'>Privacy and Data Protection</li>

              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef10)} id='tou-list'>Refund & Returns</li>

              {/* <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection('')} id='tou-list'>Shopiva Contracting Party</li>
               */}
              <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection(sectionRef11)} id='tou-list'>Terms and Termination</li>

              {/* <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection('')} id='tou-list'>Modification</li>
               */}
              {/* <li style={{cursor: 'pointer'}} onClick={e=> handleScrollToSection('')} id='tou-list'>General Condition</li>
               */}
            </ol>
          </nav>
        </div>

        <article>

          {
            [
              {
                id: 'introduction', 
                text: 'Shopiva is the trading name for U-Commerce subsidiary company. Shopiva operates an E-commerce platform consisiting of a website and mobile app (marketplace) together payment infrastructure for sale and purchase of consumer products and services in it&apos;s allocated territory.',
                highlights: [
                  {
                    text: 'These general terms and conditions shall apply to buyers and sellers on the marketplace and shall govern your use of the marketplace and related services.', 
                    list: 
                      [

                      ]
                  },

                  {
                    text: 'By using our marketplace you accept these general terms and conditions in full. If you disagree with these general terms and conditions or any part of these general terms and conditions you must not use our marketplace.', 
                    list: 
                      [

                      ]
                  },
                  {
                    text: 'If you use our marketplace in the course of a business or other organizational project then by so doing you', 
                    list: 
                      [
                        'Confirm that you have obtained the necessary authority to agree to these general terms and conditions', 'bind both yourself and the person company or other legal entity that operates that business or organizational project to these general terms and conditions; and', 'agree that you in these general terms and conditions shall reference both the individual user and the relevant person company or legal entity unless the context requires otherwise.'
                      ]
                  }
                ]
              },
              {
                id: 'account-activation',
                text: 'Use of the Shopiva Website is available only to persons who can form legally binding contracts under Nigerian governing laws. If you are a minor i.e. under the age of 18 years, you shall not register as a member of Shopiva and shall not transact or use Shopiva website. As a minor if you wish to use or transact on Shopiva, such use or transaction may be made by your legal guardian or parents who have registered as users of Shopiva. Shopiva reserves the right to terminate your membership and refuse to provide you with access to Shopiva if it is brought to Shopiva Online Shopping Limited"s notice or if it is discovered that you are under the age of 18 years. ',
                highlights: [
                  {
                    text: 'If you use Shopiva, you shall be responsible for ',
                    list: [
                      'Maintaining the confidentiality of your User ID and Password and',
                      'You shall be responsible for all activities that occur under your User ID and Password.',
                      'You agree that if you provide any information that is untrue, inaccurate, not current or incomplete that Shopiva has reasonable grounds to suspect that such information is untrue, inaccurate, not current or incomplete, or not in accordance with this Terms of Use, Shopiva has the right to indefinitely suspend or terminate or block access of your membership with Shopiva and refuse to provide you with access to the Website.'
                    ]   
                  }
                ]
              },
              {
                id: 'shopiva-rights',
                text: '',
                highlights: [
                  {
                    text: 'The Services have a range of features and functionalities. Not all Services or features will be available to all Merchants at all times and we are under no obligation to make any Services or features available in any jurisdiction. Except where prohibited in these Terms of Service or by applicable law, we reserve the right to modify the Services or any part thereof for any reason, without notice and at any time.',
                    list: [
                      
                    ]
                  },
                  {
                    text: 'Shopiva does not pre-screen Materials and it is in our sole discretion to refuse or remove any Materials from any part of the Services, including if we determine in our sole discretion that the goods or services that you offer through the Services, or the Materials uploaded or posted to the Services, violate our AUP or these Terms of Service.',
                    list: [
                      
                    ]
                  },
                  {
                    text: 'Verbal or written abuse of any kind (including threats of abuse or retribution) of any Shopiva employee, member, or officer will result in immediate Account termination.',
                    list: [
                      
                    ]
                  },
                  {
                    text: 'We reserve the right to provide our Services to your competitors and make no promise of exclusivity. You further acknowledge and agree that Shopiva employees and contractors may also be Shopiva customers or merchants and that they may compete with you, although they may not use your Confidential Information (as defined in Section 6) in doing so.',
                    list: [
                      
                    ]
                  },
                  {
                    text: 'In the event of a dispute regarding Account ownership, we reserve the right to request documentation to determine or confirm Account ownership. Documentation may include, but is not limited to, a scanned copy of your business license, government issued photo ID, the last four digits of the credit card on file, or confirmation of your status as an employee of an entity.',
                    list: [
                      
                    ]
                  },
                  {
                    text: 'Shopiva reserves the right to determine, in our sole discretion, rightful Account ownership and transfer an Account to the rightful Store Owner. If we are unable to reasonably determine the rightful Store Owner, without prejudice to our other rights and remedies, Shopiva reserves the right to temporarily suspend or disable an Account until resolution has been determined between the disputing parties.',
                    list: [

                    ]
                  }
                ]

              },
              {
                id: 'your-responsibility',
                text: '',
                highlights: [
                  {
                    text: 'You acknowledge and agree to provide public-facing contact information, a refund policy and order fulfilment timelines on your Shopiva Store.', list: []},
                  {
                    text: 'You acknowledge and agree that the Services are not a marketplace, and any contract of sale made through the Services is directly between you and the customer. You are the seller of record for all items you sell through the Services. You are responsible for the creation and operation of your Shopiva Store, your Materials, the goods and services that you may sell through the Services, and all aspects of the transactions between you and your customer(s). This includes, but is not limited to, authorizing the charge to the customer in respect of the customer"s purchase, refunds, returns, fulfilling any sales or customer service, fraudulent transactions, required legal disclosures, regulatory compliance, alleged or actual violation of applicable laws (including but not limited to consumer protection laws in any jurisdiction where you offer products or services for sale), or your breach of these Terms of Service. You represent and warrant that your Store, your Materials and the goods and services you sell through the Services will be true, accurate, and complete, and will not violate any applicable laws, regulations or rights of third parties. For the avoidance of doubt, Shopiva will not be the seller or merchant or record and will have no responsibility for your Store or items sold to customers through the Services.',
                    list: [

                    ]
                  },
                  {
                    text: 'You are solely responsible for the goods or services that you may sell through the Services (including description, price, fees, tax that you calculate, defects, required legal disclosures, regulatory compliance, offers or promotional content), including compliance with any applicable laws or regulations.',
                    list: [

                    ]
                  },
                  {
                    text: 'You may not use the Shopiva Services for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws), the laws applicable to you in your customer’s jurisdiction, or the laws of Canada and the Province of Ontario. You will comply with all applicable laws, rules and regulations (including but not limited to obtaining and complying with the requirements of any license or permit that may be necessary to operate your store or that may be held by you) in your use of the Service and your performance of obligations under the Terms of Service.',
                    list: [

                    ]
                  },
                  {
                    text: 'The API Terms govern your access to and use of the Shopiva API (as defined therein). You are solely responsible for the activity that occurs using your API Credentials (as defined in the API Terms) and for keeping your API Credentials secure.',
                    list: [

                    ]
                  },
                  {
                    text: 'You agree to use Shopiva Checkout for any sales associated with your online store. “Shopiva Checkout” means Shopiva"s checkout experience that allows Customers to enter their shipping information and payment details after adding item(s) to their cart and before placing an order, including checkouts that occur through the Shopiva Checkout API.',
                    list: [

                    ]
                  }
                ]
              },
              {
                id: 'payment-of-fees-and-taxes',
                text: '',
                highlights: [
                  {
                    text: 'You will pay the Fees applicable to your subscription to Online Service and/or POS Services (“Subscription Fees”) and any other applicable fees, including but not limited to applicable fees relating to the value of sales made through your Store when using all payment providers other than Shopiva Payments (“Transaction Fees”), and any fees relating to your purchase or use of any products or services such as Shopiva Payments, POS Equipment, shipping, apps, Themes, domain names, Experts Marketplace, or Third Party Services (“Additional Fees”). Together, the Subscription Fees, Transaction Fees and the Additional Fees are referred to as the “Fees”.', 
                    list: [

                    ]
                  },
                  {
                    text: 'You must keep a valid payment method on file with us to pay for all incurred and recurring Fees. Shopiva will charge applicable Fees to any valid payment method that you authorize (“Authorized Payment Method”), and Shopiva will continue to charge the Authorized Payment Method for applicable Fees until the Services are terminated, and any and all outstanding Fees have been paid in full. Unless otherwise indicated, all Fees and other charges are in U.S. dollars, and all payments will be in U.S. currency.', 
                    list: [

                    ]
                  },
                  {
                    text: 'Subscription Fees are paid in advance and will be billed in 30 day intervals (each such date, a “Billing Date”). Transaction Fees and Additional Fees will be charged from time to time at Shopiva’s discretion. You will be charged on each Billing Date for all outstanding Fees that have not previously been charged. Fees will appear on an invoice, which will be sent to the Store Owner via the Primary Email Address provided. As well, an invoice will appear on the Account page of your Store’s administrative console. Users have approximately two weeks to bring up and settle any issues with the billing of Subscription Fees.', 
                    list: [

                    ]
                  },
                  {
                    text: 'If we are not able to process payment of Fees using an Authorized Payment Method, we may make subsequent attempts to process payment using any Authorized Payment Method. If we are unable to successfully process payment of Fees using an Authorized Payment Method within 28 days of our initial attempt, we may suspend and revoke access to your Account and the Services. Your Account will be reactivated upon your payment of any outstanding Fees, plus the Fees applicable to your next billing cycle. You may not be able to access your Account or your storefront during any period of suspension. If the outstanding Fees remain unpaid for 60 days following the date of suspension, Shopiva reserves the right to terminate your Account in accordance with Section 14.', 
                    list: [

                    ]
                  },
                  {
                    text: 'All Fees are exclusive of applicable federal, provincial, state, local or other governmental sales, goods and services (including Goods and Sales Tax under the Goods and Services Tax Act, Chapter 117A of Singapore), harmonized or other taxes, fees or charges now in force or enacted in the future (“Taxes”).', 
                    list: [

                    ]
                  },
                  {
                    text: 'You are responsible for all applicable Taxes that arise from or as a result of your subscription to or purchase of Shopiva’s products and services. To the extent that Shopiva charges these Taxes, they are calculated using the tax rates that apply based on the billing address you provide to us. Such amounts are in addition to the Fees for such products and services and will be billed to your Authorized Payment Method. If you are exempt from payment of such Taxes, you must provide us with evidence of your exemption, which in some jurisdictions includes an original certificate that satisfies applicable legal requirements attesting to tax-exempt status. Tax exemption will only apply from and after the date we receive evidence satisfactory to Shopiva of your exemption. If you are not charged Taxes by Shopiva, you are responsible for determining if Taxes are payable, and if so, self-remitting Taxes to the appropriate tax authorities in your jurisdiction.', 
                    list: [

                    ]
                  },
                  {
                    text: 'For the avoidance of doubt, all sums payable by you to Shopiva under these Terms of Service will be paid free and clear of any deductions or withholdings whatsoever. Other than Taxes charged by Shopiva to you and remitted to the appropriate tax authorities on your behalf, any deductions or withholdings that are required by law will be borne by you and paid separately to the relevant taxation authority. Shopiva will be entitled to charge the full amount of Fees stipulated under these Terms of Service to your Authorized Payment Method ignoring any such deduction or withholding that may be required.', 
                    list: [

                    ]
                  },{
                    text: 'You are solely responsible for determining, collecting, withholding, reporting, and remitting applicable taxes, duties, fees, surcharges and additional charges that arise from or as a result of any sale on your Shopiva Store or your use of the Services. The Services are not a marketplace. Any contract of sale made through the Services is directly between you and the customer.', 
                    list: [

                    ]
                  },
                  {
                    text: 'You must maintain an accurate location in the administrative console of your Shopiva Store. If you change jurisdictions you must promptly update your location in the administrative console.',
                    list: [

                    ]
                  }

                ]
              },
              {
                id: 'confidentiality',
                text: '', 
                highlights: 
                [
                  {
                    text: '“Confidential Information” will include, but will not be limited to, any and all information associated with a party"s business and not publicly known, including specific business information, technical processes and formulas, software, customer lists, prospective customer lists, names, addresses and other information regarding customers and prospective customers, product designs, sales, costs (including any relevant processing fees), price lists, and other unpublished financial information, business plans and marketing data, and any other confidential and proprietary information, whether or not marked as confidential or proprietary. Shopiva"s Confidential Information includes all information that you receive relating to us, or to the Services, that is not known to the general public including information related to our security program and practices.',
                    list: [

                    ]
                  },
                  {
                    text: 'Each party agrees to use the other party"s Confidential Information solely as necessary for performing its obligations under these Terms of Service and in accordance with any other obligations in these Terms of Service including this Section 6. Each party agrees that it will take all reasonable steps, at least substantially equivalent to the steps it takes to protect its own proprietary information, to prevent the duplication, disclosure or use of any such Confidential Information, other than (i) by or to its employees, agents and subcontractors who must have access to such Confidential Information to perform such party"s obligations hereunder, who each will treat such Confidential Information as provided herein, and who are each subject to obligations of confidentiality to such party that are at least as stringent as those contained herein; or (ii) as required by any law, regulation, or order of any court of proper jurisdiction over the parties and the subject matter contained in these Terms of Service, provided that, if legally permitted, the receiving party will give the disclosing party prompt written notice and use commercially reasonable efforts to ensure that such disclosure is accorded confidential treatment. Confidential Information will not include any information that the receiving party can prove: (A) was already in the public domain, or was already known by or in the possession of the receiving party, at the time of disclosure of such information; (B) is independently developed by the receiving party without use of or reference to the other party"s Confidential Information, and without breaching any provisions of these Terms of Service; or (C) is thereafter rightly obtained by the receiving party from a source other than the disclosing party without breaching any provision of these Terms of Service.',
                    list: [

                    ]
                  }
                ]
              },
              {
                id: 'limitation-Of-liability-and-indemification',
                text: '',
                highlights: [
                  {
                    text: 'You expressly understand and agree that, to the extent permitted by applicable laws, Shopiva and its suppliers will not be liable for any direct, indirect, incidental, special, consequential or exemplary damages, including but not limited to, damages for loss of profits, goodwill, use, data or other intangible losses arising out of or relating to the use of or inability to use the Service or these Terms of Service (however arising, including negligence).',
                    list: [

                    ]
                  },
                  {
                    text: 'You agree to indemnify and hold us and (as applicable) our parent, subsidiaries, affiliates, Shopiva partners, officers, directors, agents, employees, and suppliers harmless from any claim or demand, including reasonable attorneys" fees, made by any third party due to or arising out of (a) your breach of these Terms of Service or the documents it incorporates by reference (including the AUP); (b) or your violation of any law or the rights of a third party; or (c) any aspect of the transaction between you and your Customer, including but not limited to refunds, fraudulent transactions, alleged or actual violation of applicable laws (including but not limited to Federal and State consumer protection laws), or your breach of the Terms of Service.',
                    list: [

                    ]
                  },
                  {
                    text: 'You will be responsible for any breach of the Terms of Service by your affiliates, agents or subcontractors and will be liable as if it were your own breach.',
                    list: [

                    ]
                  },
                  {
                    text: 'Your use of the Services is at your sole risk. The Services are provided on an “as is” and “as available” basis without any warranty or condition, express, implied or statutory.',
                    list: [

                    ]
                  },
                  {
                    text: 'Shopiva does not warrant that the Services will be uninterrupted, timely, secure, or error-free.',
                    list: [

                    ]
                  },
                  {
                    text: 'Shopiva does not warrant that the results that may be obtained from the use of the Services will be accurate or reliable.',
                    list: [

                    ]
                  },
                  {
                    text: 'Shopiva is not responsible for any of your tax obligations or liabilities related to the use of Shopiva"s Services.',
                    list: [

                    ]
                  },
                  {
                    text: '',
                    list: [

                    ]
                  },
                  {
                    text: 'Shopiva does not warrant that the quality of any products, services, information, or other materials purchased or obtained by you through the Services will meet your expectations, or that any errors in the Services will be corrected.',
                    list: [

                    ]
                  }
                ]
                
              },
              {
                id: 'Intellectual-property-and-your-materials',
                text: '',
                highlights: [
                  
                  {
                    text: 'Your Materials',
                    list: [
                      'We do not claim ownership of the Materials you provide to Shopiva; however, we do require a license to those Materials. You grant Shopiva a non-exclusive, transferable, sub-licensable, royalty-free, worldwide right and license to host, use, distribute, expose, modify, run, copy, store, publicly perform, communicate to the public (including by telecommunication), broadcast, reproduce, make available, display, and translate, and create derivative works of any Materials provided by you in connection with the Services. We may use our rights under this license to operate, provide, and promote the Services and to perform our obligations and exercise our rights under the Terms of Service. You represent, warrant, and agree that you have all necessary rights in the Materials to grant this license. You irrevocably waive any and all moral rights you may have in the Materials in favour of Shopiva and agree that this waiver may be invoked by anyone who obtains rights in the materials through Shopiva, including anyone to whom Shopiva may transfer or grant (including by way of license or sublicense) any rights in the Materials.',
                      'If you owned the Materials before providing them to Shopiva then, despite uploading them to your Shopiva Store they remain yours, subject to any rights or licenses granted in the Terms of Service or elsewhere. You can remove your Shopiva Store at any time by deleting your Account. Removing your Shopiva Store does not terminate any rights or licenses granted to the Materials that Shopiva requires to exercise any rights or perform any obligations that arose during the Term.',
                      'You agree that Shopiva can, at any time, review and delete any or all of the Materials submitted to the Services, although Shopiva is not obligated to do so.',
                      'You grant Shopiva a non-exclusive, transferable, sub-licensable, royalty-free, worldwide right and license to use the names, trademarks, service marks and logos associated with your Store (“Your Trademarks”) to operate, provide, and promote the Services and to perform our obligations and exercise our rights under the Terms of Service. This license will survive any termination of the Terms of Service solely to the extent that Shopiva requires the license to exercise any rights or perform any obligations that arose during the Term.',


                    ]
                  },
                  
                  {
                    text: 'Shopiva Intellectual Property',
                    list: [
                      'You agree that you may not use any trademarks, logos, or service marks of Shopiva, whether registered or unregistered, including but not limited to the word mark SHOPIva, the word mark SHOP, the word mark SHOP PAY, and the “S” and shopping bag design mark (“Shopiva Trademarks”) unless you are authorized to do so by Shopiva in writing. You agree not to use or adopt any marks that may be considered confusing with the Shopiva Trademarks. You agree that any variations or misspellings of the Shopiva Trademarks would be considered confusing with the Shopiva Trademarks.',
                      'You agree not to purchase, register, or use search engine or other pay-per-click keywords (such as Google Ads), trademarks, email addresses, social media names, or domain names (including without limitation top-level domains, sub-domains, and page URLs) that use or include Shopiva or Shopiva Trademarks or that use or include any terms that may be confusing with the Shopiva Trademarks.',
                      'You acknowledge and agree that the Terms of Service do not give you any right to implement Shopiva patents.'
                    ]
                  }
                ]
              },
              {
                id: 'privacy-and-data-protection',
                text: '',
                highlights: [
                  {
                    text: 'Shopiva is firmly committed to protecting the privacy of your personal information and the personal information of your customers. By using the Service, you acknowledge and agree that Shopiva"s collection, usage and disclosure of this personal information is governed by our Privacy Policy.', 
                    list: [

                    ]
                  },
                  {
                    text: 'To the extent that Shopiva processes personal information of your customers as a “data processor” or “service provider” under certain data privacy or protection laws, including the EU or UK General Data Protection Regulation and the California Consumer Privacy Act, Shopiva"s collection and use of personal information is also subject to our Data Processing Addendum.', 
                    list: [

                    ]
                  }
                ]
              },
              {
                id: 'refunds-and-return',
                text: '',
                highlights: [
                  {
                    text: 'Returns of products by buyers and acceptance of returned products by sellers shall be managed by us in accordance with the returns page on the marketplace as may be amended from time to time. Acceptance of returns shall be in our discretion subject to compliance with applicable laws of the territory.', 
                    list: [

                    ]
                  },
                  {
                    text: 'Refunds in respect of returned products shall be managed in accordance with the refunds page on the marketplace as may be amended from time to time. Our rules on refunds shall be exercised in our discretion subject to applicable laws of the territory. We may offer refunds in our discretion:', 
                    list: [
                      'in respect of the product price;',
                      'local and/or international shipping fees (as stated on the refunds page); and',
                      'by way of store credits vouchers mobile money transfer bank transfers or such other methods as we may determine from time to time.'
                    ]
                  },
                  {
                    text: 'Returned products shall be accepted and refunds issued by Jumia acting for and on behalf of the seller. Notwithstanding paragraphs 4.1 and 4.2 above in respect of digital products or services and fresh food Jumia shall issue refunds in respect of failures in delivery only. Refunds of payment for such products for any other reasons shall be subject to the seller"s terms and conditions of sale.', 
                    list: [

                    ]
                  },
                  {
                    text: 'Changes to our returns page or refunds page shall be effective in respect of all purchases made from the date of publication of the change on our website.', 
                    list: [
                      
                    ]
                  }
                ]  
              },
              {
                id: 'term-and-termination',
                text: '',
                highlights: [
                  {
                    text: 'The term of these Terms of Service will begin on the date of your completed registration for use of a Service and continue until terminated by us or by you, as provided below (the “Term”).', 
                    list: [

                    ]
                  },
                  {
                    text: 'You may cancel your Account and terminate the Terms of Service at any time by contacting Shopify Support and then following the specific instructions indicated to you in Shopify"s response.', 
                    list: [

                    ]
                  },
                  {
                    text: 'Without limiting any other remedies, we may suspend or terminate your Account or the Terms of Service for any reason, without notice and at any time (unless otherwise required by law), including if we suspect that you (by conviction, settlement, insurance or escrow investigation, or otherwise) have engaged in fraudulent activity in connection with the use of the Services. Termination of the Terms of Service will be without prejudice to any rights or obligations which arose prior to the date of termination.', 
                    list: [

                    ]
                  },
                  {
                    text: 'Upon termination of the Services by either party for any reason:', 
                    list: [
                      'Shopify will cease providing you with the Services and you will no longer be able to access your Account;',

                      'unless otherwise provided in the Terms of Service, you will not be entitled to any refunds of any Fees, pro rata or otherwise;',

                      'any outstanding balance owed to Shopify for your use of the Services through the effective date of such termination will immediately become due and payable in full; and',

                      'your Shopify Store will be taken offline.'
                    ]
                  },
                  {
                    text: 'If you purchased a domain name through Shopify, upon cancellation your domain will no longer be automatically renewed. Following termination, it will be your sole responsibility to handle all matters related to your domain with the domain provider.', 
                    list: [

                    ]
                  },
                  {
                    text: 'If there are any outstanding Fees owed by you at the date of termination of the Service, you will receive one final invoice via email. Once that invoice has been paid in full, you will not be charged again.', 
                    list: [

                    ]
                  }
                ]  
              },

             
              
            ].map((item, index) => {
              return(
                <>
                  
                  <div ref={sectionRef1} id={`${item.id} ${'section'}`}>
                    <h4 style={{textTransform: 'capitalize', textAlign: 'left', color: '#000'}}>{item.id}</h4>
                    <div key={index} id={item.id} style={{fontSize: 'medium', fontWeight: '400'}}>{
                      item.text
                    }</div>
                    {/* <br /> */}
                    <ol>
                      {
                        item?.highlights?.map((item, index) =>
                          <>
                            <li key={index} style={{fontSize: 'medium', fontWeight: '400', margin: '20px 0px'}}>
                              {
                                item.text
                              }
                              <ol style={{display: 'block', listStyleType: 'circle'}}>
                                {
                                  item.list.map((item, index) =>
                                    <li key={index} style={{width: '100%', alignItems: 'flex-start', fontWeight: '400', margin: '10px 0px'}}>
                                      <>
                                        {item}
                                      </>
                                    </li>
                                  )
                                }
                              </ol>
                            </li>
                          </>
                        )
                      }
                    </ol>
                  </div>

                </>
              )
            })
          }

        </article>
      </section>
      
    </>
  )
}
