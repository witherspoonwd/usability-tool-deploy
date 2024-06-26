// HEURISTIC 1

export const heuristic1Questions = [
  {
    question:
      "Which of the following is an example of a situational system status?",
    answers: [
      "An icon that shows the battery percentage of a phone.",
      "A popup icon that is displayed when the user successfully submits a form.",
      "A widget on the home page of an application that shows the current date and time.",
      "An email application that displays the number of unread emails to the user.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A button to send an email does not provide appropriate feedback to the user when it is clicked. What event is least likely to occur?",
    answers: [
      "The user will continue to press the button, sending the email multiple times.",
      "The user will assume that the button is not functional.",
      "The user will assume that their email was sent successfully.",
      "The user will become frustrated with the system and will not use it again.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The system should display all of its status constantly to the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A button of a website downloads a PDF document, but it does not display any status of the download to the user. What would be the best change in this situation?",
    answers: [
      "Display the status of the download constantly to the user in the form of a progress bar.",
      "Only tell the user the status of the download when the PDF finishes being downloaded.",
      "Only tell the user that the download has started.",
      "Do not change anything.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following should maintain control of a system while using it?",
    answers: ["Administrators", "Designers", "Developers", "Users"],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Of the following system statuses, which is the most likely to be displayed to the user of a social media application?",
    answers: [
      "The user’s IP address.",
      "The number of unread messages a user has.",
      "The user’s geographic location.",
      "The current firmware version of the user’s device.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question: "What does the term “Visibility of System Status” refer to?",
    answers: [
      "Information presented to a user about a system’s current state.",
      "The physical appearance of a system.",
      "The level of responsiveness a system has with user inputs.",
      "Any information that is presented to the user.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to provide appropriate feedback of user actions to the user?",
    answers: [
      "It increases the performance of the system.",
      "It improves the overall appearance of the system.",
      "It tells the user that their input was recognized by the system.",
      "It helps the users maintain engagement with the system.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "What should be the primary focus when determining what system statuses to display to the user?",
    answers: [
      "What looks the best to the user.",
      "Nothing. All system statuses should be displayed to the user.",
      "What system statuses are currently of the best interest to the user.",
      "Nothing. Only the basic system statuses should be displayed to the user.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The user gains trust with a system when the system shares its status with the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. When a system is processing something, it should wait until it is finished to provide feedback to the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows a user to upload a file and convert it to a number of various file formats. The process of converting the file can take some time. At what time should the system provide feedback of the file conversion to the user?",
    answers: [
      "When the file finishes being converted.",
      "Sometime in the middle of the file conversion.",
      "When the system starts the file conversion.",
      "Sometime after the file is done being converted.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows a user to upload a file and convert it to a number of various file formats. The process of converting the file can take some time. At what time should the system provide feedback of the file conversion to the user?",
    answers: [
      "When the file finishes being converted.",
      "Sometime in the middle of the file conversion.",
      "When the system starts the file conversion.",
      "Sometime after the file is done being converted.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following in the below image is not an example of visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_refrigerator.png",
    answers: [
      "The color button is highlighted to the selected color.",
      "The delivery button is highlighted when selected by the user.",
      "The system is alerting the user that pickup for this item is unavailable.",
      "The color of the Add to Cart button",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "The website for a stadium allows users to see the availability of seats per section. In what way is this an example of the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_stadium.png",
    answers: [
      "The system is providing the user with a status that is relevant to the scenario and will help them in their decision-making.",
      "The system is providing all of its status information to the user.",
      "The system is providing some status information to the user, but it isn’t relevant for this scenario.",
      "The system is waiting for user input first to show its status.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "An e-commerce website always displays the following icon. The number next to the cart shows how many items are in the cart and gets updated every time the cart changes. Is this an example of situational or persistent system status?",
    image: "/quiz/quiz1-graphics/quiz1_cart.png",
    answers: ["Situational", "Persistent"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This washing machine display shows the selected cycle and the estimated time remaining. How does this exemplify the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_washing_machine.jpg",
    answers: [
      "It displays all possible washing machine cycles.",
      "The washing machine is visually appealing.",
      "It allows the user to confirm their selection and gauge progress.",
      "None of the above.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A music player shows the paused button and the elapsed time on the progress bar. How does this VIOLATE the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_music_player.jpg",
    answers: [
      "It clearly shows the music player is on.",
      "It informs the user that the song is paused and the playback position.",
      "The music player interface is outdated.",
      "There is no indication of the song's total duration.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "A microwave displays the chosen cooking time and the remaining time until completion. Does this information directly relate to the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_microwave.jpg",
    answers: [
      "Yes, it keeps the user informed about the cooking progress.",
      "Yes, but only if the microwave is not running.",
      "No, the user should be able to smell the food to know its progress.",
      "No, this information is only relevant for advanced users.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "A printer has a light blinking red and a message on the screen that says \"Low Ink.\" How does this address the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_printer.png",
    answers: [
      "It visually warns the user about a potential problem with the printer.",
      "It only displays an error message but doesn't provide a solution.",
      "The blinking light might be distracting for some users.",
      "None of the above.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "An online form has a red asterisk next to a required field that the user hasn't filled out. How does this element impact the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_form.png",
    answers: [
      "The user might not understand the meaning of the red asterisk.",
      "It completely blocks the user from submitting the form.",
      "It subtly highlights a potential error without being too intrusive.",
      "None of the above.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A progress bar shows 75% completion. Is this an effective way to communicate the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_progress.png",
    answers: [
      "No, it should only display the remaining time instead.",
      "The progress bar should be animated to be more engaging.",
      "Yes, it provides a clear visual representation of the progress.",
      "None of the above.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A calculator displays an error message \"Cannot divide by zero\" after the user enters an invalid equation. Does this benefit the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_calculator.png",
    answers: [
      "The error message should be more specific about the equation.",
      "Yes, it informs the user about the mistake and helps them correct it.",
      "No, the user should already know division by zero is not possible.",
      "None of the above.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
];

// HEURISTIC 2

export const heuristic2Questions = [
  {
    question:
      "Which of the following is NOT a way to improve the match between a system and the real world?",
    answers: [
      "Using unfamiliar symbols and terminology.",
      "Organizing information in a logical and natural order.",
      "Using language and phrases common to the users.",
      "Providing appropriate feedback to users based on their expectations.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "What is the benefit of using familiar language and symbols in a system?",
    answers: [
      "It reduces the development time for the system.",
      "It makes the system more visually appealing.",
      "It allows users to understand the system more easily.",
      "It eliminates the need for user training.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using industry-standard icons for common actions is an example of matching the system to the real world.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Organizing information in a way that is unfamiliar to users can improve the user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. User testing is not necessary for ensuring a good match between the system and the real world.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How can user testing help ensure a good match between the system and the real world?",
    answers: [
      "It helps identify technical bugs in the system.",
      "It helps understand user expectations and how well the system meets them.",
      "It helps ensure the system is visually appealing to users.",
      "It helps identify the most efficient way to complete tasks in the system.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question: "What is the importance of consistency in terminology within a system?",
    answers: [
      "It allows developers to use different terms interchangeably.",
      "It eliminates the need for user training.",
      "It makes the system more visually appealing.",
      "It helps users understand the system more easily.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is an example of matching the system to the real world through navigation?",
    answers: [
      "Organizing information alphabetically, regardless of user expectations.",
      "Displaying information in a random order to encourage exploration.",
      "Using industry-standard icons for common actions.",
      "Requiring users to complete tasks in a non-intuitive sequence.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a system for international users, it's important to:",
    answers: [
      "Use the same language and symbols for all users.",
      "Consider cultural differences and adapt the system accordingly.",
      "Prioritize industry-standard terminology over local languages.",
      "Only focus on making the system visually appealing for all cultures.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows users to undo their actions easily. This is beneficial because it:",
    answers: [
      "Matches the user's expectation of being able to correct mistakes.",
      "Reduces the development complexity of the system.",
      "Discourages users to experiment with different features.",
      "Makes the system more visually appealing.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This is a proper icon for a checkout button.",
    image: "/quiz/quiz2-graphics/quiz2_magnifying_glass.png",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect most constributes to this music player app's match with real-world music players?",
    image: "/quiz/quiz2-graphics/quiz2_music_player.png",
    answers: [
      "Universally recognized symbols for playback control",
      "Recognizable color schemes",
      "Simple and easy to read font.",
      "Highly detailed images for the album cover.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This example correctly matches examples from the system and the real world.",
    image: "/quiz/quiz2-graphics/quiz2_file_folder.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This is a proper icon for a home button.",
    image: "/quiz/quiz2-graphics/quiz2_home_icon.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The calculator app on the right sufficiently captures most functionalities of the real world calculator on the left",
    image: "/quiz/quiz2-graphics/quiz2_calculators.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The following image effectively represents a microphone icon for voice search functionality.",
    image: "/quiz/quiz2-graphics/quiz2_headphones.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This icon uses a realistic image of a camera. Does this approach necessarily make it a better representation for a camera function in an app?",
    image: "/quiz/quiz2-graphics/quiz2_camera.jpg",
    answers: [
      "Yes, a realistic image is universally understood as a camera function.",
      "Not necessarily, a simpler and more abstract icon could be clearer.",
      "It depends on the target audience's familiarity with traditional cameras.",
      "None of the above.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This settings icon uses gears as its visual representation. Is this an effective example of matching the system with the real world?",
    image: "/quiz/quiz2-graphics/quiz2_settings.jpg",
    answers: [
      "Yes, gears are a universally recognized symbol for settings and adjustments.",
      "No, gears are a mechanical concept and might not translate well digitally.",
      "It depends on the technical background of the target audience.",
      "None of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Many digital calendars display weeks starting on Sunday. Does this necessarily align with the way people perceive weeks in the real world?",
    image: "/quiz/quiz2-graphics/quiz2_calendar.png",
    answers: [
      "Yes, Sunday is the traditional start of the week in most cultures.",
      "No, the week should always begin on Monday as that's the standard work week.",
      "It depends on the user's cultural background and work schedule.",
      "None of the above.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "This volume control uses a speaker icon. How does this design element match the system with the real-world concept of volume adjustment?",
    image: "/quiz/quiz2-graphics/quiz2_volume.png",
    answers: [
      "It leverages a universally recognized slider for increasing and decreasing volume.",
      "It relies on icons which might not be intuitive for everyone.",
      "The icons are not necessary for understanding volume control.",
      "None of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 3

export const heuristic3Questions = [
  {
    question:
      "Which of the following features is NOT consistent with the \"user control and freedom\" principle?",
    answers: [
      "Automatic form submission without confirmation prompts.",
      "The presence of clear and easily accessible \"undo\" or \"back\" buttons.",
      "Navigation menus that allow users to easily access different parts of the system.",
      "The ability to customize the interface layout to user preferences.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to provide users with the ability to undo actions?",
    answers: [
      "To allow users to correct mistakes and prevent frustration.",
      "To make the system more visually appealing.",
      "To reduce the need for user training.",
      "To increase the speed at which users complete tasks.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. A system that forces users to follow a specific workflow adheres to the principle of user control and freedom.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Providing clear and easily accessible \"undo\" o \"back\" buttons is an example of user control and freedom.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Offering multiple navigation options, such as menus and search bars, can hinder user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What is the benefit of offering multiple navigation options in a system?",
    answers: [
      "It reduces the development complexity of the system.",
      "It creates a more visually consistent interface.",
      "It allows users to navigate according to their preferred style.",
      "It forces users to learn a specific navigation method.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question: "A website requires users to watch a full advertisement before accessing content. This is an example of:",
    answers: [
      "Providing user control and freedom.",
      "Simplifying the user interface.",
      "Encouraging user exploration of the website.",
      "Limiting user control and freedom.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is the importance of clear and accessible exit options in a system?",
    answers: [
      "They improve the system's loading speed.",
      "They allow users to easily disengage from unwanted interactions.",
      "They make the user interface appear more organized.",
      "They force users to complete specific actions before exiting.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a form, it's important to:",
    answers: [
      "Automatically pre-populate all fields with default values.",
      "Disable the \"back\" button to prevent users from changing their answers.",
      "Require users to complete all fields, even if some are optional.",
      "Allow users to easily review and edit their input before submission.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app requires users to swipe through several tutorial screens before accessing the main features. This is an example of:",
    answers: [
      "Limiting user control and freedom.",
      "Providing clear and helpful instructions.",
      "Encouraging user exploration of the app's features.",
      "Simplifying the user interface layout.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following statements is TRUE about user control and freedom?",
    answers: [
      "It encourages users to make more mistakes.",
      "It prioritizes system efficiency over user preferences.",
      "It empowers users to navigate and interact with confidence.",
      "It forces users to follow a specific workflow.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. These two functions are extremely important when considering Heuristic 3",
    image: "/quiz/quiz3-graphics/quiz3_redo_undo.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect of this progress bar most contributes to the user's control and freedom?",
    image: "/quiz/quiz3-graphics/quiz3_progress_bar.png",
    answers: [
      "The application's progress is clearly shown to the user.",
      "A color scheme that is easy to read.",
      "The ability to cancel progress whenever the user desires.",
      "Simplistic layout and design of the progress bar window.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect of this form most violates Heuristic 3?",
    image: "/quiz/quiz3-graphics/quiz3_form_submission.png",
    answers: [
      "There are too many advertisements on the page.",
      "There is no reset button to clear the page.",
      "The layout of the page is confusing.",
      "The user is required to enter a second address.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This instant messaging interface provides the user with many options to interact with a message they have sent.",
    image: "/quiz/quiz3-graphics/quiz3_texting.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This mobile game advertisement is not intrusive and provides users with plenty of space to complete what they're working on",
    image: "/quiz/quiz3-graphics/quiz3_ad.png",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This dropdown menu allows users to sort a list by different criteria. How does this element provide users with control and freedom?",
    image: "/quiz/quiz3-graphics/quiz3_options.png",
    answers: [
      "It keeps the interface clean by hiding sorting options until needed.",
      "Users can choose the sorting method that best suits their needs.",
      "The dropdown menu might be confusing for some users.",
      "None of the above.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A web browser allows users to open and switch between multiple tabs. In what way does this feature promote user control and freedom?",
    image: "/quiz/quiz3-graphics/quiz3_tabs.jpg",
    answers: [
      "Users can access multiple websites simultaneously without opening separate windows.",
      "It allows users to easily revisit previously viewed websites.",
      "Users have the control to decide how many tabs to open and manage them freely.",
      "All of the above.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "A document viewer offers zoom in and zoom out buttons. How do these buttons empower users with control?",
    image: "/quiz/quiz3-graphics/quiz3_zoom.png",
    answers: [
      "Users can adjust the document's size to their preferred viewing experience.",
      "The buttons are clearly labeled for easy identification.",
      "It reduces efficiency when scrolling through long documents.",
      "All of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "A carousel displays multiple images and offers navigation arrows. How do these arrows contribute to user control?",
    image: "/quiz/quiz3-graphics/quiz3_carousel.jpg",
    answers: [
      "The carousel automatically rotates after a set time.",
      "Users can only view the image currently displayed.",
      "They allow users to browse the images at their own pace.",
      "None of the above.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A text editor offers formatting options like bold, italics, and underline. How does this benefit user control?",
    image: "/quiz/quiz3-graphics/quiz3_editor.png",
    answers: [
      "The editor automatically applies these formats to all text.",
      "Users can customize the appearance of their text according to their preferences.",
      "It might overwhelm users with too many options.",
      "None of the above.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 4

export const heuristic4Questions = [
  {
    question:
      "Which of the following is NOT a benefit of consistent design elements in an interface?",
    answers: [
      "Increased user learning time.",
      "Improved user navigation and familiarity.",
      "Increased need for user training.",
      "Decreased visual appeal of the interface.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What does \"standardized interactions\" refer to in Heuristic 4?",
    answers: [
      "Maintaining a specific font size for all text.",
      "To make the system more visually appealing.",
      "Ensuring consistent behavior for user actions like clicking and dragging.",
      "Applying the same icon style for all functionalities.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using industry-standard icons for common actions adheres to the principle of consistency and standards.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. A website can maintain a consistent user experience even if the layout changes drastically between different pages.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Complying with accessibility standards is an optional consideration in interface design.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to ensure consistency across different devices?",
    answers: [
      "To reduce the development time for the interface.",
      "To limit the number of icons used in the interface.",
      "To force users to learn new interaction methods on different devices.",
      "To provide users with a seamless experience regardless of device.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question: "What is the purpose of complying with accessibility standards in interface design?",
    answers: [
      "To create a visually appealing interface for all users.",
      "To simplify the testing process for the interface.",
      "To ensure equal access to information for users with disabilities.",
      "To reduce the need for user support resources.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A website uses a red button for \"submit\" on the homepage but changes to a blue button with a different shape on the checkout page. This violates which principle of Heuristic 4?",
    answers: [
      "Standardized Interactions.",
      "Compliance with Accessibility Standards.",
      "Consistent Design Elements.",
      "Consistency Across Devices.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app uses a swipe gesture for \"back\" on some screens but requires a dedicated \"back\" button on others. This is an example of:",
    answers: [
      "Inconsistency that can confuse users.",
      "Effective use of standardized interactions.",
      "A creative approach to user interface design.",
      "A way to encourage user exploration of the app.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a new software platform, it's important to:",
    answers: [
      "Use unique and innovative interaction methods to impress users.",
      "Follow established user interface conventions whenever possible.",
      "Prioritize visual aesthetics over consistency in design elements.",
      "Design the interface based on personal preferences of the development team.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Maintaining consistency in an interface is only important for websites and not for mobile apps.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. In this image, the mobile website would be difficult to navigate for a user that is used to the desktop website.",
    image: "/quiz/quiz4-graphics/quiz4_desktop_mobile.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Where would this search bar be better located according to Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_search.png",
    answers: [
      "Further down on the side menu.",
      "At the top of the main page.",
      "At the bottom of the main page.",
      "Further up on the side menu.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How do the consistent navigation bars on word and excel benefit users according to Heuristic 4??",
    image: "/quiz/quiz4-graphics/quiz4_navigation_bars.png",
    answers: [
      "They create a sense of mystery and encourage exploration.",
      "They force users to learn the location of specific features on each program.",
      "They eliminate the need for any user training or documentation.",
      "They allow users to find familiar tools and functions quickly and easily.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This music player follows Heuristic 4 by swapping play and pause icons",
    image: "/quiz/quiz4-graphics/quiz4_music_player.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How do the consistent navigation bars on word and excel benefit users according to Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_navigation_bars.png",
    answers: [
      "They create a sense of mystery and encourage exploration.",
      "They force users to learn the location of specific features on each program.",
      "They eliminate the need for any user training or documentation.",
      "They allow users to find familiar tools and functions quickly and easily.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "How do the different navigation bars violate Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_nav_bar.jpg",
    answers: [
      "It creates confusion for users who expect consistent placement.",
      "It might introduce new vocabulary for some users.",
      "It depends on the target audience's familiarity with technology.",
      "None of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This software displays different error messages for the same type of error. How does this affect Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_error.png",
    answers: [
      "It allows for more creative messaging for each error.",
      "The severity of the error message should match the error itself.",
      "Users might get confused by the variation in error messages.",
      "None of the above.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "This mobile app has a different layout on iOS and Android phones. While some variation might be necessary, what are the most important action according to Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_mobile_desktop.jpg",
    answers: [
      "Maintain a core set of functionalities and user flows consistently acsross platforms.",
      "Completely redesign the app to have the same layout on both platforms.",
      "Focus on making the app visually appealing on each platform.",
      "None of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 5

export const heuristic5Questions = [
  {
    question:
      "Which of the following is NOT a way to prevent errors according to Heuristic 5?",
    answers: [
      "Implementing real-time feedback on the validity of user input.",
      "Using cryptic and unclear labels for buttons and fields.",
      "Providing confirmation dialogs before irreversible actions.",
      "Offering suggestions for correcting invalid data entry.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to use clear and descriptive labels for interface elements?",
    answers: [
      "To make the interface visually appealing.",
      "To save development time during interface creation.",
      "To reduce user confusion and errors.",
      "To limit the number of words used in the interface.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using confirmation dialogs before deleting important data is an example of error prevention.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Ambiguous labels for buttons and fields can contribute to a positive user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Providing clear error messages without suggestions for correction is sufficient for error prevention.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A website asks users to confirm their password change with a simple \"Yes\" or \"No\" prompt. This is an example of:",
    answers: [
      "Effective error prevention with clear confirmation.",
      "A creative approach to user interaction.",
      "A poorly designed confirmation dialog that can lead to accidental actions.",
      "A way to reduce the time it takes users to complete actions.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question: "What is the benefit of real-time feedback on user input?",
    answers: [
      "It helps users identify and correct errors as they type.",
      "It allows users to bypass confirmation dialogs.",
      "It reduces the need for user training on data entry formats.",
      "It simplifies the development process for input validation.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app requires users to enter their phone number in a text field but doesn't specify the required format (e.g., with or without hyphens). This can lead to:",
    answers: [
      "A faster user onboarding process.",
      "A more visually minimal interface design.",
      "Increased user errors and frustration due to unclear expectations.",
      "Improved user engagement with the app.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Error prevention in interface design is only important for complex systems.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a form, it's best to:",
    answers: [
      "Allow users to submit the form even if required fields are left blank.",
      "Clearly indicate required fields with an asterisk or other visual cue.",
      "Use generic error messages like \"There was an error\" without specific details.",
      "Disable the submit button until all fields are filled, regardless of whether they are required.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Error prevention features always slow down users and hinder their workflow.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This attemped login properly notifies users of an error and provides them with options to resolve it.",
    image: "/quiz/quiz5-graphics/quiz5_facebook.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This error message \"Nope. Try again.\" likely indicates that an incorrect password has been entered. What would be a proper error message?",
    image: "/quiz/quiz5-graphics/quiz5_password.png",
    answers: [
      "Nuh uh.",
      "Incorrect Password. Please Try Again.",
      "Maybe Next Time.",
      "Try again.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This image properly conveys to the user what actions the \"Yes\" and \"No\" buttons will perform.",
    image: "/quiz/quiz5-graphics/quiz5_delete.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This pop-up properly conveys the irreversability and permanence of the action they are about to perform.",
    image: "/quiz/quiz5-graphics/quiz5_messages.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This confirmation dialog has \"Yes\" selected by default. Could this potentially lead to accidental data loss?",
    image: "/quiz/quiz5-graphics/quiz5_confirmation_dialog.png",
    answers: [
      "No, as long as the confirmation message is clear.",
      "Yes, users might accidentally confirm the action without reading the message.",
      "It depends on the severity of the action being confirmed.",
      "Try again.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "When creating a password, this interface displays a weak password indicator. How does this prevent errors?",
    image: "/quiz/quiz5-graphics/quiz5_password_strength.png",
    answers: [
      "It discourages users from setting weak passwords that are easily compromised.",
      "It forces users to create complex passwords they might forget.",
      "It wastes time for users who already know how to create strong passwords.",
      "Try again.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "A text field offers autocorrect suggestions as the user types. In what way does this prevent errors?",
    image: "/quiz/quiz5-graphics/quiz5_autocorrect.png",
    answers: [
      "It automatically corrects all typos without user input.",
      "It suggests potential corrections for misspelled words, aiding users in avoiding errors.",
      "It can be distracting for users who type quickly and accurately.",
      "None of the above.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 6 QUESTIONS
  
export const heuristic6Questions = [
  {
    question:
      "According to Nielson's usability heuristics, which of the following is preferred?",
    answers: [
      "Recall over recognition",
      "Recognition over recall",
      "Both are equally important",
      "Neither is important",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following best illustrates the application of \"recognition rather than recall\" in a web application?",
    answers: [
      "Providing a search feature to find specific content",
      "Displaying breadcrumbs to show the user's location",
      "Requiring users to remember their login credentials",
      "Using a minimalist design with hidden navigation options",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is an example of \"recognition rather than recall\" in a user interface?",
    answers: [
      "Requiring users to remember complex keyboard shortcuts",
      "Giving users a help page with all the actions on it",
      "Hiding important information behind multiple clicks",
      "Providing a list of available actions and what they do on the screen",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is an advantage of recognition over recall?",
    answers: [
      "Requires deeper processing",
      "Provides more context",
      "Less susceptible to forgetting",
      "Enhances creativity",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following design elements violates the \"recognition rather than recall\" heuristic?",
    answers: [
      "Requiring users to remember specific commands for navigation",
      "Providing autocomplete suggestions in a search bar",
      "Using clear and descriptive labels for menu items",
      "Providing visual cues for interactive elements",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How can designers apply the \"recognition rather than recall\" heuristic to improve usability?",
    answers: [
      "By providing clear and consistent navigation options",
      "By requiring users to memorize complex commands",
      "By using ambiguous icons without labels",
      "By limiting the amount of information displayed on the screen",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "In the context of web design, what is an example of implementing \"recognition rather than recall\"?",
    answers: [
      "Using icons without labels for navigation",
      "Providing clear and descriptive labels for menu items",
      "Asking users to remember their previous search queries",
      "Hiding important information behind multiple clicks",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Nielson's heuristic \"recognition rather than recall\" emphasizes the importance of:",
    answers: [
      "Minimizing the need for users to remember information",
      "Maximizing the need for users to remember information",
      "Using complex symbols that require memorization",
      "None of the above",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How does the \"recognition rather than recall\" heuristic contribute to a positive user experience?",
    answers: [
      "By reducing the cognitive effort required to complete tasks",
      "By challenging users to remember complex information",
      "By encouraging users to rely on external memory aids",
      "By limiting the options available to users",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "How does adherence to the \"recognition rather than recall\" heuristic impact user satisfaction?",
    answers: [
      "It increases frustration due to limited options",
      "It reduces cognitive effort and enhances user satisfaction",
      "It requires users to memorize complex interface elements",
      "It decreases user engagement and retention",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How does this image demonstrate Recognition over Recall?",
    image: "/quiz/quiz6-graphics/quiz6_google.png",
    answers: [
      "By using familiar icons.",
      "By using industry standard icons.",
      "By highlighting what the user has currently selected.",
      "All of the above."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Why is this a good example of Recognition rather than Recall?",
    image: "/quiz/quiz6-graphics/quiz6_captcha.jpg",
    answers: [
      "The user recognizes the action they are supposed to take from the text.",
      "The user recognizes the skip button to skip ones that are too hard.",
      "The user recognizes the objects that they are tasked to recognize.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Why is an album cover a good example of recognition?",
    image: "/quiz/quiz6-graphics/quiz6_album.png",
    answers: [
      "The listener recognizes the color of the cover.",
      "The listener recognizes the image on the cover.",
      "The user recognizes the album name.",
      "Only the first two answers are correct."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Why is this a bad example of recognition?",
    image: "/quiz/quiz6-graphics/quiz6_steam.png",
    answers: [
      "The font sizes make it hard for recognition.",
      "There is a lack of icons and mostly text.",
      "The small text is hard to read.",
      "The differing colors are bad for recognition."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "The reason a stop sign is a good example of recognition is because of its shape and color not its text.",
    image: "/quiz/quiz6-graphics/quiz6_stopsign.jpg",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "The color-coded tags are a good example of recognition over recall.",
    image: "/quiz/quiz6-graphics/quiz6_github.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This webpage is a good example of recognition over recall.",
    image: "/quiz/quiz6-graphics/quiz6_craigslist.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What is one way this UI could be improved for recognition?",
    image: "/quiz/quiz6-graphics/quiz6_oldui.jpg",
    answers: [
      "Adding color to the check boxes.",
      "Changing the background color.",
      "Color coding each region for separation.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "What is the problem with this prompt in regards to recognition?",
    image: "/quiz/quiz6-graphics/quiz6_prompt.png",
    answers: [
      "The background color is too dark.",
      "The text is too large.",
      "The icons are swapped.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Adding icons to the tabs would improve this UI for recognition.",
    image: "/quiz/quiz6-graphics/quiz6_badui.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
]

// HEURISTIC 7 QUESTIONS

export const heuristic7Questions = [
  {
    question:
      "What does Flexibility and efficiency of use emphasize in user interface design?",
    answers: [
      "Providing a wide range of customization options",
      "Designing interfaces that are easy to learn",
      "Slowing down the interaction time",
      "Minimizing the number of features to reduce complexity",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How can software applications cater to both novice and expert users?",
    answers: [
      "By providing a complex interface with many options",
      "By offering customization options and accelerators",
      "By limiting functionality to essential features only",
      "By removing all unnecessary features",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Providing users with the ability to customize frequent actions is an example of following heuristic 7.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How can accelerators benefit user interfaces?",
    answers: [
      "By making tasks more difficult for novice users",
      "By providing shortcuts for experienced users to perform actions more quickly",
      "By adding unnecessary complexity to the interface",
      "By slowing down the interaction for all users",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "According to heuristic 7, interfaces should prioritize aesthetics over functionality.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What is the relationship between flexibility and efficiency?",
    answers: [
      "They are mutually exclusive concepts",
      "Flexibility often leads to inefficiency ",
      "They are complementary goals in interface design",
      "Efficiency is more important than flexibility",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following design choices is consistent with heuristic 7?",
    answers: [
      "Using a fixed layout that cannot be changed by the user",
      "Restricting the number of features available to users",
      "Making all actions require multiple confirmation steps",
      "Providing a variety of customization options for user preferences",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "According to heuristic 7, interfaces should prioritize efficiency over flexibility.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How can interfaces support both novice and expert users?",
    answers: [
      "By removing all advanced features to simplify the interface",
      "By providing a consistent interface that does not change",
      "By offering customization options that can be toggled on or off",
      "By requiring users to undergo extensive training before using the interface",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Heuristic 7 suggests that interfaces should be designed to cater exclusively to expert users.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What aspects of this website utilize flexibility and efficiency of use?",
    image: "/quiz/quiz7-graphics/quiz7_ebay.png",
    answers: [
      "The saved tab increases efficiency of use.",
      "The search tab gives users flexibility.",
      "The shop now buttons allow the user to efficiently navigate to the advertised item.",
      "All of the above."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Computer shortcuts follow heuristic 7’s guidelines.",
    image: "/quiz/quiz7-graphics/quiz7_sc.jpg",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Extensions, plugins, and themes increase flexibility.",
    image: "/quiz/quiz7-graphics/quiz7_extensions.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Start and skip buttons increase user flexibility.",
    image: "/quiz/quiz7-graphics/quiz7_spotify.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Having search tags does not increase user flexibility.",
    image: "/quiz/quiz7-graphics/quiz7_steam.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Personalization settings increase user flexibility.",
    image: "/quiz/quiz7-graphics/quiz7_personalization.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "These settings demonstrate good flexibility.",
    image: "/quiz/quiz7-graphics/quiz7_ddg.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Pinned messages help with user efficiency.",
    image: "/quiz/quiz7-graphics/quiz7_discord.png",
    answers: [
      "True.",
      "False.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How does search history help a user’s efficiency?",
    image: "/quiz/quiz7-graphics/quiz7_history.png",
    answers: [
      "By providing icons of the websites the user visited.",
      "By allowing the user to see what website they visited on a date.",
      "By remembering the sites a user visited and auto filling the URL bar for faster access.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "How does this demonstrate user efficiency?",
    image: "/quiz/quiz7-graphics/quiz7_windows.png",
    answers: [
      "By providing quick links to the most used files.",
      "By having easy to read icons.",
      "By having an aesthetic.",
      "None of the above."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
]

// HEURISTIC 8 QUESTIONS

export const heuristic8Questions = [
  {
    question:
      "Which of the following best describes the principle of aesthetic and minimalist design?",
    answers: [
      "Including all possible information to ensure users have all the information they might need.",
      "Keeping dialogues free of irrelevant or rarely needed information and keeping the interface clean.",
      "Using complex visual elements to enhance the user interface.",
      "Using as many colors and fonts as possible without a clear direction",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Aesthetic and minimalist design suggests that every extra unit of information in a dialogue enhances the user experience.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is a key aspect of aesthetic and minimalist design?",
    answers: [
      "Including all possible information.",
      "Using complex visual elements.",
      "Keeping dialogues free of irrelevant information.",
      "Using as many colors and fonts as possible.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Aesthetic and minimalist design is focused on:",
    answers: [
      "Making the interface visually complex.",
      "Reducing visual clutter and unnecessary elements.",
      "Using a wide variety of colors and fonts.",
      "All of the above.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Aesthetic and minimalist design encourages the inclusion of all possible information to ensure users have all they might need.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What should be the focus of dialogues according to the principle of aesthetic and minimalist design?",
    answers: [
      "Including as much information as possible.",
      "Keeping the design visually complex.",
      "Reducing visual clutter and unnecessary elements.",
      "Maximizing the styling on the page",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which is more important having an aesthetic or a minimalist design?",
    answers: [
      "Aesthetics are more important.",
      "Minimalist design is more important.",
      "They both are not important at all.",
      "None of the above.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is not aligned with the principle of aesthetic and minimalist design?",
    answers: [
      "Using simple and clean visuals.",
      "Providing only relevant information.",
      "Including complex visual elements.",
      "Keeping dialogues free of irrelevant information.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Aesthetic and minimalist design encourages decreasing the use of complex visual elements in the interface.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Sometimes, including extra information in a dialogue can:",
    answers: [
      "Confuse users.",
      "Enhance the user experience.",
      "Improve clarity.",
      "All of the above.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This webpage has a minimalistic structure.",
    image: "/quiz/quiz8-graphics/quiz8_1.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This page is a good example of minimalist design.",
    image: "/quiz/quiz8-graphics/quiz8_2.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Is this a good example of a minimalist design?",
    image: "/quiz/quiz8-graphics/quiz8_3.jpg",
    answers: [
      "Yes, there is plenty of color and text.",
      "Yes, there is only as much information as necessary for the user.",
      "No, there is too much information and a confusing layout.",
      "No, there is not enough information and needs more."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Is this webpage a good example of an aesthetic design?",
    image: "/quiz/quiz8-graphics/quiz8_4.jpg",
    answers: [
      "Yes, the webpage has a clear aesthetic.",
      "No, the webpage does not have a clear aesthetic."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This page has a clear and defined aesthetic.",
    image: "/quiz/quiz8-graphics/quiz8_5.jpg",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This page is a good example of minimalist design.",
    image: "/quiz/quiz8-graphics/quiz8_6.jpg",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How could this webpage be improved to be more minimalist?",
    image: "/quiz/quiz8-graphics/quiz8_7.jpg",
    answers: [
      "By adding more items to the page.",
      "By removing all images and only having the navigation.",
      "By removing the unnecessary items and only keeping what is necessary for the user.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "What could improve this webpage?",
    image: "/quiz/quiz8-graphics/quiz8_8.png",
    answers: [
      "Changing the background color to fit within an aesthetic design.",
      "Removing excess text and trimming down the amount of reading.",
      "Make the mountain image fit in with the rest of the page rather than float on top.",
      "All of the above."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "The sale advert fits in within the aesthetic of the webpage.",
    image: "/quiz/quiz8-graphics/quiz8_9.jpg",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Is this webpage a good example of minimalist design?",
    image: "/quiz/quiz8-graphics/quiz8_10.jpg",
    answers: [
      "Yes, the webpage has lots of color and text placed all over.",
      "Yes, the webpage has a clear design and only contains important information.",
      "No, the webpage does not display enough information.",
      "No, the webpage has too little color and text."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
]

// HEURISTIC 9 QUESTIONS

export const heuristic9Questions = [
  {
    question:
      "Error messages should be expressed in complex language to ensure users understand the severity of the error.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is NOT aligned with helping users recognize, diagnose, and recover from errors?",
    answers: [
      "Providing clear and concise error messages.",
      "Offering suggestions for recovery.",
      "Using technical jargon in error messages.",
      "Indicating the problem precisely."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Sometimes, using technical jargon in error messages can:",
    answers: [
      "Enhance user understanding.",
      "Confuse users.",
      "Improve clarity.",
      "None of the above.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Helping users recognize, diagnose, and recover from errors involves:",
    answers: [
      "Using vague error messages.",
      "Providing no suggestions for recovery.",
      "Giving the user no options.",
      "None of the above.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Giving the user more relevant information is better for helping them recover from errors?",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which design approach aligns with helping users recognize, diagnose, and recover from errors?",
    answers: [
      "Providing vague error messages.",
      "Using error codes without explanations.",
      "Offering explanations and solutions.",
      "Providing no suggestions for recovery.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Using technical jargon in error messages can sometimes:",
    answers: [
      "Enhance user understanding.",
      "Confuse users.",
      "Improve clarity.",
      "None of the above.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What should be avoided in error codes?",
    answers: [
      "Printing the error code.",
      "Providing a reference to the documentation.",
      "Giving a summary of the error.",
      "Giving the user as technical of a description as possible.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Helping users recognize, diagnose, and recover from errors involves providing complex, technical, and verbose solutions.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What words should be avoided?",
    answers: [
      "Technical terms.",
      "The error code.",
      "Terms in relation to the program.",
      "All of the above.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This is a great example of the heuristic because:",
    image: "/quiz/quiz9-graphics/quiz9_1.png",
    answers: [
      "It displays the company logo.",
      "It has graphics.",
      "It displays the error code and what caused it.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "This gives proper information to the user on why they are receiving an error.",
    image: "/quiz/quiz9-graphics/quiz9_2.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This is a bad example of this heuristic because:",
    image: "/quiz/quiz9-graphics/quiz9_3.png",
    answers: [
      "It allows the user to return to the homepage.",
      "The page needs graphics.",
      "There is no explanation to the error.",
      "None of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "How does this allow users to recover from the error?",
    image: "/quiz/quiz9-graphics/quiz9_4.jpg",
    answers: [
      "Blocks the user from accessing the page.",
      "Allows the user to reload the page and reattempt a connection.",
      "Has a learn more link.",
      "Displays why the page was blocked."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why are printing out console errors to the user bad?",
    image: "/quiz/quiz9-graphics/quiz9_5.png",
    answers: [
      "They are good and provide good information to the user.",
      "They provide information that is only relevant to developers."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "This is a good example of the heuristic.",
    image: "/quiz/quiz9-graphics/quiz9_6.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This is a good example of the heuristic.",
    image: "/quiz/quiz9-graphics/quiz9_7.png",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "How could this error be improved according to the heuristic?",
    image: "/quiz/quiz9-graphics/quiz9_8.png",
    answers: [
      "By adding more graphics.",
      "By making the close button centered.",
      "By providing the user with an explanation for the error.",
      "All of the above."
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "This is a bad example of the heuristic.",
    image: "/quiz/quiz9-graphics/quiz9_9.jpg",
    answers: [
      "True.",
      "False."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Would shortening the amount of information improve this error?",
    image: "/quiz/quiz9-graphics/quiz9_10.jpg",
    answers: [
      "Yes, this would help users not be confused by the terms they don’t understand.",
      "No, this would remove the detail in the error message.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
]

// HEURISTIC 10 QUESTIONS

export const heuristic10Questions = [
  {
    question:
      "Providing help and documentation is only necessary for complex systems.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is a key aspect of providing help and documentation?",
    answers: [
      "Making the documentation difficult to search.",
      "Focusing on the system rather than the user's task.",
      "Listing abstract steps that are not actionable.",
      "Being easy to search and focused on the user's task."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is the main purpose of providing help and documentation?",
    answers: [
      "To showcase the technical expertise of the development team.",
      "To guide users through the system in a clear and concise manner.",
      "To overwhelm users with unnecessary information.",
      "To minimize the need for user support.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Sometimes, providing too much information in help and documentation can:",
    answers: [
      "Clarify complex concepts for users.",
      "Overwhelm users and hinder comprehension.",
      "Improve user confidence in the system.",
      "All of the above.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Providing effective help and documentation involves using technical jargon extensively to maintain professional tone.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Effective help and documentation should be:",
    answers: [
      "Difficult to navigate to encourage exploration.",
      "Focused on the system's technical details.",
      "Easy to search and focused on user tasks.",
      "Written in complex language to convey authority.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which approach aligns with providing effective help and documentation?",
    answers: [
      "Including every detail about the system, no matter how trivial.",
      "Focusing on technical aspects to demonstrate expertise.",
      "Presenting information in a clear and concise manner.",
      "Using technical terms without explanation.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following best describes the principle of providing effective help and documentation?",
    answers: [
      "Making the documentation difficult to search.",
      "Focusing on the user's task.",
      "Providing information that is difficult to understand.",
      "Being easy to search and focused on the user's task.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Effective help and documentation involves providing concise explanations to scenarios.",
    answers: [
      "True",
      "False",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Providing effective help and documentation aims to:",
    answers: [
      "Overwhelm users with too much information.",
      "Enhance the user experience by focusing on the system.",
      "Offer information that is easy to search and focused on the user's task.",
      "Provide information that is difficult to understand.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Contact links are important to include into help pages.",
    image: "/quiz/quiz10-graphics/quiz10_1.png",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Having an FAQ is bad for help pages as they cause too much confusion.",
    image: "/quiz/quiz10-graphics/quiz10_2.png",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How does the popular tab help users in a documentation page?",
    image: "/quiz/quiz10-graphics/quiz10_3.png",
    answers: [
      "It gives them more information to look at.",
      "It is just there for looks.",
      "It is pointless and should be removed.",
      "It presents the most searched problems and helps a user find them."
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "How can this documentation be improved?",
    image: "/quiz/quiz10-graphics/quiz10_4.jpg",
    answers: [
      "Changing the layout to be more readable can help.",
      "Removing information.",
      "Changing the colors to give a better look and feel.",
      "None of the above."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Giving users quick options to click on help pages decreases user productivity.",
    image: "/quiz/quiz10-graphics/quiz10_5.png",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Search bars are essential for documentation.",
    image: "/quiz/quiz10-graphics/quiz10_6.png",
    answers: [
      "Yes, they allow the user to find what they are looking for.",
      "No, they give the user no guidance for what they are looking for."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This is a good example of a documentation page.",
    image: "/quiz/quiz10-graphics/quiz10_7.jpg",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Why is including a, Problems we’re fixing, tab important.",
    image: "/quiz/quiz10-graphics/quiz10_8.jpg",
    answers: [
      "It is not important and is unnecessary.",
      "It lets users know an issue is being worked on."
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is this help page confusing?",
    image: "/quiz/quiz10-graphics/quiz10_9.png",
    answers: [
      "There are too many tabs the user will get lost searching.",
      "There are not enough words describing each article.",
      "The user will never get lost.",
      "None of the above."
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This is a good example of the heuristic.",
    image: "/quiz/quiz10-graphics/quiz10_10.png",
    answers: [
      "True",
      "False"
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
]