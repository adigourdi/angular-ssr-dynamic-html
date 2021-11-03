# Angular SSR with Dynamic HTML

This repo demonstrates an issue that occurs when building a server side version of an angular project containing dynamically loaded components using the [@angular/core Compiler](https://angular.io/api/core/Compiler)

## Steps to reproduce

1. clone this repo
2. run: `npm run build:ssr`

## Actual results

The build fails not recognizing Angular's classes, with errors:

- Value could not be determined statically.
- Unable to evaluate this expression statically. (x3)
- Unable to evaluate an invalid expression.

## Notes

1. Normal builds run with no errors (`ng serve`)

## Why in the first place

### _Short answer:_ WYSIWYG editor

### _Long answer:_

We need this so using a WYSIWYG editor, we can simply write a tag `[tag]` and transform it to a `<app-tag>` component

Following the example in this repo, we can use `[counter start="2" step="2"]` to generate `<app-counter start="2" step="2"><app-counter>`

We can use javascript to make interactive HTML instead of the angular component, but the access to most of the angular/typescript code (api, logging, npm packages, ...) will be hacky or require a js rewrite, so this solution seems cleaner
