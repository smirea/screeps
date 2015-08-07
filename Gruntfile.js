module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-screeps');

    grunt.initConfig({
        screeps: {
            options: {
                email: 'steven.mirea@gmail.com',
                password: 'Mestefan13@',
                branch: 'default'
            },
            dist: {
                src: ['build/*.js']
            }
        }
    });
}
