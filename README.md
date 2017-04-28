# Event registration component

This module provides a dynamic, configurable component for event registration. The main component is `EventRegistration` which contains one or more `RegistrationCollection` components. They can have different configurations, and contains an empty `RegistrationRow` on first load.

Valid columnn types are
* text
* checkbox
* dropdown


### Example configuration:
```json
{
  "registration": [
    {
      "name": "Voksne",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Navn"
        },
        {
          "type": "check",
          "name": "Middag"
        }
      ]
    },
    {
      "name": "Barn",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Navn"
        },
        {
          "type": "check",
          "name": "Middag"
        },
        {
          "type": "dropdown",
          "name": "Aktivitet",
          "options": [
            "Option 1",
            "Option 2",
            "Option 3"
          ]
        }
      ]
    }
  ],
  "style": {}
}
```

Styles can be defined on root level and for each collection (registration type). The style objects can all have `collection`, `row`, `column`, `label` and `input` sections. Root level properties are overwritten by collection level styles.
```json
{
  "style": {
      "collection": {
        "border": "dashed orange 2px"
      },
      "row": {
        "backgroundColor": "#ddd"
      },
      "column": {
        "display": "flex",
        "flexDirection": "column",
        "justifyContent": "left",
        "marginLeft": "6px",
        "marginRight": "6px"
      },
      "label": {
        "fontWeight": "bold"
      },
      "input": {
        "backgroundColor": "#ccc"
      }
  }
}
```

## Getting started
Clone your team's repository.
Inside that directory, you can run several commands:

  `yarn start`
    Starts the development server.

  `yarn test`
    Starts the test runner.

We suggest that you begin by typing:

  ```
  cd team-c
  yarn start
  ```

## PRs are welcomed and appliciated
See reported issues and get feel free to ask questions to get you started.