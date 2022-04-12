host:
	python3 -m http.server --bind 127.0.0.1 8000
lint: 
	npx htmlhint 
