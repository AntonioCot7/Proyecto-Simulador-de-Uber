package org.e2e.e2e.vehicle.dto;

import lombok.Data;

@Data
public class VehicleBasicDto {
    private String brand;
    private String model;
    private String licensePlate;
    private Integer fabricationYear;
    private Integer capacity;
}
