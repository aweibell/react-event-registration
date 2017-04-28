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