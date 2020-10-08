/*

Provide default values for user session data. These are automatically added
via the `autoStoreData` middleware. Values will only be added to the
session if a value doesn't already exist. This may be useful for testing
journeys where users are returning or logging in to an existing application.

============================================================================

Example usage:

"full-name": "Sarah Philips",

"options-chosen": [ "foo", "bar" ]
 {id: "EN000001", name: "Bob", phone: "02011122333"}

============================================================================

*/

const moment = require("moment");

module.exports = {
  sprint3: {
    referrals: [
      {
        reference: "NR0001",

        interventions: [
          {
            name: "Accommodation",
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            goals: [],
            sessions: [],
          },
          {
            name: "Social inclusion",
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            goals: [],
            sessions: [],
          },
        ],
      },
    ],
  },
  sprint4: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Adam Michaels",
          email: "Adam.Michaels@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
      },
    ].map(createReferral),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
    ],
  },
  sprint5: {
    referrals: [
      {
        serviceUser: {
          name: "Alex River",
          firstName: "Alex",
          title: "Mr",
          gender: "Male",
          email: "alex.river@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Bob Brown",
          firstName: "Bob",
          title: "Mr",
          gender: "Male",
          email: "bob.brown@gmail.com",
        },
        probationPractitioner: {
          name: "Jessica Reel",
          email: "j.reel@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Home Trust",
            assignedCaseworker: "Liam Johnson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "1",
            name: "Social inclusion",
            providerName: "Safe Living Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
          {
            id: "3",
            name: "Independent living",
            providerName: "Home Trust",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Emma Thompson",
          firstName: "Emma",
          title: "Ms",
          gender: "Female",
          email: "emma.thompson@gmail.com",
        },
        probationPractitioner: {
          name: "Josie Bart",
          email: "j.bart@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Rosie Palma",
          firstName: "Rosie",
          title: "Ms",
          gender: "Female",
          email: "rosie.palma@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "",
            monitor: {
              actionPlanSubmitted: false,
              actionPlanApproved: false,
              assigned: false,
              inProgress: false,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Macy Flem",
          firstName: "Macy",
          title: "Ms",
          gender: "Female",
          email: "macy.flem@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Helping Hands",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Robert Watkins",
          firstName: "Robert",
          title: "Mr",
          gender: "Male",
          email: "robert.watkins@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Mary Moore",
          firstName: "Mary",
          title: "Ms",
          gender: "Female",
          email: "mary.moore@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Ready to Go London",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Anthony Hughes",
          firstName: "Anthony",
          title: "Mr",
          gender: "Male",
          email: "anthony.hughes@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Better Ltd.",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: true,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Fernando Willis",
          firstName: "Fernando",
          title: "Mr",
          gender: "Male",
          email: "fernando.willis@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Live Well",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: true,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Marion Clemmons",
          firstName: "Marion",
          title: "Ms",
          gender: "Female",
          email: "marion.clemmons@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "New Beginnings Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Ross Gutierrez",
          firstName: "Ross",
          title: "Mr",
          gender: "Male",
          email: "ross.g@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Louis Wing",
          firstName: "Louis",
          title: "Mr",
          gender: "Male",
          email: "l.wing@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Accommodation",
            providerName: "Harmony Living",
            assignedCaseworker: "Jenny Thompson",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Richard Smith",
          firstName: "Richard",
          title: "Mr",
          gender: "Male",
          email: "rich@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Alma Pearson",
          firstName: "Alma",
          title: "Ms",
          gender: "Female",
          email: "alma.pearson@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Social Inclusion",
            providerName: "Live Well",
            assignedCaseworker: "Rebecca Green",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: true,
              overdue: false,
              completed: false,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
      {
        serviceUser: {
          name: "Natasha Mackey",
          firstName: "Natasha",
          title: "Ms",
          gender: "Female",
          email: "natasha@gmail.com",
        },
        probationPractitioner: {
          name: "Claire Phill",
          email: "c.phill@justice.gov.uk",
        },
        interventions: [
          {
            id: "0",
            name: "Independent living",
            providerName: "Better Ltd.",
            assignedCaseworker: "Samantha Jones",
            monitor: {
              actionPlanSubmitted: true,
              actionPlanApproved: false,
              assigned: true,
              inProgress: false,
              overdue: false,
              completed: true,
            },
            actionPlanSubmitted: false,
            actionPlanApproved: false,
            assigned: false,
            goals: [],
            sessions: [],
            relevantSentenceHTML:
              "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
            desiredOutcomes:
              "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
            requiredComplexityHTML:
              "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
            completionDateRequired: moment().add("2", "months").toDate(),
            maximumRARDays: "22",
            furtherInformation: "N/A",
          },
        ],
      },
    ].map(createReferralWithoutInterventions),
    caseworkers: [
      {
        name: "Liam Johnson",
        firstName: "Liam",
      },
      {
        name: "Rebecca Green",
        firstName: "Rebecca",
      },
      {
        name: "Jenny Thompson",
        firstName: "Jenny",
      },
      {
        name: "Kelly Clarkson",
        firstName: "Kelly",
      },
      {
        name: "Samantha Jones",
        firstName: "Samantha",
      },
    ],
    notifications: {
      today: [
        {
          date: "Today 12:43",
          type: "Approve service user action plan",
          serviceUser: "Alex River",
          priority: true,
          action: "review",
          unread: true,
        },
        {
          date: "Today 11:02",
          type: "Approve service user action plan",
          serviceUser: "Alex River",
          priority: true,
          action: "review",
          unread: true,
        },
      ],
      yesterday: [
        {
          date: "Thursday 10:12",
          type: "Attended Session 2",
          serviceUser: "Bob Brown",
          priority: false,
          action: "view",
          unread: false,
        },
        {
          date: "Thursday 09:51",
          type: "Safeguarding issues identified",
          serviceUser: "Alex River",
          priority: true,
          action: "view",
          unread: false,
        },
        {
          date: "Thursday 09:42",
          type: "Initial assessment completed",
          serviceUser: "Emma Thompson",
          priority: false,
          action: "view",
          unread: false,
        },
        {
          date: "Thursday 11:02",
          type: "Safeguarding issues identified",
          serviceUser: "Emma Thompson",
          priority: true,
          action: "view",
          unread: false,
        },
      ],
      wednesday: [
        {
          date: "Wednesday 16:10",
          type: "Did not attend initial assessment",
          serviceUser: "Macy Flem",
          priority: true,
          action: "view",
          unread: false,
        },
        {
          date: "Wednesday 15:23",
          type: "Approve end of service report",
          serviceUser: "Robert Watkins",
          priority: true,
          action: "review",
        },
        {
          date: "Wednesday 11:35",
          type: "Initial assessment completed",
          serviceUser: "Richard Smith",
          priority: true,
          action: "view",
          unread: false,
        },
      ],
    },
  },
};

function createReferral(params, index) {
  return {
    reference: "NR" + (index + 1).toString().padStart(4, "0"),

    receivedAt: moment().subtract("1", "days").toDate(),

    relevantSentenceHTML:
      "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
    desiredOutcomes:
      "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
    requiredComplexityHTML:
      "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
    completionDateRequired: moment().add("2", "months").toDate(),
    maximumRARDays: "22",
    furtherInformation: "N/A",

    serviceUser: Object.assign(
      {
        name: "Alex River",
        firstName: "Alex",
        otherNames: "Shorty",
        gender: "Male",
        title: "Mr",
        addressHTML:
          "Flat 2<br>27 Test Walk<br>SY16 1AQ<br><br>Private rental</dd>",
        nationality: "British",
        ethnicGroup: "White: British",
        preferredLanguage: "English",
        sexuality: "Heterosexual",
        religionOrBelief: "None",
        disabilities: "Autism spectrum condition",
        email: "alex.river@gmail.com",
        phone: "07588 382 222",
        pncNumber: "2014/1234786A",
        crn: "D016868",
        nomisNumber: "0203394",
        risks: {
          OGRSScore: "50",
          RM2000Score: "Medium",
          ROSHAScore: "Medium",
          SARAScore: "Low",
          scoresInformation: "N/A",
        },
        needs: {
          criminogenicNeeds: [
            "Thinking and attitudes",
            "Relationships",
            "Accommodation",
          ],
          identifyNeeds: "N/A",
          otherNeeds: "N/A",
          interpreterNeeded: "No",
          languageNeeds: "English",
          responsibilities: "Yes",
          timesUnavailable: "N/A",
        },
      },
      params.serviceUser
    ),

    probationPractitioner: Object.assign(
      {
        name: "Jessica Reel",
        phone: "01909 234 567",
        email: "j.reel@justice.gov.uk",
        addressHTML: "44 Bouverie Road<br>Weston Lullingfields<br>SY4 0RE",
      },
      params.probationPractitioner
    ),

    interventions: [
      {
        id: "0",
        name: "Accommodation",
        actionPlanSubmitted: false,
        actionPlanApproved: false,
        assigned: false,
        goals: [],
        sessions: [],
        relevantSentenceHTML:
          "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
        desiredOutcomes:
          "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
        requiredComplexityHTML:
          "Low complexity<br>[up to 4 sessions (pre-release virtual contact)] Service user has a low risk of reoffending. Service user has limited family support.",
        completionDateRequired: moment().add("2", "months").toDate(),
        maximumRARDays: "22",
        furtherInformation: "N/A",
      },
      {
        id: "1",
        name: "Social inclusion",
        actionPlanSubmitted: false,
        actionPlanApproved: false,
        assigned: false,
        goals: [],
        sessions: [],
        relevantSentenceHTML:
          "Misuse of Drugs Act 1971 s.4(3)<br>Sub category: Misuse of Drugs Act 1971, s.5(3)<br>Date: 01/01/2020<br>Order: Suspended sentence",
        desiredOutcomes:
          "Service user develops resilience and perseverance to cope with challenges and barriers on return to the community.",
        requiredComplexityHTML:
          "Low complexity<br>[up to 4 Sessions (pre-release virtual contact)] Service User has a low risk of reoffending. Service User has limited family support.",
        completionDateRequired: moment().add("2", "months").toDate(),
        maximumRARDays: "22",
        furtherInformation: "N/A",
      },
    ],
  };
}

function createReferralWithoutInterventions(params, index) {
  return {
    reference: "NR" + (index + 1).toString().padStart(4, "0"),

    receivedAt: moment().subtract("1", "days").toDate(),

    serviceUser: Object.assign(
      {
        name: "Alex River",
        firstName: "Alex",
        otherNames: "Shorty",
        gender: "Male",
        title: "Mr",
        dateOfBirth: "03/05/1984",
        addressHTML:
          "Flat 2<br>27 Test Walk<br>SY16 1AQ<br><br>Private rental</dd>",
        nationality: "British",
        ethnicGroup: "White: British",
        preferredLanguage: "English",
        sexuality: "Heterosexual",
        religionOrBelief: "None",
        disabilities: "Autism spectrum condition",
        email: "alex.river@gmail.com",
        phone: "07588 382 222",
        pncNumber: "2014/1234786A",
        crn: "D016868",
        nomisNumber: "0203394",
        risks: {
          OGRSScore: "50",
          RM2000Score: "Medium",
          ROSHAScore: "Medium",
          SARAScore: "Low",
          scoresInformation: "N/A",
        },
        needs: {
          criminogenicNeeds: [
            "Thinking and attitudes",
            "Relationships",
            "Accommodation",
          ],
          identifyNeeds: "N/A",
          otherNeeds: "N/A",
          interpreterNeeded: "No",
          languageNeeds: "English",
          responsibilities: "Yes",
          timesUnavailable: "N/A",
        },
      },
      params.serviceUser
    ),
    interventions: params.interventions,
    probationPractitioner: Object.assign(
      {
        name: "Jessica Reel",
        phone: "01909 234 567",
        email: "j.reel@justice.gov.uk",
        addressHTML: "44 Bouverie Road<br>Weston Lullingfields<br>SY4 0RE",
      },
      params.probationPractitioner
    ),
  };
}
