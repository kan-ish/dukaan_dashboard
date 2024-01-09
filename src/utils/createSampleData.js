import fs from "fs";

const data = [];

for (let i = 0; i < 17; i++) {
	const newRecord = {
		id: i,
		orderId: `#${(Math.random() * 1000000).toFixed()}`,
		orderDate: new Date(),
		orderAmt: "₹1,278.23",
		trxnFees: "₹22",
	};

	data.push(newRecord);
}

fs.writeFile("data.json", JSON.stringify(data), () => console.log("success"));
