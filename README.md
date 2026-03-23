# Repo Finder

A GitHub Repository Finder built with Vue.js 3

## Setup

```sh
npm install && npm run dev
```

## Architectural Decisions

- **Composables** — `useSearch` and `useFavorites` encapsulate shared stateful logic, keeping components clean and avoiding duplication
- **Service directory** — all GitHub API calls are in `src/services/github.ts`
- **Pagination** — Load More appends results using the spread operator rather than replacing the list.
- **Contributors** — the details page displays top contributors as they reflect a repository's community activity
- **GitHub API query format** — search requests use `URLSearchParams` to construct the query string with the required `q` parameter and optional qualifiers (e.g. `q=vue+language:typescript`), as specified in the GitHub REST API documentation
- **Accept header** — all requests include `Accept: application/vnd.github+json` as recommended by the GitHub REST API documentation

## Known Limitations

- No debouncing on the search input
- Favorites are localStorage only, meaning they aren't synced across devices

## Potential Future Improvements

- Sort by stars or last updated date
- Filter by programming language
- Unit tests for composables
