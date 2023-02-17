build: 
	docker-compose up --build
run:
	docker-compose up
down:
	docker-compose down -v --remove-orphans
clean-docker:
	docker system prune -af

build-server:
	docker build -t server:latest .
run-server:
	docker run -p 8080:8080 server:latest