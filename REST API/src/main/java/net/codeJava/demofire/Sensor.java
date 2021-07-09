package net.codeJava.demofire;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "sensor")
public class Sensor implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "id")
	private Integer id;




	@Column(name = "name")
	private String name;

	public Sensor() {
		super();

	}

	public Sensor(Integer id,String name) {

		this.id = id;
		this.name = name;

	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
}
