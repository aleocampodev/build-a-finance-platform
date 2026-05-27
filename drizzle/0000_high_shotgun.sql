CREATE TABLE "accounts" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"plaid_id" text,
	"plaid_access_token" text,
	CONSTRAINT "accounts_plaid_id_unique" UNIQUE("plaid_id")
);
