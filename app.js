const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json())

app.get("/ping", (req, res) => res.send('pong'));

app.get("/articles", (req, res) => {
  const page = req.query.page || 1;

  if (page >= 2) {
    const response = {
      media: "Google News",
      articles: [
        {
          thumbnail: {
            url: "https://google.com/image.png",
            width: 480,
            height: 240
          },
          slug: "america/siatoru",
          route: "news",
          refreshed_at: "2024-01-03T09:00:00.000Z"
        },
        {
          thumbnail: {
            url: "https://google.com/image.png",
            width: 480,
            height: 240
          },
          slug: "america/washinton",
          route: "news",
          refreshed_at: "2024-01-03T07:00:00.000Z"
        }
      ],
      total: 5,
      per_page: 3,
      page: 2
    }

    res.json(response);
  } else {
    const response = {
      media: "Google News",
      articles: [
        {
          thumbnail: {
            url: "https://google.com/image.png",
            width: 480,
            height: 240
          },
          slug: "america/texias",
          route: "news",
          refreshed_at: "2024-01-02T08:00:00.000Z"
        },
        {
          thumbnail: {
            url: "https://google.com/image.png",
            width: 480,
            height: 240
          },
          slug: "america/karifonia",
          route: "news",
          refreshed_at: "2024-01-02T06:00:00.000Z"
        },
        {
          thumbnail: {
            url: "https://google.com/image.png",
            width: 480,
            height: 240
          },
          slug: "america/newyork",
          route: "news",
          refreshed_at: "2024-01-01T05:00:00.000Z"
        }
      ],
      total: 5,
      per_page: 3,
      page: 1
    }
  
    res.json(response);
  }
});

app.get("/users", (req, res) => {
  const page = req.query.page || 1;

  if (page >= 2) {
    const response = {
      media: "Google News",
      users: [
        {
          name: "Eさん",
          id: 5,
          refreshed_at: "2024-01-02T07:00:00.000Z",
        },
        {
          name: "Dさん",
          id: 4,
          refreshed_at: "2024-01-01T09:00:00.000Z",
          articles: [
            {
              id: 400,
            }
          ]
        }
      ],
      total: 5,
      per_page: 3,
      page: 2
    }
  
    res.json(response);
  } else {
    const response = {
      media: "Google News",
      users: [
        {
          name: "Cさん",
          id: 3,
          refreshed_at: "2024-01-02T08:00:00.000Z",
          articles: [
            {
              id: 300,
            }
          ]
        },
        {
          name: "Bさん",
          id: 2,
          refreshed_at: "2024-01-02T06:00:00.000Z",
          articles: [
            {
              id: 200,
            }
          ]
        },
        {
          name: "Aさん",
          id: 1,
          refreshed_at: "2024-01-01T05:00:00.000Z",
          articles: [
            {
              id: 100,
            }
          ]
        }
      ],
      total: 5,
      per_page: 3,
      page: 1
    }
  
    res.json(response);
  }
});

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`));

server.keepAliveTimeout = 120 * 1000;
server.headersTimeout = 120 * 1000;
