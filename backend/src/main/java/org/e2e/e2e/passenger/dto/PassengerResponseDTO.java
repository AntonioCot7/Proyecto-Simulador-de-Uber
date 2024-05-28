package org.e2e.e2e.passenger.dto;

import lombok.Data;

@Data
public class PassengerResponseDTO {
    private String firstName;
    private String lastName;
    private String phoneNumber;
    private Float avgRating;
}
