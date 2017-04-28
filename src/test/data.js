const data = {
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
            {
              text: "Aktivitet 1",
              value: "aktivitet1"
            },
            {
              text: "Aktivitet 2",
              value: "aktivitet2"
            },
            {
              text: "Aktivitet 3",
              value: "aktivitet3"
            }
          ]
        }
      ]
    }
  ],
  "style": {}
};

export default data;