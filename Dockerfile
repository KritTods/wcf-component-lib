FROM node:20-alpine

WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package.json ./

# Install dependencies with legacy peer deps
RUN npm install --ignore-scripts --legacy-peer-deps 

# Copy the rest of the application code
COPY . .

# Link the component library
RUN npm link

CMD ["tail", "-f", "/dev/null"]