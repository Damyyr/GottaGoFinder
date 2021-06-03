```
 _____       _   _        _____      ______ _           _           
|  __ \     | | | |      |  __ \     |  ___(_)         | |          
| |  \/ ___ | |_| |_ __ _| |  \/ ___ | |_   _ _ __   __| | ___ _ __ 
| | __ / _ \| __| __/ _` | | __ / _ \|  _| | | '_ \ / _` |/ _ \ '__|
| |_\ \ (_) | |_| || (_| | |_\ \ (_) | |   | | | | | (_| |  __/ |   
 \____/\___/ \__|\__\__,_|\____/\___/\_|   |_|_| |_|\__,_|\___|_|  
    .      _,'f----.._
    |\ ,-'"/  |     ,'
    |,_  ,--.      /    
    /,-. ,'`.     (_
    f  o|  o|__     "`-.
    ,-._.,--'_ `.   _.,-`
    `"' ___.,'` j,-'
      `-.__.,--'
   
```

## Description

This project is meant to work either by the CLI or
the [front-end app](https://github.com/Damyyr/GottaGoFinder/tree/main/web)
to provide a file finder.

This is the first time I really work with Kotlin, all critic would be much appreciated

## Modules

### CLI [:modules:cli]

GottaGoFinder provides a cli tool with the same features as the React app.

#### Run it

- make sure you have Java 11
- run `./gradlew clean && ./gradlew build`
- you can either use `java -jar modules/cli/build/libs/cli-0.0.1-SNAPSHOT.jar --help`
- or `./GottaGoFinder.sh --help`

### Api [:modules:api]

GottaGoFinder also provide an REST api to get the same result. You can use it with the front-end app
in the [web folder](https://github.com/Damyyr/GottaGoFinder/tree/main/web).

#### Run it

- make sure you have Java 11
- run `./gradlew clean && ./gradlew build` *(you can skip this step if you already did it)*
- run `./gradlew bootRun`
- application will listen on `localhost:8080`

#### Run tests

- run `.gradlew check`

### Dependencies

Core features include

- Java 11
- Spring 2.5.0
- Gradle 7.0.2
- CliKT 3.2.0

## Troubleshooting

You may experience this error:
> An error occurred during the file scanning. Please verify that you can access all of these files.

This occurs when the client (you) does not have the proper right to see or execute in the current folder

## TODOs

- Try to put the React app in gradle to boot all services at once (and check if it's a good idea)
- Docker + Jenkins pipeline (and/or GitHub actions) to run unit tests
- Investigate a cache system and/or index for searching files
    - if so, maybe check if the elastic stack could be useful here
- Make a datasource layer to plug on real datasource and make unit tests easier
- Add more test (for now I only tested core logic)
- Use a gradle.properties to keep all the dependencies and plugin versions in the same file
- Add more filter (i.e: show absolute path)
