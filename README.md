# ts-template

This is a template project that I like to use/update for boilerplate typescript modules/projects.

# Motivation

Seems every time I  wanna fire-up a new typescript project (or library) I get something about the configuration wrong ... I'm hoping this can be a stable starting point for future projects.

# Considerations

## Building

This project should always pass a simple typescript build.  EG: `npm run build` should not generate errors, and output transpiled files to the `dist` folder.

## Testing

This project should always pass a simple test.  EG `npm run test` should not generate errors.

## ts-node

This project should be usable from a simple console app/script via ts-node.  EG `npx ts-node foober.ts` should not generate errors, and in general, if you `import` the `src` folder from a ts script and then run that script via `ts-node` it should work.

## Use in other projects

You should be able to reference this project, replete w/ vscode code hints, from another typescript (or javascript) project.  EG `npm install path/to/this/folder` should not generate errors.