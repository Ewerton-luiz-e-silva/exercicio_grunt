module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        // Configuração para LESS
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less',
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less',
                }
            }
        },

        // Configuração para a minificação de JavaScript
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js': 'src/scripts/main.js',
                }
            }
        },

        // Configuração para assistir a mudanças em arquivos
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            js: {
                files: ['src/scripts/**/*.js'],
                tasks: ['uglify']
            }
        }
    });

    // Carregar os plugins do Grunt
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Registro das tarefas do Grunt
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('build', ['less:production', 'uglify']);
};
