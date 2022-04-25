build-image:
	docker build  -t faawidia/node-app-hello:latest . 

push-image:
	docker login
	docker tag faawidia/node-app-hello:latest faawidia/simple-nodejs-microservice:latest
	docker push faawidia/simple-nodejs-microservice:latest