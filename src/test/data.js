const data = {
  "registration": [
    {
      "name": "Voksne",
      "id": "adults",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Navn",
          "id": "name",
        },
        {
          "type": "checkbox",
          "name": "Middag",
          "id": "dinner"
        },
        {
          "type": "text",
          "name": "Kommentar",
          "id": "comment"
        }
      ]
    },
    {
      "name": "Barn",
      "id": "kids",
      "style": {},
      "columns": [
        {
          "type": "text",
          "name": "Navn",
          "id": "name",
        },
        {
          "type": "checkbox",
          "name": "Middag",
          "id": "dinner"
        },
        {
          "type": "dropdown",
          "name": "Aktivitet",
          "id": "activity",
          "value": "aktivitet2",
          "options": [
            {
              "text": "Aktivitet 1",
              "value": "aktivitet1"
            },
            {
              "text": "Aktivitet 2",
              "value": "aktivitet2"
            },
            {
              "text": "Aktivitet 3",
              "value": "aktivitet3"
            }
          ]
        }
      ]
    }
  ],
  "style": {}
};

export default data;