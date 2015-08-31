module.exports = function (grunt) {

    'use strict';

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            dist: {
                options: {
                    mangle: true,
                    preserveComments: false
                },
                files: {
                    'bin/YoutubeDelayed.min.js': [
                        'YoutubeDelayed.js'
                    ]
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'bin/YoutubeDelayed.min.css': [
                        'YoutubeDelayed.css'
                    ]
                }
            }
        }
    });

    grunt.registerTask('default', [
        'uglify',
        'cssmin'
    ]);
};
