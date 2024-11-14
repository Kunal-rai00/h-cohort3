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

function calculateTotalSpentByCategory(transactions) {
  const CategoryMap = {};

  // Iterate over all transactions
  transactions.forEach(transaction => {
    const { category, price } = transaction; // Use 'price' (case-sensitive)
    
    // If the category already exists, add the price to the total
    if (CategoryMap[category]) {
      CategoryMap[category] += price;
    } else {
      // If the category is not found, initialize the total with the current price
      CategoryMap[category] = price;
    }
  });

  // Prepare the result in the desired format
  const result = [];
  for (const category in CategoryMap) {
    result.push({ category, totalSpent: CategoryMap[category] });
  }

  // Return the result array
  return result;
}

// Example with a single transaction, wrapped in an array
const transactions = [
  {
    id: 1,
    timestamp: 1656076800000,
    price: 10,
    category: 'Food',
    itemName: 'Pizza',
  }
];

console.log(calculateTotalSpentByCategory(transactions));



module.exports = calculateTotalSpentByCategory;
