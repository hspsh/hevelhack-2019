
deploy: install copy build 

install:
	npm ci

copy:
	mkdir -p dist/assets
	cp -r src/assets dist

serve: copy
	node_modules/.bin/webpack-dev-server

build: copy
	node_modules/.bin/webpack

