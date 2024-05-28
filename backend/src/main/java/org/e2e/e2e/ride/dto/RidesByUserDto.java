package org.e2e.e2e.ride.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class RidesByUserDto {
    private String originName;
    private String destinationName;
    private Double price;
    private LocalDateTime departureDate;
}
