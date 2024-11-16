export const Index = {
  Overview: {
    Name: "Save as Draft for Forms",
    Description:
      "An enhancement in form filling experience by enabling users to save their progress as a draft, ensuring convenience and better lead engagement.",
    Duration: "2 months",
    Problem:
      "Users often abandon form submissions due to interruptions or incomplete information, leading to missed leads and lower conversion rates.",
    Solution:
      "A feature that allows users to save their progress at any stage and return later to complete the form without losing any data.",
    Impact: {
      "Form Completion Rate": "30% increase in form submission completion",
      "User Experience":
        "25% improvement in feedback scores related to form filling",
      "Lead Conversion": "15% increase in converted leads from saved drafts",
    },
  },
  "Design Process": {
    "Discovery And Research": {
      "User Interviews": {
        Description:
          "Conversations to understand user behavior during form filling",
        Outcomes: [
          "Recognized key causes of form abandonment",
          "Discovered user preferences for saving and resuming forms",
        ],
      },
      Surveys: {
        Description: "Online surveys to collect feedback on draft-saving needs",
        Outcomes: [
          "Validated the necessity of a draft-saving feature",
          "Collected insights on preferred methods for saving drafts",
        ],
      },
      "Competitive Analysis": {
        Description: "Studied competitors offering similar features",
        Outcomes: [
          "Identified best practices for draft-saving implementations",
          "Determined opportunities for differentiating our solution",
        ],
      },
    },
    "Definition And Planning": {
      "Information Architecture": {
        Description: "Structured the draft-saving feature's workflow",
        Outcomes: [
          "Defined the logic for saving, retrieving, and editing drafts",
        ],
      },
      "User FlowMapping": {
        Description: "Charted the draft-saving journey for users",
        Outcomes: [
          "Outlined interactions for saving and resuming drafts",
          "Optimized flow to minimize interruptions in form filling",
        ],
      },
    },
    "Design And Prototyping": {
      Wireframing: {
        Description: "Low-fidelity layouts for saving draft functionality",
        Outcomes: [
          "Sketched interfaces for 'Save as Draft' buttons and notifications",
          "Outlined draft management options in the dashboard",
        ],
      },
      "Interactive Prototyping": {
        Description: "Clickable prototypes showcasing draft-saving flow",
        Outcomes: [
          "Developed prototypes for saving progress, resuming, and editing",
          "Simulated user interactions with draft-saving scenarios",
        ],
      },
    },
    Testing: {
      "Usability Testing": {
        Description: "Assessed ease of use of the draft-saving feature",
        Outcomes: [
          "Gathered feedback on draft accessibility and retrieval",
          "Refined UI elements for better visibility of saved drafts",
        ],
      },
      ABTesting: {
        Description: "Tested different UI placements of 'Save as Draft'",
        Outcomes: [
          "Optimized the placement of draft-saving actions",
          "Improved clarity of notifications confirming save success",
        ],
      },
    },
  },
  "Key Features": {
    "Save Progress Button":
      "Allows users to save their progress at any stage of form filling with a single click.",
    "Resume Forms":
      "Provides users with an option to resume incomplete forms from where they left off.",
    "Automatic Save":
      "Ensures drafts are auto-saved periodically to prevent data loss during interruptions.",
    "Draft Management Dashboard":
      "A centralized section where users can view, edit, or delete saved drafts.",
    "Notification and Alerts":
      "Informs users when progress is saved and provides reminders for incomplete forms.",
    "Mobile and Desktop Sync":
      "Seamless synchronization of saved drafts across devices for convenience.",
  },
};

