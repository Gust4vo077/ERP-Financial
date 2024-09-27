# Use the official Ruby image
FROM ruby:3.2.1

# Set the working directory
WORKDIR /app

# Install dependencies for Rails (like Node.js and Yarn)
RUN apt-get update -y && apt-get install -y nodejs npm

# Install Rails
RUN gem install rails

# Copy your application files into the container
COPY . .

# Expose the default Rails port
EXPOSE 3000:3000
