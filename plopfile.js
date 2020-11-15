module.exports = function (plop) {
  plop.setGenerator('element', {
    description: 'Create a new Janina element with a story file',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Element name:',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'scss/elements/{{name}}.scss',
        templateFile: 'templates/element.scss.hbs',
      },
      {
        type: 'add',
        path: 'stories/{{name}}.stories.tsx',
        templateFile: 'templates/element.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'stories/{{name}}.stories.scss',
        templateFile: 'templates/element.stories.scss.hbs',
      },
      {
        type: 'modify',
        path: 'scss/elements/_all.scss',
        transform: (contents, { name }) => contents.concat(`@import '${name}';`),
      },
    ],
  })
}
