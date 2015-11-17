
requirejs.config({
    baseUrl: 'lib',
	shim : {
        "bootstrap" : { "deps" :['jquery'] },
    },
    paths: {
        "jquery" : "//code.jquery.com/jquery-2.1.1.min",
        "bootstrap" :  "//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min",
		"react": "react",
		"react-dom": "react-dom",
        "JSXTransformer": "JSXTransformer",
        "moment": "moment",
		
        'app' : '../app'
    },
	jsx: {
		fileExtension: '.jsx'
	}
});

requirejs(['app/main']);