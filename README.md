# Eat and Split

A small React app for tracking shared expenses with friends. Add friends, select one, and split a bill to see who owes whom. The balances update per friend so you always know where you stand.

Live demo: https://ahmed-adel-morsi.github.io/Eat-and-Split

## Features

- Add friends with a name and avatar URL
- Select a friend to split a bill
- Enter bill value, your share, and who paid
- See per-friend balances (you owe, they owe, or even)

## Tech Stack

- React (Create React App)
- CSS (handwritten styles in [src/index.css](src/index.css))

## Getting Started

Install dependencies:

```bash
npm install
```

Run the dev server:

```bash
npm start
```

Open http://localhost:3000 in your browser.

## Scripts

- `npm start` Run the dev server
- `npm test` Run tests in watch mode
- `npm run build` Build for production
- `npm run deploy` Publish the build to GitHub Pages (see `homepage` in [package.json](package.json))

## Project Structure

```
src/
	App.js
	index.js
	index.css
	components/
		AddFriend.js
		Button.js
		FriendCard.js
		FriendsList.js
		SpiltBill.js
```

## Notes

- Balances are tracked per friend and updated when you split a bill.
- Friend avatars use the pravatar service with a unique id.

## Credits

- Project idea and UI inspiration from Jonas Schmedtmann's React course.
- Avatar images provided by https://i.pravatar.cc/.
