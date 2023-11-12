import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string) {
    const layers = ['@/shared/ui/redesigned/Button']
    //const layers = ['@/shared/ui/']
    return layers.some((layer) => value.startsWith(layer))
}

files.forEach((sourceFile) => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach((importDeclaration) => {
        const value = importDeclaration.getModuleSpecifierValue()
        if (isAbsolute(value)) {
            // if (value.includes('@/shared/ui/deprecated/')) {
            //     // console.log("value1", value)
            // } else {
            //     const newValue = value.replace(
            //         '@/shared/ui/',
            //         '@/shared/ui/deprecated/',
            //     )
            //     console.log('value2', newValue)
            //     importDeclaration.setModuleSpecifier(newValue)
            // }
            const newValue = value.replace(
                '@/shared/ui/redesigned/Button',
                '@/shared/ui/deprecated/Button',
            )
            //console.log('value2', newValue)
            importDeclaration.setModuleSpecifier(newValue)
        }
    })
})

project.save()
