let dictionary = new Map();

dictionary.set("Gandalf", "gandalf@email.com");
dictionary.set("John", "johnsnow@email.com");
dictionary.set("Tyrion", "tyrion@email.com");

console.log(dictionary.has("Gandalf"));
console.log(dictionary.size);
console.log(dictionary.keys());
console.log(dictionary.values());
console.log(dictionary.get("Tyrion"));
dictionary.set("Gandalf", "other@email.com");
console.log(dictionary.get("Gandalf"));

dictionary.delete("John");

console.log(Array.from(dictionary.keys()));

dictionary.clear();
console.log(dictionary.keys());
