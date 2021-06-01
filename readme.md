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

## CLI
GottaGoFinder provides a cli tool with the same features as the React app.
To access it:
- make sure you have Java 11
- run `./gradlew clean && ./gradlew build && ./gradlew installDist`
- go to install source file `cd build/install/GottaGoFinder/bin/`
- from here you can run `./GottaGoFinder --help`

## Backend App

## Dependencies
Core features include
- Java 11
- Spring 2.5.0
- Gradle 7.0.2
- CliKT 3.2.0

## TODOs
- Try to put the React app in gradle to boot all services at once (and check if it's a good idea)
- Docker + Jenkins pipeline (and/or GitHub actions) to run unit tests
- Investigate a cache system and/or index for searching files
    - if so, maybe check if the elastic stack could be useful her
- Find a way to use the CLI inside the project's root folder itself