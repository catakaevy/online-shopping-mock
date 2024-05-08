# Makefile for Next.js project

# Variables
NODE = node
NPM = npm
NEXT = npx next

# Targets
.PHONY: install dev build start export lint test clean

install:
	@echo "Installing dependencies..."
	@$(NPM) install

dev:
	@echo "Starting development server..."
	@$(NEXT) dev

build:
	@echo "Building the application..."
	@$(NEXT) build

start:
	@echo "Starting the application..."
	@$(NEXT) start

export:
	@echo "Exporting the application..."
	@$(NEXT) export

lint:
	@echo "Linting the code..."
	@$(NPM) run lint

test:
	@echo "Running tests..."
	@$(NPM) run test

clean:
	@echo "Cleaning node modules..."
	@rm -rf node_modules
