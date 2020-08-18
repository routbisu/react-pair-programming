# Telnyx paired programming exercise

Welcome to the Telnyx paired programming exercise.

## The exercise

This paired programming exercise is like a sandbox for us to work together
inside. It is a user interface that resembles a blog with a search input,
rendered using React. When we meet, you will work on adding and tweaking a few
features in it.

Take your time to explore the codebase and run it in the machine you are
going to use during the Paired Programming Interview.

## Setup

To setup this project you will need:

- [node](https://nodejs.org/en/) >= 8.0.0
- [npm](https://www.npmjs.com/package/npm) >= 6.4.0
- [yarn](https://yarnpkg.com/en/) >= 1.13.0

Make sure you have the latest version of each and everything should work well.
To install this project, please run:

```bash
yarn
```

A few commands are available for you in this exercise:

```bash
yarn dev        # starts development server on http://localhost:1234
yarn dev:api    # starts JSON REST API server on http://localhost:3000
yarn test       # runs all jest tests
yarn test:watch # runs jest tests in watch mode
```

Please make sure they all work as expected prior to the interview. If they
don't, contact us so that we can help you get setup.

# Other features

- Improve search

  - Highlight search query in results' title
  - Fuzzy search (like VS Code file finder)
  - Search for multiple keywords divided by spaces ("ebook telnyx" would search for matches of "ebook" and/or "telnyx")

- Client-side pagination

  - Routing (post pages, search query in the URL)
  - Improve code accessibility

- Testing

  - Test Search.jsx with snapshots
  - Testing search-related functions

- Styling
  - Responsive design
  - Animation for search changes
