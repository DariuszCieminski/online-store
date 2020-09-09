package pl.swaggerexample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import pl.swaggerexample.dao.TransactionDao;
import pl.swaggerexample.exception.NotFoundException;
import pl.swaggerexample.model.Transaction;

import java.util.ArrayList;
import java.util.List;

@Service
public class TransactionService implements EntityService<Transaction>
{
	private final TransactionDao transactionDao;
	
	@Autowired
	public TransactionService(TransactionDao transactionDao)
	{
		this.transactionDao = transactionDao;
	}
	
	@Override
	public Transaction getById(Long id)
	{
		return transactionDao.findById(id).orElseThrow(() -> new NotFoundException("There is no transaction with id: " + id));
	}
	
	@Override
	public List<Transaction> getAll()
	{
		List<Transaction> transactions = new ArrayList<>();
		transactionDao.findAll().forEach(transactions::add);
		return transactions;
	}
	
	@Override
	public Transaction add(Transaction object)
	{
		return transactionDao.save(object);
	}
	
	@Override
	public Transaction update(Transaction object)
	{
		throw new UnsupportedOperationException("Transaction update is unsupported.");
	}
	
	@Override
	public void delete(Long id)
	{
		Transaction transaction = getById(id);
		transactionDao.delete(transaction);
	}
}