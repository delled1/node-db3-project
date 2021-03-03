-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.ProductName, c.CategoryName
FROM Product AS p
JOIN Category AS c on p.CategoryId = c.id

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.Id, s.CompanyName
FROM "Order" AS o
JOIN Shipper as s on o.ShipVia = s.Id
where o.OrderDate < '2012-08-09'


-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT o.id, p.ProductName, o.Quantity
FROM OrderDetail as o 
JOIN Product AS p ON o.ProductId = p.Id
where OrderId = 10251
ORDER BY p.ProductName

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.id AS OrderID, 
c.id AS CustomerCompanyName, 
e.LastName AS EmployeeLastName
from "Order" as o
JOIN Employee AS e ON o.EmployeeId = e.Id
JOIN Customer AS c ON o.CustomerId = c.Id
