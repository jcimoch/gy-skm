exports.config = {
    namespace: 'myname',
    generateDistribution: true,
    generateWWW: false,
    bundles: [
        {components: ['my-name']}
    ],
    collections: []
};

exports.devServer = {
    root: 'www',
    watchGlob: '**/**'
}
