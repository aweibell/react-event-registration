# Team-C: Event registration

This module provides a dynamic, configurable component for event registration. The main component is `EventRegistration` which contains one or more `RegistrationCollection` components. They can have different configurations, and contains an empty `RegistrationRow` on first load.

Sample configuration:
```json
{
  "registrationBlocks": [{
      "name": "type 1",
      "columns": [{
        "name": "",
        "type": ""
      }]
    },{
      "name": "type 2",
      "columns": [{
        "name": "",
        "type": ""
      }]
  }]
}
```

Valid columnn types are
* text
* check
* dropdown

This project was bootstrapped with [Create React App](https://github.com/complex-components/team-c/blob/master/RCA_README.md)

This is your starting point in the Complex Component Consortium Cup.

## Competition
You will build a complex component in React. The component could be anything you like, but should be more advanced than a text field or button, etc.
The jury, consiting of the mentors, will give points to each team.


### Requirements
- Inline styles
- Flexbox layout
- Only UI. No External dependencies like databases, connections, etc.
- All interactions must be passed as props

In addition there will be points for clean code, documentation, etc.


### Example components
- Chat
- Newsfeed
- Wallet
- Feedback
- Comments
- Payments flow

These are just example ideas. The teams are completely free to come up with more interesting challenges!


### Mentors
- Asbjørn Andersen
- Kennet Vuong
- Frode Ånonsen
- Oddgeir Gitlestad

Mentors will not participate in the competition, but be available for questions and counseling.

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

Remember to check out [Create React App README](https://github.com/complex-components/team-c/blob/master/RCA_README.md) for more tips and tricks.

Happy hacking!
