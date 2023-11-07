import { Project } from 'ts-morph'

const project = new Project({})

project.addSourceFilesAtPaths('src/**/*.ts')
project.addSourceFilesAtPaths('src/**/*.tsx')

const files = project.getSourceFiles()

function isAbsolute(value: string) {
    const layers = ['svg?react', 'svg']
    return layers.some(layer => value.endsWith(layer))
}

files.forEach(sourceFile => {
    const importDeclarations = sourceFile.getImportDeclarations()
    importDeclarations.forEach(importDeclaration => {
        const value = importDeclaration.getModuleSpecifierValue()
        if(isAbsolute(value)) {
            const react = '?react'
            const webPack = value.replace(react, '')
            const vite = value + react
            //console.log("value", value)
            importDeclaration.setModuleSpecifier(webPack)
            //importDeclaration.setModuleSpecifier(vite)
        }
    })
})

project.save()
