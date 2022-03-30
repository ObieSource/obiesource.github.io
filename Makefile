host:
	python3 -m http.server --bind 127.0.0.1 8000

lint: 
	npx htmlhint -r "tagname-lowercase,attr-lowercase,attr-value-double-quotes,doctype-first,doctype-html5,tag-pair,spec-char-escape,id-unique,src-not-empty,attr-no-duplication,title-require,attr-unsafe-chars,href-abs-or-rel,html-lang-require,id-unique,input-requires-label,tag-pair,tagname-lowercase,tagname-specialchars,attr-no-unnecessary-whitespace,empty-tag-not-self-closed"
