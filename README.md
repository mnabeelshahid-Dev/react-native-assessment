<!-- Step 1: Install Node Modules -->

Navigate to your project root and run:

# Using npm
npm install

# OR using Yarn
yarn install

<!-- Step 2: Install Pods (iOS Only) -->

If you're developing for iOS, navigate to the ios directory and install the pods:

cd ios
pod install
cd ..

<!-- Step 3: Start Metro Server -->

Run the following command from the root of your project:


# Using npm
npm start

# OR using Yarn
yarn start

<!-- Step 4: Run Your Application -->

Open a new terminal and run:

For Android

# Using npm
npm run android

# OR using Yarn
yarn android

For iOS

# Using npm
npm run ios

# OR using Yarn
yarn ios

If set up correctly, your app should launch in the Android Emulator or iOS Simulator.