# ReactRailsTodoApp

TODO CRUD app with React and Rails.

### Prerequisites

You need Ruby and NodeJS.

With just RVM intalled, you can install ruby like this:
```
rvm install ruby
# for OSX
brew install node
brew install rvm
```

### Installing

Rails Backend - todo-api on port 3001
```
bundle
rails db:migrate
rails db:seed
rails s -p 3001
```

React Frontend - todo-react on port 3000
```
npm install
yarn start
```

## Running the tests

```
# rails todo-api
rails test
# react todo-react

```


## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags). 

## Authors

* **Dennis Truong** - *Initial work* - [dt9](https://github.com/dt9)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Keith from ScopeAR
