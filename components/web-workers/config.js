System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    packages: {
        app: {
            main: 'main.ts',
            defaultExtension: 'ts'
        }
    }
});