/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person) {
  var name = person.name;
  var work = person.occupation;
  var birth = person.birthPlace;
  return name + " is a " + work + " from " + birth + ".";
}
