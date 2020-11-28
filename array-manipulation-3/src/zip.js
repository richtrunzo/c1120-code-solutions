function zip(first, second) {
  if (first.length === second.length) {
    var arr = first.map((a, b) => [a, second[b]]);
    return arr;
  } else if (first.length > second.length) {
    first.pop();
    var arr = first.map((a, b) => [a, second[b]]);
    return arr;
  } else if (second.length > first.length) {
    second.pop();
    var arr = first.map((a, b) => [a, second[b]]);
    return arr;
  }
}
