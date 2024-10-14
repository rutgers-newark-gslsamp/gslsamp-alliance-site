'use client' // Needed to avoid error message

import React, { useState } from 'react';
import FAQItem from './FaqItem';

interface FAQ {
    question: string;
    answer: string | JSX.Element;
}

const FAQSection: React.FC = () => {
    const [isSectionOpen, setIsSectionOpen] = useState(false);

    const toggleSection = () => {
        setIsSectionOpen(!isSectionOpen);
    };

    const faqs: FAQ[] = [
        {
            question: "Who is eligible to participate in LSAMP?",
            answer: <>
                <p>There are three criteria for participation:<br/></p>
                <ol className='pl-8'>
                    <li className='list-decimal'>You must be a US citizen or permanent resident;</li>
                    <li className='list-decimal'>You must be majoring or planning to major in a non-medical STEM field;</li>
                    <li className='list-decimal'>Your participation must contribute to increasing the number of underrepresented minority (URM) STEM professionals.</li>
                </ol>
            </>
                
        },
        {
            question: "When can I join GS-LSAMP?",
            answer: "You can join GS-LSAMP as early as your freshman year. Any student who meets the eligibility requirements and is enrolled or planning to enroll in a non-medical STEM major at one of the GS-LSAMP schools is eligible to apply at any point during their time as an undergraduate. We encourage you to join the program as soon as possible so that we can provide you with the support you need."

        },
        {
            question: "What is the time commitment required for participation?",
            answer: "Students are encouraged to take full advantage of all opportunities offered by the program, including monthly meetings, workshops, tutoring and mentoring. However, in order to maintain active status and eligibility for stipends, students are expected to attend at least 3 activities per semester. Students selected for research opportunities will be required to commit a total of 96 hours during Fall and Spring semesters or 120 hours during summer as well as being required to present their findings at the GS-LSAMP Annual Conference in the fall."
        },
        {
            question: "What academic support and tutoring services does the program offer?",
            answer: 
                <p>
                    The offerings of the GS-LSAMP program vary somewhat by school. For detailed information about these resources, please visit the LSAMP site for your specific school or contact the LSAMP coordinator there. Links to all schools' sites can be found at the bottom of the <a href="/" className='underline'>home</a> page.
                </p>    
            
        },
        {
            question: "Are there mentorship or networking opportunities available for participants?",
            answer: "Mentoring is a big part of GS-LSAMP programming. This includes both faculty and peer mentoring. Additionally, participants have access to a wide range of networking opportunities, including program meetings, the annual GS-LSAMP Conference held every fall, speaker events, and more. For specific information for your campus, please visit the LSAMP site for your school or contact the LSAMP coordinator there."
        },
    ];

    return (
        <div className="faq_section">
            <div className="bg-white m-1">
                {faqs.map((faq, index) => (
                    <FAQItem key={index} question={faq.question} answer={faq.answer} />
                ))}
            </div>
        </div>
    );
}

export default FAQSection;
