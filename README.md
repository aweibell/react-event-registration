# Event registration 

This module provides a dynamic, configurable component for event registration. The main component is `EventRegistration` which contains one or more `RegistrationCollection` components. They can have different configurations, and contains an empty `RegistrationRow` on first load.

Valid columnn types are
* text
* checkbox
* dropdown

## Install

To install til component, run `yarn add react-event-registration` or `npm install react-event-registration`

## Usage

To use the component in your React application, you need a configuration for the content you want: 

### Example configuration
```javascript
const data = {
  "formGroups": [
    {
      "name": "Adult",
      "id": "adults",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Name",
          "id": "name",
        },
        {
          "type": "checkbox",
          "name": "Dinner",
          "id": "dinner"
        },
        {
          "type": "text",
          "name": "Comment",
          "id": "comment"
        }
      ]
    },
    {
      "name": "Children",
      "id": "kids",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Name",
          "id": "name",
        },
        {
          "type": "checkbox",
          "name": "Dinner",
          "id": "dinner"
        },
        {
          "type": "dropdown",
          "name": "Activities",
          "id": "activity",
          "value": null,
          "options": [
            {
              "text": "Select an activity...",
              "value": null
            },
            {
              "text": "One activity",
              "value": "activity1"
            },
            {
              "text": "Other activity",
              "value": "activity2"
            },
            {
              "text": "Third activity",
              "value": "activity3"
            }
          ]
        }
      ]
    }
  ],
  "style": {},
  "texts": {
    "submit": "Send data",
    "addRow": "Add record",
    "deleteRow": "Remove record"
  }
};

export default data;
```

Styles can be defined on root level and for each collection (registration type). The style objects can all have `collection`, `row`, `column`, `label` and `input` sections. Root level properties are overwritten by collection level styles.
```json
{
  "style": {
      "collection": {
        "border": "dashed orange 2px",
        "collectionName": {
          "backgroundColor": "yellow"
        }
      },
      "row": {
        "backgroundColor": "#ddd",
        "newRow": {
          "border": "solid 2px maroon"
        }
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

### Component use

Here is how you import and use the component in your React application. Please note that you need to provide either an `onSubmit` or an `onChange` prop, and of course the `formGroups` and `style` props. To prefill the component with previously entered information, use the `data` prop.

```javascript
import React, { Component } from 'react'
import EventRegistration from "react-event-registration";
import config from './config';

class App extends Component {
  constructor() {
    super();
    this.state = {
      registrations: {}
    };
    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }
  componentWillMount() {
    // set up db-connection if you like to update on change
  }

  componentWillUnmount() {
    // close db-connection
  }

  onChangeHandler(data) {
    this.setState( { registrations: data });
  }

  onSubmitHandler(data) {
    this.setState( { registrations: data });
  }

  render () {
    const {formGroups, style, texts } = config;
    return (
      <div className='App'>
        <h1>Please register!</h1>
        <div className='registration-form'>
          <EventRegistration formGroups={formGroups}
                             style={style}
                             texts={texts}
                             data={this.state.registrations}
                             // onSubmit={this.onSubmitHandler}
                             onChange={this.onChangeHandler}/>
        </div>
      </div>
    )
  }
}

export default App
```


## PRs are welcomed and appreciated
See reported issues and get feel free to ask questions to get you started.
