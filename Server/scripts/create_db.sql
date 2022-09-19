CREATE DATABASE IF NOT EXISTS SUPERMARKET;

use SUPERMARKET;

create table if not exists products(
   id INT NOT NULL AUTO_INCREMENT,
   title VARCHAR(100) NOT NULL,
   description VARCHAR(200) NOT NULL,
   country VARCHAR(50) NOT NULL,
   producer VARCHAR(100) NOT NULL,
   price FLOAT NOT NULL,
   keywords VARCHAR(200) NOT NULL,
   imgUrl VARCHAR(200) NOT NULL,
   category VARCHAR(100) NOT NULL,
   count INT DEFAULT 0,
   PRIMARY KEY ( id )
);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Apples Royal Gala", "Approx 4-5 medium apples per 1kg.", "Product of Armenia", "Fresh Deal", 4.99, "apples fruits armenia fresh deal",
"https://pngimg.com/uploads/apple/apple_PNG12460.png",
"fruits", 20); 

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Carrots", "Approx 5-7 carrots per 1kg.", "Product of Armenia", "Fresh Deal", 2.75, "carrots vegetables armenia fresh deal",
"https://pngimg.com/uploads/carrot/carrot_PNG99147.png",
"vegetables", 20); 

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Avocado", "Avocados are pre-ripened. Price for each.", "Product of New Zeland", "Fresh Deal", 1.5, "avocados fruits new zeland fresh deal",
"https://pngimg.com/uploads/avocado/avocado_PNG15489.png",
"fruits", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Broccoli Head", "Broccoli is a popular vegetable as it is versatile with the stalks, buds and most of the leaves being edible.", "Product of New Zeland", "Fresh Deal", 3.49, "brocollies vegetables new zeland fresh deal",
"https://pngimg.com/uploads/broccoli/broccoli_PNG2820.png",
"vegetables", 20); 

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Bananas Yellow", "Approx 5-7 medium bananas per 1kg.", "Product of Ecuador", "Rainforest Alliance", 3.5, "bananas fruits ecuador rainforest alliance",
"https://pngimg.com/uploads/banana/banana_PNG104275.png",
"fruits", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Fresh Produce Oranges Navel", "Approx 4-6 medium oranges per 1kg.", "Product of Ecuador", "Fresh Deal", 3.7, "oranges fruits ecuador fresh deal",
"https://pngimg.com/uploads/orange/orange_PNG792.png",
"fruits", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Salted Butter", "Approx 5-7 medium butter per 1kg.", "Product of New Zeland", "Special", 4.9, "butter dairy new zeland special",
"https://pngimg.com/uploads/butter/butter_PNG5.png",
"dairy", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Organic Valley Standard Milk ", "Organic Valley milk has a delicious, full-bodied taste.", "Product of New Zealand ", "Organic Valley", 7.63, "milk dairy new zeland organic valley",
"https://pngimg.com/uploads/milk/milk_PNG12738.png",
"dairy", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Whitestone Fresh Cheese Fuchsia Creek Feta ", "110g per block.", "Product of New Zealand ", "Whitestone", 4.50, "cheese dairy new zeland whitestone",
"https://pngimg.com/uploads/cheese/cheese_PNG97068.png",
"dairy", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Auntie Dai Dumplings Vegeterian", "600g per package.", "Product of Taiwan", "Auntie Dai", 5.8, "dumplings auntie dai taiwan",
"https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Homemade-Pork-Dumplings_EXPS_TOHFM22_265389_B09_17_12b.jpg",
"semi-finished products", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Yealands Merlot", "750mL", "Product of New Zeland", "Yealand", 13.0, "wine drinks alcoholic new zeland yealand",
"https://pngimg.com/uploads/wine/wine_PNG9479.png",
"drinks", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Idilio Rosado", "750mL", "Product of Spain Navarra", "Idilio", 21.0, "wine drinks alcoholic spain navarra idilio",
"https://pngimg.com/uploads/wine/wine_PNG99048.png",
"drinks", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Chips Pringles Hot&Spicy", "165g potato chips with hot pepper flavor.", "Product of Belgium", "Procter & Gamble Manufacturing Co", 15.0, "chips pringles hot spicy",
"https://pepperyspot.com/wp-content/uploads/2022/07/pringles-potato-crisps-chips-hot-spicy-185-g.png",
"sweets", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Chips Doritos Cheese", "130g Corn chips with cheese flavor.", "Product of Germany", "Doritos", 8.5, "chips doritos cheese",
"https://doritosusa.majestic.dev/sites/doritos.com/files/2018-08/new-nacho-cheese.png",
"sweets", 12);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Coca Cola Soft Drink", "100mL bottle", "Product of USA", "Coca Cola", 2.3, "coca cola drinks nonalcoholic usa",
"https://pngimg.com/uploads/cocacola/coca_cola_PNG8915.png",
"drinks", 20);

INSERT INTO products (title, description, country, producer,
                        price, keywords, imgUrl, category, count)
VALUES ("Pepsi Max Soft", "100mL can", "Product of USA", "Pepsi", 2.0, "pepsi drinks nonalcoholic usa",
"https://pngimg.com/uploads/pepsi/pepsi_PNG8953.png",
"drinks", 20);