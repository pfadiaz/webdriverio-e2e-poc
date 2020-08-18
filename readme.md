#To run the test example you can do:

````
    npm install
````

And then choose where to run the tests

````
    "test:e2e:local": To run your tests locally in chrome
    "test:e2e:ci": To run your tests in docker
````

By default this will run all the non-ignored Cucumber features against multiple local headless Chrome browsers, (i.e. no need for any Docker container.

This process is controlled by environment variables: * HEADLESS (default: Yes) - set No to make the browser windows visible * TAGS (default not @ignore) - set to @myfeature to run only that feature

For example,

```
"TAGS='@Access-Security or not @ignore' HEADLESS='Yes' ./node_modules/.bin/wdio ./test/config/local.conf.js",
will run a Chrome browser connecting to the demo environment and test only features tagged @Access-Security but not ignored.
```

A report will be automatically generated after every run.

If you are having the issue running the .sh script when running the tests in Docker, Please run

```
chmod +x the_file_name.sh
```