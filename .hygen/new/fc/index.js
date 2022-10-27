//
// npm run new:sfc -- --tag=p
//
module.exports = {
    prompt: ({ inquirer, args }) => {
        const questions = [
            {
                type: 'input',
                name: 'component_name',
                message: 'What is the name of component?'
            },
            {
                type: 'input',
                name: 'dir',
                message: 'Where is the directory? (No problem in blank)',
            },
            {
                type: 'confirm',
                name: 'have_css',
                message: 'Is it have css?',
            },
            {
                type: 'confirm',
                name: 'have_props',
                message: 'Is it have props?',
            },
            {
                type: 'confirm',
                name: 'have_hooks',
                message: 'Is it have hooks?',
            },
            {
                type: 'confirm',
                name: 'have_stories',
                message: 'Is it have stories?',
            },
        ]
        return inquirer
            .prompt(questions)
            .then(answers => {
                const { component_name, dir, have_props } = answers
                const path = `${ dir ? `${dir}/` : `` }${component_name}`
                const abs_path = `src/components/${path}`
                const type_annotate = have_props ? "React.FC<Props>" : 'React.FC'
                return { ...answers, path, abs_path, type_annotate }
            })
    }
}