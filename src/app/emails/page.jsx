const dummyEmails = [
    {
      id: 1,
      category: "Work",
      senderName: "Larry",
      senderEmail: "larry@example.com",
      subject: "Opportunities for Collaboration",
      body: `Hi Nick,
  I hope this message finds you well. My name is Larry, and I am the CEO of SFX, a dynamic design studio specializing in SEO-driven design solutions. I came across your portfolio recently and was thoroughly impressed by your innovative approach and attention to detail in your work.
  I would love to discuss potential opportunities for us to work together further. Your insights and unique perspective could greatly enhance the projects we undertake at Design Studio.
  Warm regards,
  Lily, SFHi Nick,
  I hope this message finds you well. My name is Larry, and I am the CEO of SFX, a dynamic design studio specializing in SEO-driven design solutions. I came across your portfolio recently and was thoroughly impressed by your innovative approach and attention to detail in your work.
  I would love to discuss potential opportunities for us to work together further. Your insights and unique perspective could greatly enhance the projects we undertake at Design Studio.
  Warm regards,
  Lily, SFX`,
      timestamp: "09:00",
      profilePicture: "1.png"
    },
    {
      id: 2,
      category: "Work",
      senderName: "Emma",
      senderEmail: "emma@example.com",
      subject: "Collaboration Proposal",
      body: `Dear Nick,
  I'm reaching out on behalf of Tech Innovations Inc. We're impressed by your work and believe there's potential for collaboration. We specialize in digital transformation projects and would like to explore how your skills could benefit our upcoming initiatives.
  Looking forward to hearing from you soon.
  Best regards,
  Emma`,
      timestamp: "15:30",
      profilePicture: "1.png"
    },
    {
      id: 3,
      category: "Work",
      senderName: "John",
      senderEmail: "john@example.com",
      subject: "Feedback on Recent Project",
      body: `Hi Nick,
  I wanted to share some feedback on the project you delivered last week. Overall, it was well-executed, but there are a few areas where we can improve. Let's schedule a meeting to discuss in detail.
  Best regards,
  John`,
      timestamp: "10:00",
      profilePicture: "1.png"
    },
    {
      id: 4,
      category: "Work",
      senderName: "Sophia",
      senderEmail: "sophia@example.com",
      subject: "Invitation to Webinar",
      body: `Dear Nick,
  You are invited to our upcoming webinar on digital marketing trends. As an industry expert, your insights would be invaluable to our discussion. Please RSVP at your earliest convenience.
  Warm regards,
  Sophia`,
      timestamp: "14:20",
      profilePicture: "1.png"
    },
    {
      id: 5,
      category: "Work",
      senderName: "Michael",
      senderEmail: "michael@example.com",
      subject: "Job Opportunity",
      body: `Hi Nick,
  I hope you're doing well. We have an opening for a senior designer at our company and believe your skills would be a great fit. Attached is the job description for your review.
  Looking forward to hearing from you soon.
  Best regards,
  Michael`,
      timestamp: "11:45",
      profilePicture: "1.png"
    },
    {
      id: 6,
      category: "Work",
      senderName: "Olivia",
      senderEmail: "olivia@example.com",
      subject: "Request for Quote",
      body: `Dear Nick,
  We are interested in your services for an upcoming project. Could you please provide us with a quote and timeline for completion? I have attached the project details for your reference.
  Best regards,
  Olivia`,
      timestamp: "08:30",
      profilePicture: "1.png"
    },
    {
      id: 7,
      category: "Work",
      senderName: "Daniel",
      senderEmail: "daniel@example.com",
      subject: "Follow-up Meeting",
      body: `Hi Nick,
  Following our initial discussion, I'd like to schedule a follow-up meeting to go over the project scope and deliverables. Please let me know your availability for next week.
  Best regards,
  Daniel`,
      timestamp: "16:00",
      profilePicture: "1.png"
    },
    {
      id: 8,
      category: "Work",
      senderName: "Emily",
      senderEmail: "emily@example.com",
      subject: "Thank You",
      body: `Dear Nick,
  I just wanted to say thank you for your assistance on our recent project. Your contributions were instrumental to its success. Looking forward to collaborating again in the future.
  Warm regards,
  Emily`,
      timestamp: "13:15",
      profilePicture: "1.png"
    },
    {
      id: 9,
      category: "Work",
      senderName: "David",
      senderEmail: "david@example.com",
      subject: "Feedback Request",
      body: `Hi Nick,
  I hope you're well. We value your opinion and would appreciate your feedback on our latest product release. Your insights will help us improve our offerings.
  Best regards,
  David`,
      timestamp: "10:30",
      profilePicture:"1.png"
    },
    {
      id: 10,
      category: "Work",
      senderName: "Sophie",
      senderEmail: "sophie@example.com",
      subject: "Project Update",
      body: `Hi Nick,
  Here's the latest update on the project status. We've made significant progress and are on track to meet the deadline. Please review the attached document for details.
  Best regards,
  Sophie`,
      timestamp: "09:00",
      profilePicture:"1.png"
    },
    {
      id: 11,
      category: "Personal",
      senderName: "James",
      senderEmail: "james@example.com",
      subject: "Upcoming Event Invitation",
      body: `Dear Nick,
  You are invited to our annual industry summit next month. It's a great opportunity to network with industry leaders and gain insights into emerging trends. Please RSVP by the end of this week.
  Best regards,
  James`,
      timestamp: "15:45",
      profilePicture: "1.png"
    },
    {
      id: 12,
      category: "Personal",
      senderName: "Isabella",
      senderEmail: "isabella@example.com",
      subject: "Request for Proposal",
      body: `Hi Nick,
  We are interested in partnering with your agency for an upcoming project. Could you please send us a detailed proposal outlining your approach and estimated costs? Looking forward to your response.
  Best regards,
  Isabella`,
      timestamp: "12:00",
      profilePicture: "1.png"
    },
    {
      id: 13,
      category: "Personal",
      senderName: "Benjamin",
      senderEmail: "benjamin@example.com",
      subject: "Collaboration Inquiry",
      body: `Hi Nick,
  I came across your work on social media and was impressed by your creativity. I'm exploring collaboration opportunities for an upcoming campaign. Let's schedule a call to discuss further.
  Best regards,
  Benjamin`,
      timestamp: "09:30",
      profilePicture: "1.png"
    },
    {
      id: 14,
      category: "Personal",
      senderName: "Charlotte",
      senderEmail: "charlotte@example.com",
      subject: "Article Submission",
      body: `Dear Nick,
  I'm writing to inquire about submitting an article for your publication. Please let me know if you would be interested and what topics you are currently looking for.
  Best regards,
  Charlotte`,
      timestamp: "14:00",
      profilePicture: "1.png"
    },
    {
      id: 15,
      category: "Personal",
      senderName: "Ethan",
      senderEmail: "ethan@example.com",
      subject: "Family Gathering",
      body: `Hi Nick,
  We are planning a family gathering next month and would love for you to join us. Here are the details:
  Date: July 15th
  Time: 6:00 PM
  Venue: Johnson Park
  Please let us know if you can make it!
  Best regards,
  Ethan`,
      timestamp: "18:30",
      profilePicture: "1.png"
    },
    {
      id: 16,
      category: "Promotion",
      senderName: "Grace",
      senderEmail: "grace@example.com",
      subject: "Exclusive Sale Event",
      body: `Hi Nick,
  We are excited to announce our exclusive sale event starting next week. Enjoy up to 50% off on selected items. Don't miss out on these amazing deals!
  Warm regards,
  Grace`,
      timestamp: "08:00",
      profilePicture: "1.png"
    },
    {
      id: 17,
      category: "Promotion",
      senderName: "Andrew",
      senderEmail: "andrew@example.com",
      subject: "New Product Launch",
      body: `Dear Nick,
  Introducing our latest product line designed to enhance your daily routine. Check out our website for more details and special launch offers.
  Best regards,
  Andrew`,
      timestamp: "11:00",
      profilePicture: "1.png"
    },
    {
      id: 18,
      category: "Promotion",
      senderName: "Lucy",
      senderEmail: "lucy@example.com",
      subject: "Flash Sale Announcement",
      body: `Hi Nick,
  Get ready for our flash sale happening this weekend. Enjoy massive discounts on a wide range of products. Visit our store or shop online to grab the best deals!
  Warm regards,
  Lucy`,
      timestamp: "13:30",
      profilePicture: "1.png"
    },
    {
      id: 19,
      category: "Promotion",
      senderName: "Jack",
      senderEmail: "jack@example.com",
      subject: "Limited Time Offer",
      body: `Dear Nick,
  We're running a limited-time offer on our premium subscription plan. Upgrade today and enjoy exclusive benefits. Visit our website to learn more.
  Best regards,
  Jack`,
      timestamp: "16:45",
      profilePicture: "1.png"
    },
    {
      id: 20,
      category: "Promotion",
      senderName: "Sophia",
      senderEmail: "sophia@example.com",
      subject: "Seasonal Collection Launch",
      body: `Hi Nick,
  Discover our latest seasonal collection featuring vibrant designs and sustainable materials. Visit our stores to explore the new arrivals.
  Warm regards,
  Sophia`,
      timestamp: "09:45",
      profilePicture: "1.png"
    },
    {
      id: 21,
      category: "Social",
      senderName: "Ryan",
      senderEmail: "ryan@example.com",
      subject: "Weekend Plans",
      body: `Hi Nick,
  Any plans for the weekend? Let's catch up over coffee if you're free on Saturday afternoon. Looking forward to hearing from you.
  Cheers,
  Ryan`,
      timestamp: "12:30",
      profilePicture: "1.png"
    },
    {
      id: 22,
      category: "Social",
      senderName: "Grace",
      senderEmail: "grace@example.com",
      subject: "Congratulations!",
      body: `Dear Nick,
  Congratulations on your recent achievement! It's well-deserved, and I'm thrilled to see your hard work paying off. Let's celebrate soon!
  Best wishes,
  Grace`,
      timestamp: "17:00",
      profilePicture:"1.png"
    },
    {
      id: 23,
      category: "Social",
      senderName: "Eric",
      senderEmail: "eric@example.com",
      subject: "Weekend Getaway",
      body: `Hi Nick,
  I'm planning a weekend getaway to the mountains. Would you like to join me? It'll be a refreshing break from the city hustle.
  Let me know your thoughts.
  Cheers,
  Eric`,
      timestamp: "19:00",
      profilePicture: "1.png"
    },
    {
      id: 24,
      category: "Social",
      senderName: "Megan",
      senderEmail: "megan@example.com",
      subject: "Birthday Party Invitation",
      body: `Hi Nick,
  You're invited to my birthday party next month! It's going to be a fun celebration with friends and family. Save the date!
  Warm regards,
  Megan`,
      timestamp: "20:30",
      profilePicture: "1.png"
    },
    {
      id: 25,
      category: "Social",
      senderName: "Peter",
      senderEmail: "peter@example.com",
      subject: "Catch-up Dinner",
      body: `Hi Nick,
  Long time no see! Let's catch up over dinner sometime next week. I'll text you to finalize the details.
  Looking forward to it!
  Best,
  Peter`,
      timestamp: "21:15",
      profilePicture: "1.png"
    },
    {
      id: 26,
      category: "Notification",
      senderName: "System Notification",
      senderEmail: "notification@example.com",
      subject: "Account Update",
      body: `Dear Nick,
  Your account settings have been updated successfully. If you have any questions or concerns, please contact our support team.
  Best regards,
  System`,
      timestamp: "07:30",
      profilePicture: "1.png"
    },
    {
      id: 27,
      category: "Notification",
      senderName: "Automated Alert",
      senderEmail: "alert@example.com",
      subject: "Payment Confirmation",
      body: `Hi Nick,
  This is to confirm that your recent payment has been successfully processed. Thank you for choosing our services.
  Warm regards,
  Automated Alert`,
      timestamp: "10:15",
      profilePicture: "1.png"
    },
    {
      id: 28,
      category: "Notification",
      senderName: "Reminder",
      senderEmail: "reminder@example.com",
      subject: "Upcoming Deadline",
      body: `Hi Nick,
  Just a reminder that the deadline for project submissions is approaching. Please ensure all tasks are completed on time.
  Best regards,
  Reminder`,
      timestamp: "14:45",
      profilePicture: "1.png"
    },
    {
      id: 29,
      category: "Notification",
      senderName: "Event Notification",
      senderEmail: "event@example.com",
      subject: "Webinar Reminder",
      body: `Hi Nick,
  A quick reminder about the upcoming webinar on digital marketing strategies. Don't miss out on valuable insights from industry experts.
  Best regards,
  Event Notification`,
      timestamp: "16:30",
      profilePicture: "1.png"
    },
    {
      id: 30,
      category: "Notification",
      senderName: "Update",
      senderEmail: "update@example.com",
      subject: "Software Update",
      body: `Dear Nick,
  We have released a new software update with several improvements and bug fixes. Please update your system to benefit from these enhancements.
  Best regards,
  Update`,
      timestamp: "19:45",
      profilePicture:"1.png"
    },
  ];
  
  export default dummyEmails;
  