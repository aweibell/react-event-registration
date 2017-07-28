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
  "style": {}
};

export default data;