export const Description = {
  Name: "Save as Draft for Forms",
  Description:
    "The 'Save as Draft' feature enhances the lead generation experience by allowing users to save their form-filling progress and resume at their convenience. The feature caters to busy users or those requiring more time to gather information. It improves conversion rates by reducing form abandonment, providing an intuitive way to manage saved drafts. This solution is ideal for businesses aiming to boost lead engagement through user-centric form-filling workflows.",
  Problem:
    "Form abandonment is a common issue caused by interruptions, lack of required information, or lengthy forms. This leads to missed opportunities and frustrated users. Existing solutions often fail to provide a seamless way to save and resume forms, which is crucial for ensuring lead retention and conversion.",
  Solution:
    "Over two months, the project implemented a 'Save as Draft' feature that allows users to save progress, either manually or automatically. This includes notifications for successful saves, reminders for incomplete forms, and a draft management dashboard. The feature is optimized for both mobile and desktop users, ensuring cross-device compatibility and a smooth resumption process. Advanced analytics track draft usage, enabling further optimizations.",
  Impact: {
    "Form Completion Rate": "30% increase in form submission completion",
    "User Experience":
      "25% improvement in feedback scores related to form filling",
    "Lead Conversion": "15% increase in converted leads from saved drafts",
  },
};

export const DesignProcess = {
  "Discovery And Research": {
    "User Interviews": {
      Link: "https://embed.figma.com/proto/SaveDraftUserInterviews",
      Outcomes:
        "Recognized key causes of form abandonment and Discovered user preferences for saving and resuming forms",
    },
    Surveys: {
      Description: "Online surveys to collect feedback on draft-saving needs",
      Outcomes:
        "Validated the necessity of a draft-saving feature and Collected insights on preferred methods for saving drafts",
    },
    "Competitive Analysis": {
      Link: "https://embed.figma.com/proto/SaveDraftCompetitiveAnalysis",
      Outcomes:
        "Identified best practices for draft-saving implementations and Determined opportunities for differentiating our solution",
    },
  },
  "Definition And Planning": {
    "Information Architecture": {
      Description: "Structured the draft-saving feature's workflow",
      Outcomes: "Defined the logic for saving, retrieving, and editing drafts",
    },
    "User FlowMapping": {
      Description: "Charted the draft-saving journey for users",
      Outcomes:
        "Outlined interactions for saving and resuming drafts and Optimized flow to minimize interruptions in form filling",
    },
  },
  "Design And Prototyping": {
    Wireframing: {
      Link: "https://embed.figma.com/proto/SaveDraftWireframes",
      Outcomes:
        "Sketched interfaces for 'Save as Draft' buttons and notifications and Outlined draft management options in the dashboard",
    },
    "Interactive Prototyping": {
      Link: "https://embed.figma.com/proto/SaveDraftPrototypes",
      Outcomes:
        "Developed prototypes for saving progress, resuming, and editing and Simulated user interactions with draft-saving scenarios",
    },
  },
  Testing: {
    "Usability Testing": {
      Description: "Assessed ease of use of the draft-saving feature",
      Outcomes:
        "Gathered feedback on draft accessibility and retrieval and Refined UI elements for better visibility of saved drafts",
    },
    ABTesting: {
      Link: "https://embed.figma.com/proto/SaveDraftABTesting",
      Outcomes:
        "Optimized the placement of draft-saving actions and Improved clarity of notifications confirming save success",
    },
  },
};

export const Features = {
  "Save Progress Button": {
    Description:
      "Allows users to save their progress at any stage of form filling with a single click. The button is strategically placed for accessibility and supported by visual cues indicating the save status.",
  },
  "Resume Forms": {
    Description:
      "Provides users with an option to resume incomplete forms from where they left off. Integrated with login credentials or cookies to ensure smooth retrieval of drafts.",
  },
  "Automatic Save": {
    Description:
      "Ensures drafts are auto-saved periodically to prevent data loss during interruptions. Includes customizable save intervals for user preference.",
  },
  "Draft Management Dashboard": {
    Link: "https://embed.figma.com/proto/SaveDraftManagementDashboard",
    Description:
      "A centralized section where users can view, edit, or delete saved drafts. Features sorting options, status indicators, and direct resumption links.",
  },
  "Notification and Alerts": {
    Description:
      "Informs users when progress is saved and provides reminders for incomplete forms. Includes email notifications and in-app alerts for comprehensive coverage.",
  },
  "Mobile and Desktop Sync": {
    Description:
      "Seamless synchronization of saved drafts across devices for convenience. Supports automatic syncing with real-time updates to avoid inconsistencies.",
  },
};
