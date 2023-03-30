/*
try 
catch
throw
finally
*/

try {
  var son1 = 1;
  var son2 = 2;
  var jami = son1 / son2;

  if (son2 === 0) throw Error("Son2 0 ga teng bolmasligi zarur");
  else console.log(jami);
} catch (error) {
  console.log(error);
} finally {
  console.log("Bu yerda Finally Blogi");
}
