function same_array(arra1, arra2) {
    var result = 0;
    for (var i = 0; i < arra1.length; i++) {
      for (var j = 0; j < arra2.length; j++) {
        if (arra1[i] === arra2[j]) {
          result++;
        }
      }
    }
    return result;
  }
  console.log(same_array([1, 2, 3, 4], [1, 2, 3, 4]));