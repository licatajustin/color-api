## Color API

A simple micro-service for color functions.

---

### Web Usage

1. Visit https://color.now.sh/5362b5, and replace `5362b5` with the color
hex of your choice.

2. Profit!

  ```json
  {
    "color": "#5362b5",
    "lighten": {
      "5%": "#6572bd",
      "10%": "#8893cc",
      "15%": "#bec4e3",
      "20%": "#ffffff",
      "25%": "#ffffff"
    },
    "darken": {
      "5%": "#4856a7",
      "10%": "#384483",
      "15%": "#21284e",
      "20%": "#030306",
      "25%": "#000000"
    }
  }
  ```

### Development

1. Install missing dependencies.

  ```bash
  yarn install
  ```

2. Start the server.

  ```bash
  yarn start
  ```

3. Open [localhost:3000](http://localhost:3000).

### License

MIT @ [Justin Licata](https://twitter.com/justinlicata)
