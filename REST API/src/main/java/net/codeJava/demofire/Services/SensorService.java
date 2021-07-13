package net.codeJava.demofire.Services;

import net.codeJava.demofire.Model.Sensor;
import net.codeJava.demofire.Repositories.SensorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SensorService {
	
	@Autowired
	private SensorRepository repo;
	
	public List<Sensor> listAll(){
		return repo.findAll();
	}
	
	public void save(Sensor sensor) {
		repo.save(sensor);
	}
	
	public Sensor get(Integer id) {
		return repo.findById(id).get();
		
	}

	public void delete(Integer id){
		repo.deleteById(id);
	}
}
