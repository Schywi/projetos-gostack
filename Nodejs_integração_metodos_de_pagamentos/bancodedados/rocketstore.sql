
-- Drop table

-- DROP TABLE checkouts;

CREATE TABLE checkouts (
	id serial NOT NULL,
	amount int4 NULL,
	fee int4 NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT checkout_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE credit_cards;

CREATE TABLE credit_cards (
	id serial NOT NULL,
	card_id text NULL,
	"number" text NULL,
	holder_name text NULL,
	expiration_date text NULL,
	brand text NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT credit_card_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE products;

CREATE TABLE products (
	id serial NOT NULL,
	title text NULL,
	price float4 NULL,
	image text NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT products_pkey PRIMARY KEY (id)
);

-- Drop table

-- DROP TABLE checkout_product;

CREATE TABLE checkout_product (
	id serial NOT NULL,
	product_id int4 NULL,
	checkout_id int4 NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	amount int4 NULL,
	total int4 NULL,
	CONSTRAINT product_transaction_pkey PRIMARY KEY (id),
	CONSTRAINT checkout_product_checkout_id_fkey FOREIGN KEY (checkout_id) REFERENCES checkouts(id),
	CONSTRAINT product_transaction_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id)
);

-- Drop table

-- DROP TABLE stocks;

CREATE TABLE stocks (
	id serial NOT NULL,
	product_id int4 NULL,
	amount int4 NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	CONSTRAINT stocks_pkey PRIMARY KEY (id),
	CONSTRAINT stocks_product_id_fkey FOREIGN KEY (product_id) REFERENCES products(id) ON DELETE CASCADE
);

-- Drop table

-- DROP TABLE transactions;

CREATE TABLE transactions (
	id serial NOT NULL,
	transaction_id text NULL,
	status text NULL,
	created_at timestamp NULL,
	updated_at timestamp NULL,
	authorization_code text NULL,
	brand text NULL,
	authorized_amount int4 NULL,
	tid text NULL,
	installments int4 NULL,
	checkout_id int4 NULL,
	CONSTRAINT transactions_pkey PRIMARY KEY (id),
	CONSTRAINT transactions_checkout_id_fkey FOREIGN KEY (checkout_id) REFERENCES checkouts(id)
);
