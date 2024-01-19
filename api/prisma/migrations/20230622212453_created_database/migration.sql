-- CreateEnum
CREATE TYPE "bank_account_type" AS ENUM ('CHECKING', 'INVESTMENT', 'CASH');

-- CreateEnum
CREATE TYPE "transaction_type" AS ENUM ('INCOME', 'EXPENSE');

-- CreateTable
CREATE TABLE "users" (
    "id" UUID NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "bank_accounts" (
    "id" TEXT NOT NULL,
    "user_id" UUID NOT NULL,
    "initial_balance" DOUBLE PRECISION NOT NULL,
    "name" TEXT NOT NULL,
    "color" TEXT NOT NULL,
    "type" "bank_account_type" NOT NULL,

    CONSTRAINT "bank_accounts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- AddForeignKey
ALTER TABLE "bank_accounts" ADD CONSTRAINT "bank_accounts_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;
