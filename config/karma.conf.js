module.exports = function(config){
    config.set({
    basePath : '../',

    files : [
        'bower_components/angular/angular.js',
        'bower_components/angular-mocks/angular-mocks.js',
        'client/**/*.js',
        'client/test/**/*.js'
    ],

    autoWatch : false,

    frameworks: ['jasmine'],

    browsers: ['PhantomJS'],

    plugins : [
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-phantomjs-launcher',
            'karma-jasmine'
            ],

    junitReporter : {
      outputFile: 'test_out/unit.xml',
      suite: 'unit'
    }

})}