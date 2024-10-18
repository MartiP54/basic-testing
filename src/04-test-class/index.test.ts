import { getBankAccount, InsufficientFundsError, TransferFailedError } from '.';

describe('BankAccount', () => {
  const testBalance = 78;
  const testAccount = getBankAccount(testBalance);
  const testAnotherAccount = getBankAccount(80);

  test('should create account with initial balance', () => {
    expect(testAccount.getBalance()).toBe(testBalance);
  });

  test('should throw InsufficientFundsError error when withdrawing more than balance', () => {
    expect(() => testAccount.withdraw(100)).toThrow(InsufficientFundsError);
    expect(() => testAccount.withdraw(100)).toThrow(
      `Insufficient funds: cannot withdraw more than ${testBalance}`,
    );
  });

  test('should throw error when transferring more than balance', () => {
    expect(() => testAccount.transfer(100, testAnotherAccount)).toThrow(
      InsufficientFundsError,
    );
    expect(() => testAccount.transfer(100, testAnotherAccount)).toThrow(
      `Insufficient funds: cannot withdraw more than ${testBalance}`,
    );
  });

  test('should throw error when transferring to the same account', () => {
    expect(() => testAccount.transfer(50, testAccount)).toThrow(
      TransferFailedError,
    );
    expect(() => testAccount.transfer(50, testAccount)).toThrow(
      'Transfer failed',
    );
  });

  test('should deposit money', () => {
    const testDeposit = 100;
    const oldBalance = testAccount.getBalance();
    testAccount.deposit(testDeposit);
    expect(testAccount.getBalance()).toBe(oldBalance + testDeposit);
  });

  test('should withdraw money', () => {
    const testWithdraw = 50;
    const oldBalance = testAccount.getBalance();
    testAccount.withdraw(testWithdraw);
    expect(testAccount.getBalance()).toBe(oldBalance - testWithdraw);
  });

  test('should transfer money', () => {
    const oldBalanceAccountFrom = testAccount.getBalance();
    const oldBalanceAccountTo = testAnotherAccount.getBalance();
    const transferAmount = 10;
    testAccount.transfer(transferAmount, testAnotherAccount);
    expect(testAccount.getBalance()).toBe(
      oldBalanceAccountFrom - transferAmount,
    );
    expect(testAnotherAccount.getBalance()).toBe(
      oldBalanceAccountTo + transferAmount,
    );
  });

  test('fetchBalance should return number in case if request did not failed', async () => {
    // Write your tests here
  });

  test('should set new balance if fetchBalance returned number', async () => {
    // Write your tests here
  });

  test('should throw SynchronizationFailedError if fetchBalance returned null', async () => {
    // Write your tests here
  });
});
