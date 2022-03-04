build-image:
	docker build  -t faawidia/node-app-hello:latest . 

push-image:
	docker login
	docker tag faawidia/node-app-hello:latest faawidia/node-app-hello:latest
	docker push faawidia/node-app-hello:latest