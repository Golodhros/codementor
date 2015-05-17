module.exports = function(grunt) {

    // Initialize the Grunt configuration
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configure the concat task
        concat: {
            js: {
                src: [
                    'src/start.js',
                    'src/chart/bar.js',
                    'src/layout/layout.js',
                    'src/end.js'
                ],
                dest: 'dist/codementor.js'
            }
        },

        // Uglify Configuration
        uglify: {
            options: {
                mangle: false
            },
            js: {
                files: {
                    'dist/codementor.min.js': ['dist/codementor.js']
                }
            }
        }

    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', ['concat', 'uglify']);


};

