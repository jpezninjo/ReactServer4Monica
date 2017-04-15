var randomName = faker.name.findName(); // Caitlyn Kerluke
var randomEmail = faker.internet.email(); // Rusty@arne.info
console.log("cats" + randomEmail);
$("#group-groupchat-form-name").attr('defaultValue', randomEmail);
$("#group-groupchat-form-name").attr('value', randomEmail);
$("#cats").html(randomEmail);