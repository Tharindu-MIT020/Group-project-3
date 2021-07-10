package net.codeJava.demofire;

import javax.persistence.*;
import java.io.Serializable;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Entity
@Table(name = "readings")
public class Reading implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "sensor_id")
    private Integer sensor_id;

    @Column(name = "date")
    private String date;

    @Column(name = "value")
    private Double value;

    public Reading() {
        super();

    }

    public Reading(Integer id, Integer sensor_id, String date, Double value) {
        this.id = id;
        this.sensor_id = sensor_id;
        DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss");
        LocalDateTime now = LocalDateTime.now();
        this.date = dtf.format(now);
        this.value = value;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Integer getSensor_id() {
        return sensor_id;
    }

    public void setSensor_id(Integer sensor_id) {
        this.sensor_id = sensor_id;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }
}
