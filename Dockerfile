# --------------> The build stage
FROM node:lts-slim as builder

# Specify an argument for the build version (optional)
# ARG BUILD_VERSION

# Create a volume for temporary files (optional)
# VOLUME /tmp

# Set the working directory inside the container
WORKDIR /app

# Copy all files to the container
COPY . .

# Install dependencies
RUN npm install --force

# Build the project
RUN npm run build

# --------------> The production stage
FROM node:lts-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the build output from the builder stage
COPY --from=builder /app/dist /app/dist

# Install a simple server for serving static files
RUN npm install -g serve

# Expose port 3000
EXPOSE 3000

# Serve the static files on port 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
