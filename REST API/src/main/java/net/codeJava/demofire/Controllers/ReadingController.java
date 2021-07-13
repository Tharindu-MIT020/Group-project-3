package net.codeJava.demofire;

import com.twilio.Twilio;
import com.twilio.rest.api.v2010.account.Message;
import com.twilio.type.PhoneNumber;
import net.codeJava.demofire.Model.Reading;
import net.codeJava.demofire.Services.ReadingService;
import net.codeJava.demofire.Services.SensorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;
import java.util.NoSuchElementException;

@RestController
@CrossOrigin(origins="http://localhost:3000")
public class ReadingController {


	//SMS Sender Properties

	String FROMNO="+19543880142";
	String TONO="+94714009185";

	String ACCOUNT_SID="AC90423faf8954560f8d5caaefc320162f";
	String AUTH_TOKEN="30908d2297cabf7da2e2915afca5605e";





	//EMAIL Reciever Properties
	final String EMAILRECIEVER="ravindudeshan9865@gmail.com";
	String EMAILBODY;

	//array list to hold alert triggered sensors IDs
	ArrayList<Integer> temp =new ArrayList<Integer>();

	//holds the status of if a given id is in the "temp" array or not
	boolean stat=false;



	@Autowired
	private ReadingService service;
	@Autowired
	private SensorService sensorService;

	@GetMapping("/api/readings")
	public List<Reading> list() {
		return service.listAll();

	}

	@GetMapping("/api/readings/{id}")
	public ResponseEntity<Reading> getReadings(@PathVariable Integer id) {
		try {
			Reading reading = service.get(id);
			return new ResponseEntity<Reading>(reading, HttpStatus.OK);

		}catch (NoSuchElementException e) {
			return new ResponseEntity<Reading>(HttpStatus.NOT_FOUND);

		}
	}

	@GetMapping("/api/readings/sensor/{id}")
	public List<Reading>  getReadingList(@PathVariable Integer id) {
		try {

			return service.getBySensor(id);

		}catch (NoSuchElementException e) {
			return (List<Reading>) new ResponseEntity<Reading>(HttpStatus.NOT_FOUND);

		}
	}


	@PostMapping("/api/readings/Add")
	public void addReadings(@RequestBody Reading reading) {

		DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
		LocalDateTime now = LocalDateTime.now();

		reading.setDate(dtf.format(now));

		Integer Sid = reading.getSensor_id();




		System.out.println("Sensor Recievedis :" + reading);
		service.save(reading);

		if(reading.getValue()>30 ) {

			try{


			//check if temp array is empty
			if (temp.isEmpty()) {

				// if temp array is empty add the first sensor to temp array
				temp.add(reading.getId());

				//Sms Message
				String MESSAGE = "Sensor Alert Detected on Sensor " + sensorService.get(Sid).getName() + ". Detected Value is Level is " + reading.getValue() + " .";


				//Authorized Message API Account
				Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

				//Send SMS

				com.twilio.rest.api.v2010.account.Message message = com.twilio.rest.api.v2010.account.Message.creator(new PhoneNumber(TONO), new PhoneNumber(FROMNO), MESSAGE).create();

				//print message ID
				System.out.println(message.getSid());


				//Email Body
				EMAILBODY = "<h1 style=\"color:red;\">Sensor Alert Detected</h1><h2>Sensor ID : " + sensorService.get(reading.getSensor_id()).getName() + "<br> Value of : " + reading.getValue() + ".";
				// send email
				new EmailGenerator(EMAILRECIEVER, "Fire Alert", EMAILBODY);
			} else {


				for (int i : temp) {


					if (reading.getId() == i) {
						stat = false;

					}


				}


				if (stat) {
					temp.add(reading.getId());

					// send SMS
					String MESSAGE = "Sensor Alert Detected on sensor " + sensorService.get(reading.getSensor_id()).getName()
							+ "with value " + reading.getValue() + ". ";

					//Authorized Message API Account
					Twilio.init(ACCOUNT_SID, AUTH_TOKEN);

					//Send SMS
					Message message = com.twilio.rest.api.v2010.account.Message.creator(new PhoneNumber(TONO), new PhoneNumber(FROMNO), MESSAGE).create();

					//Print Message ID
					System.out.println(message.getSid());


					//Email Body
					EMAILBODY = "<h1 style=\"color:red;\">Sensor Alert Detected</h1><h2>Sensor ID : " + sensorService.get(reading.getSensor_id()).getName() + "<br> Value of : " + reading.getValue() + ".";

					// send email
					new EmailGenerator(EMAILRECIEVER, "Fire Alert", EMAILBODY);


				}

			}
		}catch (Exception e){
				System.out.println(e);

				//Email Body
				EMAILBODY = "<h1 style=\"color:red;\">Sensor Alert Detected</h1><h2>Sensor ID : " + sensorService.get(reading.getSensor_id()).getName() + "<br> Value of : " + reading.getValue() + ".";
				// send email
				new EmailGenerator(EMAILRECIEVER, "Fire Alert", EMAILBODY);

			}
			}

	}


	@DeleteMapping("/api/readings/Delete/{id}")
	public void deleteReading(@PathVariable Integer id) {
		service.delete(id);
	}



}
