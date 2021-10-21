// /**
//  * const、let等の変数宣言
//  */
// // varを使った変数宣言
// var val1 = "var変数";
// console.log(val1);
// // var変数は上書き可能
// val1 = "val変数を上書き";
// console.log(val1);
// // var変数は再宣言可能
// var val1 = "val変数を再宣言";
// console.log(val1);

// // letを使った変数宣言
// let val2 = "let変数";
// console.log(val2);
// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);
// // letは再宣言不可（エラーになる）
// let val2 = "let変数を再宣言";

// // constを使った変数宣言
// const val3 = "const変数";
// console.log(val3);
// // const変数は上書き不可（エラーになる）
// val3 = "const変数を上書き";
// // constは再宣言も不可（エラーになる）
// const val3 = "const変数を再宣言";

// // constで定義したオプジェクトはプロパティの変更が可能
// const val4 = {
//   name: "kato",
//   age: 36
// };
// val4.name = "tanaka";
// val4.address = "Tokyo";
// console.log(val4);

// // constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
// console.log(val5);

// /**
//  * テンプレート文字列
//  */
// const name = "kato";
// const age = 36;
// // 「私の名前はkatoです。年齢は36歳です。」

// // 従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "歳です。";
// console.log(message1);

// // テンプレート文字列を用いた方法
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);
