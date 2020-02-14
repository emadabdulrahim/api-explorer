## Quick Start

Firstly, clone the repo

then run the following commands

```sh
  yarn install
```

```sh
  yarn run dev
```

Open a browser window on `localhost:3000`

### How long you spent on the assignment.

~5–6 Hours.

### What did you like about your implementation?

I like how the code is organized as an initial POC. Components are well structured and is are composable.
I like the design direction, the visual design as well as the simple UX. I like the use of custom hooks to abstract functionality.

### What would you have differently if you were to do it again?

1. I'd use context to hold global state about the API, such as authentication, api key, base url, etc.
2. I'd made it more data driven. Right now, there's a lot of hardcoded decisions.
3. Improve the UX of executing queries and the overall discovery of API (add search)
4. The design of the fetch module is clunky and can be reimplemented much better
5. Handle error states
6. Allow for passing a link or uploading a JSON/YML file for the API Spec.
