var User = {
	constructor: function(name, age, gender, greed) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.greed = "у тебя много задач";
		return this;
	},
	say:function() {
		console.log("Миша выходи завтра на работу, " + this.greed);
	}
};

var user, user1, user2;

user = Object.create(User).constructor("Артем", 23, "male");
user2 = Object.create(User).constructor("Роман", 24, "male");
user3 = Object.create(User).constructor("Михаил", 25, "male");

console.log(user.name) + user.say();
console.log(user2.age) + user2.say();
console.log(user3.gender) + user3.say();
