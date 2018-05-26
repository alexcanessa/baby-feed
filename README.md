# Baby Feed (WIP)

You have an infant and you never remember when you fed him/her last?
This PWA is suppose to solve that problem.

## Press the bottle

It's 3am, you don't know where you are, the only thing you want to do is feed your baby and go back to sleep.
Just open the app and press the bottle icon, this will save the current time so that the next time you will know what time it was.

## Todo

### Set the time manually

If you want to set the time later on, you should be able to tap on the time and be able to type it manually.

### Settings

The user might want to set:

1. Baby name
2. Set the baby sex, that changes the colors
3. Hours interval between feeding times (used by [See next bottle time](#see-next-bottle-time))

### See next bottle time

The user might want to see what's the next feeding time without having to calculate it.

### Sync data

This requires to create an APIs instead of a simple usage of the `localStorage`.

The user should be able to share the data via a 4 digits `TOKEN`. _no login required at that point_

## Development

The app is built in React and deployed via `now`, for now.

```
yarn && yarn start-dev
```
