/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// Adhoc solution - Beginner friendly

// function calculateTotalSpentByCategory(transactions) {

//   let finalArrayResult = [];
//   let totalTransactions = transactions.length;

//   for (let iteration = 0; iteration < totalTransactions; iteration++) {
//     let lengthOfFinalArrayResult = finalArrayResult.length;
//     let spendingUpdated = false;

//     if (lengthOfFinalArrayResult !== 0) {
//       for (
//         let iteration2 = 0;
//         iteration2 < lengthOfFinalArrayResult;
//         iteration2++
//       ) {
//         if (
//           finalArrayResult[iteration2]["category"]
//             .toLowerCase()
//             .localeCompare(
//               transactions[iteration]["category"].toLowerCase()
//             ) === 0
//         ) {
//           finalArrayResult[iteration2]["totalSpent"] +=
//             transactions[iteration]["price"];
//           spendingUpdated = true;
//           break;
//         }
//       }

//       if (!spendingUpdated) {
//         finalArrayResult.push({
//           category: transactions[iteration]["category"],
//           totalSpent: transactions[iteration]["price"],
//         });
//       }
//     } else {
//       finalArrayResult.push({
//         category: transactions[iteration]["category"],
//         totalSpent: transactions[iteration]["price"],
//       });
//     }
//   }
//   console.log(finalArrayResult);

//   return finalArrayResult;
// }

// Optimized Solution
function calculateTotalSpentByCategory(transactions) {
  return transactions.reduce((accVal, curVal) => {
    let categoryIndex = accVal.findIndex(
      (value) =>
        value["category"]
          .toLowerCase()
          .localeCompare(curVal["category"].toLowerCase()) === 0
    );

    if (categoryIndex !== -1) {
      accVal[categoryIndex]["totalSpent"] += curVal["price"];
    } else {
      accVal.push({
        category: curVal.category,
        totalSpent: curVal.price,
      });
    }

    return accVal;
  }, []);
}

module.exports = calculateTotalSpentByCategory;
