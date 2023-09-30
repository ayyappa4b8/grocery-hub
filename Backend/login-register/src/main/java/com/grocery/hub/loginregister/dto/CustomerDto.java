package com.grocery.hub.loginregister.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CustomerDto {
    private long customerId;
    private String customerName;
    private String customerEmail;
    private long roleId;
    private boolean isActive;
}
