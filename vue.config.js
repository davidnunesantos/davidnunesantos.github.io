module.exports = {
    runtimeCompiler: true,
    transpileDependencies: [
        "vuetify"
    ],
    chainWebpack: config => {
        config
            .plugin("html")
            .tap(args => {
                args[0].title = "David Nunes dos Santos";
                return args;
            });
    }
};
