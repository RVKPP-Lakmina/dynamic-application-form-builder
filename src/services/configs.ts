export const rdbApplication =
  /**
   * Paste one or more documents here
   */
  {
    title: "RDB Application",
    type: "form",
    subtitle: "",
    children: [
      {
        title: "Application",
        type: "template",
        subtitle: "",
        children: [
          {
            title: "Personal Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1704945125306",
                children: [
                  {
                    title: "Title",
                    subtitle: "",
                    type: "select",
                    dataKey: "title",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "TITLE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945125306.title",
                  },
                  {
                    title: "Initials In Full ",
                    subtitle: "",
                    type: "text",
                    dataKey: "initialsInFull",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945125306.initialsInFull",
                  },
                  {
                    title: "Last Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "lastName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945125306.lastName",
                  },
                  {
                    title: "Used Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "usedName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945125306.usedName",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704945215875",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704945125306",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704945538621",
                children: [
                  {
                    title: "Initials",
                    subtitle: "",
                    type: "text",
                    dataKey: "initials",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC_AND_UPPERCASE",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945538621.initials",
                  },
                  {
                    title: "Other Names",
                    subtitle: "",
                    type: "text",
                    dataKey: "otherNames",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945538621.otherNames",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704945541374",
                },
                path: "application.personalDetailsApplication.1704945538621",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704945726085",
                children: [
                  {
                    title: "Old Nic",
                    subtitle: "",
                    type: "text",
                    dataKey: "oldNic",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "OLD_NIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {
                        initialsInFull: "",
                      },
                      logic: {
                        mandatory: "AND",
                      },
                    },
                    path: "application.personalDetailsApplication.1704945726085.oldNic",
                  },
                  {
                    title: "Issued Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "issuedDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {
                        oldNic: "",
                      },
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704945726085.issuedDate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704945728012",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704945726085",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704946299413",
                children: [
                  {
                    title: "New Nic",
                    subtitle: "",
                    type: "text",
                    dataKey: "newNic",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NEW_NIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946299413.newNic",
                  },
                  {
                    title: "Issued Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "issuedDateNic",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {
                        newNic: "",
                      },
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946299413.issuedDateNic",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704946302497",
                },
                path: "application.personalDetailsApplication.1704946299413",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704946472943",
                children: [
                  {
                    title: "Civil Status",
                    subtitle: "",
                    type: "select",
                    dataKey: "civilStatus",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "CIVIL_STATE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946472943.civilStatus",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704946478501",
                },
                path: "application.personalDetailsApplication.1704946472943",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1704946669646",
                children: [
                  {
                    title: "Spouse Name in Full",
                    subtitle: "",
                    type: "text",
                    dataKey: "spouseNameInFull",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {
                        civilStatus: "2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946669646.spouseNameInFull",
                  },
                  {
                    title: "Spouse New Nic",
                    subtitle: "",
                    type: "text",
                    dataKey: "spouseNewNic",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NEW_NIC",
                    },
                    dependencyManagement: {
                      visibility: {
                        civilStatus: "2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946669646.spouseNewNic",
                  },
                  {
                    title: "Spouse Old Nic",
                    subtitle: "",
                    type: "text",
                    dataKey: "spouseOldNic",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "OLD_NIC",
                    },
                    dependencyManagement: {
                      visibility: {
                        civilStatus: "2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946669646.spouseOldNic",
                  },
                  {
                    title: " Spouse Employment Details",
                    subtitle: "",
                    type: "select",
                    dataKey: "spouseEmploymentDetails",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYMENT_STATUS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        civilStatus: "2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704946669646.spouseEmploymentDetails",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704946671214",
                },
                path: "application.personalDetailsApplication.1704946669646",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1704948441988",
                children: [
                  {
                    title: "Gender",
                    subtitle: "",
                    type: "select",
                    dataKey: "gender",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "GENDER",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704948441988.gender",
                  },
                  {
                    title: "Birth Day",
                    subtitle: "",
                    type: "text",
                    dataKey: "birthDay",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704948441988.birthDay",
                  },
                  {
                    title: "Age",
                    subtitle: "",
                    type: "text",
                    dataKey: "age",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {
                        birthDay: "",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704948441988.age",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704948495641",
                },
                path: "application.personalDetailsApplication.1704948441988",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704949118658",
                children: [
                  {
                    title: "Sri lankan Citizen",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "srilankanCitizen",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704949118658.srilankanCitizen",
                  },
                  {
                    title: "If Yes",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "ifYes",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "By Birth",
                      option2: "By Registration",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704949118658.ifYes",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704949119649",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704949118658",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704950297128",
                children: [
                  {
                    title: "Race",
                    subtitle: "",
                    type: "select",
                    dataKey: "race",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "RACE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        ifYes: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704950297128.race",
                  },
                  {
                    title: "Preferred Communication Language",
                    subtitle: "",
                    type: "select",
                    dataKey: "communicationLanguage",
                    inputOptions: {
                      customOptions: ["English", "Tamil", "Sinhala"],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704950297128.communicationLanguage",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704950298902",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704950297128",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704951613980",
                children: [
                  {
                    title: "Nearest Branch",
                    subtitle: "",
                    type: "label",
                    dataKey: "1704951658227",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704951613980.1704951658227",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704951622662",
                },
                path: "application.personalDetailsApplication.1704951613980",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704951717982",
                children: [
                  {
                    title: "Your Residential District",
                    subtitle: "",
                    type: "select",
                    dataKey: "yourResidentialDistrict",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704951717982.yourResidentialDistrict",
                  },
                  {
                    title: "Your Nearest RDB Branch",
                    subtitle: "",
                    type: "select",
                    dataKey: "nearestRdbBank",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_BRANCH",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704951717982.nearestRdbBank",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704951723322",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704951717982",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705551891755",
                children: [
                  {
                    title:
                      "Does the Applicant has close relation who work at RDB ?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "closeRelationAtWork",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551891755.closeRelationAtWork",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705551941550",
                },
                path: "application.personalDetailsApplication.1705551891755",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705551908631",
                children: [
                  {
                    title: "Details Of The Relation",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705552025868",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551908631.1705552025868",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705552024102",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1705551908631",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705551922497",
                children: [
                  {
                    title: "Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "name",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        closeRelationAtWork: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551922497.name",
                  },
                  {
                    title: "Relationship",
                    subtitle: "",
                    type: "select",
                    dataKey: "relationship",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "RELATION_WITH_MA",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        closeRelationAtWork: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551922497.relationship",
                  },
                  {
                    title: "Employment Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "employmentNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        closeRelationAtWork: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551922497.employmentNumber",
                  },
                  {
                    title: "Branch",
                    subtitle: "",
                    type: "select",
                    dataKey: "branch",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_BRANCH",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        closeRelationAtWork: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705551922497.branch",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705552046263",
                },
                path: "application.personalDetailsApplication.1705551922497",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704953404622",
                children: [
                  {
                    title: "Other Identification Details",
                    subtitle: "",
                    type: "label",
                    dataKey: "1704953416402",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953404622.1704953416402",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704953414642",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704953404622",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704953459821",
                children: [
                  {
                    title: "Other Id Type",
                    subtitle: "",
                    type: "label",
                    dataKey: "1704953471220",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953459821.1704953471220",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704953467886",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704953459821",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704953517984",
                children: [
                  {
                    title: "ID Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "idType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "ID_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953517984.idType",
                  },
                  {
                    title: "ID No",
                    subtitle: "",
                    type: "text",
                    dataKey: "idNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMBER_AND_UPPERCASE",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953517984.idNo",
                  },
                  {
                    title: "ID Expiry Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "idExpiryDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {
                        idNo: "",
                      },
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953517984.idExpiryDate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704953521416",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704953517984",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704953804296",
                children: [
                  {
                    title: "Tax Payer",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "taxPayer",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953804296.taxPayer",
                  },
                  {
                    title: "Individual Tax identification No",
                    subtitle: "",
                    type: "text",
                    dataKey: "indentificationNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "TAX_NO",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953804296.indentificationNo",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704953807403",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704953804296",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704953902945",
                children: [
                  {
                    title:
                      "Does the customer wants to include additional/Joint Borrowers ?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "jointBorrowers",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704953902945.jointBorrowers",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704953905595",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704953902945",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1704954047233",
                children: [
                  {
                    title:
                      "Is the customer covered by the Public Employee's Loan Act or any other Act?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "loanAct",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1704954047233.loanAct",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1704954054033",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.personalDetailsApplication.1704954047233",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705553120284",
                children: [
                  {
                    title:
                      "Has there been any judgements, other legal warrants or court proceedings against the customer?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "legalWarrants",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705553120284.legalWarrants",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705553282403",
                },
                path: "application.personalDetailsApplication.1705553120284",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705553746105",
                children: [
                  {
                    title: "Please Specify",
                    subtitle: "",
                    type: "textArea",
                    dataKey: "pleaseSpecify",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dependencyManagement: {
                      visibility: {
                        legalWarrants: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.personalDetailsApplication.1705553746105.pleaseSpecify",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705553750197",
                },
                path: "application.personalDetailsApplication.1705553746105",
              },
            ],
            lastModified: {
              $numberLong: "1704945109464",
            },
            dataKey: "personalDetailsApplication",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.personalDetailsApplication",
          },
          {
            title: "Credit Details",
            type: "section",
            subtitle: "RDB application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705032096856",
                children: [
                  {
                    title: "Select the most appropriate type of loan",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705032854706",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "1705032854706",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705032852789",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.creditDetailsApplication.1705032096856",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705032102662",
                children: [
                  {
                    title: "Product Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "productType",
                    inputOptions: {
                      customOptions: ["Retail", "Micro", "SME", "Card"],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032102662.productType",
                  },
                  {
                    title: "Sector",
                    subtitle: "",
                    type: "select",
                    dataKey: "sector",
                    inputOptions: {
                      customOptions: [
                        "Consumption",
                        "Debit Cards",
                        "Credit Card",
                        "Affinity Cards",
                        "Corporate Credit Card",
                      ],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032102662.sector",
                  },
                  {
                    title: "Scheme",
                    subtitle: "",
                    type: "select",
                    dataKey: "scheme",
                    inputOptions: {
                      customOptions: [
                        "Athamaru Loan",
                        "Visa Platinum Credit Card",
                        "Visa Signature Credit Card",
                        "Visa Infinte Credit Card",
                        "World MasterCard",
                      ],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032102662.scheme",
                  },
                  {
                    title: "Applicant Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "applicantType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "MOVABLE_CUSTOMER_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032102662.applicantType",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705032104369",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.creditDetailsApplication.1705032102662",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705032914699",
                children: [
                  {
                    title: "Loan Amount",
                    subtitle: "",
                    type: "text",
                    dataKey: "loanAmount",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "CURRENCY",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032914699.loanAmount",
                  },
                  {
                    title: "Loan Purpose",
                    subtitle: "",
                    type: "textArea",
                    dataKey: "loanPurpose",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705032914699.loanPurpose",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705032916076",
                },
                path: "application.creditDetailsApplication.1705032914699",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705033080096",
                children: [
                  {
                    title: "Loan Cycles",
                    subtitle: "",
                    type: "text",
                    dataKey: "loanCycles",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033080096.loanCycles",
                  },
                  {
                    title: "Repayment Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "repaymentType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "REPAYMENT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033080096.repaymentType",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705033083554",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.creditDetailsApplication.1705033080096",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705033226660",
                children: [
                  {
                    title: "Loan Frequency",
                    subtitle: "",
                    type: "select",
                    dataKey: "loanFrequency",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "LOAN_FREQUENCY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033226660.loanFrequency",
                  },
                  {
                    title: "Interest Rate",
                    subtitle: "",
                    type: "text",
                    dataKey: "interestRate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      formatterRule: "Generic",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033226660.interestRate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705033228145",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.creditDetailsApplication.1705033226660",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705033419852",
                children: [
                  {
                    title: "Loan Tenor",
                    subtitle: "",
                    type: "text",
                    dataKey: "loanTenor",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033419852.loanTenor",
                  },
                  {
                    title: "Fund Source",
                    subtitle: "",
                    type: "select",
                    dataKey: "fundSource",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "FUND_SOURCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.creditDetailsApplication.1705033419852.fundSource",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705033420919",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.creditDetailsApplication.1705033419852",
              },
            ],
            lastModified: {
              $numberLong: "1704874542531",
            },
            dataKey: "creditDetailsApplication",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.creditDetailsApplication",
          },
          {
            title: "Address Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705034328736",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034328736.addressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "addresslLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034328736.addresslLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034328736.addressLine3",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705034330450",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705034328736",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705034539564",
                children: [
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034539564.addressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "nearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034539564.nearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705034540598",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705034539564",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705034659967",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "province",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034659967.province",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "district",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034659967.district",
                  },
                  {
                    title: "DS Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "dsDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DS_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034659967.dsDivision",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705034662286",
                },
                path: "application.addressDetails.1705034659967",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705034811248",
                children: [
                  {
                    title: "GN Divison",
                    subtitle: "",
                    type: "select",
                    dataKey: "gnDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "GN_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034811248.gnDivision",
                  },
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "postalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705034811248.postalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705034812586",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705034811248",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705035213740",
                children: [
                  {
                    title: "Mailing address same as permanent",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "mailingAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035213740.mailingAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705035241718",
                },
                path: "application.addressDetails.1705035213740",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705035779252",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "mailingAddressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035779252.mailingAddressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "mailingAddressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035779252.mailingAddressLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "mailingAddressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035779252.mailingAddressLine3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "mailingAddressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035779252.mailingAddressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "mailingNearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705035779252.mailingNearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705035780277",
                },
                path: "application.addressDetails.1705035779252",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705036065566",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "mailingProvince",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036065566.mailingProvince",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "mailingDistrict",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036065566.mailingDistrict",
                  },
                  {
                    title: "DS Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "mailingDsDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DS_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036065566.mailingDsDivision",
                  },
                  {
                    title: "GN Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "mailingGnDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "GN_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036065566.mailingGnDivision",
                  },
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "mailingpostalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        mailingAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036065566.mailingpostalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705036072678",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705036065566",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705036519438",
                children: [
                  {
                    title: "Current address same as permanent",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "currentAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705036519438.currentAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705036521129",
                },
                path: "application.addressDetails.1705036519438",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705037006034",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "currentAddressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037006034.currentAddressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "currentAdressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037006034.currentAdressLine2",
                  },
                  {
                    title: "Adress Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "currentAddressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037006034.currentAddressLine3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "currentAddressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037006034.currentAddressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "currentNearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037006034.currentNearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705037008223",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705037006034",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705037339487",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "currentProvince",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037339487.currentProvince",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "currentDistrict",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037339487.currentDistrict",
                  },
                  {
                    title: "Ds Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "currentDsDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DS_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037339487.currentDsDivision",
                  },
                  {
                    title: "GN Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "currentGnDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "GN_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037339487.currentGnDivision",
                  },
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "currentPostalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        currentAddress: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037339487.currentPostalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705037343304",
                },
                path: "application.addressDetails.1705037339487",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705037706757",
                children: [
                  {
                    title: "Other information of the address",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705037729213",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037706757.1705037729213",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705037714059",
                },
                path: "application.addressDetails.1705037706757",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705037748551",
                children: [
                  {
                    title: "Residential State",
                    subtitle: "",
                    type: "select",
                    dataKey: "residentialState",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "RESIDENTIAL_STATUS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037748551.residentialState",
                  },
                  {
                    title: "Other Residential State",
                    subtitle: "",
                    type: "text",
                    dataKey: "otherResidentialState",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        residentialState: "4",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037748551.otherResidentialState",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705037753791",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705037748551",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705037805301",
                children: [
                  {
                    title: "Years at current residence ",
                    subtitle: "",
                    type: "text",
                    dataKey: "yearsAtCurrentResidence",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037805301.yearsAtCurrentResidence",
                  },
                  {
                    title: "Months",
                    subtitle: "",
                    type: "select",
                    dataKey: "months",
                    inputOptions: {
                      customOptions: [
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                      ],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705037805301.months",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705037809120",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705037805301",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705038241806",
                children: [
                  {
                    title: "Previous Residence Address Info",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705038293650",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038241806.1705038293650",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705038262942",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705038241806",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705038315573",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038315573.previousAddressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038315573.previousAddressLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038315573.previousAddressLine3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038315573.previousAddressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousNearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038315573.previousNearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705038319972",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705038315573",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705038571317",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousProvince",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038571317.previousProvince",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousDistrict",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038571317.previousDistrict",
                  },
                  {
                    title: "DS Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousDsDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DS_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038571317.previousDsDivision",
                  },
                  {
                    title: "GN Division",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousGnDivision",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "GN_DIVISION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038571317.previousGnDivision",
                  },
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousPostalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.addressDetails.1705038571317.previousPostalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705038577113",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.addressDetails.1705038571317",
              },
            ],
            lastModified: {
              $numberLong: "1705034288120",
            },
            dataKey: "addressDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.addressDetails",
          },
          {
            title: "Contact Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705380417389",
                children: [
                  {
                    title: "Telephone",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705380422540",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705380417389.1705380422540",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705380420733",
                },
                path: "application.contactDetailsRdb.1705380417389",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705380517567",
                children: [
                  {
                    title: "Primary Contact No",
                    subtitle: "",
                    type: "text",
                    dataKey: "primaryContactNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705380517567.primaryContactNo",
                  },
                  {
                    title: "Primary SMS No",
                    subtitle: "",
                    type: "text",
                    dataKey: "primarySmsNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705380517567.primarySmsNo",
                  },
                  {
                    title: "Subscribe to bank's news sms alerts",
                    subtitle: "",
                    type: "radioOption",
                    dataKey: "smsAlert",
                    inputOptions: {
                      type: "single",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705380517567.smsAlert",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705380521121",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705380517567",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705380772453",
                children: [
                  {
                    title: "Other Contact Numbers",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705381233336",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705380772453.1705381233336",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705380773590",
                },
                path: "application.contactDetailsRdb.1705380772453",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381434199",
                children: [
                  {
                    title: "Contact Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "contactType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "CONTACT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381434199.contactType",
                  },
                  {
                    title: "Phone Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "phoneNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381434199.phoneNumber",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381435046",
                },
                path: "application.contactDetailsRdb.1705381434199",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381589642",
                children: [
                  {
                    title: "Relation Contact",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705381592612",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381589642.1705381592612",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381591263",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705381589642",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705381628304",
                children: [
                  {
                    title: "Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "name",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381628304.name",
                  },
                  {
                    title: "Contact Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "conatctNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381628304.conatctNumber",
                  },
                  {
                    title: "Relationship",
                    subtitle: "",
                    type: "text",
                    dataKey: "relationship",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381628304.relationship",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381629722",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705381628304",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381761950",
                children: [
                  {
                    title: "Email",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705381766112",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381761950.1705381766112",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381763381",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705381761950",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381829618",
                children: [
                  {
                    title: "Primary Email Address",
                    subtitle: "",
                    type: "text",
                    dataKey: "primaryEmailAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "EMAIL",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381829618.primaryEmailAddress",
                  },
                  {
                    title: "Subscribe to bank's news email alerts",
                    subtitle: "",
                    type: "radioOption",
                    dataKey: "emailAlert",
                    inputOptions: {
                      type: "single",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381829618.emailAlert",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381831050",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705381829618",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381916640",
                children: [
                  {
                    title: "Other Email Address",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705381950120",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381916640.1705381950120",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381948345",
                },
                path: "application.contactDetailsRdb.1705381916640",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705381964647",
                children: [
                  {
                    title: "EmailType",
                    subtitle: "",
                    type: "select",
                    dataKey: "emailType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMAIL_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381964647.emailType",
                  },
                  {
                    title: "Email Address",
                    subtitle: "",
                    type: "text",
                    dataKey: "emailAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "EMAIL",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705381964647.emailAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705381967874",
                },
                path: "application.contactDetailsRdb.1705381964647",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705382108911",
                children: [
                  {
                    title: "Social Media",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705382116341",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705382108911.1705382116341",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705382112937",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705382108911",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705382141397",
                children: [
                  {
                    title: "Social Media Contacts",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705382148407",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705382141397.1705382148407",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705382146689",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705382141397",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705382178158",
                children: [
                  {
                    title: "Social Media Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "socialMediaType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "SOCIAL_MEDIA_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705382178158.socialMediaType",
                  },
                  {
                    title: "Social Media Name/URL",
                    subtitle: "",
                    type: "textArea",
                    dataKey: "socialMediaName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      searchable: true,
                      source: "Google Api",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.contactDetailsRdb.1705382178158.socialMediaName",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705382183863",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.contactDetailsRdb.1705382178158",
              },
            ],
            lastModified: {
              $numberLong: "1705380361270",
            },
            dataKey: "contactDetailsRdb",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.contactDetailsRdb",
          },
          {
            title: "Education Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705382998408",
                children: [
                  {
                    title: "Highest Level of Education",
                    subtitle: "",
                    type: "select",
                    dataKey: "highestLeveloFEducation",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EDUCATION_GRADE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705382998408.highestLeveloFEducation",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705382999939",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.educationDetails.1705382998408",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705383240934",
                children: [
                  {
                    title: "Higher Education",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705383243627",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383240934.1705383243627",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705383242093",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.educationDetails.1705383240934",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705383260409",
                children: [
                  {
                    title: "Award Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "awardType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "AWARD_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.awardType",
                  },
                  {
                    title: "Award Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "awardName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.awardName",
                  },
                  {
                    title: "Awarded Year",
                    subtitle: "",
                    type: "text",
                    dataKey: "awardedYear",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "YEAR",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.awardedYear",
                  },
                  {
                    title: "Course Duration",
                    subtitle: "",
                    type: "text",
                    dataKey: "courseDuration",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.courseDuration",
                  },
                  {
                    title: "Months",
                    subtitle: "",
                    type: "select",
                    dataKey: "months",
                    inputOptions: {
                      customOptions: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                      ],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.months",
                  },
                  {
                    title: "Institution Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "institutionName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.institutionName",
                  },
                  {
                    title: "NVQ Level",
                    subtitle: "",
                    type: "select",
                    dataKey: "nvqLevel",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "NVQ_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.educationDetails.1705383260409.nvqLevel",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705383261716",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.educationDetails.1705383260409",
              },
            ],
            lastModified: {
              $numberLong: "1705382947525",
            },
            dataKey: "educationDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.educationDetails",
          },
          {
            title: "Employment Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705385529232",
                children: [
                  {
                    title: "Employment",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705385531680",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385529232.1705385531680",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705385530506",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705385529232",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705385575736",
                children: [
                  {
                    title: "Total Employment Experience",
                    subtitle: "",
                    type: "text",
                    dataKey: "totalEmploymentExperience",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385575736.totalEmploymentExperience",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705385576941",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705385575736",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705385901090",
                children: [
                  {
                    title: "Current Employment",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705385904095",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385901090.1705385904095",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705385902512",
                },
                path: "application.employmentDetail.1705385901090",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705385952066",
                children: [
                  {
                    title: "Employment Status",
                    subtitle: "",
                    type: "select",
                    dataKey: "employmentStatus",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYMENT_STATUS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.employmentStatus",
                  },
                  {
                    title: "Employment Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "employmentType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYMENT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.employmentType",
                  },
                  {
                    title: "Occupation",
                    subtitle: "",
                    type: "select",
                    dataKey: "occupation",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "OCCUPATION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.occupation",
                  },
                  {
                    title: "Designation",
                    subtitle: "",
                    type: "text",
                    dataKey: "designation",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.designation",
                  },
                  {
                    title: "Start Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "startDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.startDate",
                  },
                  {
                    title: "No of years at employment",
                    subtitle: "",
                    type: "text",
                    dataKey: "noOfYearsAtEmployment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.noOfYearsAtEmployment",
                  },
                  {
                    title: "Full Time or Part Time",
                    subtitle: "",
                    type: "select",
                    dataKey: "fullTimeOrPartTime",
                    inputOptions: {
                      customOptions: ["Full Time", "Part Time"],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705385952066.fullTimeOrPartTime",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705385953188",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705385952066",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705386854167",
                children: [
                  {
                    title: "Permanent employment? ",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "permanentEmployment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705386854167.permanentEmployment",
                  },
                  {
                    title: "Date of permanent",
                    subtitle: "",
                    type: "text",
                    dataKey: "dateOfPermanent",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: false,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {
                        permanentEmployment: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705386854167.dateOfPermanent",
                  },
                  {
                    title: "Nature of Employment",
                    subtitle: "",
                    type: "select",
                    dataKey: "natureOfEmployment",
                    inputOptions: {
                      customOptions: [
                        "Contract",
                        "Apprenticeship",
                        "Traineeship",
                        "Employment on commission",
                        "Probation",
                      ],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {
                        permanentEmployment: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705386854167.natureOfEmployment",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705386859566",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705386854167",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705387805958",
                children: [
                  {
                    title: "Pensionable Employment",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "pensionableEmployment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705387805958.pensionableEmployment",
                  },
                  {
                    title: "Retirement Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "retirementDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705387805958.retirementDate",
                  },
                  {
                    title: "Industry Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "industryType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "INDUSTRY_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705387805958.industryType",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705387823374",
                },
                path: "application.employmentDetail.1705387805958",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705388182249",
                children: [
                  {
                    title: "Employer Name",
                    subtitle: "",
                    type: "select",
                    dataKey: "employerName",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYER_NAME",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388182249.employerName",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705388183479",
                },
                path: "application.employmentDetail.1705388182249",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705388263941",
                children: [
                  {
                    title: "Address line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388263941.addressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388263941.addressLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388263941.addressLine3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388263941.addressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "nearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388263941.nearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705388264923",
                },
                path: "application.employmentDetail.1705388263941",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705388649472",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "province",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388649472.province",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "district",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: false,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705388649472.district",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705388650928",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705388649472",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705389026162",
                children: [
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "postalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389026162.postalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705389032234",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705389026162",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705389141606",
                children: [
                  {
                    title: "Employment Contacts",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705389157581",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389141606.1705389157581",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705389147602",
                },
                path: "application.employmentDetail.1705389141606",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705389202764",
                children: [
                  {
                    title: "Contact Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "contactType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "CONTACT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389202764.contactType",
                  },
                  {
                    title: "Phone Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "phoneNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389202764.phoneNumber",
                  },
                  {
                    title: "Contact Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "contactName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389202764.contactName",
                  },
                  {
                    title: "Email Address",
                    subtitle: "",
                    type: "text",
                    dataKey: "emailAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "EMAIL",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389202764.emailAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705389210786",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705389202764",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705389519425",
                children: [
                  {
                    title: "Previous Employment",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705389524608",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389519425.1705389524608",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705389522337",
                },
                path: "application.employmentDetail.1705389519425",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705389879290",
                children: [
                  {
                    title: "Employment Status",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousEmploymentStatus",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYMENT_STATUS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousEmploymentStatus",
                  },
                  {
                    title: "Employment Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousEmploymentType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EMPLOYMENT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousEmploymentType",
                  },
                  {
                    title: "Occupation",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousOccupation",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "OCCUPATION",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousOccupation",
                  },
                  {
                    title: "Designation",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousDesignation",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousDesignation",
                  },
                  {
                    title: "Start Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousStartDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousStartDate",
                  },
                  {
                    title: "End Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousEndDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.previousEndDate",
                  },
                  {
                    title: "No of years at employment",
                    subtitle: "",
                    type: "text",
                    dataKey: "preiovusNoOfYearsAtEmployment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      formatterRule: "Generic",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705389879290.preiovusNoOfYearsAtEmployment",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705389882860",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705389879290",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705390454001",
                children: [
                  {
                    title: "Permanent employment?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "previousPermanentEmployment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390454001.previousPermanentEmployment",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705390456730",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705390454001",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705390542021",
                children: [
                  {
                    title: "Retirement Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "retirement",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {
                        employmentStatus: "1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390542021.retirement",
                  },
                  {
                    title: "Industry Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousIndustryType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390542021.previousIndustryType",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705390545039",
                },
                path: "application.employmentDetail.1705390542021",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705390628482",
                children: [
                  {
                    title: "Employer Name",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousEmployerName",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390628482.previousEmployerName",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705390633597",
                },
                path: "application.employmentDetail.1705390628482",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705390718049",
                children: [
                  {
                    title: "Organization Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "organizationName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390718049.organizationName",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705390729246",
                },
                path: "application.employmentDetail.1705390718049",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705390801935",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390801935.previousAddressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390801935.previousAddressLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressline3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390801935.previousAddressline3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousAddressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390801935.previousAddressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousNearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705390801935.previousNearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705390804694",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705390801935",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705391046258",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousProvince",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391046258.previousProvince",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousDistrict",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391046258.previousDistrict",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705391049409",
                },
                path: "application.employmentDetail.1705391046258",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705391162123",
                children: [
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousPostCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391162123.previousPostCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705391165209",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.employmentDetail.1705391162123",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705391569344",
                children: [
                  {
                    title: "Employment Contacts",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705391573549",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391569344.1705391573549",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705391571994",
                },
                path: "application.employmentDetail.1705391569344",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705391596760",
                children: [
                  {
                    title: "Contact Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "previousContactType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "CONTACT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391596760.previousContactType",
                  },
                  {
                    title: "Phone Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousPhoneNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391596760.previousPhoneNumber",
                  },
                  {
                    title: "Contact Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousContactName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391596760.previousContactName",
                  },
                  {
                    title: "Email Address",
                    subtitle: "",
                    type: "text",
                    dataKey: "previousEmailAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.employmentDetail.1705391596760.previousEmailAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705391600314",
                },
                path: "application.employmentDetail.1705391596760",
              },
            ],
            lastModified: {
              $numberLong: "1705384669617",
            },
            dataKey: "employmentDetail",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.employmentDetail",
          },
          {
            title: "Inquiry of Obligations",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705466930720",
                children: [
                  {
                    title: "Liabiltiy Category",
                    subtitle: "",
                    type: "select",
                    dataKey: "liabilityCategory",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "LIABILITY_CATEGORY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705466930720.liabilityCategory",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705466931908",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.inquiryOfObligations.1705466930720",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705467037971",
                children: [
                  {
                    title: "Bank Name / Institute",
                    subtitle: "",
                    type: "select",
                    dataKey: "bankName",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_NAME",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.bankName",
                  },
                  {
                    title: "Limit of OverDraft",
                    subtitle: "",
                    type: "text",
                    dataKey: "limitOfOverDraft",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.limitOfOverDraft",
                  },
                  {
                    title: "Outstanding",
                    subtitle: "",
                    type: "text",
                    dataKey: "outstanding",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.outstanding",
                  },
                  {
                    title: "Expiry Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "expiryDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.expiryDate",
                  },
                  {
                    title: "Security Category",
                    subtitle: "",
                    type: "select",
                    dataKey: "securityCategory",
                    inputOptions: {
                      customOptions: ["Secured", "Unsecured"],
                      masterDataApiId: 0,
                      source: "CUSTOM",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.securityCategory",
                  },
                  {
                    title: "Annual Amount",
                    subtitle: "",
                    type: "text",
                    dataKey: "annualAmount",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.inquiryOfObligations.1705467037971.annualAmount",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705467039866",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.inquiryOfObligations.1705467037971",
              },
            ],
            lastModified: {
              $numberLong: "1705465634037",
            },
            dataKey: "inquiryOfObligations",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.inquiryOfObligations",
          },
          {
            title: "Life Insurance Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705467740622",
                children: [
                  {
                    title: "Insurance Company",
                    subtitle: "",
                    type: "select",
                    dataKey: "insuranceCompany",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "INSURANCE_COMPANY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.1705467735372.1705467740622.insuranceCompany",
                  },
                  {
                    title: "Insured Amount",
                    subtitle: "",
                    type: "text",
                    dataKey: "insuredAmount",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.1705467735372.1705467740622.insuredAmount",
                  },
                  {
                    title: "Monthly Premium",
                    subtitle: "",
                    type: "text",
                    dataKey: "monthlyPremium",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.1705467735372.1705467740622.monthlyPremium",
                  },
                  {
                    title: "Beneficiary",
                    subtitle: "",
                    type: "text",
                    dataKey: "beneficiary",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.1705467735372.1705467740622.beneficiary",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705467741772",
                },
                path: "application.1705467735372.1705467740622",
              },
            ],
            lastModified: {
              $numberLong: "1705467735372",
            },
            dataKey: "1705467735372",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.1705467735372",
          },
          {
            title: "Business Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705394183774",
                children: [
                  {
                    title: "Business",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705394246599",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394183774.1705394246599",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705394185176",
                },
                path: "application.businessDetails.1705394183774",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705394293041",
                children: [
                  {
                    title: "Total Business Experience ",
                    subtitle: "",
                    type: "text",
                    dataKey: "totalBusinessExperience",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "Generic",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394293041.totalBusinessExperience",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705394293941",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705394293041",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705394323438",
                children: [
                  {
                    title: "Type of Business",
                    subtitle: "",
                    type: "select",
                    dataKey: "typeOfBusiness",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "TYPE_OF_BUSINESS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394323438.typeOfBusiness",
                  },
                  {
                    title: "Business Sector",
                    subtitle: "",
                    type: "select",
                    dataKey: "businessSector",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BUSINESS_SECTOR",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394323438.businessSector",
                  },
                  {
                    title: "Business Sub Sector",
                    subtitle: "",
                    type: "select",
                    dataKey: "businessSubSector",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BUSINESS_SUB_SECTOR",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394323438.businessSubSector",
                  },
                  {
                    title: "Nature of Business",
                    subtitle: "",
                    type: "text",
                    dataKey: "natureOfBusiness",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394323438.natureOfBusiness",
                  },
                  {
                    title: "Business Reg.No",
                    subtitle: "",
                    type: "text",
                    dataKey: "businessRegNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMBER_AND_UPPERCASE",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394323438.businessRegNo",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705394324391",
                },
                path: "application.businessDetails.1705394323438",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705394669705",
                children: [
                  {
                    title: "BR Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "brDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394669705.brDate",
                  },
                  {
                    title: "Start Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "startDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394669705.startDate",
                  },
                  {
                    title: "No of Employees",
                    subtitle: "",
                    type: "text",
                    dataKey: "noOfEmployees",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394669705.noOfEmployees",
                  },
                  {
                    title: "Female Employees",
                    subtitle: "",
                    type: "text",
                    dataKey: "femaleEmployees",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394669705.femaleEmployees",
                  },
                  {
                    title: "Male Employees",
                    subtitle: "",
                    type: "text",
                    dataKey: "maleEmployees",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394669705.maleEmployees",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705394670660",
                },
                path: "application.businessDetails.1705394669705",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705394907131",
                children: [
                  {
                    title: "Has the business obtained any certificates? ",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "obtainedCertificate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394907131.obtainedCertificate",
                  },
                  {
                    title: "Authority or Certification",
                    subtitle: "",
                    type: "text",
                    dataKey: "authorityOrCertificate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {
                        obtainedCertificate: "option1",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705394907131.authorityOrCertificate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705394908207",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705394907131",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705395205376",
                children: [
                  {
                    title: "Tax Payment",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "taxPayment",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395205376.taxPayment",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705395206470",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705395205376",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705395290187",
                children: [
                  {
                    title: "No of Years in Operation",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705395304898",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395290187.1705395304898",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705395294956",
                },
                path: "application.businessDetails.1705395290187",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705395319409",
                children: [
                  {
                    title: "Years",
                    subtitle: "",
                    type: "text",
                    dataKey: "years",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395319409.years",
                  },
                  {
                    title: "Months",
                    subtitle: "",
                    type: "select",
                    dataKey: "months",
                    inputOptions: {
                      customOptions: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                      ],
                      masterDataApiId: 0,
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395319409.months",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705395320462",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705395319409",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705395460267",
                children: [
                  {
                    title: "Past Business Experience",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705395463036",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395460267.1705395463036",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705395461431",
                },
                path: "application.businessDetails.1705395460267",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705395531022",
                children: [
                  {
                    title: "Years",
                    subtitle: "",
                    type: "text",
                    dataKey: "pastYears",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: false,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395531022.pastYears",
                  },
                  {
                    title: "Months",
                    subtitle: "",
                    type: "select",
                    dataKey: "pastMonths",
                    inputOptions: {
                      customOptions: [
                        "0",
                        "1",
                        "2",
                        "3",
                        "4",
                        "5",
                        "6",
                        "7",
                        "8",
                        "9",
                        "10",
                        "11",
                      ],
                      masterDataApiId: 0,
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705395531022.pastMonths",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705395533357",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705395531022",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705396555582",
                children: [
                  {
                    title: "BusinessAssetDetails",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705396561354",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396555582.1705396561354",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705396559018",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705396555582",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705396632535",
                children: [
                  {
                    title: "Asset Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "assetType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "ASSET_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396632535.assetType",
                  },
                  {
                    title: "Asset Value",
                    subtitle: "",
                    type: "text",
                    dataKey: "assetValue",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396632535.assetValue",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705396636112",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705396632535",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705396747657",
                children: [
                  {
                    title: "Name of The Business",
                    subtitle: "",
                    type: "text",
                    dataKey: "nameOfTheBusiness",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396747657.nameOfTheBusiness",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705396751718",
                },
                path: "application.businessDetails.1705396747657",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705396811323",
                children: [
                  {
                    title: "Address Line 1",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine1",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396811323.addressLine1",
                  },
                  {
                    title: "Address Line 2",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine2",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396811323.addressLine2",
                  },
                  {
                    title: "Address Line 3",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine3",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396811323.addressLine3",
                  },
                  {
                    title: "Address Line 4",
                    subtitle: "",
                    type: "text",
                    dataKey: "addressLine4",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396811323.addressLine4",
                  },
                  {
                    title: "Nearest City",
                    subtitle: "",
                    type: "text",
                    dataKey: "nearestCity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396811323.nearestCity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705396815888",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705396811323",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705396990016",
                children: [
                  {
                    title: "Province",
                    subtitle: "",
                    type: "select",
                    dataKey: "province",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PROVINCE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396990016.province",
                  },
                  {
                    title: "District",
                    subtitle: "",
                    type: "select",
                    dataKey: "district",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "DISTRICT",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705396990016.district",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705396992767",
                },
                path: "application.businessDetails.1705396990016",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705397092888",
                children: [
                  {
                    title: "Postal Code",
                    subtitle: "",
                    type: "select",
                    dataKey: "postalCode",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "POSTAL_CODE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397092888.postalCode",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705397098739",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705397092888",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705397170889",
                children: [
                  {
                    title: "Business Contacts",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705397180086",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397170889.1705397180086",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705397178007",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705397170889",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705397213683",
                children: [
                  {
                    title: "Contact Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "contactType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "CONTACT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397213683.contactType",
                  },
                  {
                    title: "Phone Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "phoneNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "PHONE_NUMBER",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397213683.phoneNumber",
                  },
                  {
                    title: "Contact Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "contactName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397213683.contactName",
                  },
                  {
                    title: "Email Address",
                    subtitle: "",
                    type: "text",
                    dataKey: "emailAddress",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397213683.emailAddress",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705397216570",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.businessDetails.1705397213683",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705397315997",
                children: [
                  {
                    title: "Web Site",
                    subtitle: "",
                    type: "textArea",
                    dataKey: "website",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      searchable: true,
                      source: "Google Api",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.businessDetails.1705397315997.website",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705397320146",
                },
                path: "application.businessDetails.1705397315997",
              },
            ],
            lastModified: {
              $numberLong: "1705394143442",
            },
            dataKey: "businessDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.businessDetails",
          },
          {
            title: "Income Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705461960104",
                children: [
                  {
                    title: "Income Category",
                    subtitle: "",
                    type: "select",
                    dataKey: "incomeCategory",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "INCOME_CATEGORY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705461960104.incomeCategory",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705461961563",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.incomeDetails.1705461960104",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705462044877",
                children: [
                  {
                    title: "Add Business Income",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705462047264",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462044877.1705462047264",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705462045808",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.incomeDetails.1705462044877",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705462062526",
                children: [
                  {
                    title: "Source Of Income",
                    subtitle: "",
                    type: "text",
                    dataKey: "sourceOfIncome",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.sourceOfIncome",
                  },
                  {
                    title: "Frequency",
                    subtitle: "",
                    type: "select",
                    dataKey: "frequency",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "LOAN_FREQUENCY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.frequency",
                  },
                  {
                    title: "Frequency for Monthly Income",
                    subtitle: "",
                    type: "text",
                    dataKey: "frequencyforMonthlyIncome",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {
                        frequency: "",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.frequencyforMonthlyIncome",
                  },
                  {
                    title: "Frequency for Annual Income",
                    subtitle: "",
                    type: "text",
                    dataKey: "frequencyForAnnualIncome",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {
                        frequency: "",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.frequencyForAnnualIncome",
                  },
                  {
                    title: "Income",
                    subtitle: "",
                    type: "text",
                    dataKey: "income",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.income",
                  },
                  {
                    title: "Annual Income ",
                    subtitle: "",
                    type: "text",
                    dataKey: "annuallncome",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462062526.annuallncome",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705462063634",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.incomeDetails.1705462062526",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705462601115",
                children: [
                  {
                    title: "Add Business Expense",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705462603377",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462601115.1705462603377",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705462602255",
                },
                path: "application.incomeDetails.1705462601115",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705462629228",
                children: [
                  {
                    title: "Expenses Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "expensesType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "EXPENSES_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.expensesType",
                  },
                  {
                    title: "Frequency",
                    subtitle: "",
                    type: "select",
                    dataKey: "expenseFrequency",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "LOAN_FREQUENCY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.expenseFrequency",
                  },
                  {
                    title: "Frequency for Monthly Expenses",
                    subtitle: "",
                    type: "text",
                    dataKey: "frequencyForMonthlyExpenses",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {
                        expenseFrequency: "",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.frequencyForMonthlyExpenses",
                  },
                  {
                    title: "Frequency for Annual Expenses",
                    subtitle: "",
                    type: "text",
                    dataKey: "frequencyForAnnualExpenses",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.frequencyForAnnualExpenses",
                  },
                  {
                    title: "Expenses",
                    subtitle: "",
                    type: "text",
                    dataKey: "expenses",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.expenses",
                  },
                  {
                    title: "Annual Expenses",
                    subtitle: "",
                    type: "text",
                    dataKey: "annualExpenses",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.incomeDetails.1705462629228.annualExpenses",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705462631054",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.incomeDetails.1705462629228",
              },
            ],
            lastModified: {
              $numberLong: "1705461949136",
            },
            dataKey: "incomeDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.incomeDetails",
          },
          {
            title: "Expenses Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705464835842",
                children: [
                  {
                    title: "Number of Financial Dependents",
                    subtitle: "",
                    type: "text",
                    dataKey: "numberOfFinancialDependents",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "number",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.expenseDetails.1705464835842.numberOfFinancialDependents",
                  },
                  {
                    title: "Presence of the Reqgulated Financial System",
                    subtitle: "",
                    type: "select",
                    dataKey: "regulatedFinancialSystem",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "PRE_REG_FIN_SYS",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.expenseDetails.1705464835842.regulatedFinancialSystem",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705464837235",
                },
                path: "application.expenseDetails.1705464835842",
              },
            ],
            lastModified: {
              $numberLong: "1705464114648",
            },
            dataKey: "expenseDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.expenseDetails",
          },
          {
            title: "Bank Details",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705468092900",
                children: [
                  {
                    title: "Bank Accounts",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705468095523",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468092900.1705468095523",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705468094053",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.bankDetails.1705468092900",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705468126639",
                children: [
                  {
                    title: "Bank Name",
                    subtitle: "",
                    type: "select",
                    dataKey: "bankName",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_NAME",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468126639.bankName",
                  },
                  {
                    title: "Branch",
                    subtitle: "",
                    type: "text",
                    dataKey: "branch",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468126639.branch",
                  },
                  {
                    title: "Account Type",
                    subtitle: "",
                    type: "select",
                    dataKey: "accountType",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_ACCOUNT_TYPE",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468126639.accountType",
                  },
                  {
                    title: "Account Ownership",
                    subtitle: "",
                    type: "select",
                    dataKey: "accountOwnership",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "BANK_ACC_OWNERSHIP",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468126639.accountOwnership",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705468127999",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.bankDetails.1705468126639",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705468419065",
                children: [
                  {
                    title: "Account Name",
                    subtitle: "",
                    type: "text",
                    dataKey: "accountName",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHABETIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468419065.accountName",
                  },
                  {
                    title: "Account No",
                    subtitle: "",
                    type: "text",
                    dataKey: "accountNo",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705468419065.accountNo",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705470155769",
                },
                path: "application.bankDetails.1705468419065",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705470231417",
                children: [
                  {
                    title: "Account Open Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "accountOpenDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470231417.accountOpenDate",
                  },
                  {
                    title: "Maximum Balance",
                    subtitle: "",
                    type: "text",
                    dataKey: "maximumBalance",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470231417.maximumBalance",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705470232744",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.bankDetails.1705470231417",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705470345411",
                children: [
                  {
                    title: "As at Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "asAtDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470345411.asAtDate",
                  },
                  {
                    title: "Balance as at Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "balanceAsAtDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470345411.balanceAsAtDate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705470347677",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.bankDetails.1705470345411",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705470420577",
                children: [
                  {
                    title: "Average Deposits of Last Six Months",
                    subtitle: "",
                    type: "text",
                    dataKey: "depositsOfSixMonths",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470420577.depositsOfSixMonths",
                  },
                  {
                    title: "Average Withdrawals of Last Six Months",
                    subtitle: "",
                    type: "text",
                    dataKey: "withdrawalsOfSixMonths",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.bankDetails.1705470420577.withdrawalsOfSixMonths",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705470421598",
                },
                path: "application.bankDetails.1705470420577",
              },
            ],
            lastModified: {
              $numberLong: "1705468089638",
            },
            dataKey: "bankDetails",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.bankDetails",
          },
          {
            title: "Collaterals",
            type: "section",
            subtitle: "RDB Application",
            children: [
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705487831581",
                children: [
                  {
                    title: "Add Security",
                    subtitle: "",
                    type: "select",
                    dataKey: "addSecurity",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "SECURITY_TYPE_MASTER",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705487831581.addSecurity",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705487832866",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705487831581",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705488105614",
                children: [
                  {
                    title: "Life Insurance",
                    subtitle: "",
                    type: "label",
                    dataKey: "1705488112301",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488105614.1705488112301",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705488109215",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705488105614",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705488086128",
                children: [
                  {
                    title: "Value of the Security",
                    subtitle: "",
                    type: "text",
                    dataKey: "valueOfTheSecurity",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488086128.valueOfTheSecurity",
                  },
                  {
                    title: "Secured Value",
                    subtitle: "",
                    type: "text",
                    dataKey: "securedValue",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488086128.securedValue",
                  },
                  {
                    title: "Description",
                    subtitle: "",
                    type: "text",
                    dataKey: "description",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "ALPHANUMERIC_AND_SYMBOLS",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488086128.description",
                  },
                  {
                    title: "Issuing Authority",
                    subtitle: "",
                    type: "select",
                    dataKey: "issuingAuthority",
                    inputOptions: {
                      customOptions: [],
                      masterDataApiId: 2,
                      source: "MASTER",
                      category: "LOCAL_AUTHORITY",
                    },
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488086128.issuingAuthority",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705488087633",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705488086128",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705488502368",
                children: [
                  {
                    title: "Registration Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "registrationDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                      readOnly: false,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488502368.registrationDate",
                  },
                  {
                    title: "Policy Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "policyNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488502368.policyNumber",
                  },
                  {
                    title: "Document Number",
                    subtitle: "",
                    type: "text",
                    dataKey: "documentNumber",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705488502368.documentNumber",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705488504236",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705488502368",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705489077967",
                children: [
                  {
                    title: "No of Documents",
                    subtitle: "",
                    type: "text",
                    dataKey: "noOfDocuments",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489077967.noOfDocuments",
                  },
                  {
                    title: "Face Value",
                    subtitle: "",
                    type: "text",
                    dataKey: "faceValue",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489077967.faceValue",
                  },
                  {
                    title: "Market Value",
                    subtitle: "",
                    type: "text",
                    dataKey: "marketValue",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489077967.marketValue",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705489078960",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705489077967",
              },
              {
                title: "Wrap",
                subtitle: "",
                type: "wrap",
                dataKey: "1705489647485",
                children: [
                  {
                    title: "Due Date",
                    subtitle: "",
                    type: "text",
                    dataKey: "dueDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489647485.dueDate",
                  },
                  {
                    title: "Surrendable Value",
                    subtitle: "",
                    type: "text",
                    dataKey: "surrendableValue",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "plugin",
                      formatterRule: "NUMERIC",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489647485.surrendableValue",
                  },
                  {
                    title:
                      "The date on which the insurance policy transportation value was certified",
                    subtitle: "",
                    type: "text",
                    dataKey: "insurancePolicyCertified",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489647485.insurancePolicyCertified",
                  },
                  {
                    title:
                      "Date of Confirmation letter to sample the insurance",
                    subtitle: "",
                    type: "text",
                    dataKey: "confirmationLetterDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489647485.confirmationLetterDate",
                  },
                  {
                    title:
                      "Date of Confirmation letter that the age of the insured has been accepted by third party",
                    subtitle: "",
                    type: "text",
                    dataKey: "dateAcceptedByThirdParty",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705489647485.dateAcceptedByThirdParty",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705489648905",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705489647485",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705490052163",
                children: [
                  {
                    title:
                      "Whether the insurance policy is sampled in the name of a third party ?",
                    subtitle: "",
                    type: "dualOption",
                    dataKey: "insurancePolicy",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {},
                    dualOptions: {
                      option1: "Yes",
                      option2: "No",
                    },
                    dependencyManagement: {
                      visibility: {},
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705490052163.insurancePolicy",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705490053312",
                },
                dependencyManagement: {
                  visibility: {},
                  mandatory: {},
                  logic: {},
                },
                path: "application.collaterals.1705490052163",
              },
              {
                title: "Row",
                subtitle: "",
                type: "row",
                dataKey: "1705490133408",
                children: [
                  {
                    title: "Date of letter signed by the third party",
                    subtitle: "",
                    type: "text",
                    dataKey: "letterSignedDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {
                        insurancePolicy: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705490133408.letterSignedDate",
                  },
                  {
                    title:
                      "The date of signed letter when beneficiaries are named in the policy",
                    subtitle: "",
                    type: "text",
                    dataKey: "beneficiariesSignedDate",
                    children: [],
                    render: {
                      visibleInForm: true,
                      visibleInPreview: true,
                      required: true,
                    },
                    actions: {
                      onChange: {
                        sources: {},
                        targets: {},
                      },
                    },
                    inputOptions: {
                      formatter: "custom",
                      type: "date",
                    },
                    dependencyManagement: {
                      visibility: {
                        insurancePolicy: "option2",
                      },
                      mandatory: {},
                      logic: {},
                    },
                    path: "application.collaterals.1705490133408.beneficiariesSignedDate",
                  },
                ],
                render: {
                  visibleInForm: true,
                  visibleInPreview: true,
                },
                lastModified: {
                  $numberLong: "1705490134571",
                },
                path: "application.collaterals.1705490133408",
              },
            ],
            lastModified: {
              $numberLong: "1705474430842",
            },
            dataKey: "collaterals",
            render: {
              visibleInForm: true,
              visibleInPreview: true,
            },
            inputOptions: {},
            dependencyManagement: {
              visibility: {},
              mandatory: {},
              logic: {},
            },
            plugins: {
              formatters: "1705578208840",
              themes: "theme_v1",
            },
            path: "application.collaterals",
          },
        ],
        lastModified: {
          $numberLong: "1704863694864",
        },
        dataKey: "application",
        render: {
          visibleInForm: true,
          visibleInPreview: true,
        },
        inputOptions: {},
        dependencyManagement: {
          visibility: {},
          mandatory: {},
          logic: {},
        },
        plugins: {
          formatters: "1705578208840",
          themes: "theme_v1",
        },
        path: "application",
      },
    ],
    lastModified: {
      $numberLong: "1704863664704",
    },
    dataKey: "1704863664704",
    lastUpdated: "2025-03-19T07:26:18.105531",
  };
