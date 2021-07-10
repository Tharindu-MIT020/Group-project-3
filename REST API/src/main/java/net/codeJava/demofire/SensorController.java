package net.codeJava.demofire;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="http://localhost:3002")
public class SensorController {
	
	

	//array list to hold alert triggered sensors IDs
	ArrayList<Integer> temp =new ArrayList<Integer>();
	
	//holds the status of if a given id is in the "temp" array or not
	boolean stat=false;
	
	
          
	@Autowired
	private SensorService service;
	
	@GetMapping("/api/sensors")
	public List<Sensor> list() {
		return service.listAll();
		
	}
	// get Sensor by Id
	@GetMapping("/api/sensors/{id}")
	public ResponseEntity<Sensor> getSensor(@PathVariable Integer id) {
	try {
		Sensor sensor = service.get(id);
		return new ResponseEntity<Sensor>(sensor, HttpStatus.OK);
		
	}catch (NoSuchElementException e) {
		return new ResponseEntity<Sensor>(HttpStatus.NOT_FOUND);
		
		}
	}
	
// add sensor
	@PostMapping("/api/sensors/Add")
	public void addSensor(@RequestBody Sensor sensor) {
		
		System.out.println("Sensor Recievedis :" + sensor);
		service.save(sensor);
	}
	
// update Sensor
	@PutMapping("/api/sensors/Update/{id}")
	public ResponseEntity<?> updateSensor(@RequestBody Sensor sensor,@PathVariable Integer id) {
		
		try {
			
			
			
		//get sensor by ID	
		Sensor existSensor = service.get(id);
		
		//update Sensor
		service.save(sensor);
		
		//set initial status true		
		stat=true;
		
		
		//Check if the received sensor is a alerted(Smoke level or CO2 level >5) sensor

		
		return new ResponseEntity<>(HttpStatus.OK);
		
		
	}catch (NoSuchElementException e) {
		
		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
	
	
	@DeleteMapping("/api/sensors/Delete/{id}")
	public void deleteSensor(@PathVariable Integer id) {
		service.delete(id);
	}
	
	
	
}
