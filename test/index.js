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

		var e = commitToGithub({
			files : []
		});
		e.should.equal("");
	});

	it("repo not found", function() {
		return commitToGithub({
			user: "Ramshackle-Jamathon",
			repo: "repo-that-will-never-exist",
			files: []
		}).catch(error => {
			error.status.should.equal("Not Found");
		});
	});

	it("repo not found", function() {
		return commitToGithub({
			user: "Ramshackle-Jamathon",
			repo: "commit-to-github",
			files: []
		}).catch(error => {
			error.status.should.equal("Not Found");
		});
	});
});
