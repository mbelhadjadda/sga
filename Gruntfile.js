module.exports = function (grunt) {

    grunt.initConfig({
        karma: {
            unit: {
                configFile: 'config/karma.conf.js',
                background: true
            }
        },
        watch: {
            karma: {
                files: ['client/src/**/*.js', 'client/test/**/*.js'],
                tasks: ['karma:unit:run']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('devmode', ['karma:unit', 'watch']);
    grunt.registerTask('test', ['karma:unit:run']);

    grunt.registerTask('default', ['test']);
};