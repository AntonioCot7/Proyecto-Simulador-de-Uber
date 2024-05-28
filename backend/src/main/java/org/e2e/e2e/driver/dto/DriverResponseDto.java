package org.e2e.e2e.driver.dto;

import lombok.Data;
import org.e2e.e2e.driver.domain.Category;
import org.e2e.e2e.vehicle.dto.VehicleBasicDto;

@Data
public class DriverResponseDto {
    private Long id;
    private String firstName;
    private String lastName;
    private String email;
    private String phoneNumber;
    private Category category;
    private Integer trips;
    private Float avgRating;
    private VehicleBasicDto vehicle;
}
