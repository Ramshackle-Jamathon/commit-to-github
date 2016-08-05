var assert = require("assert");
var commitToGithub = require("..")

describe("general", function() {
	it("should return on invalid params", function() {
		console.log(commitToGithub);
		var a = commitToGithub();
		a.should.equal("");

		var b = commitToGithub({});
		b.should.equal("");

		var c = commitToGithub({
			user : ""
		});
		c.should.equal("");

		var d = commitToGithub({
			repo  : ""
		});
		d.should.equal("");

		var d = commitToGithub({
			token  : ""
		});
		d.should.equal("");

		var e = commitToGithub({
			files : []
		});
		e.should.equal("");

		var e = commitToGithub({
			user : "",
			repo  : "",
			token  : "",
			files : []
		});
		e.should.equal("");
	});

	it("repo not found", function() {
		return commitToGithub({
			user: "Ramshackle-Jamathon",
			repo: "repo-that-will-never-exist",
			files: [{path: "", content: ""}]
		}).catch(error => {
			error.should.exist;
		});
	});

	it("ref not found", function() {
		return commitToGithub({
			user: "Ramshackle-Jamathon",
			repo: "repo-that-will-never-exist",
			files: [{path: "", content: ""}],
			fullyQualifiedRef : "badbranch"
		}).catch(error => {
			error.should.exist;
		});
	});

	it("invalid token", function() {
		return commitToGithub({
			user: "Ramshackle-Jamathon",
			repo: "commit-to-github",
			files: [{path: "", content: ""}],
			fullyQualifiedRef : "heads/master",
			token: "invalid token"
		}).catch(error => {
			error.should.exist;
		});
	});
});
