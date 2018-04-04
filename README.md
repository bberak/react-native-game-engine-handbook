<p align="center">
	<img src="https://raw.githubusercontent.com/bberak/react-native-game-engine-handbook/master/app/table-of-contents/images/logo-alt%402x.png" alt="React Native Game Engine Handbook" height="120" />
</p>

# React Native Game Engine Handbook &middot; [![mit license](https://img.shields.io/badge/license-MIT-50CB22.svg)](https://opensource.org/licenses/MIT)

A React Native app showcasing some examples using the lightweight [react-native-game-engine](https://github.com/bberak/react-native-game-engine) library.

<p align="center">
	<a href="https://github.com/bberak/react-native-game-engine">
	    <img src="https://raw.githubusercontent.com/bberak/react-native-game-engine-handbook/master/assets/single-touch.gif" alt="Single Touch Preview" height="450" />
	    <img src="https://raw.githubusercontent.com/bberak/react-native-game-engine-handbook/master/assets/multi-touch.gif" alt="Multi Touch Preview" height="450" />
	    <img src="https://raw.githubusercontent.com/bberak/react-native-game-engine-handbook/master/assets/rigid-bodies.gif" alt="Rigid Bodies Preview" height="450" />
	</a>
</p>


## Quick Start iOS

```
git clone https://github.com/bberak/react-native-game-engine-handbook.git

cd react-native-game-engine-handbook

npm install

react-native link

react-native run-ios
```

> Use ```react-native run-ios --configuration Release``` for release build (better performance).

## Quick Start Android

```
git clone https://github.com/bberak/react-native-game-engine-handbook.git

cd react-native-game-engine-handbook

npm install

react-native link

# Download Android NDK version r15c from https://developer.android.com/ndk/downloads/index.html
# Unzip the the NDK into /usr/local/share/android-ndk-r15c
# IF you unzip into a different location, update the android/local.properties file with the correct path

react-native run-android
```

> Installing a release build on an Android device is slightly more involved (requires signing). See [running on device](https://facebook.github.io/react-native/docs/running-on-device.html) for details.

## Pull Often!

The Handbook app will be updated with new examples and content from time to time - so make sure you do a ```git pull``` every now and then to get the latest and greatest.

## Contribute

If you've created an interesting example, scene or even want to contribute (or start) a chapter - please get in touch and we'll get your ideas merged into the master branch.

## Get in Touch

We are Neap - a development and design team in Sydney. We love building stuff and meeting new people, so get in touch with us at [https://neap.co](https://neap.co).

Some of our projects:

#### React & React Native
* [__*react-native-game-engine*__](https://github.com/bberak/react-native-game-engine): A lightweight game engine for react native.
* [__*react-native-game-engine-handbook*__](https://github.com/bberak/react-native-game-engine-handbook): A React Native app showcasing some examples using react-native-game-engine.

#### Web Framework & Deployment Tools
* [__*webfunc*__](https://github.com/nicolasdao/webfunc): Write code for serverless similar to Express once, deploy everywhere. 
* [__*now-flow*__](https://github.com/nicolasdao/now-flow): Automate your Zeit Now Deployments.

#### GraphQL
* [__*graphql-serverless*__](https://github.com/nicolasdao/graphql-serverless): GraphQL (incl. a GraphiQL interface) middleware for [webfunc](https://github.com/nicolasdao/webfunc).
* [__*schemaglue*__](https://github.com/nicolasdao/schemaglue): Naturally breaks down your monolithic graphql schema into bits and pieces and then glue them back together.
* [__*graphql-s2s*__](https://github.com/nicolasdao/graphql-s2s): Add GraphQL Schema support for type inheritance, generic typing, metadata decoration. Transpile the enriched GraphQL string schema into the standard string schema understood by graphql.js and the Apollo server client.

#### Tools
* [__*aws-cloudwatch-logger*__](https://github.com/nicolasdao/aws-cloudwatch-logger): Promise based logger for AWS CloudWatch LogStream.

## License

MIT License

Copyright (c) 2017 Boris Berak

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

<p align="center">
  <a href="https://neap.co/">
    <img src="https://neap.co/img/neap_black_small_logo.png" alt="Neap Pty Ltd" title="Neap" height="50"/>
  </a>
</p>