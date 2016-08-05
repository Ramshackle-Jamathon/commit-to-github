# commit-to-github
Uses the github API to make commits to github repos. lightweight and doesn't depend on Git.

## Installation

```
$ npm install commit-to-github
```

## Example

```javascript
commitToGithub({
	user: "Ramshackle-Jamathon",
	repo: "commit-to-github",
	token: "<a-github-oauth-token>",
	files: [
		{name: "foo.txt", content: "nice words!"},
		{name: "bar.txt", content: "you're the best!"},
	],
	fullyQualifiedRef : "heads/master", //optional default = "heads/dev"
	forceUpdate: true, //optional default = false
	commitMessage: "great work!" //option default = "AutoCommit - " + new Date().getTime().toString();
}).then(function(res){
	// success!
}).catch(function(err){
	// oh no! something went wrong
})
```

## Badges

![](https://img.shields.io/badge/license-MIT-blue.svg)
![](https://img.shields.io/badge/status-stable-green.svg)
