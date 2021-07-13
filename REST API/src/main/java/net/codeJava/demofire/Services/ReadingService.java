package net.codeJava.demofire.Services;

import net.codeJava.demofire.Repositories.ReadingRepository;
import net.codeJava.demofire.Model.Reading;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ReadingService {
	
	@Autowired
	private ReadingRepository repo;
	
	public List<Reading> listAll(){
		return repo.findAll();
	}
	
	public void save(Reading reading) {
		repo.save(reading);
	}
	
	public Reading get(Integer id) {
		return repo.findById(id).get();
		
	}

	public List<Reading> getBySensor(Integer id) {
		List<Reading> list ;

		List<Reading> listnew = new ArrayList<>();
		list =repo.findAll();
		for (Reading reading : list)
		{

			if (reading.getSensor_id()==id)
			{
				listnew.add(reading);

			}
		}

		return  listnew;

	}

	public void delete(Integer id){
		repo.deleteById(id);
	}
}
